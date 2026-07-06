import type { Metadata } from "next";
import Container from "@/components/Container";
import NewsCard from "@/components/NewsCard";
import { getAllNews } from "@/lib/news-data";

export const metadata: Metadata = {
  title: "News",
  description:
    "Kumpulan berita dan pengumuman terbaru dari NCT Fanbase, portal komunitas penggemar NCT di Indonesia.",
};

export default function NewsListPage() {
  const news = getAllNews();

  return (
    <Container className="py-10">
      <header className="mb-8 border-l-4 border-brand-700 pl-4">
        <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">News</h1>
        <p className="mt-1 text-sm text-neutral-500">
          Seluruh berita dan pengumuman dari NCT Fanbase
        </p>
      </header>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <li key={item.slug}>
            <NewsCard item={item} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
