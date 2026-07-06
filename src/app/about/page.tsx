import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Kenali lebih dekat NCT Fanbase, komunitas penggemar independen yang menyajikan informasi seputar NCT bagi penggemar di Indonesia.",
};

export default function AboutPage() {
  return (
    <Container className="py-10">
      <header className="mb-8 border-l-4 border-brand-700 pl-4">
        <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">About Us</h1>
        <p className="mt-1 text-sm text-neutral-500">Mengenal NCT Fanbase lebih dekat</p>
      </header>

      <div className="prose-article max-w-3xl text-neutral-800">
        <p>
          NCT Fanbase merupakan komunitas penggemar independen yang dikelola oleh
          dan untuk penggemar NCT di Indonesia. Kami hadir sebagai wadah bagi
          siapa pun yang ingin mengikuti kabar, informasi, dan agenda kegiatan
          komunitas dengan cara yang sederhana dan nyaman.
        </p>

        <h2>Latar Belakang</h2>
        <p>
          Website ini dibangun atas dasar kecintaan bersama terhadap NCT dan
          keinginan untuk memiliki satu ruang informasi yang rapi, terpercaya,
          dan mudah diakses oleh siapa saja, tanpa perlu berpindah-pindah sumber.
        </p>

        <h2>Apa yang Kami Lakukan</h2>
        <p>
          Melalui halaman News, kami menyajikan informasi dan pengumuman
          seputar kegiatan komunitas. Melalui halaman Schedule, kami menyusun
          agenda kegiatan komunitas secara berkala. Kami juga berupaya menjaga
          website ini tetap ringan, cepat, dan nyaman digunakan di berbagai
          perangkat.
        </p>

        <h2>Catatan Penting</h2>
        <p>
          NCT Fanbase merupakan situs yang dikelola secara independen oleh
          penggemar dan tidak berafiliasi secara resmi dengan NCT, para
          anggotanya, maupun agensi terkait. Informasi lebih lanjut mengenai hal
          ini dapat ditemukan pada halaman Disclaimer.
        </p>
      </div>
    </Container>
  );
}
