// js/config.js — Heróis da Fé
// ═══════════════════════════════════════════════════════════
// CONFIGURAÇÃO SUPABASE — pronta para uso
// ═══════════════════════════════════════════════════════════

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL  = 'https://abxczkpqizxafcpxthny.supabase.co';
const SUPABASE_ANON = 'sb_publishable_YXWvOC8qVKHIJvTjVNK62Q_CtSvPCqF';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON, {
  auth: {
    persistSession: false,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
  realtime: {
    params: { eventsPerSecond: 10 }
  }
});

// Atalhos para compatibilidade com os outros módulos
export const auth = supabase.auth;
export const db   = supabase;

export const CONFIG = {
  versao: '4.1.0',
  nomeSistema: 'Heróis da Fé',
  QUIZ_POINTS: 20,
  dominio: 'https://www.heroisdafe.app.br'
};
