import { useEffect, useState } from "react";

export default function ProductDetailsModal({ product, onClose }) {
  if (!product) return null;

  const { title, images = [], description, sizes = [] } = product;
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const totalImages = selectedColor?.images?.length || images.length;

  useEffect(() => {
    if (product?.colors?.length) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  const whatsappNumber = "919004865002";
  const message = `Hi, I want to enquire about: ${title}, Size: ${selectedSize}`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % totalImages);
  };
  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-5xl relative overflow-hidden md:flex"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute z-50 right-3 top-3 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md text-black text-lg hover:bg-gray-200"
        >
          ✕
        </button>

        {/* LEFT IMAGE */}
        <div className="hidden md:block md:w-[40%] bg-gray-100 relative">
          <div className="h-full flex items-center justify-center p-4">
            <img
              src={
                selectedColor?.images?.[currentImage] || images[currentImage]
              }
              alt={title}
              className="h-full object-contain"
            />

            {totalImages > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded-full"
                >
                  ◀
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded-full"
                >
                  ▶
                </button>
              </>
            )}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="p-5 md:w-[60%]">
          {/* MOBILE IMAGE */}
          <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gray-100 mb-3 md:hidden">
            <img
              src={
                selectedColor?.images?.[currentImage] || images[currentImage]
              }
              alt={title}
              className="w-full h-full object-contain"
            />

            {totalImages > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded-full"
                >
                  ◀
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded-full"
                >
                  ▶
                </button>
              </>
            )}
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-semibold text-[#6E3D2E]">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mt-1">{description}</p>

          {/* COLORS */}
          {product.colors && (
            <div className="mt-5">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Available Colors:
              </p>

              <div className="flex gap-3 flex-wrap">
                {product.colors.map((color, index) => (
                  <div key={index} className="relative group">
                    <button
                      onClick={() => {
                        setSelectedColor(color);
                        setCurrentImage(0);
                      }}
                      className={`w-9 h-9 rounded-full transition-all duration-300 
                        ${
                          selectedColor?.name === color.name
                            ? "ring-2 ring-white scale-110"
                            : "hover:ring-2 hover:ring-white/70 hover:scale-110"
                        }`}
                      style={{ backgroundColor: color.code }}
                    />

                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                      {color.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          <div className="mt-5">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Select Size:
            </p>

            <div className="flex gap-2 flex-wrap">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 text-sm md:text-base rounded-md border ${
                    selectedSize === size
                      ? "bg-[#6E3D2E] text-white border-[#6E3D2E]"
                      : "border-gray-300 hover:border-[#6E3D2E]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Button */}
          <a
            href={selectedSize ? whatsappLink : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-5 block text-center py-2 rounded-lg text-white text-sm ${
              selectedSize
                ? "bg-[#6E3D2E] hover:bg-[#8B5A44]"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={(e) => !selectedSize && e.preventDefault()}
          >
            Enquire Now
          </a>

          <div className="mt-6 grid grid-cols-3 gap-y-6 text-center">
            {[
              {
                icon: "https://cdn.shopify.com/s/files/1/0747/5121/3823/files/Frame_152.svg?v=1745796954",
                text: "Premium Quality",
              },
              {
                icon: "https://cdn.shopify.com/s/files/1/0747/5121/3823/files/Frame_148.svg?v=1745796954",
                text: "Soft & Comfortable",
              },
              {
                icon: "https://cdn.shopify.com/s/files/1/0747/5121/3823/files/Frame_149.svg?v=1745796954",
                text: "All Season Use",
              },
              {
                icon: "https://cdn.shopify.com/s/files/1/0747/5121/3823/files/Group_11.svg?v=1745796954",
                text: "High-end Stitching",
              },
              {
                icon: "https://cdn.shopify.com/s/files/1/0747/5121/3823/files/Group_12_9.svg?v=1746871491",
                text: "Machine Wash",
              },
              {
                icon: "https://cdn.shopify.com/s/files/1/0747/5121/3823/files/Group_12_10.svg?v=1746871550",
                text: "Soft to Hand",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* Circle */}
                <div className="w-16 h-16 rounded-full bg-[#F3E7D9] flex items-center justify-center mb-3">
                  {/* ICON */}
                  <img
                    src={item.icon}
                    className="w-10 h-10 object-contain opacity-90"
                  />
                </div>

                {/* Text */}
                <p className="text-xs md:text-sm text-[#6E3D2E] font-small">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
