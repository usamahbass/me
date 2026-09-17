"use client";

import React, { useState } from "react";
import { useI18n } from "@/context/i18n-context";
import { Link2, Check } from "lucide-react";
import { TwitterIcon, LinkedinIcon, FacebookIcon } from "@/components/icons";

interface ShareButtonsProps {
  title: string;
  path: string;
}

export function ShareButtons({ title, path }: ShareButtonsProps) {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  const getFullUrl = () => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}${path}`;
    }
    return `https://usamahbass.vercel.app${path}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getFullUrl());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareTwitter = () => {
    const url = getFullUrl();
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}&via=usamahbass`,
      "_blank"
    );
  };

  const shareLinkedIn = () => {
    const url = getFullUrl();
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      "_blank"
    );
  };

  const shareFacebook = () => {
    const url = getFullUrl();
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  return (
    <div className="pt-6 pb-2 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
      <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
        {t.coretan.shareTitle}
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={shareTwitter}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/30 text-xs font-mono transition-colors"
        >
          <TwitterIcon className="w-3.5 h-3.5" />
          <span>Twitter / X</span>
        </button>

        <button
          onClick={shareLinkedIn}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/30 text-xs font-mono transition-colors"
        >
          <LinkedinIcon className="w-3.5 h-3.5" />
          <span>LinkedIn</span>
        </button>

        <button
          onClick={shareFacebook}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600/30 text-xs font-mono transition-colors"
        >
          <FacebookIcon className="w-3.5 h-3.5" />
          <span>Facebook</span>
        </button>

        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/30 text-xs font-mono transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-500">{t.coretan.copied}</span>
            </>
          ) : (
            <>
              <Link2 className="w-3.5 h-3.5" />
              <span>{t.coretan.copyLink}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
