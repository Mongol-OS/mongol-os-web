import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mongol OS",
  description: "Official website for Mongol OS",
  icons: {
    icon: "/mongol-os-logo.png",
    shortcut: "/mongol-os-logo.png",
    apple: "/mongol-os-logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <footer className="border-t border-zinc-200 bg-white px-6 py-6 text-sm dark:border-zinc-800 dark:bg-black">
          <nav className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-4 text-zinc-600 dark:text-zinc-300">
            <Link href="/code-of-conduct" className="hover:underline">
              Code of Conduct
            </Link>
            <span aria-hidden="true">•</span>
            <Link href="/privacy-statement" className="hover:underline">
              Privacy Statement
            </Link>
            <span aria-hidden="true">•</span>
            <Link href="/terms-of-use" className="hover:underline">
              Terms of Use
            </Link>
            <span aria-hidden="true">•</span>
            <Link href="/sponsors-and-contributors" className="hover:underline">
              Sponsors &amp; Contributors
            </Link>
          </nav>
        </footer>
      </body>
    </html>
  );
}
