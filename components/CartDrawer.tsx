"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatMAD } from "@/lib/format";
import CanvasArt from "./CanvasArt";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, subtotal } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/70 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md transform flex-col border-l hairline bg-ink-2 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b hairline px-6 py-5">
          <p className="font-display text-lg font-semibold uppercase tracking-[0.12em]">
            Your Cart ({items.length})
          </p>
          <button onClick={closeCart} aria-label="Close cart" className="text-cream-dim hover:text-gold">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-cream-dim">
              <p>Your cart is empty.</p>
              <Link
                href="/shop"
                onClick={closeCart}
                className="text-sm uppercase tracking-[0.15em] text-gold hover:text-gold-light"
              >
                Browse the collection →
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4">
                  <CanvasArt
                    theme={item.theme}
                    lines={item.lines}
                    frame={item.frame.id as never}
                    size="sm"
                    className="w-24 shrink-0"
                  />
                  <div className="flex flex-1 flex-col gap-1">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-cream-dim">
                      {item.size.dimensions} · {item.frame.label}
                    </p>
                    <div className="mt-1 flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded border hairline">
                        <button
                          className="px-2 py-1 text-cream-dim hover:text-gold"
                          onClick={() => updateQty(item.key, item.qty - 1)}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-5 text-center text-sm">{item.qty}</span>
                        <button
                          className="px-2 py-1 text-cream-dim hover:text-gold"
                          onClick={() => updateQty(item.key, item.qty + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm font-semibold text-gold-light">
                        {formatMAD(item.unitPrice * item.qty)}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.key)}
                      className="mt-1 self-start text-xs text-cream-dim underline decoration-dotted hover:text-red-400"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t hairline px-6 py-5">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-cream-dim">Subtotal</span>
              <span className="font-display text-lg font-semibold text-gold-light">
                {formatMAD(subtotal)}
              </span>
            </div>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block w-full rounded-sm bg-gold py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold-light"
            >
              Checkout — Cash on Delivery
            </Link>
            <Link
              href="/cart"
              onClick={closeCart}
              className="mt-3 block text-center text-xs uppercase tracking-[0.15em] text-cream-dim hover:text-gold"
            >
              View full cart
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
