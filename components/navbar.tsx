"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useI18n } from "@/context/i18n-context";
import { Sun, Moon, Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { locale, toggleLocale, t } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/coretan", label: t.nav.coretan },
    { href: "/eksperimen", label: t.nav.eksperimen },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-4 z-50 w-full max-w-4xl mx-auto px-4 sm:px-6">
      <nav className="flex items-center justify-between px-4 py-2.5 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-950/75 backdrop-blur-md shadow-sm transition-all">
        {/* Logo / Terminal badge */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-mono font-medium text-zinc-900 dark:text-zinc-100 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-zinc-400 dark:text-zinc-500 group-hover:text-emerald-500 transition-colors">
            ~/
          </span>
          <span className="font-semibold tracking-tight">afterpaces</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3.5 py-1.5 text-xs font-mono font-medium rounded-full transition-colors",
                  active
                    ? "text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800/80 shadow-xs"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/60"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side controls: Language switcher + Theme toggle + Mobile button */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <button
            onClick={toggleLocale}
            className="flex items-center text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            title="Toggle Language / Ganti Bahasa"
            aria-label="Toggle language"
          >
            <span className={cn(locale === "id" ? "text-emerald-500 dark:text-emerald-400 font-bold" : "opacity-40")}>
              ID
            </span>
            <span className="mx-1 text-zinc-300 dark:text-zinc-700">/</span>
            <span className={cn(locale === "en" ? "text-emerald-500 dark:text-emerald-400 font-bold" : "opacity-40")}>
              EN
            </span>
          </button>

          {/* Theme Switcher */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-3.5 h-3.5 text-amber-400 animate-fade-in" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-zinc-700 animate-fade-in" />
              )}
            </button>
          )}

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-xl flex flex-col gap-1.5 animate-fade-in">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-2 text-sm font-mono rounded-lg transition-colors",
                  active
                    ? "text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
