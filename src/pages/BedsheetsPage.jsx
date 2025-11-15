import { motion } from "framer-motion";
import { useEffect } from "react";
import PageFade from "../components/PageFade";
import ProductCard2 from "../components/ProductCard2";
import { useLocation } from "react-router-dom";

export default function BedsheetsPage() {
  const location = useLocation();

  useEffect(() => {
    // Always start at top first
    window.scrollTo(0, 0);

    // Allow the fade animation to complete before scrolling to a section
    const timeout = setTimeout(() => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      document.body.style.overflow = "auto";
    }, 600); // match your PageFade animation duration

    return () => {
      document.body.style.overflow = "auto";
      clearTimeout(timeout);
    };
  }, [location]);

  const bedsheetProducts = [
    {
      title: "Single Bed Sheet (Without Pillow)",
      description: "300 TC Polycotton • 60x90 inches",
      price: 190,
      image: "/bg.avif",
    },
    {
      title: "Single Bed Sheet (With Pillow)",
      description: "300 TC Polycotton • 60x90 inches",
      price: 250,
      image: "/bg4.avif",
    },
    {
      title: "Single Bed Sheet (Without Pillow)",
      description: "300 TC Cotton • 60x90 inches",
      price: 245,
      image: "/herobg2.avif",
    },
    {
      title: "Single Bed Sheet (With Pillow)",
      description: "300 TC Cotton • 60x90 inches",
      price: 320,
      image: "/bg4.avif",
    },

    {
      title: "Double Bed Sheet (Queen)",
      description: "300 TC Polycotton • 90x100 inches",
      price: 400,
      image: "/extra.avif",
    },
    {
      title: "Double Bed Sheet With Pillow (Queen)",
      description: "300 TC Polycotton • 90x100 inches",
      price: 520,
      image: "/extra.avif",
    },
    {
      title: "Double Bed Sheet (Queen)",
      description: "300 TC Cotton • 90x100 inches",
      price: 530,
      image: "/bg4.avif",
    },
    {
      title: "Double Bed Sheet (Queen)",
      description: "300 TC Cotton • 90x100 inches",
      price: 685,
      image: "/bg.avif",
    },
    {
      title: "Double Bed Sheet (King)",
      description: "300 TC Polycotton • 108x108 inches",
      price: 480,
      image: "/herobg.avif",
    },
    {
      title: "Double Bed Sheet With Pillow (King)",
      description: "300 TC Polycotton • 108x108 inches",
      price: 600,
      image: "/herobg.avif",
    },
    {
      title: "Double Bed Sheet (King)",
      description: "300 TC Cotton • 108x108 inches",
      price: 700,
      image: "/bg4.avif",
    },
    {
      title: "Double Bed Sheet With Pillow (King)",
      description: "300 TC Cotton • 108x108 inches",
      price: 875,
      image: "/duvets.avif",
    },
    {
      title: "Duvet Cover (Single)",
      description: "300 TC Polycotton • 60x90 inches",
      price: 410,
      image: "/duvets.avif",
    },
    {
      title: "Duvet Cover (Single)",
      description: "300 TC Cotton • 60x90 inches",
      price: 735,
      image: "/duvets.avif",
    },
    {
      title: "Duvet Cover (Double)",
      description: "300 TC Polycotton • 90x100 inches",
      price: 770,
      image: "/duvets.avif",
    },
    {
      title: "Duvet Cover (Double)",
      description: "300 TC Cotton • 90x100 inches",
      price: 1190,
      image: "/duvets.avif",
    },
    {
      title: "Pillow Cover (Single)",
      description: "300 TC Polycotton • 60x90 inches",
      price: 410,
      image: "/pillowCovers.avif",
    },
    {
      title: "Pillow Cover (Single)",
      description: "300 TC Cotton • 60x90 inches",
      price: 735,
      image: "/pillowCovers.avif",
    },
    {
      title: "Pillow Cover (Double)",
      description: "300 TC Polycotton • 90x100 inches",
      price: 770,
      image: "/pillows.avif",
    },
    {
      title: "Pillow Cover (Double)",
      description: "300 TC Cotton • 90x100 inches",
      price: 1190,
      image: "/pillows.avif",
    },
  ];

  return (
    <PageFade>
      <motion.div
        layoutId="bedsheets-hero"
        className="relative w-full h-[55vh] md:h-[65vh] rounded-b-3xl overflow-hidden"
      >
        <img src="/bg4.avif" className="w-full h-full object-cover" />
        <div className="absolute bottom-10 left-10 text-white text-5xl font-semibold">
          Bedsheets Collection
        </div>
      </motion.div>

      {/* PRODUCT GRID */}
      <div className="px-6 py-16 overflow-visible">
        <h2 className="font-popins text-center text-4xl font-semibold text-[#6E3D2E]">
          Available Bedsheets
        </h2>

        {/* SINGLE SECTION */}
        <h3
          id="single-bedsheets"
          className="scroll-mt-[90px] font-semibold mt-16 font-playfair text-2xl md:text-3xl tracking-wide"
          style={{ color: "#9a4d2e" }}
        >
          Single Bedsheets
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {bedsheetProducts.slice(0, 4).map((p, i) => (
            <ProductCard2 key={i} {...p} />
          ))}
        </div>

        {/* DOUBLE QUEEN SECTION */}
        <h3
          id="double-queen"
          className="scroll-mt-[90px] font-semibold mt-16 font-playfair text-2xl md:text-3xl tracking-wide"
          style={{ color: "#9a4d2e" }}
        >
          Double Bedsheets (Queen)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {bedsheetProducts.slice(4, 8).map((p, i) => (
            <ProductCard2 key={i} {...p} />
          ))}
        </div>

        {/* DOUBLE KING SECTION */}
        <h3
          id="double-king"
          className="scroll-mt-[90px] font-semibold mt-16 font-playfair text-2xl md:text-3xl tracking-wide"
          style={{ color: "#9a4d2e" }}
        >
          Double Bedsheets (King)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {bedsheetProducts.slice(8, 12).map((p, i) => (
            <ProductCard2 key={i} {...p} />
          ))}
        </div>

        {/* DUVET SINGLE */}
        <h3
          id="duvets"
          className="scroll-mt-[90px] font-semibold mt-16 font-playfair text-2xl md:text-3xl tracking-wide"
          style={{ color: "#9a4d2e" }}
        >
          Duvet Covers
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {bedsheetProducts.slice(12, 16).map((p, i) => (
            <ProductCard2 key={i} {...p} />
          ))}
        </div>
        {/* DUVET Double */}
        {/* <div id="duvets-double" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
    {bedsheetProducts.slice(14, 16).map((p, i) => (
      <ProductCard2 key={i} {...p} />
    ))}
  </div> */}
        {/* Pillow Covers SECTION */}
        <h3
          id="pillow-covers"
          className="scroll-mt-[90px] font-semibold mt-16 font-playfair text-2xl md:text-3xl tracking-wide"
          style={{ color: "#9a4d2e" }}
        >
          Pillow Covers{" "}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {bedsheetProducts.slice(16, 20).map((p, i) => (
            <ProductCard2 key={i} {...p} />
          ))}
        </div>
      </div>
    </PageFade>
  );
}
