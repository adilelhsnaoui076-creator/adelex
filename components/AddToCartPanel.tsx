"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { FRAMES, SIZES, priceFor } from "@/lib/products";
import { formatMAD } from "@/lib/format";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/types";

export default function AddToCartPanel({ product }: { product: Product }) {
  const [sizeId, setSizeId] = useState(SIZES[1].id);
  const [frameId, setFrameId] = useState(FRAMES[1].id);
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const { addItem, openCart } = useCart();
  const router = useRouter();

  const size = SIZES.find((s) => s.id === sizeId)!;
  const frame = FRAMES.find((f) => f.id === frameId)!;
  const unitPrice = useMemo(() => priceFor(product.basePrice, size, frame), [product.basePrice, size, frame]);

  function handleAddToCart() {
    addItem({
      slug: product.slug,
      name: product.name,
      basePrice: product.basePrice,
      size,
      frame,
      qty,
      theme: product.theme,
      lines: product.lines,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  }

  function handleBuyNow() {
    addItem({
      slug: product.slug,
      name: product.name,
      basePrice: product.basePrice,
      size,
      frame,
      qty,
      theme: product.theme,
      lines: product.lines,
    });
    openCart();
    router.push("/checkout");
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cream-dim">
          Size
        </p>
        <div className="grid grid-cols-2 gap-3">
          {SIZES.map((s) => (
            <button
              key={s.id}
              onClick={() => setSizeId(s.id)}
              className={`rounded-sm border px-4 py-3 text-left text-sm transition-colors ${
                s.id === sizeId
                  ? "border-gold bg-ink-3 text-gold-light"
                  : "hairline text-cream-dim hover:border-gold/60"
              }`}
            >
              <p className="font-medium">{s.dimensions}</p>
              <p className="text-xs text-cream-dim">
                {formatMAD(Math.round(product.basePrice * s.multiplier))}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cream-dim">
          Frame
        </p>
        <div className="flex flex-col gap-3">
          {FRAMES.map((f) => (
            <button
              key={f.id}
              onClick={() => setFrameId(f.id)}
              className={`flex items-center justify-between rounded-sm border px-4 py-3 text-left transition-colors ${
                f.id === frameId
                  ? "border-gold bg-ink-3"
                  : "hairline hover:border-gold/60"
              }`}
            >
              <span>
                <span className={`block text-sm font-medium ${f.id === frameId ? "text-gold-light" : ""}`}>
                  {f.label}
                </span>
                <span className="block text-xs text-cream-dim">{f.description}</span>
              </span>
              <span className="whitespace-nowrap pl-4 text-xs text-cream-dim">
                {f.addOn === 0 ? "Included" : `+${formatMAD(f.addOn)}`}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cream-dim">
          Quantity
        </p>
        <div className="flex w-fit items-center gap-4 rounded-sm border hairline px-4 py-2">
          <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="text-lg text-cream-dim hover:text-gold" aria-label="Decrease quantity">
            −
          </button>
          <span className="w-4 text-center text-sm">{qty}</span>
          <button onClick={() => setQty((q) => q + 1)} className="text-lg text-cream-dim hover:text-gold" aria-label="Increase quantity">
            +
          </button>
        </div>
      </div>

      <div className="border-t hairline pt-6">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-sm text-cream-dim">Total</span>
          <span className="font-display text-2xl font-bold text-gold-light">
            {formatMAD(unitPrice * qty)}
          </span>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={handleAddToCart}
            className="flex-1 rounded-sm border border-gold px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            {justAdded ? "Added ✓" : "Add To Cart"}
          </button>
          <button
            onClick={handleBuyNow}
            className="flex-1 rounded-sm bg-gold px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold-light"
          >
            Buy Now — COD
          </button>
        </div>
      </div>
    </div>
  );
}
