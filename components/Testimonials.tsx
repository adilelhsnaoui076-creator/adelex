const REVIEWS = [
  {
    name: "Youssef B.",
    city: "Casablanca",
    quote:
      "The gold frame looks even better in person. Delivery was fast and I paid cash at the door, exactly as promised.",
  },
  {
    name: "Salma K.",
    city: "Marrakech",
    quote:
      "Ordered 'Discipline Equals Freedom' for my office. The print quality is genuinely gallery level — worth every dirham.",
  },
  {
    name: "Amine T.",
    city: "Rabat",
    quote:
      "Bought three pieces for the gym. Bold, premium, and the oak frame is stunning. Will order again.",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b hairline bg-ink py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Trusted Nationwide</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">What Our Customers Say</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <div key={r.name} className="rounded-sm border hairline bg-ink-2 p-7">
              <div className="mb-4 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-cream-dim">&ldquo;{r.quote}&rdquo;</p>
              <p className="mt-5 text-sm font-semibold text-cream">
                {r.name} <span className="font-normal text-cream-dim">— {r.city}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
