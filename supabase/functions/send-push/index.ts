import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import webpush from 'npm:web-push';

const VAPID_PUBLIC_KEY = Deno.env.get('VAPID_PUBLIC_KEY') ?? '';
const VAPID_PRIVATE_KEY = Deno.env.get('VAPID_PRIVATE_KEY') ?? '';
const VAPID_SUBJECT = Deno.env.get('VAPID_SUBJECT') ?? 'mailto:admin@heroisdafe.app.br';
const SUPABASE_URL = Deno.env.get('PROJECT_URL') ?? '';
const SERVICE_ROLE_KEY = Deno.env.get('SERVICE_ROLE_KEY') ?? '';

webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { to_uid, from_uid, mensagem, tipo } = await req.json();

    if (!to_uid) {
      return new Response(JSON.stringify({ error: 'to_uid ausente' }), { status: 400 });
    }

    const { data: fromUser } = await supabase
      .from('users')
      .select('name')
      .eq('uid', from_uid)
      .maybeSingle();

    const nomeRemetente = fromUser?.name || 'Alguém';

    const corpo = tipo === 'mensagem'
      ? (mensagem?.startsWith('🎙️')
          ? `🎙️ Mensagem de voz de ${nomeRemetente}`
          : mensagem?.startsWith('📷')
            ? `📷 Imagem de ${nomeRemetente}`
            : `💬 ${nomeRemetente}: ${(mensagem || '').slice(0, 80)}`)
      : `📣 ${mensagem || 'Nova notificação'}`;

    const { data: subs, error: subsError } = await supabase
      .from('push_subscriptions')
      .select('endpoint, p256dh, auth')
      .eq('uid', to_uid);

    if (subsError) throw subsError;

    if (!subs?.length) {
      return new Response(JSON.stringify({ sent: 0, reason: 'sem subscriptions' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const urlDestino = `https://www.heroisdafe.app.br/?chat=${from_uid}`;

    const payload = JSON.stringify({
      titulo: 'Heróis da Fé',
      mensagem: corpo,
      url: urlDestino,
    });

    const resultados = await Promise.allSettled(
      subs.map((sub) =>
        webpush.sendNotification(
          { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
          payload
        ).catch(async (err) => {
          if (err?.statusCode === 404 || err?.statusCode === 410) {
            await supabase
              .from('push_subscriptions')
              .delete()
              .eq('endpoint', sub.endpoint);
          }
          throw err;
        })
      )
    );

    const enviados = resultados.filter((r) => r.status === 'fulfilled').length;
    const falhas = resultados.filter((r) => r.status === 'rejected').length;

    console.log(`[send-push] enviados=${enviados} falhas=${falhas} to_uid=${to_uid}`);

    return new Response(JSON.stringify({ sent: enviados, failed: falhas }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[send-push] erro:', err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});