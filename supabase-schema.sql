-- ═══════════════════════════════════════════════
-- MORALI — Supabase Schema
-- Run this in Supabase SQL Editor (supabase.com)
-- ═══════════════════════════════════════════════

-- Categories
create table if not exists categories (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  name text not null,
  name_en text default '',
  description text default '',
  long_description text default '',
  image text default '',
  "order" int default 0,
  is_active boolean default true,
  created_at timestamptz default now()
);

-- Products
create table if not exists products (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  category_slug text not null,
  name text not null,
  code text default '',
  price text default '',
  description text default '',
  img text default '',
  images text[] default '{}',
  features text[] default '{}',
  in_stock boolean default true,
  badge text,
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Storage bucket for product images
insert into storage.buckets (id, name, public)
values ('morali-products', 'morali-products', true)
on conflict do nothing;

-- Allow public read on product images
create policy "Public read morali-products" on storage.objects
  for select using (bucket_id = 'morali-products');

-- Allow authenticated service role to upload
create policy "Service role upload morali-products" on storage.objects
  for insert with check (bucket_id = 'morali-products');

create policy "Service role update morali-products" on storage.objects
  for update using (bucket_id = 'morali-products');

create policy "Service role delete morali-products" on storage.objects
  for delete using (bucket_id = 'morali-products');

-- RLS: disable for server-side access (service role key bypasses RLS anyway)
alter table categories enable row level security;
alter table products enable row level security;

-- Public read
create policy "Public read categories" on categories for select using (is_active = true);
create policy "Public read products" on products for select using (is_active = true);
