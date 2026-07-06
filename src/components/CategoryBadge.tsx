import { NewsCategory } from "@/lib/types";

const COLORS: Record<NewsCategory, string> = {
  Pengumuman: "bg-brand-700 text-white",
  Berita: "bg-brand-100 text-brand-800",
  "Update Jadwal": "bg-brand-100 text-brand-800",
  Komunitas: "bg-brand-100 text-brand-800",
};

export default function CategoryBadge({ category }: { category: NewsCategory }) {
  return (
    <span
      className={`inline-block rounded-sm px-2 py-0.5 text-xs font-semibold ${COLORS[category]}`}
    >
      {category}
    </span>
  );
}
