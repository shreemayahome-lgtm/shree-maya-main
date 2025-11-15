import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ProductCategories() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (location.hash) {
        const target = document.querySelector(location.hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, 600); // 600ms = your PageFade duration

    return () => clearTimeout(timeout);
  }, [location]);
  const BRAND_BROWN = "#9A4D2E";
  return (
    <section
      id="collections"
      className="scroll-mt-[60px] max-w-7xl mx-auto px-6 py-9 md:py-11"
    >
      {/* Section Heading */}
      <h2
        className="font-playfair text-3xl md:text-5xl text-center tracking-wide"
        style={{ color: "#9a4d2e" }}
      >
        Our Collections
      </h2>
      <p className="text-center text-black/60 mt-2 md:text-lg">
        Crafted for Hotels, Guesthouses & Modern Homes
      </p>

      {/* Category Grid */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ✅ BEDSHEETS CARD WITH TRANSITION */}
        <motion.div
          layoutId="bedsheets-hero"
          onClick={() => navigate("/bedsheets")}
          className="relative group h-[260px] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        >
          <img
            src="/bg4.avif"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 "
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-2xl md:text-3xl font-semibold tracking-wide text-center">
            Bedsheets
          </div>
        </motion.div>

        {/* Bath Towels */}
        <motion.div
          layoutId="bathlinen-hero"
          onClick={() => navigate("/bath-linen")}
          className="relative group h-[260px] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        >
          <img
            src="/towel1.avif"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 "
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-2xl md:text-3xl font-semibold tracking-wide text-center">
            Bath Linen
          </div>
        </motion.div>
      </div>
    </section>
  );
}
