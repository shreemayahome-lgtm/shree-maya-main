import { Link } from "react-router-dom";

export function DesktopMoreDropdown({ items }) {
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
      {items.map(({ id, label, link }) => (
        <Link
          key={id}
          to={link}
          className="block px-4 py-3 uppercase text-[14px] tracking-wide hover:text-white hover:bg-[#9a4d2e] transition-colors"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}