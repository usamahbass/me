import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 text-center space-y-6 max-w-md mx-auto">
      <div className="inline-flex p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-400">
        <FileQuestion className="w-8 h-8 text-emerald-500" />
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-sans tracking-tight text-zinc-900 dark:text-zinc-100">
          404 — Halaman Tidak Ditemukan
        </h1>
        <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400">
          Halaman yang Anda cari mungkin telah dipindahkan atau tautan yang dimasukkan salah.
        </p>
      </div>

      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-mono font-medium hover:bg-zinc-800 dark:hover:bg-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>
    </div>
  );
}
