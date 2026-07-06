import type { MetadataRoute } from "next";
import { getAllNews } from "@/lib/news-data";

const SITE_URL = "https://nct-fanbase.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/news",
    "/profil",
    "/schedule",
    "/about",
    "/contact",
    "/disclaimer",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const newsRoutes = getAllNews().map((item) => ({
    url: `${SITE_URL}/news/${item.slug}`,
    lastModified: new Date(item.date),
  }));

  return [...staticRoutes, ...newsRoutes];
}
