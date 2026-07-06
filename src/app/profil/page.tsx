import type { Metadata } from "next";
import Container from "@/components/Container";
import { nctOverview, nctUnits } from "@/lib/profile-data";

export const metadata: Metadata = {
  title: "Profil",
  description:
    "Profil NCT: sub-unit dan susunan anggota NCT 127, NCT DREAM, WayV, NCT WISH, NCT DoJaeJung, NCT JNJM, dan NCT U, dirangkum oleh NCT Fanbase.",
};

export default function ProfilPage() {
  return (
    <Container className="py-10">
      <header className="mb-8 border-l-4 border-brand-700 pl-4">
        <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Profil</h1>
        <p className="mt-1 text-sm text-neutral-500">Profil sub-unit dan anggota NCT</p>
      </header>

      <section className="mb-12 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="mb-3 text-lg font-bold text-neutral-900">Tentang NCT</h2>
          <p className="text-sm leading-relaxed text-neutral-700">{nctOverview.concept}</p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">{nctOverview.summary}</p>
        </div>
        <dl className="grid grid-cols-2 gap-4 border border-neutral-200 p-5 text-sm lg:grid-cols-1">
          <div>
            <dt className="font-semibold text-neutral-500">Agensi</dt>
            <dd className="text-neutral-900">{nctOverview.agency}</dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral-500">Debut</dt>
            <dd className="text-neutral-900">{nctOverview.debutYear}</dd>
          </div>
        </dl>
      </section>

      <p className="mb-10 border border-brand-100 bg-brand-50 p-4 text-sm leading-relaxed text-brand-900">
        {nctOverview.note}
      </p>

      <section>
        <h2 className="mb-6 text-lg font-bold text-neutral-900">Sub-unit &amp; Anggota</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {nctUnits.map((unit) => (
            <article key={unit.id} className="border border-neutral-200 p-5">
              <h3 className="text-base font-bold text-brand-700">{unit.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">{unit.description}</p>
              {unit.members.length > 0 ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {unit.members.map((member) => (
                    <li
                      key={member}
                      className="rounded-sm bg-brand-100 px-2.5 py-1 text-xs font-semibold text-brand-800"
                    >
                      {member}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-xs italic text-neutral-500">{unit.note}</p>
              )}
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
}
