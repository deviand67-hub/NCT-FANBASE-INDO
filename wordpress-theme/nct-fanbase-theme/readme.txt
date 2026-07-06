=== NCT Fanbase ===
Contributors: nctfanbase
Requires at least: 5.0
Tested up to: 6.6
Requires PHP: 7.1
Version: 1.0.0
License: GNU General Public License v2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Tags: news, blog, custom-menu, custom-logo, featured-images, translation-ready, threaded-comments, custom-background, custom-colors

A clean, green-and-white news portal theme for NCT Fanbase Indonesia — News,
Schedule, Profil, About Us, Contact Us, Disclaimer, Privacy Policy, and
Terms & Conditions, all built on plain WordPress template tags.

== Description ==

NCT Fanbase is a from-scratch WordPress theme that reproduces the original
custom front-end 1:1 — same layout, spacing, typography, colors, and
responsive behavior — using only core WordPress APIs. There is no build
step, no Composer dependency, and no framework: every template is plain,
readable PHP compatible with PHP 7.1 and up.

Key pieces:

* News — regular WordPress posts, organized with four categories
  (Pengumuman, Berita, Update Jadwal, Komunitas). List view uses the News
  grid card design; single view matches the original article layout with
  breadcrumb, featured image, and related posts.
* Schedule — a custom post type (`nct_schedule`) with its own admin meta
  box for event date, display-date override, tag, and source, listed at
  `/schedule/` sorted chronologically.
* Profil, About Us, Contact Us, Disclaimer, Privacy Policy, Terms &
  Conditions — regular Pages, styled through the theme's shared `.prose`
  design system.
* A Customizer panel ("NCT Fanbase — Konten") for the homepage hero copy,
  the contact email, and the footer text, so none of that requires editing
  PHP.

== Installation ==

See INSTALLATION.md in this theme's folder for the full step-by-step guide,
including how to import the bundled demo content (nct-fanbase-content.xml,
shipped one folder above the theme itself). In short:

1. Upload and activate the theme via Appearance > Themes.
2. Import nct-fanbase-content.xml via Tools > Import > WordPress (after
   replacing the placeholder domain inside the file with your real site
   URL — see INSTALLATION.md).
3. Set Settings > Reading > "Your homepage displays" to "A static page",
   Homepage = Home, Posts page = News.
4. Appearance > Menus: assign the imported "Primary Menu" to the Primary
   Menu location.
5. Appearance > Customize > NCT Fanbase — Konten: set your real contact
   email.

== Frequently Asked Questions ==

= Does this theme require any plugin? =

No. Everything (including the Schedule custom post type and its admin
fields) is built into the theme itself.

= Why do "Home" and "News" pages exist but look empty in the editor? =

They're technical placeholders required by WordPress's Reading settings
(Homepage / Posts page). Their actual content is never shown — front-page.php
renders the homepage, and home.php renders the News listing, both
independent of whatever is typed into those two Pages.

= Can I add a sidebar? =

A "Sidebar" widget area is registered, but no template calls get_sidebar()
by default, matching the original sidebar-free design. Add `get_sidebar();`
to a child theme's templates if you want to use it.

== Changelog ==

= 1.0.0 =
* Initial release — full conversion from the original custom front-end.

== Copyright ==

NCT Fanbase WordPress Theme, Copyright 2026 NCT Fanbase.
NCT Fanbase is distributed under the terms of the GNU GPL v2 or later.

Bundled photography under assets/images/news/ is sourced from Pexels and
distributed under the Pexels License (free for commercial and
non-commercial use, no attribution required) — https://www.pexels.com/license/
