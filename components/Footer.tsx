import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t hairline bg-ink-2">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-bold tracking-[0.08em]">
            ADE<span className="gold-gradient-text">LEX</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-dim">
            Premium motivational canvas wall art, hand-finished and delivered
            across Morocco. Pay with confidence — Cash on Delivery, always.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Shop</p>
          <ul className="mt-4 space-y-2 text-sm text-cream-dim">
            <li><Link href="/shop" className="hover:text-gold">All Canvases</Link></li>
            <li><Link href="/shop?category=Motivation" className="hover:text-gold">Motivation</Link></li>
            <li><Link href="/shop?category=Wealth" className="hover:text-gold">Wealth</Link></li>
            <li><Link href="/shop?category=Fitness" className="hover:text-gold">Fitness</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Support</p>
          <ul className="mt-4 space-y-2 text-sm text-cream-dim">
            <li><Link href="/cart" className="hover:text-gold">Your Cart</Link></li>
            <li><Link href="/checkout" className="hover:text-gold">Checkout</Link></li>
            <li><a href="tel:+212600000000" className="hover:text-gold">+212 6 00 00 00 00</a></li>
            <li><a href="mailto:hello@adelex.ma" className="hover:text-gold">hello@adelex.ma</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Delivery</p>
          <ul className="mt-4 space-y-2 text-sm text-cream-dim">
            <li>Cash on Delivery, nationwide</li>
            <li>Casablanca, Rabat, Marrakech &amp; more</li>
            <li>Free delivery over 800 MAD</li>
            <li>Ships in 2–5 business days</li>
          </ul>
        </div>
      </div>
      <div className="gold-divider" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-cream-dim sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} Adelex. All rights reserved.</p>
        <p>Made for those who build. Proudly serving Morocco.</p>
      </div>
    </footer>
  );
}
