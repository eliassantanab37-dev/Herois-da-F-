-- social_fix_friends.sql
-- Opcional, mas recomendado.
-- Este script limpa duplicados e cria uma proteção no banco
-- para impedir relações repetidas entre uid e friend_uid.

BEGIN;

-- 1) remove duplicados mantendo apenas o menor id por par
DELETE FROM public.friends f
USING public.friends d
WHERE f.id > d.id
  AND f.uid = d.uid
  AND f.friend_uid = d.friend_uid;

-- 2) impede amizade duplicada no mesmo sentido
CREATE UNIQUE INDEX IF NOT EXISTS friends_uid_friend_uid_unique_idx
ON public.friends (uid, friend_uid);

-- 3) melhora consultas do social
CREATE INDEX IF NOT EXISTS friends_friend_uid_status_idx
ON public.friends (friend_uid, status);

CREATE INDEX IF NOT EXISTS friends_uid_status_idx
ON public.friends (uid, status);

CREATE INDEX IF NOT EXISTS notificacoes_to_uid_lida_idx
ON public.notificacoes (to_uid, lida);

COMMIT;
