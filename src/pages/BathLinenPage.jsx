import { motion } from "framer-motion";
import { useEffect } from "react";
import PageFade from "../components/PageFade";
import ProductCard2 from "../components/ProductCard2"; // Important: using ProductCard2
import { useLocation } from "react-router-dom";

export default function BathLinenPage() {
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

  const towelProducts = [
    {
      title: "Bath Towel (450-500 GSM)",
      description: "27x54 inches • Soft & hotel-grade absorbency",
      price: 220,
      image: "/towel1.avif",
    },
    {
      title: "Bath Towel (500-600 GSM)",
      description: "28x56 inches • Plush comfort & durability",
      price: 230,
      image: "/towel2.avif",
    },
    {
      title: "Bath Towel (500-600 GSM)",
      description: "30x60 inches • Extra comfort & warmth",
      price: 250,
      image: "/towel3.avif",
    },
    {
      title: "Bath Towel (650-750 GSM)",
      description: "30x60 inches • Ultra premium luxury",
      price: 290,
      image: "/towel2.avif",
    },
    {
      title: "Bath Towel (750-850 GSM)",
      description: "32x64 inches • 5-Star Hotel Quality",
      price: 340,
      image: "/towel1.avif",
    },
    {
      title: "Face Towel",
      description: "12x12 inches • Soft everyday essential",
      price: 20,
      image: "/facetowel.avif",
    },
    {
      title: "Hand Towel",
      description: "16x28 inches • Hospitality grade hand towel",
      price: 60,
      image: "/handtowel.avif",
    },
    {
      title: "Bath Mat",
      description: "20x30 inches • Anti-slip & quick dry",
      price: 140,
      image: "/towel3.avif",
    },
    {
      title: "Bathrobe",
      description: "M/L/XL • Plush comfort hotel style",
      price: 630,
      image: "/bathrobe.avif",
    },
    {
      title: "Bath Mats",
      description: " Plush comfort hotel style",
      price: 200,
      image: "/bathMat.avif",
    },
  ];

  return (
    <PageFade>
      <motion.div
        layoutId="bathlinen-hero"
        className="relative w-full h-[55vh] md:h-[65vh] rounded-b-3xl overflow-hidden"
      >
        <img src="/towel1.avif" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-10 left-10 text-white text-5xl font-semibold drop-shadow-lg">
          Bath Linen Collection
        </div>
      </motion.div>

      {/* PRODUCT GRID */}
      <div className="px-6 py-14">
        <h2 className="text-center text-4xl font-semibold text-[#6E3D2E]">
          Bath Linen Range
        </h2>

        {/* Bath Towel SECTION */}
        <h3
          id="bath-towel"
          className="scroll-mt-[90px] font-semibold mt-16 font-playfair text-2xl md:text-3xl tracking-wide"
          style={{ color: "#9a4d2e" }}
        >
          Bath Towel
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {towelProducts.slice(0, 5).map((p, i) => (
            <ProductCard2 key={i} {...p} />
          ))}
        </div>

        {/* Face Towel SECTION */}
        <h3
          id="face-towel"
          className="scroll-mt-[90px] font-semibold mt-16 font-playfair text-2xl md:text-3xl tracking-wide"
          style={{ color: "#9a4d2e" }}
        >
          Face Towel{" "}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {towelProducts.slice(5, 6).map((p, i) => (
            <ProductCard2 key={i} {...p} />
          ))}
        </div>
        {/* hand Towel SECTION */}
        <h3
          id="hand-towel"
          className="scroll-mt-[90px] font-semibold mt-16 font-playfair text-2xl md:text-3xl tracking-wide"
          style={{ color: "#9a4d2e" }}
        >
          Hand Towel (Queen)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {towelProducts.slice(6, 7).map((p, i) => (
            <ProductCard2 key={i} {...p} />
          ))}
        </div>
        {/*  bath mats SECTION */}
        <h3
          id="bath-mat"
          className="scroll-mt-[90px] font-semibold mt-16 font-playfair text-2xl md:text-3xl tracking-wide"
          style={{ color: "#9a4d2e" }}
        >
          Bath Mats (Queen)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {towelProducts.slice(7, 8).map((p, i) => (
            <ProductCard2 key={i} {...p} />
          ))}
        </div>
        {/* Bathrobe SECTION */}
        <h3
          id="bathrobe"
          className="scroll-mt-[90px] font-semibold mt-16 font-playfair text-2xl md:text-3xl tracking-wide"
          style={{ color: "#9a4d2e" }}
        >
          Bathrobes (Queen)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {towelProducts.slice(8, 9).map((p, i) => (
            <ProductCard2 key={i} {...p} />
          ))}
        </div>
        {/* Bath Mat SECTION */}
        <h3
          id="mats"
          className="scroll-mt-[90px] font-semibold mt-16 font-playfair text-2xl md:text-3xl tracking-wide"
          style={{ color: "#9a4d2e" }}
        >
          Bath Mats{" "}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {towelProducts.slice(9, 10).map((p, i) => (
            <ProductCard2 key={i} {...p} />
          ))}
        </div>
      </div>
    </PageFade>
  );
}
