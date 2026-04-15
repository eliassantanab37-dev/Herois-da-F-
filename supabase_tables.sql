create table if not exists public.badges (
  id bigint generated always as identity primary key,
  codigo text not null unique,
  nome text not null,
  descricao text,
  icone text,
  tipo text,
  meta integer,
  pontos_bonus integer not null default 0,
  ativa boolean not null default true,
  createdat timestamptz not null default now()
);

create table if not exists public.users (
  uid uuid primary key references auth.users(id) on delete cascade,
  name text not null,
  email text not null unique,
  data_nascimento date,
  photourl text,
  photoURL text,
  points integer not null default 0,
  nivel integer not null default 1,
  expatual integer not null default 0,
  expAtual integer default 0,
  badges jsonb default '{}'::jsonb,
  createdat timestamptz not null default now(),
  createdAt timestamptz default now(),
  lastupdate timestamptz not null default now(),
  lastUpdate timestamptz default now()
);

create table if not exists public.friends (
  id bigint generated always as identity primary key,
  uid uuid references auth.users(id) on delete cascade,
  friend_uid uuid references auth.users(id) on delete cascade,
  status text default 'pending',
  created_at timestamptz default now(),
  unique(uid, friend_uid)
);

create table if not exists public.progresso (
  id bigint generated always as identity primary key,
  uid uuid references auth.users(id) on delete cascade,
  livro text,
  capitulo integer,
  concluido boolean default true,
  created_at timestamptz default now(),
  unique(uid, livro, capitulo)
);

create table if not exists public.mensagens (
  id bigint generated always as identity primary key,
  de uuid not null references auth.users(id) on delete cascade,
  para uuid not null references auth.users(id) on delete cascade,
  mensagem text not null,
  lida boolean default false,
  createdat timestamptz default now()
);

create table if not exists public.notificacoes (
  id bigint generated always as identity primary key,
  to_uid uuid references auth.users(id) on delete cascade,
  from_uid uuid references auth.users(id) on delete cascade,
  tipo text,
  mensagem text,
  lida boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.user_badges (
  id bigint generated always as identity primary key,
  uid uuid not null references auth.users(id) on delete cascade,
  badge_id bigint not null references public.badges(id) on delete cascade,
  progresso_atual integer not null default 0,
  conquistada boolean not null default false,
  conquistada_em timestamptz,
  createdat timestamptz not null default now(),
  unique(uid, badge_id)
);

create table if not exists public.user_stats (
  uid uuid primary key references auth.users(id) on delete cascade,
  total_livros_concluidos integer not null default 0,
  total_capitulos_concluidos integer not null default 0,
  total_versos_lidos integer not null default 0,
  dias_seguidos integer not null default 0,
  maior_sequencia integer not null default 0,
  ultimo_dia_leitura date,
  trofeus_total integer not null default 0,
  badges_total integer not null default 0,
  createdat timestamptz not null default now(),
  lastupdate timestamptz not null default now()
);

create table if not exists public.versos_lidos (
  id bigint generated always as identity primary key,
  uid uuid not null references auth.users(id) on delete cascade,
  livro text not null,
  capitulo integer not null,
  verso integer not null,
  lido boolean not null default true,
  createdat timestamptz not null default now(),
  unique(uid, livro, capitulo, verso)
);

alter table public.badges enable row level security;
alter table public.users enable row level security;
alter table public.friends enable row level security;
alter table public.progresso enable row level security;
alter table public.mensagens enable row level security;
alter table public.notificacoes enable row level security;
alter table public.user_badges enable row level security;
alter table public.user_stats enable row level security;
alter table public.versos_lidos enable row level security;

drop policy if exists "users read" on public.users;
create policy "users read" on public.users for select using (auth.uid() is not null);
drop policy if exists "users write own" on public.users;
create policy "users write own" on public.users for all using (auth.uid() = uid) with check (auth.uid() = uid);

drop policy if exists "friends own" on public.friends;
create policy "friends own" on public.friends for all using (auth.uid() = uid or auth.uid() = friend_uid) with check (auth.uid() = uid or auth.uid() = friend_uid);

drop policy if exists "progresso own" on public.progresso;
create policy "progresso own" on public.progresso for all using (auth.uid() = uid) with check (auth.uid() = uid);

drop policy if exists "mensagens pair" on public.mensagens;
create policy "mensagens pair" on public.mensagens for all using (auth.uid() = de or auth.uid() = para) with check (auth.uid() = de or auth.uid() = para);

drop policy if exists "notificacoes pair" on public.notificacoes;
create policy "notificacoes pair" on public.notificacoes for all using (auth.uid() = to_uid or auth.uid() = from_uid) with check (auth.uid() = to_uid or auth.uid() = from_uid);

drop policy if exists "user_badges own" on public.user_badges;
create policy "user_badges own" on public.user_badges for all using (auth.uid() = uid) with check (auth.uid() = uid);

drop policy if exists "user_stats own" on public.user_stats;
create policy "user_stats own" on public.user_stats for all using (auth.uid() = uid) with check (auth.uid() = uid);

drop policy if exists "versos own" on public.versos_lidos;
create policy "versos own" on public.versos_lidos for all using (auth.uid() = uid) with check (auth.uid() = uid);

drop policy if exists "badges read" on public.badges;
create policy "badges read" on public.badges for select using (true);

alter publication supabase_realtime add table public.users, public.friends, public.progresso, public.mensagens, public.notificacoes, public.user_badges;
