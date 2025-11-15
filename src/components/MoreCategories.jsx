"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BRAND_BROWN = "#9a4d2e";

const categories = [
  {
    title: "Bath Mats",
    image: "/bathMat.avif",
    link: "/bath-linen#mats",
    description: "Soft & absorbent for hotel & home bathrooms.",
  },
  {
    title: "Pillows",
    image: "/pillows.avif",
    link: "/bedsheets#pillow-covers",
    description: "Premium fill, perfect support & comfort.",
  },
  {
    title: "Pillow Covers",
    image: "/pillowCovers.avif",
    link: "/bedsheets#pillow-covers",
    description: "Smooth fabrics crafted for durability.",
  },
  {
    title: "Blankets",
    image: "/blankets.avif",
    link: "/bedsheets#duvets",
    description: "Warm, breathable & hotel-grade.",
  },
  {
    title: "Duvets",
    image: "/duvets.avif",
    link: "/bedsheets#duvets",
    description: "Soft-touch duvets curated for hospitality.",
  },
  {
    title: "Comforters",
    image: "/extra.avif",
    link: "/bedsheets#duvets",
    description: "Luxurious and lightweight layering comfort.",
  },
];

export default function MoreCategories() {
  const [active, setActive] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-7">
      <h2
        className="font-playfair text-center text-3xl md:text-5xl tracking-wide"
        style={{ color: BRAND_BROWN }}
      >
        More Comfort Essentials
      </h2>

      <p className="text-center text-black/60 mt-2 md:text-lg">
        Carefully Designed for Hotels, Homes & Hospitality Spaces
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-14">
        {categories.map((cat, index) => (
          <Link
            to={cat.link}
            key={index}
            className="relative group h-[260px] rounded-xl overflow-hidden cursor-pointer block"
          >
            <motion.img
              src={cat.image}
              className="w-full h-full object-cover transition-transform duration-500"
              animate={{
                scale: active === index ? 1.1 : 1,
              }}
            />

            {/* Overlay */}
            <motion.div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition" />

            {/* Title */}
            <motion.h3
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white font-semibold  font-playfair tracking-wide"
              animate={{
                fontSize: active === index ? "2.3rem" : "1.8rem",
                letterSpacing: active === index ? "0.03em" : "0.01em",
              }}
            >
              {cat.title}
            </motion.h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
