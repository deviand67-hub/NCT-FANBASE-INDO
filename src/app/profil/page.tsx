import type { Metadata } from "next";
import Container from "@/components/Container";
import { fanbaseProfile, fanbaseDivisions } from "@/lib/profile-data";

export const metadata: Metadata = {
  title: "Profil",
  description:
    "Profil NCT Fanbase, komunitas penggemar independen yang berfokus pada informasi dan kegiatan komunitas NCT di Indonesia.",
};

export default function ProfilPage() {
  return (
    <Container className="py-10">
      <header className="mb-8 border-l-4 border-brand-700 pl-4">
        <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Profil</h1>
        <p className="mt-1 text-sm text-neutral-500">Profil singkat NCT Fanbase</p>
      </header>

      <section className="mb-12 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="mb-3 text-lg font-bold text-neutral-900">Tentang Kami</h2>
          <p className="text-sm leading-relaxed text-neutral-700">{fanbaseProfile.summary}</p>
        </div>
        <dl className="grid grid-cols-2 gap-4 border border-neutral-200 p-5 text-sm lg:grid-cols-1">
          <div>
            <dt className="font-semibold text-neutral-500">Didirikan</dt>
            <dd className="text-neutral-900">{fanbaseProfile.founded}</dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral-500">Basis</dt>
            <dd className="text-neutral-900">{fanbaseProfile.base}</dd>
          </div>
        </dl>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-lg font-bold text-neutral-900">Misi Kami</h2>
        <ul className="grid gap-3 sm:grid-cols-3">
          {fanbaseProfile.mission.map((point, idx) => (
            <li key={idx} className="border border-neutral-200 p-4 text-sm leading-relaxed text-neutral-700">
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-bold text-neutral-900">Struktur Divisi</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {fanbaseDivisions.map((division) => (
            <li key={division.name} className="border border-neutral-200 p-4">
              <h3 className="text-sm font-bold text-brand-700">{division.name}</h3>
              <p className="mt-1 text-sm text-neutral-600">{division.focus}</p>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
