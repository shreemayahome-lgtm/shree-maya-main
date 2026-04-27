"use client";

import { useRef } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const items = [
  {
    title: "Bedding",
    image: "/Banner2.jpg",
    link: "/bedsheets",
  },
  {
    title: "Pillows",
    image: "/pillows.avif",
    link: "/bedsheets#pillows",
  },
  {
    title: "Bedsheets",
    image: "/skyblue.webp",
    link: "/bedsheets#bedsheets",
  },
  {
    title: "Duvets",
    image: "/duvets.avif",
    link: "/bedsheets#duvets",
  },
  {
    title: "Bath Linen",
    image: "/BATH7.jpg",
    link: "/bath-linen",
  },
  {
    title: "Bath Robe",
    image: "/robe5.jpg",
    link: "/bath-linen#robe",
  },
];

export default function ExploreMore() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 400;

    if (direction === "left") current.scrollLeft -= scrollAmount;
    else current.scrollLeft += scrollAmount;
  };

  return (
<section className="bg-[#FFF8EE] py-7">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="font-heading text-4xl md:text-5xl font-semibold">
          Explore More
        </h2>
        <p className="text-[#6E3D2E]  mt-2">
          Discover our curated selection
        </p>
      </div>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-6 scroll-smooth no-scrollbar"
      >
        {items.map((item, i) => (
          <Link
            key={i}
            to={item.link}
            className="relative min-w-[320px] md:min-w-[380px] h-[420px] rounded-2xl overflow-hidden group"
          >
            {/* Image */}
            <img
              src={item.image}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Text */}
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl text-white font-semibold mb-3">{item.title}</h3>

              <div className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium">
                Shop Now
                <FiArrowRight />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-13 mt-10">
        <button
          onClick={() => scroll("left")}
          className="w-12 h-12 rounded-full bg-[#6E3D2E] text-white flex items-center justify-center"
        >
          <FiChevronLeft />
        </button>

        <button
          onClick={() => scroll("right")}
          className="w-12 h-12 rounded-full bg-[#6E3D2E] text-white flex items-center justify-center "
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}