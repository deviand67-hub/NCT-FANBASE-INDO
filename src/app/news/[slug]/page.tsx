import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import CategoryBadge from "@/components/CategoryBadge";
import NewsCard from "@/components/NewsCard";
import { getAllNews, getNewsBySlug } from "@/lib/news-data";
import { formatDate } from "@/lib/format-date";

export function generateStaticParams() {
  return getAllNews().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.excerpt,
    openGraph: {
      title: item.title,
      description: item.excerpt,
      type: "article",
      publishedTime: item.date,
      images: [{ url: item.image, width: 1200, height: 630, alt: item.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.excerpt,
      images: [item.image],
    },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  const related = getAllNews()
    .filter((n) => n.slug !== item.slug)
    .slice(0, 3);

  return (
    <Container className="py-10">
      <nav aria-label="Breadcrumb" className="mb-6 text-xs text-neutral-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:text-brand-700">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/news" className="hover:text-brand-700">
              News
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="max-w-[240px] truncate text-neutral-700" aria-current="page">
            {item.title}
          </li>
        </ol>
      </nav>

      <article className="mx-auto max-w-2xl">
        <header className="mb-6">
          <div className="mb-3 flex items-center gap-2 text-xs text-neutral-500">
            <CategoryBadge category={item.category} />
            <time dateTime={item.date}>{formatDate(item.date)}</time>
          </div>
          <h1 className="text-2xl font-black leading-snug text-neutral-900 sm:text-3xl">
            {item.title}
          </h1>
        </header>

        <div className="relative mb-8 h-56 overflow-hidden sm:h-72">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="(min-width: 640px) 672px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="prose-article text-neutral-800">
          {item.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </article>

      {related.length > 0 && (
        <section className="mx-auto mt-16 max-w-4xl border-t border-neutral-200 pt-10">
          <h2 className="mb-6 text-lg font-bold text-neutral-900">News Lainnya</h2>
          <ul className="grid gap-6 sm:grid-cols-3">
            {related.map((n) => (
              <li key={n.slug}>
                <NewsCard item={n} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </Container>
  );
}
