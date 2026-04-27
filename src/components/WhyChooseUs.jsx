import {
  FaGem,
  FaFeatherAlt,
  FaSnowflake,
  FaShapes,
  FaLeaf,
  FaTools,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const titleAnimation = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.96,
      filter: "blur(6px)"
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1], // super smooth curve
      },
    },
  };
  const features = [
    {
      icon: <FaGem />,
      title: "Refined Elegance",
      desc: "Timeless beauty in every thread.",
    },
    {
      icon: <FaFeatherAlt />,
      title: "Softness & Comfort",
      desc: "Luxuriously soft from the very first touch.",
    },
    {
      icon: <FaSnowflake />,
      title: "All-Season Comfort",
      desc: "Cozy in winter and cool in summer.",
    },
    {
      icon: <FaShapes />,
      title: "Versatile Design",
      desc: "Complements every style and space.",
    },
    {
      icon: <FaLeaf />,
      title: "Naturally Hypoallergenic",
      desc: "Gentle on skin, safe for the whole family.",
    },
    {
      icon: <FaTools />,
      title: "Meticulous Craftsmanship",
      desc: "Crafted with precision for timeless luxury.",
    },
  ];

  return (
    <section className="bg-[#FFF8EE] pt-10 pb-13 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-12 text-[#6E3D2E]">
          Why Choose Us
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-12">

          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">

              {/* Icon */}
              <div className="w-19 h-19 rounded-full bg-[#F3E7D9] flex items-center justify-center text-4xl text-[#6E3D2E] mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl font-semibold mb-1 text-[#6E3D2E]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-[#6E3D2E]/80  leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}