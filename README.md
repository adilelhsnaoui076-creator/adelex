# Adelex — Premium Canvas Wall Art

A luxury, black-and-gold e-commerce preview for motivational canvas wall art,
built with Next.js (App Router) and Tailwind CSS. Inspired by ikonick.com,
tailored for the Moroccan market with Cash on Delivery checkout.

## Features

- Hero section with a featured canvas composition and brand stats
- Shop-by-collection and best-seller product grids
- Product detail pages with size and frame selectors and live price updates
- Cart (slide-over drawer + full cart page) persisted to `localStorage`
- Cash on Delivery checkout with Moroccan city selection and order summary
- Order confirmation page with a generated order number
- Fully responsive, black/gold luxury visual design

All "canvas art" pieces are rendered with CSS (gradients + typography), so
the site has no external image dependencies.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Tech Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- React Context for cart state
