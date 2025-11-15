export default function ProductCard2({ image, title, description, price }) {
  const whatsappNumber = "919004865002"; // no + sign

  const message = `Hi, I would like to enquire about: ${title}`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#e5d5c7] hover:shadow-lg transition-all p-4 w-full max-w-sm">
      {/* Image */}
      <div className="w-full h-48 rounded-lg overflow-hidden mb-4 bg-gray-100">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-[#6E3D2E] leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-1 leading-snug">{description}</p>

      {/* Bottom Row */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xl font-bold text-[#6E3D2E]">₹ {price}</span>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1.5 rounded-lg bg-[#6E3D2E] text-white text-sm hover:bg-[#8B5A44] transition"
        >
          Enquire
        </a>
      </div>
    </div>
  );
}
