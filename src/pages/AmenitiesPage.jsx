import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PageFade from "../components/PageFade";
import ProductCard2 from "../components/ProductCard2";
import ProductDetailsModal from "../components/ProductDetailsModal";
import { useLocation } from "react-router-dom";
import amenities from "../data/amenities";
import { Link } from "react-router-dom";

export default function AmenitiesPage() {
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
  const amenitiesWithBranding = amenities.filter((p) => p.branding === "with");

  const amenitiesWithoutBranding = amenities.filter(
    (p) => p.branding === "without"
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
          src="/banner25.jpg" // change to your bed hero image
          alt="Luxe Bedding"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-wide">
  Hotel Amenities
</h1>

<p className="mt-1 text-sm sm:text-base opacity-90">
  Thoughtfully curated essentials for premium stays.
</p>

<div className="mt-4 flex gap-2">
  <Link
    to="#with-branding"
    className="px-4 py-1.5 rounded-full bg-white text-[#6E3D2E] text-sm font-medium"
  >
    With Branding
  </Link>

  <Link
    to="#without-branding"
    className="px-4 py-1.5 rounded-full bg-white/90 text-[#6E3D2E] text-sm font-medium"
  >
    Without Branding
  </Link>
</div>
        </div>
      </motion.div>

      <div className="px-6 py-12 overflow-visible">
      <h2
  id="with-branding"
  className="scroll-mt-[90px] relative font-playfair text-4xl md:text-5xl font-bold text-[#6E3D2E] mb-2 inline-block"
>
  Amenities with Hotel Branding
  <span className="absolute left-0 -bottom-2 w-2/3 h-[3px] bg-[#c9a17a] rounded-full"></span>
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
  {amenitiesWithBranding.map(renderProductCard)}
</div>
<h2
  id="without-branding"
  className="scroll-mt-[90px] mt-14 relative font-playfair text-4xl md:text-5xl font-bold text-[#6E3D2E] mb-2 inline-block"
>
  Amenities without Branding
  <span className="absolute left-0 -bottom-2 w-2/3 h-[3px] bg-[#c9a17a] rounded-full"></span>
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 place-items-center">
  {amenitiesWithoutBranding.map(renderProductCard)}
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
