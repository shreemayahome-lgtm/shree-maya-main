"use client";

import { MoreCategoryCard } from "./MoreCategoryCard";

const items = [
  {
    id: "duvet-micro",
    type: "Duvet",
    title: "Micro Fibre Quilt",
    description: "Ultra soft & hypoallergenic. All-season. Light weight",
    sizes: ["60×90", "90×100", "108×108"],
    images: ["/quilt-micro-1.webp", "/quilt-micro-2.webp"],
    startingFrom: 1999,
    link: "/bedsheets#duvets",
  },
  {
    id: "duvet-classic",
    type: "Duvet Covers",
    title: "Classic Fill Duvet",
    description: "Plush comfort. Machine washable. Hotel grade",
    sizes: ["Single", "Queen", "King"],
    images: ["/duvets.avif"],
    startingFrom: 1499,
    link: "/bedsheets#duvet-covers",
  },
  {
    id: "pillow-soft",
    type: "Pillow",
    title: "Soft Microfiber Pillow",
    description: "Neck support. Soft yet firm. Everyday comfort",
    sizes: ["16×24", "17×27"],
    images: ["/pillows.avif"],
    startingFrom: 199,
    link: "/bedsheets#pillows",
  },
  {
    id: "towels",
    type: "Towel",
    title: "Hand & Face Towels",
    description: "Quick dry. Skin friendly. Everyday use",
    sizes: ["30×30", "40×60"],
    images: ["/BATH7.jpg"],
    startingFrom: 199,
    link: "/bath-linen#bath",
  },
  {
    id: "bath-mat",
    type: "Mat",
    title: "Anti-Skid Bath Mat",
    description: "Anti-skid base. Soft pile. Fast drying",
    sizes: ["40×60", "50×80"],
    images: ["/bathMat.avif"],
    startingFrom: 159,
    link: "/bath-linen#mat",
  },
  {
    id: "robe-cotton",
    type: "Robe",
    title: "Cotton Bathrobe",
    description: "Plush terry. Cozy wrap. Unisex fit",
    sizes: ["M", "L", "XL"],
    images: ["/robe5.jpg"],
    startingFrom: 999,
    link: "/bath-linen#robe",
  },
];

export default function MoreCategories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10 md:py-12">
      <h2
        className="font-playfair text-center text-3xl md:text-5xl tracking-wide"
        style={{ color: "#9a4d2e" }}
      >
        More Comfort Essentials
      </h2>

      <p className="text-center text-black/60 mt-2 md:text-lg">
        Duvets, pillows, mats & more crafted for hotels and homes
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch justify-items-center">
  {items.map((item) => (
    <MoreCategoryCard key={item.id} item={item} />
  ))}
</div>
    </section>
  );
}