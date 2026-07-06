import { ScheduleItem } from "./types";

export const scheduleList: ScheduleItem[] = [
  {
    date: "2026-07-12",
    title: "Sesi Diskusi Mingguan Komunitas",
    description:
      "Sesi berbagi kabar dan diskusi santai antar anggota komunitas NCT Fanbase.",
    tag: "Komunitas",
  },
  {
    date: "2026-07-19",
    title: "Pembaruan Rangkuman Berita Dua Mingguan",
    description:
      "Publikasi rangkuman berita dan informasi terkini seputar kegiatan komunitas.",
    tag: "Konten",
  },
  {
    date: "2026-08-02",
    title: "Program Apresiasi Anggota Aktif",
    description:
      "Kegiatan internal untuk mengapresiasi kontribusi anggota komunitas yang aktif berpartisipasi.",
    tag: "Komunitas",
  },
  {
    date: "2026-08-16",
    title: "Evaluasi dan Pembaruan Konten Situs",
    description:
      "Peninjauan berkala terhadap konten dan fitur website guna menjaga kualitas informasi.",
    tag: "Internal",
  },
  {
    date: "2026-09-01",
    title: "Pembukaan Sesi Masukan Triwulan Ketiga",
    description:
      "Kesempatan bagi anggota komunitas untuk menyampaikan masukan terkait pengembangan situs.",
    tag: "Komunitas",
  },
];

export function getUpcomingSchedule(count?: number): ScheduleItem[] {
  const sorted = [...scheduleList].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
  return count ? sorted.slice(0, count) : sorted;
}
