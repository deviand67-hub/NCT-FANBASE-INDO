import Link from "next/link";
import Container from "@/components/Container";
import NewsCard from "@/components/NewsCard";
import CategoryBadge from "@/components/CategoryBadge";
import { getLatestNews } from "@/lib/news-data";
import { getNextSchedule } from "@/lib/schedule-data";
import { formatDate } from "@/lib/format-date";

export default function Home() {
  const latestNews = getLatestNews(7);
  const [featured, ...rest] = latestNews;
  const upcoming = getNextSchedule(4);

  return (
    <>
      <section className="border-b border-brand-100 bg-gradient-to-b from-brand-50 to-white">
        <Container className="py-14 sm:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-600">
            Portal Komunitas Penggemar
          </p>
          <h1 className="max-w-2xl text-3xl font-black leading-tight text-brand-900 sm:text-4xl">
            NCT Fanbase
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600">
            Pusat informasi, berita, dan jadwal kegiatan komunitas penggemar NCT
            di Indonesia. Bersih, rapi, dan mudah diikuti.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/news"
              className="rounded-sm bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-800"
            >
              Lihat Semua News
            </Link>
            <Link
              href="/schedule"
              className="rounded-sm border border-brand-700 px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50"
            >
              Lihat Schedule
            </Link>
          </div>
        </Container>
      </section>

      <Container className="py-12">
        <div className="mb-8 flex items-end justify-between border-l-4 border-brand-700 pl-4">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">News</h2>
            <p className="mt-1 text-sm text-neutral-500">Kabar dan informasi terbaru</p>
          </div>
          <Link
            href="/news"
            className="hidden text-sm font-semibold text-brand-700 hover:underline sm:block"
          >
            Semua News &rarr;
          </Link>
        </div>

        {featured && (
          <div className="mb-8 grid gap-6 lg:grid-cols-3">
            <div className="relative lg:col-span-2">
              <NewsCard item={featured} featured />
            </div>
            <div className="flex flex-col gap-4 border border-neutral-200 p-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-brand-700">
                News Terkini
              </h3>
              <ul className="flex flex-col divide-y divide-neutral-200">
                {rest.slice(0, 4).map((item) => (
                  <li key={item.slug} className="relative py-3 first:pt-0">
                    <div className="mb-1 flex items-center gap-2 text-xs text-neutral-500">
                      <CategoryBadge category={item.category} />
                      <time dateTime={item.date}>{formatDate(item.date)}</time>
                    </div>
                    <Link
                      href={`/news/${item.slug}`}
                      className="text-sm font-semibold leading-snug text-neutral-800 hover:text-brand-700"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="text-center sm:hidden">
          <Link href="/news" className="text-sm font-semibold text-brand-700 hover:underline">
            Semua News &rarr;
          </Link>
        </div>
      </Container>

      <section className="border-t border-brand-100 bg-brand-50">
        <Container className="py-12">
          <div className="mb-8 flex items-end justify-between border-l-4 border-brand-700 pl-4">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900">Schedule Terdekat</h2>
              <p className="mt-1 text-sm text-neutral-500">Agenda kegiatan komunitas</p>
            </div>
            <Link
              href="/schedule"
              className="hidden text-sm font-semibold text-brand-700 hover:underline sm:block"
            >
              Semua Schedule &rarr;
            </Link>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {upcoming.map((item) => (
              <li key={item.title} className="flex flex-col gap-2 border border-neutral-200 bg-white p-4">
                <time dateTime={item.date} className="text-xs font-semibold text-brand-700">
                  {item.displayDate ?? formatDate(item.date)}
                </time>
                <p className="text-sm font-bold text-neutral-900">{item.title}</p>
                <p className="text-xs leading-relaxed text-neutral-600">{item.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
