import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PageFade from "../components/PageFade";
import ProductCard2 from "../components/ProductCard2";
import ProductDetailsModal from "../components/ProductDetailsModal";
import { useLocation } from "react-router-dom";
import bedLinen from "../data/bedLinen";
import { Link } from "react-router-dom";

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

  // ✅ Grouping via type + collection instead of index slices
  const bedsheetStripe = bedLinen.filter(
    (p) => p.type === "bedsheet" && p.collection === "stripe"
  );
  const bedsheetPlain = bedLinen.filter(
    (p) => p.type === "bedsheet" && p.collection === "plain"
  );

  const pillowcaseStripe = bedLinen.filter(
    (p) => p.type === "pillowcase" && p.collection === "stripe"
  );
  const pillowcasePlain = bedLinen.filter(
    (p) => p.type === "pillowcase" && p.collection === "plain"
  );

  const pillows = bedLinen.filter((p) => p.type === "pillow");
  const duvets = bedLinen.filter((p) => p.type === "duvet");
  const duvetStripe = bedLinen.filter(
    (p) => p.type === "duvet-cover" && p.collection === "stripe"
  );
  const duvetPlain = bedLinen.filter(
    (p) => p.type === "duvet-cover" && p.collection === "plain"
  );

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
    //Bedsheet Hero
    <PageFade>
      <motion.div className="relative w-full h-[60vh] rounded-2xl overflow-hidden">
      <img
        src="/Banner2.jpg" // change to your bed hero image
        alt="Luxe Bedding"
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-wide">
          Luxe Bedding
        </h1>
        <p className="mt-1 text-sm sm:text-base opacity-90">
          Comfort crafted for dreamy nights.
        </p>

        <div className="mt-4 flex gap-2">
          <Link
to="#bedsheets"
            className="px-4 py-1.5 rounded-full bg-white text-[#6E3D2E] text-sm font-medium"
          >
            Bedsheets
          </Link>

          <Link
to="#duvet-covers"
            className="px-4 py-1.5 rounded-full bg-white/90 text-[#6E3D2E] text-sm font-medium"
          >
            Duvet Covers
          </Link>
        </div>
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

        <p 
        id="bedstripe"
         className="border-l-3 border-[#6E3D2E] pl-2 scroll-mt-[90px] text-[#6E3D2E] text-xl uppercase tracking-widest mb-4 mt-8">
          STRIPE COLLECTION
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {bedsheetStripe.map(renderProductCard)}
        </div>

        <h3
        id="bedplain"
          className="border-l-3 border-[#6E3D2E] pl-2 scroll-mt-[90px] text-[#6E3D2E] text-xl uppercase tracking-widest mb-4 mt-8"
          style={{ color: "#9a4d2e" }}
        >
          Plain Collection
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {bedsheetPlain.map(renderProductCard)}
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
        id="pillowstripe"
          className="border-l-3 border-[#6E3D2E] pl-2 scroll-mt-[90px] text-[#6E3D2E] text-xl uppercase tracking-widest mb-4 mt-8"
          style={{ color: "#9a4d2e" }}
        >
          STRIPE COLLECTION
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {pillowcaseStripe.map(renderProductCard)}
        </div>

        <h3
        id="pillowplain"
          className="border-l-3 border-[#6E3D2E] pl-2 scroll-mt-[90px] text-[#6E3D2E] text-xl uppercase tracking-widest mb-4 mt-8"
          style={{ color: "#9a4d2e" }}
        >
          PLAIN COLLECTION
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {pillowcasePlain.map(renderProductCard)}
        </div>

        {/* Duvet Covers*/}

        <h2
          id="duvet-covers"
          className="scroll-mt-[90px] mt-10 relative font-playfair text-4xl md:text-5xl font-bold text-[#6E3D2E] mb-2 inline-block"
        >
          Duvet Covers
          <span className="absolute left-0 -bottom-2 w-2/3 h-[3px] bg-[#c9a17a] rounded-full"></span>
        </h2>

        <p
        id="duvetstriped" 
        className="border-l-3 border-[#6E3D2E] pl-2 scroll-mt-[90px] text-[#6E3D2E] text-xl uppercase tracking-widest mb-4 mt-8">
          STRIPE COLLECTION
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {duvetStripe.map(renderProductCard)}
        </div>

        <h3
        id="duvetsplain"
          className="border-l-3 border-[#6E3D2E] pl-2 scroll-mt-[90px] text-[#6E3D2E] text-xl uppercase tracking-widest mb-4 mt-8"
          style={{ color: "#9a4d2e" }}
        >
          Plain Collection
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {duvetPlain.map(renderProductCard)}
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
          {pillows.map(renderProductCard)}
        </div>
        {/* Duvet */}
        <h2
          id="duvets"
          className="scroll-mt-[90px] mt-10 relative font-playfair text-4xl md:text-5xl font-bold text-[#6E3D2E] mb-2 inline-block"
        >
          Duvets
          <span className="absolute left-0 -bottom-2 w-2/3 h-[3px] bg-[#c9a17a] rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
          {duvets.map(renderProductCard)}
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