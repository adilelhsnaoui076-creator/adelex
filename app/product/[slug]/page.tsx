import { notFound } from "next/navigation";
import Link from "next/link";
import CanvasArt from "@/components/CanvasArt";
import ProductCard from "@/components/ProductCard";
import AddToCartPanel from "@/components/AddToCartPanel";
import { PRODUCTS, getProductBySlug } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return { title: product ? `${product.name} — Adelex` : "Adelex" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = PRODUCTS.filter(
    (p) => p.slug !== product.slug && p.category === product.category
  ).slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
      <nav className="mb-8 text-xs uppercase tracking-[0.15em] text-cream-dim">
        <Link href="/" className="hover:text-gold">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-gold">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-cream">{product.name}</span>
      </nav>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="mx-auto w-full max-w-md md:sticky md:top-28 md:self-start">
          <CanvasArt theme={product.theme} lines={product.lines} frame="gold" size="lg" />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {product.collection}
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{product.name}</h1>
          <p className="mt-4 text-sm leading-relaxed text-cream-dim">{product.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border hairline px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-cream-dim">
              {product.category}
            </span>
            <span className="rounded-full border hairline px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-cream-dim">
              Museum-Grade Canvas
            </span>
            <span className="rounded-full border hairline px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-cream-dim">
              Cash on Delivery
            </span>
          </div>

          <div className="mt-8">
            <AddToCartPanel product={product} />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-24 border-t hairline pt-14">
          <h2 className="mb-8 font-display text-2xl font-bold">You May Also Like</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
