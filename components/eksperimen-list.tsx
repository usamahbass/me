"use client";

import React, { useState, useMemo } from "react";
import { EksperimenMeta } from "@/types";
import { EksperimenCard } from "@/components/eksperimen-card";
import { useI18n } from "@/context/i18n-context";
import { Search, ArrowUpDown, X, Layers } from "lucide-react";

interface EksperimenListProps {
  initialEksperimen: EksperimenMeta[];
}

export function EksperimenList({ initialEksperimen }: EksperimenListProps) {
  const { t } = useI18n();
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest" | "az" | "za">("newest");

  const filteredEksperimen = useMemo(() => {
    return initialEksperimen
      .filter((item) => {
        const matchesSearch =
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.spoiler.toLowerCase().includes(search.toLowerCase());

        return matchesSearch;
      })
      .sort((a, b) => {
        if (sortOrder === "az") {
          return a.title.localeCompare(b.title);
        }
        if (sortOrder === "za") {
          return b.title.localeCompare(a.title);
        }
        if (sortOrder === "oldest") {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        }
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  }, [initialEksperimen, search, sortOrder]);

  return (
    <div className="py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          <span>~/eksperimen</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-sans">
          {t.eksperimen.title}
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
          {t.eksperimen.desc}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.eksperimen.searchPlaceholder}
            className="w-full pl-10 pr-9 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 text-xs sm:text-sm font-mono focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="relative inline-flex items-center">
          <ArrowUpDown className="w-3.5 h-3.5 absolute left-3 text-zinc-400 pointer-events-none" />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as any)}
            aria-label={t.coretan.sortBy}
            className="pl-8 pr-8 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-xs font-mono appearance-none focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"
          >
            <option value="newest">{t.coretan.sortNewest}</option>
            <option value="oldest">{t.coretan.sortOldest}</option>
            <option value="az">{t.coretan.sortAZ}</option>
            <option value="za">{t.coretan.sortZA}</option>
          </select>
        </div>
      </div>

      {/* Grid of Eksperimen */}
      {filteredEksperimen.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredEksperimen.map((item) => (
            <EksperimenCard key={item.slug} item={item} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center border border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 space-y-2">
          <p className="text-base font-semibold text-zinc-800 dark:text-zinc-200 font-sans">
            {t.eksperimen.emptyTitle}
          </p>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            {t.eksperimen.emptyDesc}
          </p>
        </div>
      )}
    </div>
  );
}
