import { useEffect, useState } from "react";

export default function ProductDetailsModal({ product, onClose }) {
  if (!product) return null;

  const { title, images = [], description, sizes = [] } = product;
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  const whatsappNumber = "919004865002";
  const message = `Hi, I want to enquire about: ${title}, Size: ${selectedSize}`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Arrow navigation handlers
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4 z-50"
      onClick={onClose} // Close when clicking outside modal
    >
      <div
        className="bg-white rounded-2xl shadow-xl p-5 max-w-xl w-full relative"
        onClick={(e) => e.stopPropagation()} // Prevent background close
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className=" absolute z-50 right-3 top-3 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md text-black text-lg hover:bg-gray-200 transition"
        >
          ✕
        </button>

        {/* Image Section */}
        <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gray-100 mb-3">
          <img
            src={images[currentImage]}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500"
          />

          {/* Left Arrow */}
          {images.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded-full hover:bg-black/60"
            >
              ◀
            </button>
          )}

          {/* Right Arrow */}
          {images.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded-full hover:bg-black/60"
            >
              ▶
            </button>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-[#6E3D2E]">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-1">{description}</p>

        {/* Sizes */}
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Select Size:</p>
          <div className="flex gap-2 flex-wrap">
            {sizes.map((size, index) => (
              <button
                key={index}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 text-sm rounded-md border ${
                  selectedSize === size
                    ? "bg-[#6E3D2E] text-white border-[#6E3D2E]"
                    : "border-gray-300 hover:border-[#6E3D2E]"
                } transition`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Enquiry Button */}
        <a
          href={selectedSize ? whatsappLink : undefined}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-5 block text-center py-2 rounded-lg text-white text-sm transition ${
            selectedSize
              ? "bg-[#6E3D2E] hover:bg-[#8B5A44]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={(e) => !selectedSize && e.preventDefault()}
        >
          Enquire Now
        </a>
      </div>
    </div>
  );
}