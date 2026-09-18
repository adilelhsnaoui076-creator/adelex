import type { Product, SizeOption, FrameOption } from "./types";

export const SIZES: SizeOption[] = [
  { id: "40x60", label: "40 × 60 cm", dimensions: "40 × 60 cm", multiplier: 1 },
  { id: "60x90", label: "60 × 90 cm", dimensions: "60 × 90 cm", multiplier: 1.55 },
  { id: "80x120", label: "80 × 120 cm", dimensions: "80 × 120 cm", multiplier: 2.3 },
  { id: "100x150", label: "100 × 150 cm", dimensions: "100 × 150 cm", multiplier: 3.2 },
];

export const FRAMES: FrameOption[] = [
  {
    id: "rolled",
    label: "Rolled Canvas",
    description: "Museum-grade canvas, shipped rolled. Frame it your way.",
    addOn: 0,
  },
  {
    id: "black",
    label: "Noir Frame",
    description: "Matte black solid wood frame, gallery finish.",
    addOn: 249,
  },
  {
    id: "gold",
    label: "Gold Leaf Frame",
    description: "Hand-finished gold-leaf frame, signature Adelex look.",
    addOn: 399,
  },
  {
    id: "oak",
    label: "Natural Oak Frame",
    description: "Light oak wood frame for a warm, refined finish.",
    addOn: 299,
  },
];

export const PRODUCTS: Product[] = [
  {
    slug: "empire-mindset",
    name: "Empire Mindset",
    category: "Motivation",
    collection: "The Grind Collection",
    lines: ["BUILD", "AN", "EMPIRE"],
    description:
      "A bold declaration for the room where decisions get made. Deep onyx tones with a molten gold statement — a daily reminder that empires are built one disciplined day at a time.",
    basePrice: 449,
    theme: { gradient: "from-[#151515] via-[#1c1a12] to-[#2a2110]", accent: "text-gold-light" },
    badge: "Bestseller",
  },
  {
    slug: "discipline-equals-freedom",
    name: "Discipline Equals Freedom",
    category: "Discipline",
    collection: "The Grind Collection",
    lines: ["DISCIPLINE", "EQUALS", "FREEDOM"],
    description:
      "The mantra that separates the disciplined from the distracted. Sharp typography over a charcoal-to-black gradient, finished with a hairline gold rule.",
    basePrice: 429,
    theme: { gradient: "from-[#0d0d0d] via-[#171717] to-[#0a0a0a]", accent: "text-gold" },
    badge: "Bestseller",
  },
  {
    slug: "self-made",
    name: "Self Made",
    category: "Wealth",
    collection: "The Legacy Collection",
    lines: ["SELF", "MADE"],
    description:
      "For the ones who built it from nothing. Rich espresso-black backdrop with a brushed gold finish that catches the light from every angle.",
    basePrice: 469,
    theme: { gradient: "from-[#1a1208] via-[#120d05] to-[#000000]", accent: "text-gold-light" },
  },
  {
    slug: "no-excuses",
    name: "No Excuses",
    category: "Fitness",
    collection: "The Grind Collection",
    lines: ["NO", "EXCUSES"],
    description:
      "Straight to the point. A high-contrast piece built for the home gym, the office, or anywhere you need zero tolerance for excuses.",
    basePrice: 399,
    theme: { gradient: "from-[#111111] via-[#1a1414] to-[#2a0f0f]", accent: "text-gold" },
  },
  {
    slug: "rise-and-grind",
    name: "Rise & Grind",
    category: "Motivation",
    collection: "The Grind Collection",
    lines: ["RISE", "&", "GRIND"],
    description:
      "The first thing you see before the sun comes up. A warm gold gradient fading into black — energy for the early hours.",
    basePrice: 419,
    theme: { gradient: "from-[#20180a] via-[#150f05] to-[#0a0a0a]", accent: "text-gold-light" },
    badge: "New",
  },
  {
    slug: "built-not-born",
    name: "Built Not Born",
    category: "Fitness",
    collection: "The Legacy Collection",
    lines: ["BUILT", "NOT", "BORN"],
    description:
      "Nothing about greatness is accidental. Industrial charcoal tones with precision gold lettering — a piece that respects the work.",
    basePrice: 439,
    theme: { gradient: "from-[#151515] via-[#0f0f0f] to-[#000000]", accent: "text-gold" },
  },
  {
    slug: "think-different",
    name: "Think Different",
    category: "Minimal",
    collection: "The Minimalist Collection",
    lines: ["THINK", "DIFFERENT"],
    description:
      "Clean, quiet, confident. A minimal line composition on a soft graphite gradient — for spaces that say more with less.",
    basePrice: 389,
    theme: { gradient: "from-[#1c1c1c] via-[#131313] to-[#050505]", accent: "text-cream" },
  },
  {
    slug: "own-your-throne",
    name: "Own Your Throne",
    category: "Wealth",
    collection: "The Legacy Collection",
    lines: ["OWN", "YOUR", "THRONE"],
    description:
      "Regal, commanding, unapologetic. Deep black fading into a warm gold glow, framed for the office of someone who leads.",
    basePrice: 479,
    theme: { gradient: "from-[#171010] via-[#130d05] to-[#000000]", accent: "text-gold-light" },
    badge: "New",
  },
  {
    slug: "consistency-is-key",
    name: "Consistency Is Key",
    category: "Discipline",
    collection: "The Minimalist Collection",
    lines: ["CONSISTENCY", "IS KEY"],
    description:
      "The quiet engine behind every result worth having. Understated typography on a soft charcoal fade with a gold underline.",
    basePrice: 409,
    theme: { gradient: "from-[#141414] via-[#191919] to-[#0a0a0a]", accent: "text-gold" },
  },
  {
    slug: "dream-in-gold",
    name: "Dream in Gold",
    category: "Motivation",
    collection: "The Legacy Collection",
    lines: ["DREAM", "IN GOLD"],
    description:
      "An ode to ambition. Radiant gold gradient sweeping across a black canvas — the statement piece for a room built on vision.",
    basePrice: 459,
    theme: { gradient: "from-[#2a2110] via-[#171008] to-[#000000]", accent: "text-gold-light" },
  },
  {
    slug: "stay-hungry",
    name: "Stay Hungry",
    category: "Motivation",
    collection: "The Grind Collection",
    lines: ["STAY", "HUNGRY"],
    description:
      "Never satisfied, always improving. Bold slab type on a deep ink gradient — for the ones who refuse to plateau.",
    basePrice: 399,
    theme: { gradient: "from-[#101010] via-[#161616] to-[#000000]", accent: "text-gold" },
  },
  {
    slug: "less-but-better",
    name: "Less But Better",
    category: "Minimal",
    collection: "The Minimalist Collection",
    lines: ["LESS", "BUT BETTER"],
    description:
      "A quiet manifesto for intentional living. Soft graphite tones and refined type, designed to disappear into elevated spaces.",
    basePrice: 379,
    theme: { gradient: "from-[#181818] via-[#101010] to-[#050505]", accent: "text-cream" },
  },
];

export const CATEGORIES = [
  "All",
  ...Array.from(new Set(PRODUCTS.map((p) => p.category))),
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function priceFor(basePrice: number, size: SizeOption, frame: FrameOption) {
  return Math.round(basePrice * size.multiplier + frame.addOn);
}
