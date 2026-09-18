"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";

const NAV_LINKS = [
  { href: "/shop", label: "Shop All" },
  { href: "/shop?category=Motivation", label: "Motivation" },
  { href: "/shop?category=Discipline", label: "Discipline" },
  { href: "/shop?category=Wealth", label: "Wealth" },
  { href: "/shop?category=Minimal", label: "Minimal" },
];

export default function Header() {
  const { totalItems, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b hairline bg-ink/90 backdrop-blur supports-[backdrop-filter]:bg-ink/70">
      <div className="hidden justify-center gap-2 bg-ink-2 py-2 text-center text-[11px] uppercase tracking-[0.25em] text-cream-dim sm:flex">
        <span>Cash on Delivery across Morocco</span>
        <span className="text-gold">•</span>
        <span>Free delivery over 800 MAD</span>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <button
          className="text-cream sm:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          </svg>
        </button>

        <Link href="/" className="font-display text-2xl font-bold tracking-[0.08em]">
          ADE<span className="gold-gradient-text">LEX</span>
        </Link>

        <nav className="hidden gap-8 text-xs font-medium uppercase tracking-[0.18em] text-cream-dim sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Link
            href="/shop"
            className="hidden text-cream-dim transition-colors hover:text-gold sm:block"
            aria-label="Search"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" strokeLinecap="round" />
            </svg>
          </Link>
          <button
            onClick={openCart}
            className="relative text-cream-dim transition-colors hover:text-gold"
            aria-label="Open cart"
          >
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 6h2l2.4 12.2a2 2 0 0 0 2 1.8h8.4a2 2 0 0 0 2-1.6L22 9H6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="21" r="1" />
              <circle cx="18" cy="21" r="1" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-ink">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="flex flex-col gap-1 border-t hairline bg-ink-2 px-5 py-4 text-sm uppercase tracking-[0.18em] text-cream-dim sm:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="py-2 transition-colors hover:text-gold"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
