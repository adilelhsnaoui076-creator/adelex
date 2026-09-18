"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatMAD } from "@/lib/format";
import CanvasArt from "@/components/CanvasArt";

const SHIPPING_THRESHOLD = 800;
const SHIPPING_FEE = 39;

export default function CartPage() {
  const { items, removeItem, updateQty, subtotal } = useCart();
  const shipping = items.length === 0 ? 0 : subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">Your Cart</h1>

      {items.length === 0 ? (
        <div className="mt-14 flex flex-col items-center gap-4 py-20 text-center">
          <p className="text-cream-dim">Your cart is empty.</p>
          <Link
            href="/shop"
            className="rounded-sm bg-gold px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink hover:bg-gold-light"
          >
            Browse The Collection
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <ul className="flex flex-col gap-6 lg:col-span-2">
            {items.map((item) => (
              <li key={item.key} className="flex gap-5 border-b hairline pb-6">
                <CanvasArt
                  theme={item.theme}
                  lines={item.lines}
                  frame={item.frame.id as never}
                  size="sm"
                  className="w-28 shrink-0 sm:w-36"
                />
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-display text-base font-semibold sm:text-lg">{item.name}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.1em] text-cream-dim sm:text-sm">
                          {item.size.dimensions} · {item.frame.label}
                        </p>
                      </div>
                      <p className="whitespace-nowrap font-medium text-gold-light">
                        {formatMAD(item.unitPrice * item.qty)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3 rounded-sm border hairline">
                      <button
                        className="px-3 py-1.5 text-cream-dim hover:text-gold"
                        onClick={() => updateQty(item.key, item.qty - 1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-5 text-center text-sm">{item.qty}</span>
                      <button
                        className="px-3 py-1.5 text-cream-dim hover:text-gold"
                        onClick={() => updateQty(item.key, item.qty + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.key)}
                      className="text-xs uppercase tracking-[0.12em] text-cream-dim underline decoration-dotted hover:text-red-400"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="h-fit rounded-sm border hairline bg-ink-2 p-6">
            <p className="font-display text-lg font-semibold uppercase tracking-[0.1em]">Order Summary</p>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <div className="flex justify-between text-cream-dim">
                <span>Subtotal</span>
                <span>{formatMAD(subtotal)}</span>
              </div>
              <div className="flex justify-between text-cream-dim">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : formatMAD(shipping)}</span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-gold-light">
                  Add {formatMAD(SHIPPING_THRESHOLD - subtotal)} more for free shipping.
                </p>
              )}
            </div>
            <div className="gold-divider my-5" />
            <div className="flex justify-between font-display text-lg font-bold">
              <span>Total</span>
              <span className="text-gold-light">{formatMAD(total)}</span>
            </div>
            <Link
              href="/checkout"
              className="mt-6 block w-full rounded-sm bg-gold py-3.5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink hover:bg-gold-light"
            >
              Proceed to Checkout
            </Link>
            <p className="mt-3 text-center text-xs text-cream-dim">
              Cash on Delivery available nationwide
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
