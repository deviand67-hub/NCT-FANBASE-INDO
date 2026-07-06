import type { Metadata } from "next";
import Container from "@/components/Container";

const CONTACT_EMAIL = "kontak@nctfanbase.id";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Hubungi NCT Fanbase untuk pertanyaan, masukan, atau kerja sama seputar komunitas dan website melalui email.",
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

      <div className="max-w-2xl text-sm leading-relaxed text-neutral-700">
        <p>
          Untuk pertanyaan umum, masukan, maupun laporan terkait konten website
          NCT Fanbase, silakan hubungi kami melalui email berikut:
        </p>
        <p className="mt-4 text-lg font-bold text-brand-700">
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline">
            {CONTACT_EMAIL}
          </a>
        </p>
        <p className="mt-4">
          Kami akan berusaha menindaklanjuti setiap pesan yang masuk sebaik
          mungkin.
        </p>
      </div>
    </Container>
  );
}
