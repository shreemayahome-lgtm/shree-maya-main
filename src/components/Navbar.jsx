import { useEffect, useState, useRef } from "react";
import { FiMenu, FiX, FiPhone, FiChevronDown } from "react-icons/fi";
import { DesktopMoreDropdown } from "./DesktopMoreDropdown";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BRAND_BROWN = "#9a4d2e";

export default function Navbar() {
  const location = useLocation();

  const navigate = useNavigate();

  const handleLogoClick = () => {
    setMenuOpen(false);

    // If already on homepage → scroll directly
    if (location.pathname === "/") {
      document.getElementById("collections")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Navigate to home first
      navigate("/#collections");
    }
  };

  const handleScrollHome = () => {
    if (location.pathname === "/") {
      // Already home → just scroll
      const section = document.getElementById("collections");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };
  const bedsheetsMenu = [
    { id: "bedsheets", label: "BEDSHEETS", link: "/bedsheets#bedsheets" },
    {
      id: "pillow-cases",
      label: "PILLOW CASES",
      link: "/bedsheets#pillow-cases",
    },
    { id: "duvet-covers", label: "DUVET COVERS", link: "/bedsheets#duvet-covers" },
    { id: "pillows", label: "PILLOWS", link: "/bedsheets#pillows" },
    { id: "duvets", label: "DUVETS", link: "/bedsheets#duvets" },

  ];

  const bathLinenMenu = [
    { id: "bath-towel", label: "BATH TOWELS", link: "/bath-linen#bath" },
    { id: "face", label: "FACE TOWELS", link: "/bath-linen#face" },
    { id: "hand", label: "HAND TOWELS", link: "/bath-linen#hand" },

    { id: "mat", label: "BATH MATS", link: "/bath-linen#mat" },
    { id: "robe", label: "BATHROBE", link: "/bath-linen#robe" },
    
  ];

  const [menuOpen, setMenuOpen] = useState(false); // mobile menu
  const [openGroup, setOpenGroup] = useState(null); // mobile accordion
  const [openDropdown, setOpenDropdown] = useState(null); // desktop "More" dropdown
  const closeTimeout = useRef(null);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const toggleGroup = (key) => setOpenGroup((g) => (g === key ? null : key));
  const handleOpen = (menu) => {
    clearTimeout(closeTimeout.current);
    setOpenDropdown(menu);
  };
  const handleClose = () => {
    closeTimeout.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  return (
    <>
      {/* NAVBAR TOP */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-black/10 h-16 flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full flex items-center justify-between">
          {/* Logo + Brand */}
          <Link to="/#collections" onClick={handleLogoClick}>
            <div className="flex items-center gap-3">
              <img src="/logo2.png" alt="Logo" className="w-9 md:w-11" />
              <span
                className="text-base md:text-xl font-semibold tracking-wide"
                style={{ color: BRAND_BROWN }}
              >
                SHREE MAYA HOMES
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}

          <div className="hidden md:flex items-center gap-8 text-[15px]">
            {/* BED LINEN */}
            <div
              className="relative"
              onMouseEnter={() => handleOpen("bed")}
              onMouseLeave={handleClose}
            >
              <button className="uppercase tracking-wide flex items-center gap-1 font-semibold">
                Bed Linen <FiChevronDown />
              </button>

              {openDropdown === "bed" && (
                <div className="absolute top-full">
                  <DesktopMoreDropdown items={bedsheetsMenu} />
                </div>
              )}
            </div>

            {/* BATH LINEN */}
            <div
              className="relative"
              onMouseEnter={() => handleOpen("bath")}
              onMouseLeave={handleClose}
            >
              <button className="uppercase tracking-wide flex items-center gap-1 font-semibold">
                Bath Linen <FiChevronDown />
              </button>

              {openDropdown === "bath" && (
                <div className="absolute top-full">
                  <DesktopMoreDropdown items={bathLinenMenu} />
                </div>
              )}
            </div>

            {/* MORE */}
            {/* <div
              className="relative"
              onMouseEnter={() => handleOpen("more")}
              onMouseLeave={handleClose}
            >
              <button className="uppercase tracking-wide flex items-center gap-1 font-semibold">
                More <FiChevronDown />
              </button>

              {openDropdown === "more" && (
                <div className="absolute top-full">
                  <DesktopMoreDropdown items={bedsheetsMenu} />
                </div>
              )}
            </div> */}

            <Link
              to="tel:+919104865002"
              className="flex items-center gap-2 px-4 py-2 rounded-md text-white transition"
              style={{ backgroundColor: BRAND_BROWN }}
            >
              Contact
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button className="md:hidden text-2xl" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* MOBILE FULL WIDTH DROPDOWN */}
      <div
        className={`fixed top-16 left-0 w-full bg-white border-b border-black/10 overflow-hidden transition-all duration-300 md:hidden z-50 ${
          menuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* <div className="px-5 py-4 font-semibold text-[15px] uppercase tracking-wide"> */}
        <div className="px-5 py-4 text-[15px]">
          {/* BEDSHEETS */}
          <button
            onClick={() => toggleGroup("bedsheets")}
            className="w-full flex items-center justify-between py-3 border-b font-semibold tracking-wide uppercase text-[15px]"
            style={{ color: BRAND_BROWN }}
          >
Bed Linen
            <FiChevronDown
              className={`${
                openGroup === "bedsheets" ? "rotate-180" : ""
              } transition`}
            />
          </button>
          {openGroup === "bedsheets" && (
            <div className="pl-3 pt-2 pb-1 flex flex-col gap-1">
              <Link
                to="/bedsheets#bedstripe"
                onClick={() => setMenuOpen(false)}
                className="py-2 uppercase text-sm tracking-wide"
              >
Stripe Collection
              </Link>
              <Link
                to="/bedsheets#bedplain"
                onClick={() => setMenuOpen(false)}
                className="py-2 uppercase text-sm tracking-wide"
              >
PLAIN collection
              </Link>
              <Link
                to="/bedsheets#pillowstripe"
                onClick={() => setMenuOpen(false)}
                className="py-2 uppercase text-sm tracking-wide"
              >
STRiped Pillow cases
              </Link>
              <Link
                to="/bedsheets#pillowplain"
                onClick={() => setMenuOpen(false)}
                className="py-2 uppercase text-sm tracking-wide"
              >
plain pillow cases
              </Link>
              
            </div>
          )}

          

          {/* DUVETS AND COMFORTERS */}
          <button
            onClick={() => toggleGroup("comfort")}
            className="w-full flex items-center justify-between py-3 border-b font-semibold tracking-wide uppercase text-[15px] mt-2"
            style={{ color: BRAND_BROWN }}
          >
            DUVETS & COMFORTERS
            <FiChevronDown
              className={`${
                openGroup === "comfort" ? "rotate-180" : ""
              } transition`}
            />
          </button>
          {openGroup === "comfort" && (
            <div className="pl-3 pt-2 pb-1 flex flex-col gap-1">
              <Link
                to="/bedsheets#duvetstriped"
                onClick={() => setMenuOpen(false)}
                className="py-2 uppercase text-sm tracking-wide"
              >
Striped Duvetcovers
              </Link>
              <Link
                to="/bedsheets#duvetsplain"
                onClick={() => setMenuOpen(false)}
                className="py-2 uppercase text-sm tracking-wide"
              >
plain duvetcovers
              </Link>
              <Link
                to="/bedsheets#duvets"
                onClick={() => setMenuOpen(false)}
                className="py-2 uppercase text-sm tracking-wide"
              >
duvets
              </Link>
              <Link
                to="/bedsheets#pillows"
                onClick={() => setMenuOpen(false)}
                className="py-2 uppercase text-sm tracking-wide"
              >
Pillows
              </Link>
              </div>
          )}
          {/* BATH TOWELS */}
          <button
            onClick={() => toggleGroup("towels")}
            className="w-full flex items-center justify-between py-3 border-b font-semibold tracking-wide uppercase text-[15px] mt-2"
            style={{ color: BRAND_BROWN }}
          >
            Bath Towels
            <FiChevronDown
              className={`${
                openGroup === "towels" ? "rotate-180" : ""
              } transition`}
            />
          </button>
          {openGroup === "towels" && (
            <div className="pl-3 pt-2 pb-1 flex flex-col gap-1">
              <Link
                to="/bath-linen#bath"
                onClick={() => setMenuOpen(false)}
                className="py-2 uppercase text-sm tracking-wide"
              >
                Bath Towel
              </Link>
              <Link
                to="/bath-linen#hand"
                onClick={() => setMenuOpen(false)}
                className="py-2 uppercase text-sm tracking-wide"
              >
                Hand Towel
              </Link>
              <Link
                to="/bath-linen#face"
                onClick={() => setMenuOpen(false)}
                className="py-2 uppercase text-sm tracking-wide"
              >
                Face Towel
              </Link>
              <Link
                to="/bath-linen#mat"
                onClick={() => setMenuOpen(false)}
                className="py-2 uppercase text-sm tracking-wide"
              >
BATH mats
              </Link>
              <Link
                to="/bath-linen#robe"
                onClick={() => setMenuOpen(false)}
                className="py-2 uppercase text-sm tracking-wide"
              >
                Bathrobe
              </Link>
            </div>
          )}

          {/* ONE ITEM CATEGORY */}
          {/* <Link
            to="/bath-linen#mats"
            onClick={() => setMenuOpen(false)}
            className="block py-4 border-b uppercase font-semibold tracking-wide text-[15px] mt-2"
            style={{ color: BRAND_BROWN }}
          >
            Bath Mats
          </Link> */}

          {/* CONTACT BUTTON */}
          <Link
            to="tel:+919104865002"
            onClick={() => setMenuOpen(false)}
            className="mt-5 block text-center w-full py-3 rounded-md text-white font-semibold"
            style={{ backgroundColor: BRAND_BROWN }}
          >
            Contact Now
          </Link>
        </div>
      </div>
    </>
  );
}
