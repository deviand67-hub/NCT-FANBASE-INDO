import Link from "next/link";
import Container from "./Container";

const NAV_ITEMS = [
  { href: "/news", label: "News" },
  { href: "/profil", label: "Profil" },
  { href: "/schedule", label: "Schedule" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 backdrop-blur">
      <a
        href="#main-content"
        className="skip-link absolute left-2 top-2 z-50 h-0 w-0 overflow-hidden bg-brand-700 text-white"
      >
        Langsung ke konten utama
      </a>
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-brand-800"
          >
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded-sm bg-brand-700 text-sm font-black text-white"
            >
              N
            </span>
            NCT FANBASE
          </Link>

          <nav aria-label="Navigasi utama" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-sm px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-brand-50 hover:text-brand-800"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <details className="md:hidden">
            <summary
              aria-label="Buka menu navigasi"
              className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-sm border border-brand-100 text-brand-800"
            >
              <span aria-hidden="true">☰</span>
            </summary>
            <nav
              aria-label="Navigasi mobile"
              className="absolute left-0 right-0 border-b border-brand-100 bg-white shadow-md"
            >
              <ul className="container-page flex flex-col py-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-sm px-3 py-3 text-sm font-medium text-neutral-700 hover:bg-brand-50 hover:text-brand-800"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
