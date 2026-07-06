import Link from "next/link";
import Image from "next/image";
import { NewsItem } from "@/lib/types";
import { formatDate } from "@/lib/format-date";
import CategoryBadge from "./CategoryBadge";

export default function NewsCard({ item, featured = false }: { item: NewsItem; featured?: boolean }) {
  return (
    <article className="group flex h-full flex-col border border-neutral-200 bg-white transition-shadow hover:shadow-md">
      <div className={`relative overflow-hidden ${featured ? "h-48 sm:h-64" : "h-36"}`}>
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes={featured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 640px) 33vw, 100vw"}
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <CategoryBadge category={item.category} />
          <time dateTime={item.date}>{formatDate(item.date)}</time>
        </div>
        <h3 className={`font-bold text-neutral-900 ${featured ? "text-xl" : "text-base"}`}>
          <Link href={`/news/${item.slug}`} className="hover:text-brand-700">
            <span className="absolute inset-0" aria-hidden="true" />
            {item.title}
          </Link>
        </h3>
        <p className="line-clamp-2 text-sm text-neutral-600">{item.excerpt}</p>
      </div>
    </article>
  );
}
