import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PageFade from "../components/PageFade";
import ProductCard2 from "../components/ProductCard2";
import ProductDetailsModal from "../components/ProductDetailsModal";
import { useLocation } from "react-router-dom";
import bedLinen from "../data/bedLinen";

export default function BedsheetsPage() {
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timeout = setTimeout(() => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      document.body.style.overflow = "auto";
    }, 600);

    return () => {
      document.body.style.overflow = "auto";
      clearTimeout(timeout);
    };
  }, [location]);

  const renderProductCard = (product, index) => (
    <ProductCard2
      key={index}
      image={product.images ? product.images[0] : product.image}
      title={product.title}
      description={product.description}
      onViewDetails={() => setSelectedProduct(product)}
    />
  );

  return (
    <PageFade>
      <motion.div
        layoutId="bedsheets-hero"
        className="relative w-full h-[55vh] md:h-[70vh] rounded-b-3xl overflow-hidden"
      >
        <img src="/banner-4.avif" className="w-full h-full object-cover" />
        <div className="font-heading  absolute bottom-15 md:bottom-8 left-3 md:left-30 text-[#6E3D2E] text-5xl md:text-6xl font-semibold">
          Bedsheets Collection
        </div>
      </motion.div>

      <div className="px-6 py-12 overflow-visible">
        {/* Bedsheets */}
        <h2
          id="bedsheets"
          className="scroll-mt-[90px] relative font-playfair text-4xl md:text-5xl font-bold text-[#6E3D2E] mb-2 inline-block"
        >
          Bedsheets
          <span className="absolute left-0 -bottom-2 w-2/3 h-[3px] bg-[#c9a17a] rounded-full"></span>
        </h2>

        <p className="border-l-3 border-[#6E3D2E] pl-2 scroll-mt-[90px] text-[#6E3D2E] text-xl uppercase tracking-widest mb-4 mt-8">
          STRIPE COLLECTION
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {bedLinen.slice(0, 4).map(renderProductCard)}
        </div>

        <h3
          className="border-l-3 border-[#6E3D2E] pl-2 scroll-mt-[90px] text-[#6E3D2E] text-xl uppercase tracking-widest mb-4 mt-8"
          style={{ color: "#9a4d2e" }}
        >
          Plain Collection
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {bedLinen.slice(4, 8).map(renderProductCard)}
        </div>

        {/* Pillow Covers */}
        <h2
          id="pillow-cases"
          className="scroll-mt-[90px] mt-10 relative font-playfair text-4xl md:text-5xl font-bold text-[#6E3D2E] mb-2 inline-block"
        >
          Pillow Cases
          <span className="absolute left-0 -bottom-2 w-2/3 h-[3px] bg-[#c9a17a] rounded-full"></span>
        </h2>

        
        <h3

          className="border-l-3 border-[#6E3D2E] pl-2 scroll-mt-[90px] text-[#6E3D2E] text-xl uppercase tracking-widest mb-4 mt-8"
          style={{ color: "#9a4d2e" }}
        >
          STRIPE COLLECTION
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {bedLinen.slice(8, 12).map(renderProductCard)}
        </div>

        <h3

          className="border-l-3 border-[#6E3D2E] pl-2 scroll-mt-[90px] text-[#6E3D2E] text-xl uppercase tracking-widest mb-4 mt-8"
          style={{ color: "#9a4d2e" }}
        >
          PLAIN COLLECTION
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {bedLinen.slice(12, 16).map(renderProductCard)}
        </div>

        {/* Pillows */}
        <h2
          id="pillows"
          className="scroll-mt-[90px] mt-10 relative font-playfair text-4xl md:text-5xl font-bold text-[#6E3D2E] mb-2 inline-block"
        >
          Pillows
          <span className="absolute left-0 -bottom-2 w-2/3 h-[3px] bg-[#c9a17a] rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {bedLinen.slice(16, 18).map(renderProductCard)}
        </div>
        {/* Duvets */}
        <h2
          id="duvets"
          className="scroll-mt-[90px] mt-10 relative font-playfair text-4xl md:text-5xl font-bold text-[#6E3D2E] mb-2 inline-block"
        >
          Duvets
          <span className="absolute left-0 -bottom-2 w-2/3 h-[3px] bg-[#c9a17a] rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {bedLinen.slice(18, 20).map(renderProductCard)}
        </div>
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <ProductDetailsModal
          product={{
            ...selectedProduct,
            images: selectedProduct.images || [selectedProduct.image],
          }}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </PageFade>
  );
}
