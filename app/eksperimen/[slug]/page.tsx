import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllEksperimen, getEksperimenBySlug } from "@/lib/markdown";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { ShareButtons } from "@/components/share-buttons";
import { ArrowLeft, Calendar, Globe, ExternalLink, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/icons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allEksperimen = getAllEksperimen();
  return allEksperimen.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getEksperimenBySlug(slug);

  if (!item) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: item.title,
    description: item.spoiler,
    openGraph: {
      title: `${item.title} — Eksperimen @usamahbass`,
      description: item.spoiler,
      type: "article",
      images: item.thumbnail ? [{ url: item.thumbnail }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.spoiler,
      images: item.thumbnail ? [item.thumbnail] : undefined,
    },
  };
}

export default async function EksperimenDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getEksperimenBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <article className="py-8 max-w-3xl mx-auto space-y-8 animate-fade-in">
      {/* Back button */}
      <div>
        <Link
          href="/eksperimen"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke eksperimen / Back to lab</span>
        </Link>
      </div>

      {/* Banner image */}
      {item.thumbnail && (
        <div className="relative w-full h-56 sm:h-80 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-sm">
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      )}

      {/* Title & Actions */}
      <header className="space-y-4 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <Calendar className="w-3.5 h-3.5" />
          <span>{item.date}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans">
          {item.title}
        </h1>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {item.spoiler}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {item.source_code && (
            <a
              href={item.source_code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-mono font-medium hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-sm"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Kode Sumber</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
            </a>
          )}

          {item.demo && (
            <a
              href={item.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium hover:bg-emerald-500/20 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Live Demo</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
            </a>
          )}
        </div>
      </header>

      {/* Tech Stack Panel */}
      {item.tech && item.tech.length > 0 && (
        <section className="p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-900/40 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            <Code2 className="w-4 h-4 text-emerald-500" />
            <span>Teknologi yang Digunakan</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            {item.tech.map((t, idx) => {
              const [name, logo, url] = t;
              return (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-emerald-500/40 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors group"
                >
                  {logo && (
                    <div className="relative w-5 h-5 flex-shrink-0">
                      <Image
                        src={logo}
                        alt={name}
                        fill
                        sizes="20px"
                        className="object-contain"
                      />
                    </div>
                  )}
                  <span className="text-xs font-mono text-zinc-700 dark:text-zinc-300 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 truncate">
                    {name}
                  </span>
                </a>
              );
            })}
          </div>
        </section>
      )}

      {/* Markdown Body */}
      <div className="py-2">
        <MarkdownRenderer content={item.content} />
      </div>

      {/* Share Section */}
      <ShareButtons title={item.title} path={`/eksperimen/${item.slug}`} />
    </article>
  );
}
