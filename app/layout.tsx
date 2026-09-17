import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://usamahbass.vercel.app"),
  title: {
    default: "Usamah Basalamah — Frontend Engineer",
    template: "%s | Usamah Basalamah",
  },
  description:
    "Frontend Engineer specializing in JavaScript, TypeScript, React, and modern UI systems.",
  authors: [{ name: "Usamah Basalamah", url: "https://github.com/usamahbass" }],
  creator: "Usamah Basalamah",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://usamahbass.vercel.app",
    title: "Usamah Basalamah — Frontend Engineer",
    description:
      "Frontend Engineer specializing in JavaScript, TypeScript, React, and modern UI systems.",
    siteName: "Usamah Basalamah",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usamah Basalamah — Frontend Engineer",
    description:
      "Frontend Engineer specializing in JavaScript, TypeScript, React, and modern UI systems.",
    creator: "@usamahbass",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-500 bg-grid-pattern">
        <Providers>
          <div className="flex-1 flex flex-col pt-4">
            <Navbar />
            <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6">
              {children}
            </main>
            <Footer />
            <BackToTop />
          </div>
        </Providers>
      </body>
    </html>
  );
}
