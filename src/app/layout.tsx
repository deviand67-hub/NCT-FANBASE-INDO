import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://nct-fanbase.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NCT Fanbase — Kabar dan Informasi Komunitas NCT Indonesia",
    template: "%s | NCT Fanbase",
  },
  description:
    "NCT Fanbase adalah portal berita dan informasi komunitas penggemar NCT di Indonesia. Ikuti kabar terbaru, jadwal kegiatan, dan informasi komunitas di sini.",
  keywords: ["NCT Fanbase", "NCT Indonesia", "Berita NCT", "Komunitas NCT", "Fanbase NCT"],
  openGraph: {
    title: "NCT Fanbase — Kabar dan Informasi Komunitas NCT Indonesia",
    description:
      "Portal berita dan informasi komunitas penggemar NCT di Indonesia. Ikuti kabar terbaru dan jadwal kegiatan komunitas.",
    siteName: "NCT Fanbase",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/images/og-default.svg", width: 1200, height: 630, alt: "NCT Fanbase" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NCT Fanbase — Kabar dan Informasi Komunitas NCT Indonesia",
    description:
      "Portal berita dan informasi komunitas penggemar NCT di Indonesia. Ikuti kabar terbaru dan jadwal kegiatan komunitas.",
    images: ["/images/og-default.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-neutral-900">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
