-- Zukunft. Automatisiert. — Database Schema
-- Run this in your Supabase SQL editor

create table if not exists services (
  id            serial primary key,
  slug          text unique not null,
  idx           text not null,
  title         text not null,
  teaser        text not null,
  duration      text not null,
  investment    text not null,
  deliverables  text not null,
  problem       text not null,
  steps         jsonb not null default '[]',
  delivers      jsonb not null default '[]',
  invest        jsonb not null default '[]',
  faq           jsonb not null default '[]',
  created_at    timestamptz not null default now()
);

create table if not exists cases (
  id              serial primary key,
  slug            text unique not null,
  idx             text not null,
  industry        text not null,
  size            text not null,
  headline        text not null,
  headline_label  text not null,
  diagnose        text not null,
  eingriff        jsonb not null default '[]',
  ergebnis        jsonb not null default '[]',
  quote           text not null,
  source          text not null,
  created_at      timestamptz not null default now()
);

create table if not exists articles (
  id              serial primary key,
  slug            text unique not null,
  title           text not null,
  date            text not null,
  read_minutes    int not null,
  category        text not null,
  lead            text not null,
  body            jsonb not null default '[]',
  notes           jsonb not null default '[]',
  created_at      timestamptz not null default now()
);

create table if not exists news (
  id          serial primary key,
  date        text not null,
  title       text not null,
  body        text not null,
  created_at  timestamptz not null default now()
);

-- Enable RLS and allow anonymous reads
alter table services  enable row level security;
alter table cases     enable row level security;
alter table articles  enable row level security;
alter table news      enable row level security;

create policy "Public read services"  on services  for select using (true);
create policy "Public read cases"     on cases     for select using (true);
create policy "Public read articles"  on articles  for select using (true);
create policy "Public read news"      on news      for select using (true);
