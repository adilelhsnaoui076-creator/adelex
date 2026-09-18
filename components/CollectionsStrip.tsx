import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import CanvasArt from "./CanvasArt";

const COLLECTIONS = Array.from(new Set(PRODUCTS.map((p) => p.collection))).map(
  (name) => {
    const product = PRODUCTS.find((p) => p.collection === name)!;
    const count = PRODUCTS.filter((p) => p.collection === name).length;
    return { name, product, count };
  }
);

export default function CollectionsStrip() {
  return (
    <section id="collections" className="border-b hairline bg-ink py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Curated</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Shop by Collection</h2>
          </div>
          <Link href="/shop" className="hidden text-xs uppercase tracking-[0.2em] text-cream-dim hover:text-gold sm:block">
            View All →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {COLLECTIONS.map(({ name, product, count }) => (
            <Link
              key={name}
              href={`/shop?collection=${encodeURIComponent(name)}`}
              className="group relative block overflow-hidden"
            >
              <div className="transition-transform duration-500 group-hover:scale-[1.03]">
                <CanvasArt theme={product.theme} lines={product.lines} frame="black" size="md" />
              </div>
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-6">
                <p className="font-display text-xl font-semibold text-cream">{name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-gold-light">{count} Pieces</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
