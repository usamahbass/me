import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllCoretan, getCoretanBySlug, getRelatedCoretan } from "@/lib/markdown";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { ShareButtons } from "@/components/share-buttons";
import { CoretanCard } from "@/components/coretan-card";
import { ArrowLeft, Calendar, Clock, Edit3 } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allCoretan = getAllCoretan();
  return allCoretan.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getCoretanBySlug(slug);

  if (!post) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: post.title,
    description: post.spoiler,
    openGraph: {
      title: `${post.title} — @usamahbass`,
      description: post.spoiler,
      type: "article",
      publishedTime: post.date,
      authors: ["Usamah Basalamah"],
      images: post.thumbnail ? [{ url: post.thumbnail }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.spoiler,
      images: post.thumbnail ? [post.thumbnail] : undefined,
    },
  };
}

export default async function CoretanDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getCoretanBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedCoretan(slug, post.tags, 2);

  return (
    <article className="py-8 max-w-3xl mx-auto space-y-8 animate-fade-in">
      {/* Back button */}
      <div>
        <Link
          href="/coretan"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke coretan / Back to notes</span>
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-4 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-6">
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.date}</span>
          </div>

          {post.readingTime && (
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readingTime} menit baca</span>
            </div>
          )}

          {post.edit && (
            <a
              href={post.edit}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Ubah di GitHub</span>
            </a>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-mono px-2.5 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Markdown Body */}
      <div className="py-2">
        <MarkdownRenderer content={post.content} />
      </div>

      {/* Share Section */}
      <ShareButtons title={post.title} path={`/coretan/${post.slug}`} />

      {/* Related Posts */}
      {related.length > 0 && (
        <div className="pt-10 border-t border-zinc-200 dark:border-zinc-800 space-y-4">
          <h2 className="text-lg font-bold font-sans text-zinc-900 dark:text-zinc-100">
            Coretan Terkait / Related Notes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map((item) => (
              <CoretanCard key={item.slug} post={item} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
