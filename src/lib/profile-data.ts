export interface NctUnit {
  id: string;
  name: string;
  description: string;
  members: string[];
  note?: string;
}

export const nctOverview = {
  agency: "SM Entertainment",
  debutYear: "2016",
  concept:
    "NCT (Neo Culture Technology) adalah grup dengan konsep unit yang dapat terus berkembang tanpa batasan jumlah anggota tetap, terdiri dari beberapa sub-unit yang beraktivitas berdasarkan wilayah maupun proyek musik tertentu.",
  summary:
    "Berikut rangkuman singkat sub-unit dan formasi anggota NCT yang aktif, disusun oleh tim NCT Fanbase berdasarkan informasi publik terbaru.",
  note:
    "Pada April 2026, salah satu anggota, Mark, resmi menyelesaikan kontraknya dan meninggalkan seluruh unit NCT setelah 10 tahun berkarier. Susunan anggota di bawah ini telah menyesuaikan perubahan tersebut.",
};

export const nctUnits: NctUnit[] = [
  {
    id: "nct-127",
    name: "NCT 127",
    description:
      "Unit inti yang aktif di ranah musik utama grup, dipimpin oleh Taeyong yang juga berperan sebagai leader keseluruhan NCT.",
    members: ["Taeyong", "Johnny", "Doyoung", "Jaehyun", "Yuta", "Jungwoo", "Haechan"],
  },
  {
    id: "nct-dream",
    name: "NCT DREAM",
    description:
      "Unit yang awalnya beranggotakan member generasi muda NCT, kini telah menjadi unit tetap dengan basis penggemar yang luas.",
    members: ["Renjun", "Jeno", "Haechan", "Jaemin", "Chenle", "Jisung"],
  },
  {
    id: "wayv",
    name: "WayV",
    description:
      "Unit yang berbasis dan aktif terutama di pasar musik Tiongkok, dikenal dengan identitas musik yang khas di antara sub-unit NCT lainnya.",
    members: ["Kun", "Ten", "WinWin", "Xiaojun", "Hendery", "Yangyang"],
  },
  {
    id: "nct-wish",
    name: "NCT WISH",
    description:
      "Unit generasi baru NCT yang debut pada tahun 2024 dengan basis aktivitas yang kuat di Jepang serta kawasan Asia Tenggara.",
    members: ["Sion", "Yushi", "Riku", "Daeyoung", "Sakuya", "Ryo"],
  },
  {
    id: "nct-dojaejung",
    name: "NCT DoJaeJung",
    description:
      "Unit tetap beranggotakan tiga orang yang debut pada tahun 2023, berfokus pada warna musik yang lebih intim dan dewasa.",
    members: ["Doyoung", "Jaehyun", "Jungwoo"],
  },
  {
    id: "nct-jnjm",
    name: "NCT JNJM",
    description:
      "Unit terbaru NCT yang resmi debut pada Februari 2026 melalui EP Both Sides.",
    members: ["Jeno", "Jaemin"],
  },
  {
    id: "nct-u",
    name: "NCT U",
    description:
      "Bukan unit dengan formasi tetap — NCT U menghadirkan kombinasi anggota yang berbeda-beda pada setiap rilisan lagu maupun proyek khusus grup.",
    members: [],
    note: "Formasi bersifat rotasi dan berubah pada setiap rilisan.",
  },
];
