import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, PRODUCTS } from "@/lib/products";

export const metadata = {
  title: "Shop All Canvases — Adelex",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; collection?: string }>;
}) {
  const params = await searchParams;
  const category = params.category ?? "All";
  const collection = params.collection;

  const products = PRODUCTS.filter((p) => {
    const categoryMatch = category === "All" || p.category === category;
    const collectionMatch = !collection || p.collection === collection;
    return categoryMatch && collectionMatch;
  });

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          {collection ?? "The Full Collection"}
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold">Shop Canvas Art</h1>
        <p className="mx-auto mt-3 max-w-lg text-sm text-cream-dim">
          Every piece is printed on museum-grade canvas and available in four
          sizes with rolled, noir, gold-leaf or oak framing.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        {CATEGORIES.map((c) => (
          <Link
            key={c}
            href={c === "All" ? "/shop" : `/shop?category=${encodeURIComponent(c)}`}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] transition-colors ${
              category === c && !collection
                ? "border-gold bg-gold text-ink"
                : "hairline text-cream-dim hover:border-gold hover:text-gold"
            }`}
          >
            {c}
          </Link>
        ))}
      </div>

      {collection && (
        <div className="mb-8 flex justify-center">
          <Link href="/shop" className="text-xs uppercase tracking-[0.15em] text-cream-dim hover:text-gold">
            × Clear collection filter
          </Link>
        </div>
      )}

      {products.length === 0 ? (
        <p className="py-20 text-center text-cream-dim">No pieces found in this category yet.</p>
      ) : (
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
