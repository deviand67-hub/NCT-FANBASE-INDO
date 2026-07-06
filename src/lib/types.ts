export type NewsCategory = "Pengumuman" | "Berita" | "Update Jadwal" | "Komunitas";

export interface NewsItem {
  slug: string;
  title: string;
  category: NewsCategory;
  date: string;
  excerpt: string;
  content: string[];
  image: string;
  imageAlt: string;
}

export interface ScheduleItem {
  date: string;
  displayDate?: string;
  title: string;
  description: string;
  tag: string;
  source?: string;
}
