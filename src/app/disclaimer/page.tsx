import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Pernyataan penyangkalan resmi NCT Fanbase mengenai status komunitas, sumber konten, dan batasan afiliasi.",
};

export default function DisclaimerPage() {
  return (
    <Container className="py-10">
      <header className="mb-8 border-l-4 border-brand-700 pl-4">
        <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Disclaimer</h1>
        <p className="mt-1 text-sm text-neutral-500">Terakhir diperbarui: 1 Juli 2026</p>
      </header>

      <div className="prose-article max-w-3xl text-neutral-800">
        <p>
          NCT Fanbase (&ldquo;kami&rdquo;) adalah website komunitas penggemar yang
          dikelola secara independen dan tidak berafiliasi, disponsori, atau
          didukung secara resmi oleh NCT, para anggotanya, SM Entertainment,
          maupun pihak manajemen resmi lainnya.
        </p>

        <h2>Status Situs</h2>
        <p>
          Seluruh nama, gambar, atau referensi yang berkaitan dengan NCT
          digunakan semata-mata untuk tujuan identifikasi dan informasi bagi
          komunitas penggemar, bukan untuk tujuan komersial atas nama pihak
          resmi terkait.
        </p>

        <h2>Akurasi Informasi</h2>
        <p>
          Kami berupaya menyajikan informasi seakurat mungkin, namun tidak
          dapat menjamin bahwa seluruh konten yang ditampilkan selalu bebas
          dari kekeliruan atau selalu mutakhir. Pengunjung disarankan untuk
          melakukan verifikasi lebih lanjut terhadap informasi penting melalui
          sumber resmi.
        </p>

        <h2>Konten Pihak Ketiga</h2>
        <p>
          Website ini tidak menampilkan tautan media sosial maupun konten
          tertanam dari pihak ketiga. Setiap informasi yang disajikan merupakan
          hasil penyusunan tim internal NCT Fanbase.
        </p>

        <h2>Hak Kekayaan Intelektual</h2>
        <p>
          Nama dan merek yang disebutkan dalam situs ini tetap menjadi hak
          milik pemegang hak masing-masing. Kami menghormati hak kekayaan
          intelektual pihak lain dan akan menindaklanjuti setiap keberatan yang
          disampaikan melalui halaman Contact Us.
        </p>

        <h2>Perubahan Disclaimer</h2>
        <p>
          Kami dapat memperbarui isi halaman ini dari waktu ke waktu tanpa
          pemberitahuan sebelumnya. Perubahan akan berlaku efektif sejak
          dipublikasikan pada halaman ini.
        </p>
      </div>
    </Container>
  );
}
