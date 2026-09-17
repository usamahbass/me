"use client";

import React from "react";
import Link from "next/link";
import { CoretanMeta } from "@/types";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useI18n } from "@/context/i18n-context";

interface CoretanCardProps {
  post: CoretanMeta;
}

export function CoretanCard({ post }: CoretanCardProps) {
  const { t } = useI18n();

  return (
    <Link
      href={`/coretan/${post.slug}`}
      className="group relative flex flex-col justify-between p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-900/40 hover:bg-zinc-50 dark:hover:bg-zinc-900/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200"
    >
      <div className="space-y-3">
        {/* Meta row: Date + Read time */}
        <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          {post.readingTime && (
            <>
              <span className="text-zinc-300 dark:text-zinc-700">•</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime} {t.coretan.readTime}
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Spoiler text */}
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
          {post.spoiler}
        </p>
      </div>

      {/* Tags row and arrow micro-interaction */}
      <div className="flex items-center justify-between pt-4 mt-2 border-t border-zinc-100 dark:border-zinc-800/60">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
            >
              #{tag}
            </span>
          ))}
        </div>

        <span className="text-zinc-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all">
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
