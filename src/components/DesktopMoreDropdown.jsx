import { Link } from "react-router-dom";

const BRAND_BROWN = "#9a4d2e";

export function DesktopMoreDropdown() {
  return (
    <div
      className="
        absolute left-1/2 -translate-x-1/2 pt-1
        w-56 bg-white border border-black/10 rounded-md 
        shadow-lg z-50
        transition-all duration-200
        opacity-100 translate-y-0
      "
    >
      {[
        ["pillows", "PILLOWS"],
        ["pillow-covers", "PILLOW COVERS"],
        ["duvets", "DUVETS"],
        ["blankets", "BLANKETS"],
        ["mats", "BATH MATS"],
      ].map(([id, label]) => (
        <Link
          key={id}
          to={id === "mats" ? `/bath-linen#${id}` : `/bedsheets#${id}`}
          className="block px-4 py-3 uppercase text-[14px] tracking-wide hover:text-white hover:bg-[#9a4d2e] transition-colors"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
