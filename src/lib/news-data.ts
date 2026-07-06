import { NewsItem, NewsCategory } from "./types";

const CATEGORY_IMAGE: Record<NewsCategory, { image: string; imageAlt: string }> = {
  Pengumuman: {
    image: "/images/news/pengumuman.svg",
    imageAlt: "Ilustrasi banner kategori Pengumuman NCT Fanbase",
  },
  Berita: {
    image: "/images/news/berita.svg",
    imageAlt: "Ilustrasi banner kategori Berita NCT Fanbase",
  },
  "Update Jadwal": {
    image: "/images/news/update-jadwal.svg",
    imageAlt: "Ilustrasi banner kategori Update Jadwal NCT Fanbase",
  },
  Komunitas: {
    image: "/images/news/komunitas.svg",
    imageAlt: "Ilustrasi banner kategori Komunitas NCT Fanbase",
  },
};

export const newsList: NewsItem[] = [
  {
    slug: "nct-127-umumkan-comeback-kuartal-3-2026",
    title: "NCT 127 Umumkan Rencana Comeback Full Album di Kuartal III 2026",
    category: "Berita",
    date: "2026-05-06",
    excerpt:
      "SM Entertainment mengonfirmasi NCT 127 akan comeback dengan full album pada kuartal ketiga 2026, comeback pertama grup ini dalam dua tahun terakhir.",
    content: [
      "SM Entertainment mengumumkan bahwa NCT 127 akan melakukan comeback dengan sebuah full album pada kuartal ketiga tahun 2026, menjadi comeback pertama unit ini dalam kurang lebih dua tahun terakhir.",
      "Pengumuman ini datang beberapa bulan setelah salah satu anggota, Mark, menyelesaikan kontraknya dan meninggalkan seluruh unit NCT pada awal April 2026.",
      "Comeback ini juga menjadi bagian dari rangkaian proyek perayaan 10 tahun perjalanan NCT yang akan menghadirkan sejumlah rilisan dan kegiatan sepanjang tahun.",
      "NCT Fanbase akan terus memantau perkembangan comeback ini dan membagikan informasi lebih lanjut begitu detail resmi diumumkan.",
    ],
    ...CATEGORY_IMAGE.Berita,
  },
  {
    slug: "nct-jnjm-umumkan-fan-meeting-tour-duality-singgah-jakarta",
    title: "NCT JNJM Umumkan Fan Meeting Tour \"DUALITY\", Singgah di Jakarta",
    category: "Berita",
    date: "2026-04-07",
    excerpt:
      "Unit baru NCT JNJM yang beranggotakan Jeno dan Jaemin mengumumkan rangkaian fan meeting tour Asia bertajuk DUALITY, dengan salah satu kota persinggahan adalah Jakarta.",
    content: [
      "NCT JNJM, unit yang beranggotakan Jeno dan Jaemin serta resmi debut pada Februari 2026 melalui EP Both Sides, mengumumkan fan meeting tour Asia pertama mereka bertajuk 2026 NCT JNJM FANMEETING TOUR [DUALITY].",
      "Tur ini akan berlangsung di enam kota, mencakup Seoul, Tokyo, Jakarta, Macau, Kaohsiung, hingga Bangkok, dengan jadwal yang tersebar antara Juni hingga Agustus 2026.",
      "Kehadiran Jakarta sebagai salah satu kota persinggahan tentu menjadi kabar yang menggembirakan bagi penggemar NCT di Indonesia.",
      "Informasi lebih detail mengenai jadwal masing-masing kota dapat dilihat pada halaman Schedule NCT Fanbase.",
    ],
    ...CATEGORY_IMAGE.Berita,
  },
  {
    slug: "peluncuran-website-nct-fanbase",
    title: "Peluncuran Resmi Website NCT Fanbase",
    category: "Pengumuman",
    date: "2026-07-01",
    excerpt:
      "NCT Fanbase resmi meluncurkan situs komunitas baru sebagai pusat informasi dan kabar terkini seputar aktivitas NCT bagi para penggemar di Indonesia.",
    content: [
      "NCT Fanbase dengan bangga mengumumkan peluncuran website resmi komunitas yang baru. Situs ini dibangun sebagai pusat informasi tunggal bagi para penggemar untuk mengikuti kabar, jadwal, dan kegiatan komunitas dengan cara yang rapi dan mudah diakses.",
      "Melalui tampilan yang bersih dan sederhana, kami berharap setiap pengunjung dapat menemukan informasi yang dibutuhkan tanpa gangguan, kapan pun dan di perangkat apa pun.",
      "Ke depannya, halaman News akan diperbarui secara berkala dengan informasi seputar kegiatan komunitas, pembaruan jadwal, dan pengumuman penting lainnya.",
    ],
    ...CATEGORY_IMAGE.Pengumuman,
  },
  {
    slug: "panduan-berkomunitas-yang-sehat",
    title: "Panduan Berkomunitas yang Sehat dan Positif",
    category: "Komunitas",
    date: "2026-06-20",
    excerpt:
      "NCT Fanbase mengajak seluruh anggota komunitas untuk saling mendukung dengan sikap yang positif, sopan, dan menghargai perbedaan pendapat.",
    content: [
      "Sebagai komunitas penggemar, kami percaya bahwa lingkungan yang sehat dan saling menghormati adalah kunci utama dalam menjaga kenyamanan bersama.",
      "Kami mengajak seluruh anggota untuk menghindari ujaran kebencian, perundungan, maupun penyebaran informasi yang tidak dapat dipertanggungjawabkan kebenarannya.",
      "Mari bersama-sama menjadikan ruang komunitas ini sebagai tempat yang hangat dan mendukung bagi siapa pun yang ingin berbagi kecintaan terhadap NCT.",
    ],
    ...CATEGORY_IMAGE.Komunitas,
  },
  {
    slug: "pembaruan-halaman-jadwal-komunitas",
    title: "Pembaruan Halaman Schedule Komunitas",
    category: "Update Jadwal",
    date: "2026-06-10",
    excerpt:
      "Halaman Schedule kini menampilkan agenda kegiatan komunitas secara lebih terstruktur agar mudah diikuti oleh seluruh anggota.",
    content: [
      "Kami memperbarui tampilan halaman Schedule agar informasi agenda komunitas dapat disajikan secara lebih ringkas dan terorganisir.",
      "Setiap agenda akan mencantumkan tanggal, judul kegiatan, serta deskripsi singkat sehingga anggota dapat merencanakan partisipasi dengan lebih baik.",
      "Kami akan terus memperbarui halaman ini secara berkala mengikuti perkembangan kegiatan komunitas.",
    ],
    ...CATEGORY_IMAGE["Update Jadwal"],
  },
  {
    slug: "etika-berbagi-informasi-di-komunitas",
    title: "Etika Berbagi Informasi di Lingkungan Komunitas",
    category: "Berita",
    date: "2026-05-28",
    excerpt:
      "Penting bagi setiap anggota untuk memverifikasi sumber informasi sebelum membagikannya kembali di dalam maupun di luar komunitas.",
    content: [
      "Di era informasi yang serba cepat, penting bagi kita untuk lebih berhati-hati dalam menyaring berita maupun kabar yang beredar.",
      "NCT Fanbase menghimbau seluruh anggota untuk mengutamakan sumber informasi yang jelas dan dapat dipertanggungjawabkan.",
      "Dengan begitu, kita dapat bersama-sama menjaga kualitas informasi yang beredar di lingkungan komunitas.",
    ],
    ...CATEGORY_IMAGE.Berita,
  },
  {
    slug: "pembukaan-sesi-masukan-komunitas",
    title: "Pembukaan Sesi Masukan untuk Pengembangan Situs",
    category: "Pengumuman",
    date: "2026-05-15",
    excerpt:
      "NCT Fanbase membuka kesempatan bagi anggota komunitas untuk memberikan masukan terkait pengembangan konten dan fitur situs.",
    content: [
      "Kami senantiasa berupaya menghadirkan pengalaman terbaik bagi seluruh pengunjung website NCT Fanbase.",
      "Untuk itu, kami membuka kesempatan bagi siapa pun untuk menyampaikan masukan melalui halaman Contact Us.",
      "Setiap masukan yang masuk akan menjadi bahan pertimbangan kami dalam pengembangan situs ke depannya.",
    ],
    ...CATEGORY_IMAGE.Pengumuman,
  },
  {
    slug: "rangkuman-kegiatan-komunitas-triwulan",
    title: "Rangkuman Kegiatan Komunitas Triwulan Kedua",
    category: "Berita",
    date: "2026-04-30",
    excerpt:
      "Berikut rangkuman singkat kegiatan yang telah dilaksanakan oleh NCT Fanbase sepanjang triwulan kedua tahun ini.",
    content: [
      "Sepanjang periode ini, komunitas telah mengadakan sejumlah kegiatan internal yang bertujuan mempererat kebersamaan antar anggota.",
      "Kami mengucapkan terima kasih kepada seluruh anggota yang telah berpartisipasi aktif dalam berbagai kegiatan tersebut.",
      "Rangkuman kegiatan selanjutnya akan terus dibagikan melalui halaman News secara berkala.",
    ],
    ...CATEGORY_IMAGE.Berita,
  },
];

export function getAllNews(): NewsItem[] {
  return [...newsList].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsList.find((item) => item.slug === slug);
}

export function getLatestNews(count: number): NewsItem[] {
  return getAllNews().slice(0, count);
}
