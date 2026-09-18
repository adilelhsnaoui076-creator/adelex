const VALUES = [
  {
    title: "Cash on Delivery",
    desc: "Pay only when your canvas arrives at your door, anywhere in Morocco.",
    icon: (
      <path d="M3 10h18M6 15h3M3 6h18v12H3z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Museum-Grade Print",
    desc: "Fade-resistant pigment ink on premium poly-cotton canvas, built to last.",
    icon: (
      <path d="M4 4h16v16H4zM4 15l4-4 4 4 4-6 4 4" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Hand-Finished Frames",
    desc: "Gold-leaf, noir and oak frames finished and inspected by hand.",
    icon: (
      <path d="M12 2 3 7v10l9 5 9-5V7z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Nationwide Delivery",
    desc: "2–5 business days to Casablanca, Rabat, Marrakech and beyond.",
    icon: (
      <path d="M3 12h18M12 3v18" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function ValueProps() {
  return (
    <section className="border-b hairline bg-ink-2">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 sm:grid-cols-2 md:grid-cols-4">
        {VALUES.map((v) => (
          <div key={v.title} className="flex flex-col items-start gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border hairline text-gold">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {v.icon}
              </svg>
            </span>
            <p className="font-display text-base font-semibold">{v.title}</p>
            <p className="text-sm leading-relaxed text-cream-dim">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
