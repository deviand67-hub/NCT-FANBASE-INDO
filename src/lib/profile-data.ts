export interface FanbaseDivision {
  name: string;
  focus: string;
}

export const fanbaseProfile = {
  founded: "2026",
  base: "Indonesia",
  summary:
    "NCT Fanbase adalah komunitas penggemar independen yang berfokus pada penyebaran informasi, berita, dan jadwal kegiatan seputar NCT bagi penggemar di Indonesia.",
  mission: [
    "Menjadi sumber informasi yang rapi, akurat, dan mudah diakses bagi penggemar NCT di Indonesia.",
    "Membangun lingkungan komunitas yang positif, suportif, dan saling menghargai.",
    "Menghadirkan pengalaman membaca berita yang bersih, cepat, dan nyaman di berbagai perangkat.",
  ],
};

export const fanbaseDivisions: FanbaseDivision[] = [
  {
    name: "Divisi Konten & Berita",
    focus: "Mengumpulkan dan menyusun informasi terkini untuk halaman News.",
  },
  {
    name: "Divisi Jadwal & Dokumentasi",
    focus: "Menyusun dan memperbarui agenda kegiatan komunitas pada halaman Schedule.",
  },
  {
    name: "Divisi Komunitas",
    focus: "Menjaga interaksi dan kenyamanan anggota komunitas secara keseluruhan.",
  },
  {
    name: "Divisi Pengembangan Situs",
    focus: "Mengelola tampilan, performa, dan aksesibilitas website NCT Fanbase.",
  },
];
