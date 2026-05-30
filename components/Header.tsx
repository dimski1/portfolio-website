"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link
          href="#top"
          className="font-display text-2xl font-bold tracking-tight text-ink hover:text-brand transition-colors"
        >
          dimas<span className="text-brand">.</span>alif
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline px-3 py-2 text-sm italic font-medium text-ink hover:text-brand transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-ink"
        >
          <div className="w-6 h-0.5 bg-current mb-1.5" />
          <div className="w-6 h-0.5 bg-current mb-1.5" />
          <div className="w-6 h-0.5 bg-current" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-cream/95 backdrop-blur-md shadow-md rounded-b-2xl">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 italic font-medium text-ink hover:text-brand transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
