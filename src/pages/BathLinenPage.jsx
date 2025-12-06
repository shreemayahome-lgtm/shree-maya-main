import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PageFade from "../components/PageFade";
import ProductCard2 from "../components/ProductCard2";
import ProductDetailsModal from "../components/ProductDetailsModal";
import { useLocation } from "react-router-dom";
import bathLinen from "../data/bathLinen";
import { Link } from "react-router-dom";

export default function BathLinenPage() {

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

  // ✅ Grouping via type + collection instead of index slices
  const bathTowels = bathLinen.filter(
    (p) => p.type === "bath"
  );

  const bathPolly = bathLinen.filter(
    (p) => p.type === "pollybath" 
  );

  const faceTowel = bathLinen.filter((p) => p.type === "face");
  const handTowel = bathLinen.filter((p) => p.type === "hand");
  const bathMat = bathLinen.filter((p) => p.type === "mat");
  const bathRobe = bathLinen.filter((p) => p.type === "robe");


  const renderProductCard = (product, index) => (
    <ProductCard2
      key={product.id || index}
      image={product.images ? product.images[0] : product.image}
      title={product.title}
      description={product.description}
      onViewDetails={() => setSelectedProduct(product)}
    />
  );

  return (
    //Bath Hero
    <PageFade>
      <motion.div className="relative w-full h-[60vh] rounded-2xl overflow-hidden">
      {/* Background Image */}
      <img
        src="/towel1.avif"
        alt="Luxe Bath Towels"
        className="absolute w-full h-full object-cover"
      />

      {/* Gradient Overlay (for readability) */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Text Content */}
      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-wide">
          Luxe Bath Collection
        </h1>

        <p className="mt-1 text-sm sm:text-base opacity-90">
          Towels & essentials crafted for everyday comfort.
        </p>

        {/* CTA Buttons */}
        <div className="mt-4 flex gap-2">
          <Link
          to="#bath" 
          className="px-4 py-1.5 rounded-full bg-white text-[#6E3D2E] text-sm font-medium">
            Shop Towels
          </Link>
          <Link 
          to="#mat"
          className="px-4 py-1.5 rounded-full bg-white/90 text-[#6E3D2E] text-sm font-medium">
            Shop Mats
          </Link>
        </div>
      </div>
    </motion.div>

      <div className="px-6 py-12 overflow-visible">
        {/* Bath Towels */}
        <h2
          id="bath"
          className="scroll-mt-[90px] relative font-playfair text-4xl md:text-5xl font-bold text-[#6E3D2E] mb-2 inline-block"
        >
          Bath Towels
          <span className="absolute left-0 -bottom-2 w-2/3 h-[3px] bg-[#c9a17a] rounded-full"></span>
        </h2>

        <p className="border-l-3 border-[#6E3D2E] pl-2 scroll-mt-[90px] text-[#6E3D2E] text-xl uppercase tracking-widest mb-4 mt-8">
        Pure Cotton Towels
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {bathTowels.map(renderProductCard)}
        </div>

        <h3
          className="border-l-3 border-[#6E3D2E] pl-2 scroll-mt-[90px] text-[#6E3D2E] text-xl uppercase tracking-widest mb-4 mt-8"
          style={{ color: "#9a4d2e" }}
        >
Poly-Cotton Towels
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {bathPolly.map(renderProductCard)}
        </div>

        
        {/* Face Towels */}
        <h2
          id="face"
          className="scroll-mt-[90px] mt-10 relative font-playfair text-4xl md:text-5xl font-bold text-[#6E3D2E] mb-2 inline-block"
        >
          Face Towels 
          <span className="absolute left-0 -bottom-2 w-2/3 h-[3px] bg-[#c9a17a] rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {faceTowel.map(renderProductCard)}
        </div>
        {/* hand towel */}
        <h2
          id="hand"
          className="scroll-mt-[90px] mt-10 relative font-playfair text-4xl md:text-5xl font-bold text-[#6E3D2E] mb-2 inline-block"
        >
          Hand Towels
          <span className="absolute left-0 -bottom-2 w-2/3 h-[3px] bg-[#c9a17a] rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {handTowel.map(renderProductCard)}
        </div>
        {/* Bath mat */}
        <h2
          id="mat"
          className="scroll-mt-[90px] mt-10 relative font-playfair text-4xl md:text-5xl font-bold text-[#6E3D2E] mb-2 inline-block"
        >
          Bath Mats
          <span className="absolute left-0 -bottom-2 w-2/3 h-[3px] bg-[#c9a17a] rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {bathMat.map(renderProductCard)}
        </div>
        {/* bathRobe */}
        <h2
          id="robe"
          className="scroll-mt-[90px] mt-10 relative font-playfair text-4xl md:text-5xl font-bold text-[#6E3D2E] mb-2 inline-block"
        >
          Bathrobe
          <span className="absolute left-0 -bottom-2 w-2/3 h-[3px] bg-[#c9a17a] rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {bathRobe.map(renderProductCard)}
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