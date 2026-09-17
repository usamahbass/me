"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/context/i18n-context";
import { Mail, ArrowUpRight, BookOpen, Layers } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";

export function Hero() {
  const { t } = useI18n();

  const techStack = [
    {
      name: "TypeScript",
      color: "hover:border-blue-500/50 hover:text-blue-500",
    },
    { name: "React", color: "hover:border-cyan-500/50 hover:text-cyan-500" },
    { name: "Next.js", color: "hover:border-zinc-500/50 hover:text-zinc-200" },
    {
      name: "Tailwind CSS",
      color: "hover:border-sky-500/50 hover:text-sky-500",
    },
    {
      name: "Node.js",
      color: "hover:border-emerald-500/50 hover:text-emerald-500",
    },
  ];

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/usamahbass",
      icon: <GithubIcon className="w-4 h-4" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/usamah-basalamah-1b88a71a3",
      icon: <LinkedinIcon className="w-4 h-4" />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/usamahbass",
      icon: <TwitterIcon className="w-4 h-4" />,
    },
    {
      name: "Email",
      href: "mailto:basalamahusamah7@gmail.com",
      icon: <Mail className="w-4 h-4" />,
    },
  ];

  return (
    <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left text column */}
        <div className="flex-1 space-y-5">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {t.hero.status}
          </div>

          {/* Heading without "Ahlan" */}
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans">
              Usamah Basalamah
            </h1>
            <p className="text-sm sm:text-base font-mono font-medium text-emerald-600 dark:text-emerald-400">
              {t.hero.role} • Jakarta, ID
            </p>
          </div>

          {/* Editorial Bio */}
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
            {t.hero.bio1}{" "}
            <span className="text-zinc-900 dark:text-zinc-200 font-medium underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4">
              JavaScript
            </span>
            ,{" "}
            <span className="text-zinc-900 dark:text-zinc-200 font-medium underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4">
              TypeScript
            </span>
            , {t.hero.bio2}{" "}
            <span className="text-zinc-900 dark:text-zinc-200 font-medium underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4">
              React & Next.js
            </span>
            {t.hero.bio3.startsWith(".") ? t.hero.bio3 : ` ${t.hero.bio3}`}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className={`text-xs font-mono px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 transition-colors ${tech.color}`}>
                #{tech.name}
              </span>
            ))}
          </div>

          {/* CTA buttons & Social links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/eksperimen"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-mono font-medium hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-sm">
              <Layers className="w-3.5 h-3.5" />
              {t.hero.exploreWork}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/coretan"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-xs font-mono font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
              <BookOpen className="w-3.5 h-3.5" />
              {t.hero.readNotes}
            </Link>

            <div className="flex items-center gap-1 pl-2 border-l border-zinc-200 dark:border-zinc-800">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="p-2 rounded-md text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right avatar column */}
        <div className="relative group flex-shrink-0 self-center md:self-center">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-emerald-500/20 via-zinc-400/20 to-sky-500/20 opacity-70 blur-sm group-hover:opacity-100 transition-opacity"></div>
          <div className="relative w-48 sm:w-56 md:w-60 aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-900 shadow-md">
            <Image
              src="/me.jpeg"
              alt="Usamah Basalamah"
              fill
              sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 240px"
              priority
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
