import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const bedIcons = [
  { name: "Bedsheet", icon: "🛏️", link: "/bedsheets#single-bedsheets" },
  { name: "Pillow Cover", icon: "🛌", link: "/bedsheets#single-bedsheets" },
  { name: "Pillow", icon: "☁️", link: "/bedsheets#single-bedsheets" },
  { name: "Cushion", icon: "🧸", link: "/bedsheets#single-bedsheets" },
  { name: "Duvet & Comforter", icon: "🛌", link: "/bedsheets#duvets" },
  { name: "Duvet Cover", icon: "🧵", link: "/bedsheets#duvets" },
  {
    name: "Mattress Protector",
    icon: "🪄",
    link: "/bedsheets#mattress-protector",
  },
  { name: "Pillow Protector", icon: "🛡️", link: "/bedsheets#pillow-protector" },
  { name: "Bath Towel", icon: "🧺", link: "/bath-linen#bath-towel" },
  { name: "Hand Towel", icon: "🧻", link: "/bath-linen#hand-towel" },
  { name: "Face Towel", icon: "🪥", link: "/bath-linen#face-towel" },
  { name: "Pool Towel", icon: "🌊", link: "/bath-linen#pool-towel" },
  { name: "Bath Mat", icon: "𐃅", link: "/bath-linen#bath-mat" },
];

export default function IconMarquee() {
  return (
    <div className="relative py-5 bg-[#FFF8EE] flex flex-col gap-3 overflow-hidden">
      {/* Luxury Infinity Edge Fade */}
     {/* Luxury Infinity Edge Fade */}
     <div className="pointer-events-none absolute top-0 left-0 w-full h-6 bg-linear-to-b from-[#FFF8EE]/80 to-transparent z-10" />
     <div className="pointer-events-none absolute bottom-0 left-0 w-full h-6 bg-linear-to-t from-[#FFF8EE]/80 to-transparent z-10" />
      {/* BED LINE */}
      <Marquee speed={45} gradient={false} pauseOnHover={true}>
  {bedIcons.map((item, i) => (
    <Link
      key={i}
      to={item.link}
      className="marquee-item flex flex-col items-center px-10 group hover:text-[#9a4d2e]"
      style={{ transition: "transform 0.1s ease" }}
    >
      <span className="text-4xl md:text-5xl transition-transform duration-100 group-hover:scale-110">
        {item.icon}
      </span>
      <span className="mt-2 text-xs md:text-sm text-[#6E3D2E] transition-colors duration-300 group-hover:text-[#9A4D2E]">
        {item.name}
      </span>
    </Link>
  ))}
</Marquee>
    </div>
  );
}