export default function ProductCard2({ image, title, description, onViewDetails }) {
  const highlightWords = ["100% Cotton","Honeycomb", "Polycotton", "Pollycotton", "Glace Cotton", "PolyCotton"];

  const badgeClass =
    "inline-block px-2 py-0.5 bg-[#F2E8E3] text-[#6E3D2E] rounded-md font-medium text-xs";

  const splitDescription = (text = "") => {
    const parts = text
      .split("•")
      .map(p => p.trim())
      .filter(Boolean);

    // Find which part should become the badge
    let badge = parts.find(part =>
      highlightWords.some(keyword =>
        part.toLowerCase().includes(keyword.toLowerCase())
      )
    );

    // Fallback: if nothing matches, use the first part as badge
    if (!badge && parts.length > 0) {
      badge = parts[0];
    }

    const rest = parts.filter(part => part !== badge);

    return {
      badge,
      restText: rest.join(" • ")
    };
  };

  const { badge, restText } = splitDescription(description);

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
       className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-[#6E3D2E] leading-tight">
        {title}
      </h3>

      {/* Badge (material / type) */}
      {badge && (
        <div className="mt-2">
          <span className={badgeClass}>{badge}</span>
        </div>
      )}

      {/* Description (rest of the features) */}
      {restText && (
        <p className="text-sm text-gray-600 mt-1 leading-snug">
          {restText}
        </p>
      )}

      {/* View Details Btn */}
      <button
        onClick={onViewDetails}
        className="mt-4 w-full py-2 rounded-lg bg-[#6E3D2E] text-white text-sm font-medium hover:bg-[#8B5A44] transition"
      >
        Tap to View Details →
      </button>
    </div>
  );
}