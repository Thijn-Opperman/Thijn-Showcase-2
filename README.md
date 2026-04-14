# Thijn Showcase

Portfolio site gebouwd met Next.js (App Router), TypeScript en Tailwind.

Deze versie is ingericht om stabiel op Vercel te draaien met:
- projectdata in Supabase (`projects` tabel)
- image uploads in Supabase Storage (`project-assets` bucket)
- Basic Auth bescherming op `/admin` en `/api/admin/*`

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Supabase (database + storage)

## Lokale setup

1. Installeer dependencies:

```bash
npm install
```

2. Maak een lokale env file:

```bash
cp .env.example .env.local
```

3. Vul alle variabelen in `.env.local`.
4. Start development:

```bash
npm run dev
```

## Vereiste environment variables

Gebruik dezelfde keys lokaal en in Vercel Project Settings -> Environment Variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_STORAGE_BUCKET` (default: `project-assets`)
- `ADMIN_BASIC_USER`
- `ADMIN_BASIC_PASS`

## Supabase productie-inrichting

### 1) Database

Zorg dat de `projects` tabel bestaat en lees/schrijfbaar is voor de server-side service role.

### 2) Storage bucket

- Maak bucket `project-assets`
- Gebruik public access voor simpele directe image rendering via URL
- Uploads komen in: `projects/<project-id>/<filename>`

### 3) Data migreren (optioneel)

Als je nog oude projectdata hebt, kun je migreren met:

```bash
npm run migrate:projects
```

## Admin beveiliging

`/admin` en `/api/admin/*` zijn beschermd met HTTP Basic Auth via `proxy.ts`.

- Browser vraagt om user/pass zodra je `/admin` opent
- Alleen correcte `ADMIN_BASIC_USER` + `ADMIN_BASIC_PASS` krijgt toegang

## Deploy naar Vercel

1. Push deze repo naar GitHub.
2. Import project in Vercel.
3. Stel alle environment variables in (Preview + Production).
4. Deploy.
5. Test na deploy:
   - `/projects` laadt projecten uit Supabase
   - `/admin/projects` vraagt login
   - upload van hero/screenshot werkt en URL wordt opgeslagen

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run migrate:projects
```

## Belangrijk

- Commit nooit `.env.local`.
- Als secrets ooit gedeeld of gelekt zijn: direct roteren in Supabase en Vercel.
