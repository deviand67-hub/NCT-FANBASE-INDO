import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Hubungi NCT Fanbase untuk pertanyaan, masukan, atau kerja sama seputar komunitas dan website.",
};

export default function ContactPage() {
  return (
    <Container className="py-10">
      <header className="mb-8 border-l-4 border-brand-700 pl-4">
        <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Contact Us</h1>
        <p className="mt-1 text-sm text-neutral-500">
          Sampaikan pertanyaan atau masukan Anda kepada kami
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
        <aside className="border border-neutral-200 p-5 text-sm text-neutral-700">
          <h2 className="mb-2 text-sm font-bold text-brand-700">Informasi</h2>
          <p className="leading-relaxed">
            Formulir ini digunakan untuk menyampaikan pertanyaan umum, masukan,
            maupun laporan terkait konten website NCT Fanbase. Kami akan
            berusaha menindaklanjuti setiap pesan yang masuk sebaik mungkin.
          </p>
        </aside>
      </div>
    </Container>
  );
}
