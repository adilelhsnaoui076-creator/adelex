"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { formatMAD } from "@/lib/format";
import CanvasArt from "@/components/CanvasArt";

const MOROCCAN_CITIES = [
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Fes",
  "Tangier",
  "Agadir",
  "Meknes",
  "Oujda",
  "Kenitra",
  "Tetouan",
  "Safi",
  "El Jadida",
  "Nador",
  "Beni Mellal",
  "Khouribga",
  "Other City",
];

const SHIPPING_THRESHOLD = 800;
const SHIPPING_FEE = 39;

type FormState = {
  fullName: string;
  phone: string;
  city: string;
  address: string;
  notes: string;
};

const initialForm: FormState = {
  fullName: "",
  phone: "",
  city: MOROCCAN_CITIES[0],
  address: "",
  notes: "",
};

function generateOrderId() {
  return `ADX-${Math.floor(100000 + Math.random() * 900000)}`;
}

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const shipping = items.length === 0 ? 0 : subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.fullName.trim().length < 3) next.fullName = "Enter your full name.";
    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length < 9) next.phone = "Enter a valid Moroccan phone number.";
    if (!form.city) next.city = "Select your city.";
    if (form.address.trim().length < 8) next.address = "Enter a complete delivery address.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (items.length === 0) return;
    if (!validate()) return;

    setSubmitting(true);
    const order = {
      id: generateOrderId(),
      customer: form,
      items,
      subtotal,
      shipping,
      total,
      placedAt: new Date().toISOString(),
    };
    try {
      window.sessionStorage.setItem("adelex-last-order", JSON.stringify(order));
    } catch {
      // ignore storage errors
    }
    clearCart();
    router.push("/checkout/success");
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-5 py-24 text-center sm:px-8">
        <h1 className="font-display text-3xl font-bold">Your cart is empty</h1>
        <p className="mt-3 text-cream-dim">Add a canvas to your cart before checking out.</p>
        <Link
          href="/shop"
          className="mt-8 inline-block rounded-sm bg-gold px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink hover:bg-gold-light"
        >
          Browse The Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">Checkout</h1>
      <p className="mt-2 text-sm text-cream-dim">
        Pay nothing now. Confirm your order and pay in cash when it arrives.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 grid gap-10 lg:grid-cols-3">
        <div className="flex flex-col gap-8 lg:col-span-2">
          <fieldset className="rounded-sm border hairline bg-ink-2 p-6">
            <legend className="px-2 font-display text-base font-semibold uppercase tracking-[0.1em]">
              Delivery Details
            </legend>

            <div className="mt-4 flex flex-col gap-5">
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-cream-dim">
                  Full Name
                </label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  placeholder="e.g. Yassine El Amrani"
                  className="w-full rounded-sm border hairline bg-ink px-4 py-3 text-sm text-cream placeholder:text-cream-dim/50 focus:border-gold focus:outline-none"
                />
                {errors.fullName && <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-cream-dim">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+212 6XX XXX XXX"
                  className="w-full rounded-sm border hairline bg-ink px-4 py-3 text-sm text-cream placeholder:text-cream-dim/50 focus:border-gold focus:outline-none"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-cream-dim">
                  City
                </label>
                <select
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                  className="w-full rounded-sm border hairline bg-ink px-4 py-3 text-sm text-cream focus:border-gold focus:outline-none"
                >
                  {MOROCCAN_CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                {errors.city && <p className="mt-1 text-xs text-red-400">{errors.city}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-cream-dim">
                  Full Address
                </label>
                <textarea
                  value={form.address}
                  onChange={(e) => update("address", e.target.value)}
                  placeholder="Street, building, apartment, neighborhood"
                  rows={3}
                  className="w-full rounded-sm border hairline bg-ink px-4 py-3 text-sm text-cream placeholder:text-cream-dim/50 focus:border-gold focus:outline-none"
                />
                {errors.address && <p className="mt-1 text-xs text-red-400">{errors.address}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-cream-dim">
                  Delivery Notes (Optional)
                </label>
                <textarea
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  placeholder="Landmark, preferred delivery time, etc."
                  rows={2}
                  className="w-full rounded-sm border hairline bg-ink px-4 py-3 text-sm text-cream placeholder:text-cream-dim/50 focus:border-gold focus:outline-none"
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="rounded-sm border border-gold/40 bg-ink-2 p-6">
            <legend className="px-2 font-display text-base font-semibold uppercase tracking-[0.1em] text-gold">
              Payment Method
            </legend>
            <label className="mt-2 flex cursor-pointer items-start gap-3 rounded-sm border border-gold bg-ink-3 p-4">
              <input type="radio" checked readOnly className="mt-1 accent-[#cfa440]" />
              <span>
                <span className="block text-sm font-semibold text-gold-light">Cash on Delivery (COD)</span>
                <span className="mt-1 block text-xs text-cream-dim">
                  Pay in cash directly to the delivery agent when your canvas arrives. No online
                  payment required.
                </span>
              </span>
            </label>
          </fieldset>
        </div>

        <div className="h-fit rounded-sm border hairline bg-ink-2 p-6">
          <p className="font-display text-lg font-semibold uppercase tracking-[0.1em]">Order Summary</p>
          <ul className="mt-5 flex flex-col gap-4">
            {items.map((item) => (
              <li key={item.key} className="flex gap-3">
                <CanvasArt
                  theme={item.theme}
                  lines={item.lines}
                  frame={item.frame.id as never}
                  size="sm"
                  className="w-16 shrink-0"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-cream-dim">
                    {item.size.dimensions} · {item.frame.label} · Qty {item.qty}
                  </p>
                </div>
                <p className="whitespace-nowrap text-sm text-gold-light">
                  {formatMAD(item.unitPrice * item.qty)}
                </p>
              </li>
            ))}
          </ul>
          <div className="gold-divider my-5" />
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex justify-between text-cream-dim">
              <span>Subtotal</span>
              <span>{formatMAD(subtotal)}</span>
            </div>
            <div className="flex justify-between text-cream-dim">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : formatMAD(shipping)}</span>
            </div>
          </div>
          <div className="gold-divider my-5" />
          <div className="flex justify-between font-display text-lg font-bold">
            <span>Total</span>
            <span className="text-gold-light">{formatMAD(total)}</span>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="mt-6 block w-full rounded-sm bg-gold py-3.5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold-light disabled:opacity-60"
          >
            {submitting ? "Placing Order..." : "Place Order — Pay on Delivery"}
          </button>
          <p className="mt-3 text-center text-xs text-cream-dim">
            By placing this order you agree to pay in cash upon delivery.
          </p>
        </div>
      </form>
    </div>
  );
}
