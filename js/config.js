import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://abxczkpqizxafcpxthny.supabase.co';
const SUPABASE_ANON = 'sb_publishable_YXWvOC8qVKHIJvTjVNK62Q_CtSvPCqF';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
  realtime: {
    params: { eventsPerSecond: 20 }
  }
});

export const auth = supabase.auth;
export const db = supabase;
export const CONFIG = {
  versao: '5.0.0',
  nomeSistema: 'Heróis da Fé',
  dominio: 'https://www.heroisdafe.app.br'
};
