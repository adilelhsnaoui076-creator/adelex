import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatMAD } from "@/lib/format";
import CanvasArt from "./CanvasArt";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col"
    >
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-500 group-hover:scale-[1.03]">
          <CanvasArt theme={product.theme} lines={product.lines} frame="rolled" size="md" />
        </div>
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-sm bg-gold px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink">
            {product.badge}
          </span>
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-2">
        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-cream-dim">{product.category}</p>
          <p className="mt-1 font-display text-base font-semibold leading-snug transition-colors group-hover:text-gold-light">
            {product.name}
          </p>
        </div>
        <p className="whitespace-nowrap pt-4 text-sm font-medium text-gold">
          from {formatMAD(product.basePrice)}
        </p>
      </div>
    </Link>
  );
}
