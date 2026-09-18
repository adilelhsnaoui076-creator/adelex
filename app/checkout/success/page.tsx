"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { formatMAD } from "@/lib/format";
import type { CartItem } from "@/lib/types";

type Order = {
  id: string;
  customer: { fullName: string; phone: string; city: string; address: string; notes: string };
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  placedAt: string;
};

export default function CheckoutSuccessPage() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem("adelex-last-order");
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read of the order placed in the previous page
      if (raw) setOrder(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-5 py-20 text-center sm:px-8">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold text-gold">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h1 className="font-display text-3xl font-bold sm:text-4xl">Order Confirmed</h1>
      <p className="mt-3 text-sm text-cream-dim">
        Thank you{order ? `, ${order.customer.fullName.split(" ")[0]}` : ""}. Your canvas is being
        prepared. Our team will call to confirm delivery, and you&apos;ll pay in cash when it
        arrives.
      </p>

      {order && (
        <div className="mt-10 rounded-sm border hairline bg-ink-2 p-6 text-left">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-cream-dim">Order Number</p>
            <p className="font-display text-lg font-bold text-gold-light">{order.id}</p>
          </div>
          <div className="gold-divider my-4" />
          <div className="grid gap-2 text-sm text-cream-dim">
            <p><span className="text-cream">Deliver to:</span> {order.customer.fullName}</p>
            <p><span className="text-cream">Phone:</span> {order.customer.phone}</p>
            <p><span className="text-cream">Address:</span> {order.customer.address}, {order.customer.city}</p>
            {order.customer.notes && <p><span className="text-cream">Notes:</span> {order.customer.notes}</p>}
          </div>
          <div className="gold-divider my-4" />
          <ul className="flex flex-col gap-2 text-sm text-cream-dim">
            {order.items.map((item) => (
              <li key={item.key} className="flex justify-between">
                <span>
                  {item.name} · {item.size.dimensions} · {item.frame.label} × {item.qty}
                </span>
                <span className="text-cream">{formatMAD(item.unitPrice * item.qty)}</span>
              </li>
            ))}
          </ul>
          <div className="gold-divider my-4" />
          <div className="flex justify-between font-display text-lg font-bold">
            <span>Total (Cash on Delivery)</span>
            <span className="text-gold-light">{formatMAD(order.total)}</span>
          </div>
        </div>
      )}

      <Link
        href="/shop"
        className="mt-10 inline-block rounded-sm bg-gold px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink hover:bg-gold-light"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
