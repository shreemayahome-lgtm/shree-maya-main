"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const BRAND_BROWN = "#9a4d2e";

const products = [
  {
    name: "King Size Bedsheet",
    price: 520,
    img: "/bg4.avif",
    href: "/bedsheets#single-bedsheets",
  },
  {
    name: "Queen Size Bedsheet",
    price: 450,
    img: "/bg.avif",
    href: "/bedsheets#double-queen",
  },
  {
    name: "Luxury Bath Towel (550 GSM)",
    price: 240,
    img: "/bg3.avif",
    href: "/bath-linen#bath-towel",
  },
  {
    name: "Hand Towel",
    price: 80,
    img: "/handtowel.avif",
    href: "/bath-linen#hand-towel",
  },
  {
    name: "Soft Microfiber Pillow",
    price: 190,
    img: "/pillows.avif",
    href: "/bedsheets#pillows",
  },
  {
    name: "Hotel Bath Mat (Anti-skid)",
    price: 180,
    img: "/bathMat.avif",
    href: "/bath-linen#bath-mats",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.35 },
  }),
};

export default function FeaturedProducts() {
  const navigate = useNavigate();

  const sendMessage = (name) => {
    const whatsappNumber = "919004865002";
    const message = `Hi, I would like to enquire about : ${name}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
  };

  const handleCardClick = (href) => {
    navigate(href);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-10 md:py-14">
      {/* Heading */}
      <div className="text-center">
        <h2
          className="font-playfair text-3xl md:text-5xl tracking-wide"
          style={{ color: BRAND_BROWN }}
        >
          Featured Products
        </h2>
        <p className="font-lato text-black/70 mt-2 mb-2 md:mb-4 md:text-lg">
          Bestsellers chosen by hotels & modern homes
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
            className="group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleCardClick(p.href)}
          >
            {/* Image */}
            <div className="h-56 w-full overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="font-playfair text-xl text-black">{p.name}</h3>
              <p className="font-lato text-[15px] text-black/70 mt-1">
                Starting <span className="font-semibold">₹{p.price}</span>
              </p>

              <div className="mt-3 flex items-center justify-between">
                <span className="font-poppins text-sm text-black/60">
                  View details
                </span>

                {/* Enquire Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(sendMessage(p.name), "_blank");
                  }}
                  className="inline-flex items-center gap-1 text-sm font-semibold"
                  style={{ color: BRAND_BROWN }}
                >
                  Enquire <FiArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <a
          href="https://wa.me/919004865002"
          className="font-poppins px-6 py-3 rounded-md text-white"
          style={{ backgroundColor: BRAND_BROWN }}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp for Bulk Orders
        </a>
      </div>
    </section>
  );
}