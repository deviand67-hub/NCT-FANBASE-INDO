import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Kebijakan privasi NCT Fanbase mengenai data yang dikumpulkan, penggunaan cookie, dan hak pengunjung website.",
};

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-10">
      <header className="mb-8 border-l-4 border-brand-700 pl-4">
        <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Privacy Policy</h1>
        <p className="mt-1 text-sm text-neutral-500">Terakhir diperbarui: 1 Juli 2026</p>
      </header>

      <div className="prose-article max-w-3xl text-neutral-800">
        <p>
          Kebijakan privasi ini menjelaskan bagaimana NCT Fanbase memperlakukan
          informasi yang diperoleh dari pengunjung website ini. Dengan
          mengakses dan menggunakan website ini, Anda dianggap menyetujui
          praktik yang dijelaskan dalam kebijakan ini.
        </p>

        <h2>Informasi yang Dikumpulkan</h2>
        <p>
          Website ini tidak mewajibkan pendaftaran maupun login untuk dapat
          diakses. Informasi pribadi hanya kami terima apabila pengunjung
          secara sukarela mengisi dan mengirimkan formulir pada halaman Contact
          Us, seperti nama, alamat email, dan isi pesan.
        </p>

        <h2>Penggunaan Informasi</h2>
        <p>
          Informasi yang dikirimkan melalui formulir kontak hanya digunakan
          untuk keperluan menanggapi pertanyaan atau masukan yang disampaikan,
          dan tidak akan dibagikan kepada pihak ketiga tanpa persetujuan.
        </p>

        <h2>Cookie dan Teknologi Serupa</h2>
        <p>
          Website ini dapat menggunakan cookie dasar yang bertujuan untuk
          menjaga fungsi teknis situs dan meningkatkan pengalaman pengguna.
          Pengunjung dapat mengatur preferensi cookie melalui pengaturan
          peramban masing-masing.
        </p>

        <h2>Keamanan Data</h2>
        <p>
          Kami berupaya menjaga keamanan setiap informasi yang diberikan oleh
          pengunjung melalui langkah-langkah teknis yang wajar, meskipun tidak
          ada metode transmisi data melalui internet yang dapat dijamin sepenuhnya
          aman.
        </p>

        <h2>Hak Pengunjung</h2>
        <p>
          Pengunjung berhak meminta informasi mengenai data yang telah
          diberikan, serta meminta penghapusan data tersebut dengan
          menghubungi kami melalui halaman Contact Us.
        </p>

        <h2>Perubahan Kebijakan</h2>
        <p>
          Kebijakan privasi ini dapat diperbarui sewaktu-waktu. Perubahan akan
          berlaku efektif sejak dipublikasikan pada halaman ini.
        </p>
      </div>
    </Container>
  );
}
