# NCT Fanbase — WordPress Theme Installation Guide

This folder contains:

```
wordpress-theme/
├── nct-fanbase-theme/        ← the theme itself (zip this folder to install)
└── nct-fanbase-content.xml   ← demo content (WXR) — posts, pages, schedule
```

## 1. Requirements

- WordPress 5.0 or newer
- PHP 7.1 or newer
- No Composer, no Node.js, no additional plugins required

## 2. Install the theme

1. Compress the `nct-fanbase-theme` folder into a zip file
   (`nct-fanbase-theme.zip` — make sure `style.css` sits at the top level
   inside the zip, not nested one folder deeper).
2. In WordPress admin, go to **Appearance → Themes → Add New → Upload
   Theme**, choose the zip, click **Install Now**, then **Activate**.

## 3. Prepare the demo content file before importing

The WXR file (`nct-fanbase-content.xml`) references image and link URLs
using the placeholder domain `https://example.com`. **Before importing**,
open the file in a text editor and replace every occurrence of
`https://example.com` with your actual site URL (e.g.
`https://nctfanbase.id`) — a simple find-and-replace across the whole file
is enough, since the placeholder is used consistently.

This step matters most for the ten News post featured images: they're
referenced as `https://example.com/wp-content/themes/nct-fanbase-theme/assets/images/news/...jpg`,
and the WordPress importer fetches attachments from that literal URL at
import time — if it still points at `example.com` the images will fail to
import.

## 4. Import the demo content

1. Go to **Tools → Import**. If "WordPress" isn't listed, click **Install
   Now** next to it first, then **Run Importer**.
2. Upload the edited `nct-fanbase-content.xml`.
3. When asked to assign authors, either map to your own user account or
   create the "nctfanbase" author when prompted.
4. Check **Download and import file attachments** — this is what pulls the
   ten News images from the theme's `assets/images/news/` folder into your
   Media Library.
5. Click **Submit**.

After this you should have:

- 10 News posts (categorized Pengumuman / Berita / Update Jadwal /
  Komunitas) with featured images
- 10 Schedule items (custom post type), each with an event date, tag, and
  source
- 8 Pages: Home, News, Profil, About Us, Contact Us, Disclaimer, Privacy
  Policy, Terms & Conditions
- A "Primary Menu" navigation menu with 6 items (News, Profil, Schedule,
  Disclaimer, About Us, Contact Us)

## 5. Configure Reading settings

Go to **Settings → Reading**:

- **Your homepage displays:** "A static page"
- **Homepage:** Home
- **Posts page:** News

> Note: the "Home" and "News" pages are technical placeholders required by
> this setting — the theme's `front-page.php` and `home.php` templates
> render the actual homepage and News listing regardless of what's typed
> into those two pages' content.

## 6. Assign the Primary Menu

Go to **Appearance → Menus**, select the imported **Primary Menu**, and
under **Menu Settings** check **Primary Menu** as its display location,
then **Save Menu**.

A **Footer Menu** location also exists (registered by the theme) but is
intentionally left unassigned — the original design's footer is just a
copyright line with no other links. Only assign a Footer Menu if you
specifically want to add footer links; leaving it unassigned keeps the
footer exactly as designed.

## 7. Set your contact email and hero copy

Go to **Appearance → Customize → NCT Fanbase — Konten** and set:

- **Email Kontak** — shown on the Contact Us page (defaults to
  `kontak@nctfanbase.id`)
- **Hero — Label Kecil / Judul / Deskripsi** — the homepage hero copy
- **Teks Footer** — the copyright line in the footer

## 8. Double-check permalinks

Go to **Settings → Permalinks** and click **Save Changes** once (even
without changing anything) to make sure the Schedule custom post type's
`/schedule/` archive and the News/Page URLs resolve correctly.

## 9. You're done

Visit your site's homepage — it should closely match the original design:
hero section, News grid with the ten imported articles, and the "Schedule
Terdekat" preview pulling from the imported Schedule items.

## Troubleshooting

- **Featured images missing after import** — you likely imported before
  replacing the `example.com` placeholder domain, or without checking
  "Download and import file attachments". Delete the imported posts and
  re-import after fixing the URL, or manually set featured images from
  `wp-content/themes/nct-fanbase-theme/assets/images/news/`.
- **Schedule page 404s** — go to Settings → Permalinks and click Save
  Changes once to flush rewrite rules for the `nct_schedule` post type.
- **Menu not showing** — confirm it's assigned to the "Primary Menu"
  location in Appearance → Menus, not just imported.
