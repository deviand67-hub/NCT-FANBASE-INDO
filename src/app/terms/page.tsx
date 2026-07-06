import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Syarat dan ketentuan penggunaan website NCT Fanbase bagi seluruh pengunjung.",
};

export default function TermsPage() {
  return (
    <Container className="py-10">
      <header className="mb-8 border-l-4 border-brand-700 pl-4">
        <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-1 text-sm text-neutral-500">Terakhir diperbarui: 1 Juli 2026</p>
      </header>

      <div className="prose-article max-w-3xl text-neutral-800">
        <p>
          Dengan mengakses dan menggunakan website NCT Fanbase, pengunjung
          dianggap telah membaca, memahami, dan menyetujui syarat dan ketentuan
          berikut ini.
        </p>

        <h2>Penggunaan Situs</h2>
        <p>
          Website ini disediakan untuk keperluan informasi seputar komunitas
          penggemar NCT. Pengunjung dilarang menyalahgunakan situs ini untuk
          tujuan yang melanggar hukum, merugikan pihak lain, atau mengganggu
          jalannya layanan.
        </p>

        <h2>Konten Website</h2>
        <p>
          Seluruh konten yang dipublikasikan pada website ini, termasuk teks
          dan tata letak, disusun oleh tim NCT Fanbase untuk tujuan informasi
          non-komersial bagi komunitas penggemar.
        </p>

        <h2>Batasan Tanggung Jawab</h2>
        <p>
          NCT Fanbase tidak bertanggung jawab atas kerugian yang timbul akibat
          penggunaan informasi yang terdapat pada website ini. Pengunjung
          disarankan melakukan verifikasi mandiri terhadap informasi penting.
        </p>

        <h2>Perubahan Ketentuan</h2>
        <p>
          Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu.
          Perubahan akan berlaku efektif sejak dipublikasikan pada halaman ini.
        </p>

        <h2>Hukum yang Berlaku</h2>
        <p>
          Syarat dan ketentuan ini diatur dan ditafsirkan berdasarkan hukum
          yang berlaku di Republik Indonesia.
        </p>
      </div>
    </Container>
  );
}
