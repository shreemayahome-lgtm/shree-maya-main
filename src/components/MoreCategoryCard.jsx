"use client";

import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const BRAND_BROWN = "#9a4d2e";

export function MoreCategoryCard({ item }) {
  const {
    id,
    type,
    title,
    description,
    sizes = [],
    images = [],
    startingFrom,
    link,
  } = item;

  const whatsappUrl = () => {
    const number = "919004865002";
    const msg = `Hi, I would like to enquire about: ${title}`;
    return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <Link
      key={id}
      to={link}
      className="block bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow max-w-3xl w-full h-full"
    >
      <div className="flex flex-col h-full">
        {/* TOP ROW */}
        <div className="grid grid-cols-2 border-b border-gray-200">
          {/* Left: type */}
          <div className="px-5 py-4 flex items-center">
            <h3
              className="text-3xl font-semibold tracking-tight"
              style={{ color: BRAND_BROWN }}
            >
              {type}.
            </h3>
          </div>

          {/* Right: Starting from */}
          <div className="px-5 py-4 flex flex-col justify-center items-start sm:items-end text-xs sm:text-sm text-gray-500">
            <span className="uppercase tracking-[0.18em] text-[10px]">
              Starting from
            </span>
            {startingFrom && (
              <span className="mt-1 text-base sm:text-lg font-semibold text-black">
                ₹{startingFrom}
              </span>
            )}
          </div>
        </div>

        {/* MIDDLE ROW */}
        <div className="flex flex-1 border-b border-gray-200">
          {/* Image */}
          <div className="w-1/2 border-r border-gray-200">
            <div className="h-full w-full overflow-hidden">
              <img
                src={images[0]}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text beside image */}
          <div className="w-1/2 px-5 py-4 flex flex-col justify-center gap-5">
            {/* Product title – more highlighted */}
            <h4 className="text-[20px] sm:text-[18px] font-semibold tracking-[0.18em] uppercase text-gray-700">
              {title}
            </h4>

            {/* Description */}
            {description && (
              <p className="text-sm sm:text-[14px] text-gray-600 leading-snug">
                {description}
              </p>
            )}

            {/* Sizes */}
            {sizes.length > 0 && (
              <p className="text-sm sm:text-[14px] text-gray-700">
                <span className="font-semibold">Available sizes: </span>
                {sizes.join(", ")}
              </p>
            )}
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex items-center justify-between px-5 py-3 text-sm border-t border-gray-100">
          <button
            type="button"
            className="inline-flex items-center gap-1 font-semibold text-sm sm:text-base"
            style={{ color: BRAND_BROWN }}
          >
            View details
            <FiArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault(); // don’t trigger Link navigation
              window.open(whatsappUrl(), "_blank");
            }}
            className="inline-flex items-center gap-1 text-sm font-medium text-gray-700"
          >
            Enquire
            <FiArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}