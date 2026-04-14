-- ═══════════════════════════════════════════════════════════
-- HERÓIS DA FÉ — Script SQL final para o Supabase
-- Cole em: Supabase → SQL Editor → New Query
-- ═══════════════════════════════════════════════════════════

create table if not exists public.users (
    uid         text primary key,
    name        text,
    email       text,
    "photoURL"  text,
    points      integer default 0,
    nivel       integer default 1,
    "expAtual"  integer default 0,
    badges      jsonb default '{}',
    livros_completos jsonb default '{}',
    "createdAt" timestamptz default now(),
    "lastUpdate" timestamptz default now()
);

create table if not exists public.progresso (
    id        bigserial primary key,
    uid       text references public.users(uid) on delete cascade,
    livro     text not null,
    capitulo  text not null,
    concluido boolean default false,
    data      timestamptz default now(),
    unique(uid, livro, capitulo)
);

create table if not exists public.friends (
    id         bigserial primary key,
    uid        text references public.users(uid) on delete cascade,
    friend_uid text references public.users(uid) on delete cascade,
    unique(uid, friend_uid)
);

create table if not exists public.desafios (
    id         bigserial primary key,
    uid        text references public.users(uid) on delete cascade,
    desafio_id text not null,
    progresso  integer default 0,
    concluido  boolean default false,
    updated_at timestamptz default now(),
    unique(uid, desafio_id)
);

create table if not exists public.logs_pontuacao (
    id     bigserial primary key,
    uid    text references public.users(uid) on delete cascade,
    pontos integer,
    data   text,
    ts     timestamptz default now()
);

create table if not exists public.notificacoes (
    id       bigserial primary key,
    to_uid   text references public.users(uid) on delete cascade,
    from_uid text references public.users(uid) on delete cascade,
    nome     text,
    preview  text,
    lida     boolean default false,
    ts       timestamptz default now()
);

create table if not exists public.chat (
    id         bigserial primary key,
    from_uid   text references public.users(uid) on delete cascade,
    to_uid     text references public.users(uid) on delete cascade,
    mensagem   text,
    lida       boolean default false,
    ts         timestamptz default now()
);

create index if not exists idx_chat_pair_ts on public.chat (from_uid, to_uid, ts desc);
create index if not exists idx_notificacoes_to_lida on public.notificacoes (to_uid, lida, ts desc);
create index if not exists idx_progresso_uid on public.progresso (uid);
create index if not exists idx_friends_uid on public.friends (uid);

alter table public.users enable row level security;
alter table public.progresso enable row level security;
alter table public.friends enable row level security;
alter table public.desafios enable row level security;
alter table public.logs_pontuacao enable row level security;
alter table public.notificacoes enable row level security;
alter table public.chat enable row level security;

-- Remoção segura se o script for executado de novo
DO $$ BEGIN
  DROP POLICY IF EXISTS users_select_public ON public.users;
  DROP POLICY IF EXISTS users_insert_own ON public.users;
  DROP POLICY IF EXISTS users_update_own ON public.users;
  DROP POLICY IF EXISTS progresso_select_own ON public.progresso;
  DROP POLICY IF EXISTS progresso_insert_own ON public.progresso;
  DROP POLICY IF EXISTS progresso_update_own ON public.progresso;
  DROP POLICY IF EXISTS friends_select_public ON public.friends;
  DROP POLICY IF EXISTS friends_insert_own ON public.friends;
  DROP POLICY IF EXISTS friends_delete_own ON public.friends;
  DROP POLICY IF EXISTS desafios_select_own ON public.desafios;
  DROP POLICY IF EXISTS desafios_insert_own ON public.desafios;
  DROP POLICY IF EXISTS desafios_update_own ON public.desafios;
  DROP POLICY IF EXISTS logs_insert_own ON public.logs_pontuacao;
  DROP POLICY IF EXISTS logs_select_own ON public.logs_pontuacao;
  DROP POLICY IF EXISTS notif_select_own ON public.notificacoes;
  DROP POLICY IF EXISTS notif_insert_any ON public.notificacoes;
  DROP POLICY IF EXISTS notif_update_own ON public.notificacoes;
  DROP POLICY IF EXISTS chat_select_own ON public.chat;
  DROP POLICY IF EXISTS chat_insert_own ON public.chat;
  DROP POLICY IF EXISTS chat_update_own ON public.chat;
EXCEPTION WHEN undefined_object THEN NULL; END $$;

create policy users_select_public on public.users for select using (true);
create policy users_insert_own on public.users for insert with check (auth.uid()::text = uid);
create policy users_update_own on public.users for update using (auth.uid()::text = uid);

create policy progresso_select_own on public.progresso for select using (auth.uid()::text = uid);
create policy progresso_insert_own on public.progresso for insert with check (auth.uid()::text = uid);
create policy progresso_update_own on public.progresso for update using (auth.uid()::text = uid);

create policy friends_select_public on public.friends for select using (true);
create policy friends_insert_own on public.friends for insert with check (auth.uid()::text = uid);
create policy friends_delete_own on public.friends for delete using (auth.uid()::text = uid);

create policy desafios_select_own on public.desafios for select using (auth.uid()::text = uid);
create policy desafios_insert_own on public.desafios for insert with check (auth.uid()::text = uid);
create policy desafios_update_own on public.desafios for update using (auth.uid()::text = uid);

create policy logs_insert_own on public.logs_pontuacao for insert with check (auth.uid()::text = uid);
create policy logs_select_own on public.logs_pontuacao for select using (auth.uid()::text = uid);

create policy notif_select_own on public.notificacoes for select using (auth.uid()::text = to_uid or auth.uid()::text = from_uid);
create policy notif_insert_any on public.notificacoes for insert with check (auth.uid()::text = from_uid);
create policy notif_update_own on public.notificacoes for update using (auth.uid()::text = to_uid or auth.uid()::text = from_uid);

create policy chat_select_own on public.chat for select using (auth.uid()::text = from_uid or auth.uid()::text = to_uid);
create policy chat_insert_own on public.chat for insert with check (auth.uid()::text = from_uid);
create policy chat_update_own on public.chat for update using (auth.uid()::text = to_uid or auth.uid()::text = from_uid);

-- Realtime: habilite no painel em Database → Replication → Tables
-- Marque: users, friends, chat, notificacoes, progresso
