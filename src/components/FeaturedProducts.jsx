"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import bedLinen from "../data/bedLinen";
import bathLinen from "../data/bathLinen";
import amenities from "../data/amenities";

const BRAND_BROWN = "#9a4d2e";

// pick any 6 products (3 bed + 3 bath for example)
const allFeatured = [
  // ...bedLinen.slice(0, 3), ...bathLinen.slice(0, 3)
  bedLinen[3],
  bedLinen[9],
  bedLinen[12],
  bathLinen[3],
  amenities[6],
  bathLinen[9],
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.3 },
  }),
};

// adjust this mapping to match your actual routes
const getHref = (p) => {
  if (p.type === "bedsheet") return `/bedsheets#${p.id}`;
  if (p.type === "towel") return `/bath-linen#${p.collection}`;
  if (p.type === "bath") return `/bath-linen#${p.collection}`;
  if (p.type === "packaging") return `/amenities`;
  if (p.type === "hand") return `/bath-linen#${p.collection}`;
  if (p.type === "pillowcase") return `/bath-linen#${p.collection}`;
  if (p.type === "mat") return `/bath-linen#${p.collection}`;
  return `/${p.type || "bedsheets"}#${p.collection}`;
};

const sendMessage = (name) => {
  const whatsappNumber = "919004865002";
  const message = `Hi, I would like to enquire about: ${name}`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export default function FeaturedProducts() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-6 py-10 md:py-14">
      {/* Heading */}
      <div className="text-center">
        <h2
          className="font-heading text-[2.6rem] md:text-6xl tracking-wide"
          style={{ color: BRAND_BROWN }}
        >
          Featured Products
        </h2>
        <p className="font-lato text-black/70 md:mt-2 md:text-lg">
          A quick look at our most-loved pieces
        </p>
      </div>

      {/* Small, even cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allFeatured.map((p, i) => (
          <motion.div
            key={p.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
            onClick={() => navigate(getHref(p))}
            className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full overflow-hidden"
          >
            {/* Image */}
            <div className="h-44 w-full overflow-hidden">
              <img
                src={p.images[0]}
                alt={p.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between flex-1 p-4">
              <div>
                <h3 className="font-playfair text-lg text-black leading-snug">
                  {p.title}
                </h3>

                <p className="font-lato text-xs text-black/60 mt-1">
                  {p.description}
                </p>

                {p.sizes && (
                  <p className="text-[11px] text-black/55 mt-2">
                    Sizes:&nbsp;
                    <span className="font-medium">
                      {p.sizes.join(", ")}
                    </span>
                  </p>
                )}
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-black/60">
                <span className="inline-flex items-center gap-1">
                  View details
                  <FiArrowRight className="w-3 h-3" />
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(sendMessage(p.title), "_blank");
                  }}
                  className="inline-flex items-center gap-1 font-semibold"
                  style={{ color: BRAND_BROWN }}
                >
                  Enquire
                  <FiArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}