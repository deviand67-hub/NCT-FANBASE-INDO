import { ScheduleItem } from "./types";

export const scheduleList: ScheduleItem[] = [
  {
    date: "2026-04-11",
    title: "NCT WISH 1st Concert Tour \"INTO THE WISH: Our WISH\" — Jakarta",
    description:
      "NCT WISH menggelar konser di Hall 5, Indonesia Convention Exhibition (ICE BSD City), sebagai salah satu titik pemberhentian Asia Tenggara dalam rangkaian tur konser pertama mereka.",
    tag: "Konser",
    source: "ICE Indonesia, Loket, VOI",
  },
  {
    date: "2026-06-13",
    displayDate: "13–14 Juni 2026",
    title: "NCT JNJM Fanmeeting Tour \"DUALITY\" — Seoul",
    description:
      "Rangkaian pembuka fan meeting tour Asia pertama NCT JNJM (Jeno & Jaemin) digelar di Jamsil Indoor Stadium, Seoul.",
    tag: "Fan Meeting",
    source: "Soompi, Weverse",
  },
  {
    date: "2026-06-27",
    displayDate: "27–28 Juni 2026",
    title: "NCT JNJM Fanmeeting Tour \"DUALITY\" — Tokyo",
    description: "Kelanjutan fan meeting tour \"DUALITY\" NCT JNJM di Tokyo, Jepang.",
    tag: "Fan Meeting",
    source: "Soompi, Weverse",
  },
  {
    date: "2026-07-04",
    displayDate: "4–5 Juli 2026",
    title: "NCT JNJM Fanmeeting Tour \"DUALITY\" — Jakarta",
    description:
      "NCT JNJM menyapa penggemar Indonesia dalam rangkaian fan meeting tour \"DUALITY\", menjadikan Jakarta salah satu dari enam kota yang dikunjungi di Asia.",
    tag: "Fan Meeting",
    source: "allkpop, Soompi",
  },
  {
    date: "2026-07-11",
    displayDate: "11–12 Juli 2026",
    title: "NCT JNJM Fanmeeting Tour \"DUALITY\" — Macau",
    description: "Lanjutan fan meeting tour \"DUALITY\" NCT JNJM di Macau.",
    tag: "Fan Meeting",
    source: "Cotai Ticketing",
  },
  {
    date: "2026-07-18",
    title: "NCT JNJM Fanmeeting Tour \"DUALITY\" — Kaohsiung",
    description: "Lanjutan fan meeting tour \"DUALITY\" NCT JNJM di Kaohsiung, Taiwan.",
    tag: "Fan Meeting",
    source: "Soompi",
  },
  {
    date: "2026-08-08",
    title: "NCT JNJM Fanmeeting Tour \"DUALITY\" — Bangkok",
    description:
      "Penutup rangkaian fan meeting tour \"DUALITY\" NCT JNJM di Bangkok, Thailand.",
    tag: "Fan Meeting",
    source: "Soompi",
  },
  {
    date: "2026-08-01",
    displayDate: "Kuartal III 2026",
    title: "NCT 127 — Comeback Full Album",
    description:
      "SM Entertainment mengonfirmasi NCT 127 akan comeback dengan full album pertama dalam dua tahun terakhir, sekaligus menjadi bagian dari proyek perayaan 10 tahun NCT. Tanggal rilis pasti belum diumumkan resmi.",
    tag: "Comeback",
    source: "Korea Times, Tribune",
  },
  {
    date: "2026-08-15",
    displayDate: "Kuartal III–IV 2026",
    title: "NCT DREAM — Meet & Greet dan Album Baru",
    description:
      "NCT DREAM dijadwalkan menggelar acara meet & greet pada kuartal ketiga, dilanjutkan dengan perilisan album baru pada kuartal keempat 2026.",
    tag: "Comeback",
    source: "Korea Times",
  },
  {
    date: "2026-09-01",
    displayDate: "Sepanjang 2026",
    title: "Proyek 10 Tahun \"NCT 2026\"",
    description:
      "SM Entertainment merayakan satu dekade perjalanan NCT melalui proyek \"NCT 2026\" dengan slogan \"Everything, All At Once, Neo\", mencakup rangkaian album, tur, dan pop-up store sepanjang tahun.",
    tag: "Anniversary",
    source: "Korea Times",
  },
];

export function getUpcomingSchedule(count?: number): ScheduleItem[] {
  const sorted = [...scheduleList].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
  return count ? sorted.slice(0, count) : sorted;
}

export function getNextSchedule(count: number): ScheduleItem[] {
  const now = Date.now();
  return getUpcomingSchedule().filter((item) => new Date(item.date).getTime() >= now).slice(0, count);
}
