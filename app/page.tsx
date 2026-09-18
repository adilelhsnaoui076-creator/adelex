import Link from "next/link";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import CollectionsStrip from "@/components/CollectionsStrip";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import { PRODUCTS } from "@/lib/products";

export default function Home() {
  const bestSellers = PRODUCTS.slice(0, 8);

  return (
    <>
      <Hero />
      <ValueProps />
      <CollectionsStrip />

      <section className="border-b hairline bg-ink py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Best Sellers</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Most Loved Pieces</h2>
            </div>
            <Link href="/shop" className="hidden text-xs uppercase tracking-[0.2em] text-cream-dim hover:text-gold sm:block">
              Shop All →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
            {bestSellers.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center sm:hidden">
            <Link
              href="/shop"
              className="inline-block rounded-sm border hairline px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold hover:bg-ink-2"
            >
              Shop All
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <Newsletter />
    </>
  );
}
