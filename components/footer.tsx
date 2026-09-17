"use client";

import React from "react";
import { useI18n } from "@/context/i18n-context";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";

export function Footer() {
  const { t } = useI18n();

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
    <footer className="mt-20 border-t border-zinc-200/80 dark:border-zinc-800/80 py-10 text-xs font-mono text-zinc-500 dark:text-zinc-400">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Built with info */}
        <div className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
          <span>{t.footer.craftedWith}</span>
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-800 dark:text-zinc-200 hover:text-emerald-500 underline underline-offset-2"
          >
            Next.js
          </a>
          <span>&</span>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-800 dark:text-zinc-200 hover:text-emerald-500 underline underline-offset-2"
          >
            Tailwind CSS
          </a>
          <span>•</span>
          <a
            href="https://github.com/usamahbass/me"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-800 dark:text-zinc-200 hover:text-emerald-500 underline underline-offset-2"
          >
            GitHub
          </a>
        </div>

        {/* Right: Social icons & copyright */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="p-1.5 rounded text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <span className="text-zinc-400 dark:text-zinc-600">|</span>
          <span>© {new Date().getFullYear()} Usamah Basalamah</span>
        </div>
      </div>
    </footer>
  );
}
