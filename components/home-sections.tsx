"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/context/i18n-context";
import { CoretanMeta, EksperimenMeta } from "@/types";
import { CoretanCard } from "@/components/coretan-card";
import { EksperimenCard } from "@/components/eksperimen-card";
import { ArrowRight, BookOpen, Layers } from "lucide-react";

interface HomeSectionsProps {
  coretan: CoretanMeta[];
  eksperimen: EksperimenMeta[];
}

export function HomeSections({ coretan, eksperimen }: HomeSectionsProps) {
  const { t } = useI18n();

  return (
    <div className="space-y-16 py-10">
      {/* Coretan Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>~/coretan</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-sans mt-1">
              {t.home.latestCoretan}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
              {t.home.latestCoretanDesc}
            </p>
          </div>

          <Link
            href="/coretan"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors group self-start sm:self-auto"
          >
            <span>{t.home.viewAll}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {coretan.map((post) => (
            <CoretanCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Eksperimen Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>~/eksperimen</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-sans mt-1">
              {t.home.latestEksperimen}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
              {t.home.latestEksperimenDesc}
            </p>
          </div>

          <Link
            href="/eksperimen"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors group self-start sm:self-auto"
          >
            <span>{t.home.viewAll}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {eksperimen.map((item) => (
            <EksperimenCard key={item.slug} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
