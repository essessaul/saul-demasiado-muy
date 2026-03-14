# Playa Escondida Vacation Homes — Branded Full Scaffold

This package includes your uploaded logo already integrated across the platform.

## Included
- Header logo
- Homepage hero logo
- Footer logo
- For Sale page and nav tab
- Booking page logo
- Admin dashboard logo
- Owner portal logo
- Favicon
- Invoice / owner statement preview
- Branded email templates
- Booking form with state
- Booking draft creation service
- Stripe checkout scaffold
- Supabase client scaffold
- Supabase SQL schema
- Auth context for admin login

## Run locally on Mac
```bash
npm install
npm run dev
```

Then open:
```bash
http://localhost:5173
```

## Configure environment
1. Copy `.env.example` to `.env`
2. Add:
   - VITE_SUPABASE_URL
   - VITE_SUPABASE_ANON_KEY
   - VITE_STRIPE_PUBLISHABLE_KEY

## What still needs real credentials or backend
- Supabase live database connection
- Supabase Auth for real users
- Stripe Checkout Session backend
- Airbnb / Booking.com / Expedia sync through a PMS or channel manager

## Recommended next production steps
1. create your Supabase project
2. run `supabase/schema.sql`
3. add your real listings
4. connect Stripe
5. wire email templates to your mail provider
6. connect PMS / channel manager for OTA sync

## Site structure update
- Vacation Rentals
- For Sale
- Owner Services

## Homepage focus update
- Homepage now prioritizes short-term rentals
- Search fields are check-in, check-out, and guests only
- Location is fixed to Playa Escondida
- For Sale remains a secondary bonus section

## Search upgrade
- Homepage search now filters rental units by check-in, check-out, and guests
- Listings page reads the saved search state
- Demo availability uses mock unavailable date ranges

## White homepage hero update
- Removed navy styling from the main homepage hero
- Added full-width white layout with search on top
- Added widescreen beach photo
- Added Saul cartoon as supporting visual

## Special homepage update
- Replaced the plain stock hero with a more cinematic full-stage rental homepage
- Search remains at the top
- Added VIP featured rental cards directly below the hero
- Cartoon Saul kept as a supporting branded visual
