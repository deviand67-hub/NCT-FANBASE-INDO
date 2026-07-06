import type { Metadata } from "next";
import Container from "@/components/Container";
import { getUpcomingSchedule } from "@/lib/schedule-data";
import { formatDate } from "@/lib/format-date";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "Jadwal dan agenda kegiatan NCT: fan meeting tour, konser, comeback, hingga proyek 10 tahun NCT 2026, dirangkum oleh NCT Fanbase.",
};

export default function SchedulePage() {
  const schedule = getUpcomingSchedule();

  return (
    <Container className="py-10">
      <header className="mb-8 border-l-4 border-brand-700 pl-4">
        <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Schedule</h1>
        <p className="mt-1 text-sm text-neutral-500">Jadwal kegiatan dan aktivitas NCT</p>
      </header>

      <p className="mb-6 text-xs leading-relaxed text-neutral-500">
        Jadwal berikut dirangkum dari informasi dan pengumuman publik, dan dapat berubah
        sewaktu-waktu mengikuti pengumuman resmi dari pihak agensi.
      </p>

      <ol className="flex flex-col divide-y divide-neutral-200 border border-neutral-200">
        {schedule.map((item) => (
          <li key={item.title} className="flex flex-col gap-2 p-5 sm:flex-row sm:items-start sm:gap-6">
            <div className="flex flex-col sm:w-44 sm:shrink-0">
              <time dateTime={item.date} className="text-sm font-bold text-brand-700">
                {item.displayDate ?? formatDate(item.date)}
              </time>
              <span className="mt-1 w-fit rounded-sm bg-brand-100 px-2 py-0.5 text-xs font-semibold text-brand-800">
                {item.tag}
              </span>
            </div>
            <div>
              <h2 className="text-base font-bold text-neutral-900">{item.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">{item.description}</p>
              {item.source && (
                <p className="mt-2 text-xs italic text-neutral-400">Sumber: {item.source}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Container>
  );
}
