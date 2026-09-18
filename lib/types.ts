export type ArtTheme = {
  /** tailwind gradient classes for the canvas background */
  gradient: string;
  /** accent text color class */
  accent: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  collection: string;
  lines: string[];
  description: string;
  basePrice: number;
  theme: ArtTheme;
  badge?: string;
};

export type SizeOption = {
  id: string;
  label: string;
  dimensions: string;
  multiplier: number;
};

export type FrameOption = {
  id: string;
  label: string;
  description: string;
  addOn: number;
};

export type CartItem = {
  key: string;
  slug: string;
  name: string;
  size: SizeOption;
  frame: FrameOption;
  qty: number;
  unitPrice: number;
  theme: ArtTheme;
  lines: string[];
};
