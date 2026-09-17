"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { EksperimenMeta } from "@/types";
import { Globe, Calendar, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { useI18n } from "@/context/i18n-context";

interface EksperimenCardProps {
  item: EksperimenMeta;
}

export function EksperimenCard({ item }: EksperimenCardProps) {
  const { t } = useI18n();

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-900/40 hover:bg-zinc-50 dark:hover:bg-zinc-900/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200">
      {/* Thumbnail */}
      {item.thumbnail && (
        <Link href={`/eksperimen/${item.slug}`} className="block relative w-full h-44 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
        </Link>
      )}

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>{item.date}</span>
          </div>

          <Link href={`/eksperimen/${item.slug}`}>
            <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
              {item.title}
            </h3>
          </Link>

          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
            {item.spoiler}
          </p>
        </div>

        {/* Action Buttons & Tech Logos / Links */}
        <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {item.source_code && (
              <a
                href={item.source_code}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                title={t.eksperimen.sourceCode}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}

            {item.demo && (
              <a
                href={item.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                title={t.eksperimen.liveDemo}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Demo</span>
              </a>
            )}
          </div>

          <Link
            href={`/eksperimen/${item.slug}`}
            className="text-xs font-mono text-zinc-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 flex items-center gap-1 transition-colors"
          >
            <span>Detail</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
