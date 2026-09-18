import Link from "next/link";
import CanvasArt from "./CanvasArt";
import { PRODUCTS } from "@/lib/products";

export default function Hero() {
  const feature = PRODUCTS[0];
  const side1 = PRODUCTS[1];
  const side2 = PRODUCTS[8];

  return (
    <section className="relative overflow-hidden border-b hairline bg-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(207,164,64,0.10),transparent_60%)]"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
        <div className="animate-fade-up">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            The Premium Canvas Atelier
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Art That Speaks
            <br />
            <span className="gold-gradient-text">Before You Do.</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-cream-dim sm:text-base">
            Hand-finished motivational canvas art for the rooms where you
            build, grind, and lead. Museum-grade printing, gold-leaf and oak
            frames, delivered across Morocco with Cash on Delivery.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              href="/shop"
              className="rounded-sm bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold-light"
            >
              Shop The Collection
            </Link>
            <Link
              href="#collections"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-dim transition-colors hover:text-gold"
            >
              Explore Collections →
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t hairline pt-6 text-center sm:text-left">
            <div>
              <p className="font-display text-2xl font-bold text-gold-light">12k+</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-cream-dim">Canvases Delivered</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-gold-light">4.9/5</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-cream-dim">Customer Rating</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-gold-light">COD</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-cream-dim">Pay On Delivery</p>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3">
              <CanvasArt theme={feature.theme} lines={feature.lines} frame="gold" size="lg" />
            </div>
            <div className="col-span-2 flex flex-col gap-4">
              <CanvasArt theme={side1.theme} lines={side1.lines} frame="black" size="sm" />
              <CanvasArt theme={side2.theme} lines={side2.lines} frame="oak" size="sm" />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-sm border hairline bg-ink-2/90 px-5 py-3 backdrop-blur sm:block">
            <p className="text-[11px] uppercase tracking-[0.2em] text-cream-dim">Featured</p>
            <p className="font-display text-sm font-semibold text-gold-light">{feature.name}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
