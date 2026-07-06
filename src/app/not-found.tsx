import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center gap-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">Error 404</p>
      <h1 className="text-3xl font-black text-neutral-900">Halaman Tidak Ditemukan</h1>
      <p className="max-w-md text-sm text-neutral-600">
        Halaman yang Anda cari tidak tersedia atau telah dipindahkan. Silakan
        kembali ke halaman utama NCT Fanbase.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-sm bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-800"
      >
        Kembali ke Home
      </Link>
    </Container>
  );
}
