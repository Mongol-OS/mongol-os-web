"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/code-of-conduct", label: "Code of Conduct" },
  { href: "/privacy-statement", label: "Privacy Statement" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/sponsors-and-contributors", label: "Sponsors & Contributors" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (href: string) =>
    `rounded-md px-3 py-2 transition-colors ${
      pathname === href
        ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
        : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
    }`;

  return (
    <header className="border-b border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <Link href="/" className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
          Mongol OS
        </Link>
        <button
          type="button"
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-700 md:hidden dark:border-zinc-700 dark:text-zinc-200"
          aria-expanded={open}
          aria-controls="site-nav-menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
        <nav className="hidden gap-2 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      {open ? (
        <nav id="site-nav-menu" className="mx-auto mt-4 flex w-full max-w-5xl flex-col gap-2 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass(item.href)}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
