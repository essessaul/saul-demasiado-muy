create extension if not exists pgcrypto;

create table if not exists properties (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  category text,
  location text,
  description text,
  rate numeric(10,2) not null default 0,
  cleaning_fee numeric(10,2) not null default 0,
  bedrooms integer default 1,
  bathrooms integer default 1,
  guests integer default 1,
  rating numeric(3,2) default 0,
  status text default 'Available',
  image text,
  amenities text[] default '{}',
  created_at timestamptz default now()
);

create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  property_slug text not null,
  guest_name text,
  guest_email text,
  guest_phone text,
  check_in date,
  check_out date,
  guests integer default 1,
  notes text,
  total_amount numeric(10,2) default 0,
  status text default 'pending_payment',
  created_at timestamptz default now()
);

create table if not exists owner_profiles (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text unique not null,
  property_slug text,
  created_at timestamptz default now()
);
