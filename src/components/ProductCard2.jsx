export default function ProductCard2({ image, title, description, onViewDetails }) {
  return (
    <div
  onClick={onViewDetails}
  className="bg-white rounded-xl shadow-sm border border-[#e5d5c7] hover:shadow-lg transition-all p-4 w-full max-w-sm"
>
      {/* Image */}
      <div className="w-full h-48 rounded-lg overflow-hidden mb-4 bg-gray-100">
  <img
    src={image}
    alt={title}
    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
  />
</div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-[#6E3D2E] leading-tight">
        {title}
      </h3>

      {/* Short Description */}
      <p className="text-sm text-gray-600 mt-2 leading-snug">
        {description}
      </p>

      {/* View Details Button */}
      <button
        onClick={onViewDetails}
        className="mt-4 w-full py-2 rounded-lg bg-[#6E3D2E] text-white text-sm font-medium hover:bg-[#8B5A44] transition"
      >
        Tap to View Details →
      </button>
    </div>
  );
}