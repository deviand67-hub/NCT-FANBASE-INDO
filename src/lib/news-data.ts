import { NewsItem, NewsCategory } from "./types";

const CATEGORY_IMAGE: Record<NewsCategory, { image: string; imageAlt: string }> = {
  Pengumuman: {
    image: "/images/news/pengumuman.svg",
    imageAlt: "Banner berita pengumuman resmi NCT",
  },
  Berita: {
    image: "/images/news/berita.svg",
    imageAlt: "Banner berita terbaru seputar NCT",
  },
  "Update Jadwal": {
    image: "/images/news/update-jadwal.svg",
    imageAlt: "Banner update jadwal kegiatan NCT",
  },
  Komunitas: {
    image: "/images/news/komunitas.svg",
    imageAlt: "Banner berita komunitas NCT Fanbase",
  },
};

export const newsList: NewsItem[] = [
  {
    slug: "nct-luncurkan-proyek-10-tahun-nct-2026",
    title: "NCT Luncurkan Proyek 10 Tahun \"NCT 2026\"",
    category: "Pengumuman",
    date: "2026-04-09",
    excerpt:
      "SM Entertainment resmi mengumumkan proyek perayaan 10 tahun NCT bertajuk NCT 2026, mencakup rangkaian album, tur, dan pengalaman fan sepanjang tahun.",
    content: [
      "SM Entertainment resmi mengumumkan proyek besar bertajuk NCT 2026 pada 9 April 2026, sebagai bentuk perayaan satu dekade perjalanan NCT sejak debut pertamanya pada tahun 2016. Proyek ini diusung dengan slogan \"Everything, All At Once, Neo\", yang merangkum perjalanan panjang NCT sekaligus arah baru grup ini ke depan.",
      "## Rangkaian Album dan Tur Setiap Sub-unit",
      "Sebagai bagian dari NCT 2026, setiap sub-unit NCT turut mendapatkan agenda comeback masing-masing. NCT 127 dijadwalkan merilis album baru sekaligus menggelar tur pada kuartal ketiga 2026. NCT DREAM akan menggelar acara meet & greet pada kuartal ketiga, sebelum merilis album baru pada kuartal keempat. WayV turut mendapatkan jatah album dan tur baru pada kuartal ketiga, sementara NCT WISH telah membuka tahun ini dengan album studio penuh pertama mereka, disusul single Jepang dan album lain di paruh kedua tahun.",
      "## Menyambut Kehadiran Unit Baru",
      "Momentum satu dekade ini juga diwarnai dengan hadirnya unit terbaru, NCT JNJM, yang beranggotakan Jeno dan Jaemin serta resmi debut pada Februari 2026 melalui EP Both Sides. Kehadiran unit baru ini menunjukkan bahwa sistem NCT yang terus berkembang masih akan terus menghadirkan formasi dan proyek baru di tahun-tahun mendatang.",
      "## Pop-up Store dan Pameran Khusus",
      "Selain rilisan musik, NCT 2026 juga menghadirkan pop-up store spesial di Seoul yang berlangsung dari 15 hingga 23 Mei 2026, serta pameran khusus yang didedikasikan untuk merayakan perjalanan NCT dan dijadwalkan dibuka pada kuartal ketiga 2026.",
      "Dengan rangkaian agenda yang padat sepanjang tahun, NCT 2026 menjadi salah satu proyek perayaan terbesar yang pernah digelar NCT, dan tentunya menjadi kabar yang dinantikan penggemar di seluruh dunia, termasuk di Indonesia. NCT Fanbase akan terus memantau perkembangan setiap agenda ini dan membagikannya melalui [halaman Schedule NCT Fanbase](/schedule).",
      "Bagi penggemar di Indonesia, momentum ini juga menjadi kesempatan untuk melihat kembali perjalanan panjang NCT dari awal debut hingga menjadi salah satu grup dengan sistem sub-unit paling kompleks di industri musik Korea. Setiap tahapan dalam proyek NCT 2026 diperkirakan akan terus menghadirkan kejutan baru bagi para penggemar setianya.",
    ],
    ...CATEGORY_IMAGE.Pengumuman,
  },
  {
    slug: "nct-jnjm-umumkan-fan-meeting-tour-duality-singgah-jakarta",
    title: "NCT JNJM Umumkan Fan Meeting Tour DUALITY di Jakarta",
    category: "Berita",
    date: "2026-04-07",
    excerpt:
      "NCT JNJM, unit baru Jeno dan Jaemin, mengumumkan fan meeting tour Asia pertama bertajuk DUALITY dengan Jakarta sebagai salah satu kota persinggahan.",
    content: [
      "NCT JNJM, unit yang beranggotakan Jeno dan Jaemin serta resmi debut pada Februari 2026 melalui EP Both Sides, mengumumkan fan meeting tour Asia pertama mereka bertajuk 2026 NCT JNJM FANMEETING TOUR [DUALITY] pada 7 April 2026.",
      "## Enam Kota, Termasuk Jakarta",
      "Tur ini akan berlangsung di enam kota, dimulai dari Seoul pada 13–14 Juni, dilanjutkan Tokyo pada 27–28 Juni, Jakarta pada 4–5 Juli, Macau pada 11–12 Juli, Kaohsiung pada 18 Juli, dan ditutup di Bangkok pada 8 Agustus 2026. Pertunjukan di Seoul sendiri digelar di Jamsil Indoor Stadium dengan total tiga sesi pertunjukan.",
      "Kehadiran Jakarta sebagai salah satu kota persinggahan tentu menjadi kabar yang menggembirakan bagi penggemar NCT di Indonesia, mengingat tidak semua unit NCT rutin menyertakan Indonesia dalam rangkaian tur Asia mereka.",
      "## Jadwal Penjualan Tiket",
      "Untuk pertunjukan di Seoul, presale tiket khusus anggota fan club dibuka pada 14 April pukul 20.00 KST, dilanjutkan dengan penjualan tiket umum pada 15 April pukul 20.00 KST. Jadwal penjualan tiket untuk kota-kota lain, termasuk Jakarta, mengikuti pengumuman dari promotor lokal masing-masing.",
      "## Bagian dari Perayaan 10 Tahun NCT",
      "Debut dan tur NCT JNJM turut menjadi bagian dari rangkaian besar proyek 10 tahun NCT 2026 yang menghadirkan berbagai agenda dari seluruh sub-unit sepanjang tahun. Sebagai unit duo, format NCT JNJM cukup mirip dengan konsep unit tetap beranggotakan sedikit orang seperti NCT DoJaeJung, meski dengan warna musik dan konsep panggung yang berbeda.",
      "Kehadiran unit-unit kecil seperti ini menunjukkan fleksibilitas sistem NCT dalam menghadirkan variasi format grup, mulai dari unit besar seperti NCT 127 hingga unit duo seperti NCT JNJM.",
      "Antusiasme menyambut debut dan tur pertama NCT JNJM juga menjadi salah satu sorotan utama dalam rangkaian perayaan 10 tahun NCT 2026, mengingat unit ini merupakan formasi baru yang diperkenalkan tepat di tahun spesial tersebut bagi seluruh keluarga besar NCT. Kehadiran mereka melengkapi rangkaian comeback dan tur dari sub-unit NCT lain sepanjang tahun ini.",
      "Informasi lengkap mengenai jadwal setiap kota dalam tur ini dapat dilihat pada [halaman Schedule NCT Fanbase](/schedule).",
    ],
    ...CATEGORY_IMAGE.Berita,
  },
  {
    slug: "mark-resmi-tinggalkan-nct-setelah-10-tahun",
    title: "Mark Resmi Tinggalkan NCT Setelah 10 Tahun Berkarier",
    category: "Berita",
    date: "2026-04-08",
    excerpt:
      "Mark resmi mengakhiri kontraknya bersama SM Entertainment pada 8 April 2026, tepat 10 tahun sejak debut pertamanya, dan meninggalkan seluruh unit NCT.",
    content: [
      "SM Entertainment mengonfirmasi bahwa Mark resmi menyelesaikan kontraknya pada 8 April 2026, tepat sepuluh tahun sejak debut pertamanya bersama NCT. Dengan berakhirnya kontrak tersebut, Mark turut meninggalkan seluruh sub-unit NCT yang selama ini ia jalani, termasuk NCT 127 dan NCT DREAM.",
      "## Satu Dekade Bersama NCT",
      "Mark merupakan salah satu anggota generasi awal NCT yang ikut membangun fondasi grup ini sejak diperkenalkan pertama kali pada tahun 2016. Sepanjang kariernya, ia dikenal aktif di NCT U, NCT 127, maupun NCT DREAM, serta turut ambil bagian dalam berbagai comeback dan tur besar NCT selama satu dekade terakhir.",
      "## Susunan Baru NCT 127 dan NCT DREAM",
      "Pasca kepergian Mark, NCT 127 akan melanjutkan aktivitas sebagai grup beranggotakan tujuh orang, yaitu Taeyong, Johnny, Yuta, Doyoung, Jaehyun, Jungwoo, dan Haechan. Sementara itu, NCT DREAM akan tetap beraktivitas sebagai grup beranggotakan enam orang, yakni Renjun, Jeno, Haechan, Jaemin, Chenle, dan Jisung.",
      "NCT Fanbase turut mengucapkan terima kasih atas dedikasi Mark selama satu dekade berkarier bersama NCT, dan mendoakan yang terbaik untuk langkah barunya ke depan. Perubahan formasi ini juga menjadi salah satu latar belakang comeback NCT 127 dan NCT DREAM yang telah diumumkan dalam rangkaian proyek NCT 2026.",
      "## Konteks Umum di Industri Musik Korea",
      "Berakhirnya kontrak setelah tujuh hingga sepuluh tahun merupakan hal yang cukup umum terjadi di industri musik Korea, mengingat masa kontrak standar artis idola umumnya berada pada rentang tersebut. Setiap anggota berhak menentukan langkah kariernya masing-masing setelah masa kontrak berakhir, termasuk memilih untuk melanjutkan atau mengakhiri aktivitas bersama agensi maupun grup asalnya.",
      "Perubahan formasi seperti ini bukan hal baru bagi grup dengan sistem sebesar NCT, yang memang dirancang untuk tetap fleksibel dan terus berkembang mengikuti perjalanan karier masing-masing anggotanya dari waktu ke waktu. Fleksibilitas semacam ini pula yang memungkinkan NCT terus menghadirkan formasi dan proyek baru meski menghadapi perubahan susunan anggota, sebagaimana terlihat dari kemunculan unit-unit baru seperti NCT JNJM tak lama setelah perubahan ini terjadi.",
      "Susunan lengkap dan terbaru seluruh sub-unit NCT dapat dilihat pada [halaman Profil NCT Fanbase](/profil).",
    ],
    ...CATEGORY_IMAGE.Berita,
  },
  {
    slug: "nct-wish-rilis-album-studio-pertama",
    title: "NCT WISH Rilis Album Studio Pertama pada April 2026",
    category: "Berita",
    date: "2026-04-20",
    excerpt:
      "NCT WISH resmi merilis album studio penuh pertama mereka pada 20 April 2026, menjadi pencapaian besar sejak debut unit ini pada tahun 2024.",
    content: [
      "NCT WISH resmi merilis album studio penuh pertama mereka pada 20 April 2026. Perilisan ini menjadi pencapaian penting bagi unit generasi baru NCT yang debut pada tahun 2024 dan selama ini dikenal aktif membangun basis penggemar di Jepang serta kawasan Asia Tenggara.",
      "## Unit Generasi Baru NCT",
      "NCT WISH beranggotakan enam orang, yaitu Sion, Yushi, Riku, Daeyoung, Sakuya, dan Ryo. Sejak debut, unit ini dikenal dengan citra musik yang segar dan lebih ditujukan untuk penggemar generasi baru, berbeda dengan warna musik unit-unit NCT yang lebih senior.",
      "## Bagian dari Rangkaian NCT 2026",
      "Perilisan album ini juga menjadi bagian dari rangkaian besar proyek perayaan 10 tahun NCT bertajuk NCT 2026. Setelah album studio ini, NCT WISH dijadwalkan melanjutkan aktivitas dengan sebuah single berbahasa Jepang serta album lanjutan pada paruh kedua tahun 2026.",
      "## Disambut Meriah di Jakarta",
      "Momentum comeback ini turut diramaikan dengan rangkaian tur konser pertama NCT WISH bertajuk \"INTO THE WISH: Our WISH\", yang salah satu titik persinggahannya adalah Jakarta pada 11 April 2026 di Hall 5, Indonesia Convention Exhibition (ICE BSD City) — menjadi penutup rangkaian tur Asia Tenggara mereka.",
      "Merilis album studio penuh, alih-alih EP atau mini album seperti kebanyakan comeback awal grup rookie, umumnya dianggap sebagai penanda kematangan sebuah unit dalam industri musik Korea. Pencapaian ini menegaskan perkembangan pesat NCT WISH hanya dalam kurun waktu sekitar dua tahun sejak debut mereka pada 2024, sekaligus menandai babak baru dalam perjalanan musik unit generasi terbaru NCT ini.",
      "Dengan basis penggemar yang terus bertumbuh di Jepang maupun Asia Tenggara, NCT WISH diproyeksikan menjadi salah satu unit NCT yang paling aktif sepanjang rangkaian perayaan 10 tahun NCT 2026.",
      "Perkembangan ini juga menegaskan bahwa unit generasi baru seperti NCT WISH mampu mengimbangi ritme aktivitas unit-unit senior lain di dalam sistem NCT, sekaligus membuktikan strategi regenerasi grup ini berjalan dengan baik selama satu dekade terakhir perjalanan NCT secara keseluruhan.",
      "Informasi lengkap mengenai rangkaian tur ini dapat dilihat pada [halaman Schedule NCT Fanbase](/schedule).",
    ],
    ...CATEGORY_IMAGE.Berita,
  },
  {
    slug: "nct-127-umumkan-comeback-kuartal-3-2026",
    title: "NCT 127 Umumkan Comeback Full Album Kuartal III 2026",
    category: "Berita",
    date: "2026-05-06",
    excerpt:
      "SM Entertainment mengonfirmasi NCT 127 akan comeback dengan full album pada kuartal ketiga 2026, comeback pertama grup ini dalam dua tahun terakhir.",
    content: [
      "SM Entertainment mengumumkan bahwa NCT 127 akan melakukan comeback dengan sebuah full album pada kuartal ketiga tahun 2026, menjadi comeback pertama unit ini dalam kurang lebih dua tahun terakhir.",
      "## Salah Satu Unit Inti NCT",
      "NCT 127 merupakan salah satu unit inti dalam sistem NCT yang aktif di ranah musik utama grup sejak dibentuk pada tahun 2016, dan dipimpin oleh Taeyong yang juga berperan sebagai leader keseluruhan NCT. Unit ini dikenal luas lewat berbagai tur dunia dan telah membangun basis penggemar yang besar di berbagai negara.",
      "## Comeback Pertama Sebagai Grup Beranggotakan Tujuh Orang",
      "Pengumuman ini datang beberapa bulan setelah salah satu anggota, Mark, menyelesaikan kontraknya dan meninggalkan seluruh unit NCT pada awal April 2026. Comeback kali ini akan menjadi comeback pertama NCT 127 dengan susunan tujuh anggota, yaitu Taeyong, Johnny, Yuta, Doyoung, Jaehyun, Jungwoo, dan Haechan.",
      "Comeback ini juga menjadi bagian dari rangkaian proyek perayaan 10 tahun perjalanan NCT bertajuk NCT 2026, yang menghadirkan sejumlah rilisan dan kegiatan dari seluruh sub-unit sepanjang tahun.",
      "Sepanjang perjalanannya, NCT 127 telah menggelar sejumlah tur dunia yang menyinggahi berbagai kota di Asia, Amerika, dan Eropa, menjadikannya salah satu unit NCT dengan jangkauan penggemar internasional terluas. Comeback kali ini pun dinantikan sebagai penanda babak baru bagi grup setelah perubahan formasi yang terjadi awal tahun.",
      "Sebagai salah satu unit paling senior dalam sistem NCT, setiap comeback NCT 127 selalu menjadi sorotan besar bagi penggemar, terlebih dengan status comeback ini sebagai bagian resmi dari rangkaian perayaan 10 tahun NCT 2026.",
      "Comeback ini juga akan menjadi tolok ukur penting untuk melihat bagaimana NCT 127 beradaptasi dengan formasi barunya di panggung musik utama, setelah sebelumnya lebih banyak tampil melalui berbagai promosi dan penampilan pendukung. Para penggemar pun menantikan bagaimana ketujuh anggota akan menghadirkan konsep musik dan panggung yang segar pada comeback mendatang.",
      "NCT Fanbase akan terus memantau perkembangan comeback ini dan membagikan informasi lebih lanjut begitu detail resmi diumumkan melalui [halaman Schedule NCT Fanbase](/schedule).",
    ],
    ...CATEGORY_IMAGE.Berita,
  },
  {
    slug: "nct-buka-pop-up-store-nct-2026-seoul",
    title: "NCT Buka Pop-up Store Spesial NCT 2026 di Seoul",
    category: "Update Jadwal",
    date: "2026-05-15",
    excerpt:
      "NCT menggelar pop-up store spesial bertajuk NCT 2026 di Seoul mulai 15 hingga 23 Mei 2026, sebagai bagian dari rangkaian perayaan 10 tahun NCT.",
    content: [
      "Sebagai bagian dari rangkaian proyek perayaan 10 tahun NCT 2026, SM Entertainment menggelar pop-up store spesial bertajuk \"NEO GROUND\" di kawasan Gwangjin-gu, Seoul, yang berlangsung mulai 15 hingga 23 Mei 2026.",
      "## Merayakan Satu Dekade Perjalanan NCT",
      "Pop-up store ini menghadirkan berbagai merchandise dan dekorasi khusus yang merangkum perjalanan sepuluh tahun NCT, mulai dari debut pertama pada 2016 hingga rangkaian sub-unit yang aktif saat ini, termasuk NCT 127, NCT DREAM, WayV, NCT WISH, hingga unit terbaru NCT JNJM. Dekorasi dan tata ruang pop-up store biasanya dirancang khusus untuk mengajak pengunjung menelusuri linimasa perjalanan grup dari masa ke masa.",
      "## Bagian dari Rangkaian Acara Lebih Besar",
      "Selain pop-up store, NCT 2026 juga akan menghadirkan pameran khusus yang dijadwalkan dibuka pada kuartal ketiga 2026 sebagai bagian dari rangkaian perayaan yang lebih besar. Rangkaian acara ini melengkapi agenda comeback dan tur dari berbagai sub-unit yang telah diumumkan sejak awal tahun.",
      "Acara semacam ini umumnya menjadi ruang bagi penggemar untuk merasakan langsung suasana perayaan sekaligus mengoleksi merchandise edisi terbatas yang tidak selalu tersedia secara daring, mulai dari photo zone bertema, area retrospektif perjalanan grup, hingga penjualan merchandise eksklusif.",
      "Bagi penggemar Indonesia yang tidak dapat hadir langsung ke Seoul, informasi dan dokumentasi acara semacam ini biasanya tetap dapat diikuti melalui liputan media K-pop internasional.",
      "Rangkaian pop-up store seperti ini kerap menjadi salah satu momen paling dinantikan dalam kalender perayaan ulang tahun sebuah grup idola, karena menghadirkan pengalaman langsung yang sulit digantikan oleh konten digital semata.",
      "Penyelenggaraan acara seperti ini sekaligus menjadi penanda bahwa rangkaian perayaan 10 tahun NCT 2026 tidak hanya berfokus pada rilisan musik, tetapi juga pada pengalaman langsung bersama penggemar dari berbagai generasi, mulai dari penggemar sejak debut 2016 hingga penggemar unit-unit termuda seperti NCT WISH dan NCT JNJM yang baru bergabung dalam beberapa tahun terakhir.",
      "Untuk mengikuti agenda-agenda lain dalam rangkaian besar NCT 2026 sepanjang tahun ini, kunjungi [halaman Schedule NCT Fanbase](/schedule) yang terus kami perbarui secara berkala.",
    ],
    ...CATEGORY_IMAGE["Update Jadwal"],
  },
  {
    slug: "wayv-siapkan-comeback-album-dan-tur",
    title: "WayV Siapkan Comeback Album dan Tur Kuartal III 2026",
    category: "Berita",
    date: "2026-04-11",
    excerpt:
      "WayV dikabarkan akan comeback dengan album baru sekaligus menggelar tur pada kuartal ketiga 2026, sebagai bagian dari proyek ulang tahun NCT 2026.",
    content: [
      "WayV, unit NCT yang berbasis dan aktif terutama di pasar musik Tiongkok, dikabarkan akan melakukan comeback dengan album baru sekaligus menggelar tur pada kuartal ketiga tahun 2026 mendatang.",
      "## Identitas Musik yang Khas",
      "Sejak debut pada tahun 2019, WayV dikenal memiliki identitas musik yang khas di antara sub-unit NCT lainnya, dengan mayoritas materi berbahasa Mandarin dan aktivitas promosi yang terfokus di kawasan Tiongkok dan sekitarnya. Unit ini beranggotakan enam orang, yaitu Kun, Ten, WinWin, Xiaojun, Hendery, dan Yangyang.",
      "## Bagian dari Proyek NCT 2026",
      "Rencana comeback ini menjadi bagian dari rangkaian besar proyek perayaan 10 tahun NCT bertajuk NCT 2026, yang turut menghadirkan agenda comeback dari NCT 127, NCT DREAM, dan NCT WISH sepanjang tahun penuh ini. Dengan turut ambil bagian dalam rangkaian perayaan ini, WayV menegaskan kembali posisinya sebagai salah satu unit penting dalam ekosistem NCT secara keseluruhan.",
      "## Menjembatani Pasar Musik Berbahasa Mandarin",
      "Keberadaan WayV memungkinkan NCT menjangkau basis penggemar berbahasa Mandarin secara lebih spesifik, sekaligus memperkuat citra NCT sebagai grup dengan jangkauan pasar musik yang benar-benar lintas negara. Pendekatan berbasis wilayah semacam ini menjadi salah satu ciri khas sistem NCT yang membedakannya dari kebanyakan grup idola lain, sekaligus memperlihatkan strategi ekspansi pasar yang matang sejak awal pembentukan grup ini pada 2016 hingga saat ini di berbagai penjuru dunia.",
      "Comeback WayV kali ini juga dinantikan sebagai salah satu agenda penting dalam rangkaian NCT 2026, mengingat unit ini belum lama menggelar aktivitas comeback besar.",
      "Dengan basis penggemar yang loyal di kawasan Tiongkok dan Asia Tenggara, comeback WayV berpotensi menghadirkan salah satu momen paling dinantikan dalam rangkaian besar NCT 2026 tahun ini, terlebih dengan identitas musik khas yang selama ini menjadi ciri utama unit ini sejak pertama kali diperkenalkan kepada publik pada tahun 2019 silam.",
      "Susunan lengkap anggota WayV dapat dilihat pada [halaman Profil NCT Fanbase](/profil), sementara jadwal lengkap comeback ini akan segera diperbarui pada halaman Schedule begitu tanggal resmi diumumkan oleh pihak agensi kepada publik secara luas.",
    ],
    ...CATEGORY_IMAGE.Berita,
  },
  {
    slug: "nct-dream-siapkan-meet-and-greet-album-baru",
    title: "NCT DREAM Siapkan Meet & Greet dan Album Baru 2026",
    category: "Berita",
    date: "2026-04-12",
    excerpt:
      "NCT DREAM dijadwalkan menggelar meet & greet pada kuartal ketiga, dilanjutkan perilisan album baru pada kuartal keempat 2026.",
    content: [
      "NCT DREAM dijadwalkan menggelar acara meet & greet untuk para penggemar pada kuartal ketiga 2026, sebelum melanjutkan dengan perilisan album baru pada kuartal keempat tahun yang sama.",
      "## Dari Unit Sementara Menjadi Unit Tetap",
      "NCT DREAM awalnya diperkenalkan sebagai unit yang beranggotakan member generasi muda NCT dengan konsep usia terbatas, namun seiring waktu berkembang menjadi salah satu unit tetap dengan basis penggemar terbesar di antara seluruh sub-unit NCT.",
      "## Comeback Pertama Sebagai Grup Beranggotakan Enam Orang",
      "Agenda ini akan menjadi comeback pertama NCT DREAM dengan susunan enam anggota, yaitu Renjun, Jeno, Haechan, Jaemin, Chenle, dan Jisung, menyusul kepergian Mark dari seluruh unit NCT pada April 2026.",
      "Rangkaian agenda NCT DREAM ini turut menjadi bagian dari proyek besar perayaan 10 tahun NCT bertajuk NCT 2026 yang berlangsung sepanjang tahun, melengkapi comeback dari NCT 127, WayV, dan NCT WISH yang juga telah diumumkan.",
      "## Rekam Jejak sebagai Unit Terlaris",
      "Sepanjang beberapa tahun terakhir, NCT DREAM tercatat sebagai salah satu sub-unit NCT dengan penjualan album terlaris, sekaligus rutin menggelar tur dunia dengan skala penonton yang besar. Acara meet & greet berskala lebih intim seperti yang akan digelar pada kuartal ketiga ini biasanya menghadirkan interaksi yang lebih dekat antara anggota dan penggemar dibandingkan format konser besar pada umumnya.",
      "Kombinasi acara meet & greet dan comeback album pada tahun yang sama menjadikan 2026 sebagai salah satu tahun paling aktif bagi NCT DREAM, sejalan dengan rangkaian besar perayaan 10 tahun NCT 2026 yang turut melibatkan hampir seluruh sub-unit.",
      "Format acara meet & greet yang mendahului perilisan album juga kerap digunakan sebagai cara membangun kedekatan dengan penggemar sebelum promosi comeback besar dimulai secara penuh, sekaligus menjadi ajang pemanasan sebelum rangkaian promosi album baru bergulir pada kuartal keempat mendatang.",
      "Format seperti ini juga memberi ruang bagi NCT DREAM untuk berinteraksi lebih personal dengan penggemar sebelum kembali disibukkan dengan jadwal promosi comeback yang biasanya cukup padat dan menyita banyak waktu.",
      "Pantau terus perkembangan jadwal lengkap NCT DREAM melalui [halaman Schedule NCT Fanbase](/schedule).",
    ],
    ...CATEGORY_IMAGE.Berita,
  },
  {
    slug: "yuta-bintangi-lagu-tema-kamen-rider-zets",
    title: "Yuta NCT 127 Bintangi Lagu Tema Kamen Rider Zets",
    category: "Berita",
    date: "2026-06-28",
    excerpt:
      "Yuta dari NCT 127 membawakan LAY BACK, lagu tema serial Kamen Rider Zets, sekaligus tampil di sejumlah program televisi Jepang pertengahan 2026.",
    content: [
      "Di tengah kesibukan NCT 127 menyiapkan comeback grup, Yuta turut aktif menjalani kegiatan solo di Jepang. Ia membawakan \"LAY BACK\", lagu tema untuk chapter baru serial tokusatsu Kamen Rider Zets di TV Asahi.",
      "## Aktivitas Solo di Tanah Kelahiran",
      "Sebagai satu-satunya anggota NCT 127 yang berasal dari Jepang, Yuta memang cukup rutin menjalani aktivitas solo di negara asalnya, mulai dari kemunculan di program variety hingga proyek musik seperti tie-in lagu tema untuk serial televisi populer.",
      "## Pameran Panel dan Kampanye Khusus",
      "Sebagai bentuk perayaan perilisan lagu tersebut, digelar pameran panel serta kampanye pemberian hadiah khusus bagi penggemar yang mengikuti proyek ini.",
      "Selain itu, Yuta juga dijadwalkan tampil di sejumlah program televisi Jepang, termasuk segmen di ABEMA's Naokiman's Urban Legend Wide Show Season 3, serta program Chinatsu Wakatsuki's Annoying Psychological Test di TV Asahi.",
      "Aktivitas solo seperti ini menjadi salah satu cara anggota NCT tetap dekat dengan penggemar meski unit utama sedang mempersiapkan comeback besar dalam rangkaian NCT 2026.",
      "## Kegiatan Solo yang Menopang Popularitas Grup",
      "Di industri musik Korea, aktivitas solo anggota di sela masa persiapan comeback grup cukup lazim dilakukan, terutama bagi anggota yang memiliki keterampilan bahasa maupun jaringan industri di negara tertentu. Bagi Yuta, keterlibatannya dalam berbagai proyek televisi Jepang turut menjaga visibilitas NCT 127 secara keseluruhan menjelang comeback besar mereka pada kuartal ketiga 2026.",
      "Rangkaian aktivitas solo semacam ini juga memperlihatkan bagaimana anggota NCT 127 tetap produktif secara individu di berbagai belahan dunia, sekaligus membangun antisipasi lebih besar menjelang comeback penuh grup mendatang.",
      "Bagi penggemar internasional, aktivitas solo seperti ini juga menjadi kesempatan untuk mengenal lebih jauh sisi lain dari masing-masing anggota di luar panggung NCT 127, sekaligus memperlihatkan keluwesan Yuta dalam berbagai bidang hiburan di Jepang, mulai dari musik, akting lewat tie-in serial televisi, hingga program variety show populer.",
      "Ikuti terus kabar member lainnya, termasuk seluruh anggota NCT 127 yang lain, melalui [halaman Profil NCT Fanbase](/profil) yang senantiasa diperbarui secara berkala oleh tim redaksi kami.",
    ],
    ...CATEGORY_IMAGE.Berita,
  },
  {
    slug: "nct-wish-rilis-single-jepang-yo-i-don-boy-meets-girl",
    title: "NCT WISH Rilis Single Jepang \"YO-I-DON! / BOY MEETS GIRL\"",
    category: "Update Jadwal",
    date: "2026-07-02",
    excerpt:
      "NCT WISH akan merilis double A-side single Jepang YO-I-DON! / BOY MEETS GIRL pada 15 Juli 2026, lengkap dengan acara jumpa penggemar khusus.",
    content: [
      "NCT WISH dijadwalkan merilis double A-side single berbahasa Jepang bertajuk \"YO-I-DON! / BOY MEETS GIRL\" pada 15 Juli 2026, melanjutkan rangkaian aktivitas mereka di Jepang sepanjang tahun ini.",
      "## Kelanjutan dari Album Studio Pertama",
      "Single ini menjadi rilisan lanjutan setelah NCT WISH meluncurkan album studio penuh pertama mereka pada 20 April 2026 sebagai bagian dari rangkaian besar NCT 2026. Konsistensi jadwal rilis ini menunjukkan aktivitas NCT WISH yang cukup padat di pasar musik Jepang sepanjang tahun.",
      "## Acara Jumpa Penggemar Khusus",
      "Sebagai bagian dari perilisan ini, digelar acara jumpa penggemar bagi yang melakukan pre-order melalui mu-mo SHOP, lengkap dengan bonus pembelian khusus berupa kesempatan bertemu langsung dengan para anggota.",
      "## Tampil di Mezamashi WANGAN Fest",
      "Selain single ini, NCT WISH juga telah dikonfirmasi akan tampil dalam acara \"Mezamashi WANGAN Fest ~A powerful summer collaboration with popular variety shows~\" pada 14 Agustus 2026, melanjutkan rangkaian aktivitas mereka di Jepang sepanjang musim panas.",
      "## Jepang Sebagai Salah Satu Basis Utama",
      "Padatnya jadwal rilis dan penampilan di Jepang menegaskan posisi negara tersebut sebagai salah satu pasar utama bagi NCT WISH, sejalan dengan basis pembentukan unit ini yang memang dirancang untuk aktif di kawasan tersebut sejak awal debut pada 2024. Bagi penggemar di Indonesia, single berbahasa Jepang seperti ini umumnya tetap dapat dinikmati melalui berbagai platform streaming musik digital.",
      "Dengan jadwal rilis yang berdekatan antara album studio, single Jepang, hingga penampilan di berbagai acara musim panas, tahun 2026 menjadi salah satu periode paling produktif bagi NCT WISH sejak debut mereka.",
      "Konsistensi aktivitas semacam ini juga membantu NCT WISH memperluas pengenalan nama mereka di pasar musik Jepang yang dikenal cukup kompetitif, sekaligus memperkuat posisi mereka sebagai salah satu unit NCT dengan pertumbuhan tercepat. Popularitas yang terus meningkat ini turut membuka peluang lebih besar bagi NCT WISH untuk memperluas jangkauan tur mereka ke lebih banyak negara pada masa mendatang, termasuk kemungkinan kembali menyambangi Asia Tenggara.",
      "Jadwal lengkap seluruh aktivitas NCT WISH, termasuk rangkaian tur konser mereka, dapat dilihat pada [halaman Schedule NCT Fanbase](/schedule).",
    ],
    ...CATEGORY_IMAGE["Update Jadwal"],
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
