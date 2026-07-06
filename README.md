# NCT Fanbase

Website portal berita dan informasi komunitas penggemar NCT di Indonesia. Dibangun dengan gaya *official announcement site* Jepang yang bersih, formal, dan berorientasi berita — dominan warna hijau dan putih.

## Struktur Halaman

- `/` — Home (news feed utama + schedule terdekat)
- `/news` — Daftar seluruh berita
- `/news/[slug]` — Detail artikel berita
- `/profil` — Profil NCT Fanbase
- `/schedule` — Agenda kegiatan komunitas
- `/about` — About Us
- `/contact` — Contact Us (form sederhana, tanpa backend)
- `/disclaimer` — Disclaimer
- `/privacy-policy` — Privacy Policy
- `/terms` — Terms & Conditions

Navigasi header hanya menampilkan: News, Profil, Schedule, Disclaimer, About Us, Contact Us. Footer hanya berisi teks hak cipta.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- Konten statis (data lokal di `src/lib`), tanpa login/database

## Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Build Produksi

```bash
npm run build
npm run start
```

## Deploy

Proyek ini siap dideploy ke Vercel, Netlify, atau hosting statis/Node.js lainnya. Update konstanta `SITE_URL` pada `src/app/layout.tsx`, `src/app/sitemap.ts`, dan `src/app/robots.ts` sesuai domain produksi sebelum deploy.
