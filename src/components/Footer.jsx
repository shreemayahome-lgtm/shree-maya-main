import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
<footer className="bg-[#FFF8EE] text-[#6E3D2E] pt-10 pb-4 px-6 border-t border-[#6E3D2E]/20">
<div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-y-0 md:gap-x-6 lg:gap-x-8 mt-2">
        
        {/* BRAND */}
        <div className="md:col-span-4 pr-6 ml-4">
          <div className="flex items-center gap-3">
            <img src="/logo2.png" alt="Shree Maya Homes" className="w-9 md:w-11" />
            <h2 className="font-heading text-3xl md:text-[34px] leading-tight font-semibold">
              Shree Maya Homes
            </h2>
          </div>
          <p className="mt-3 text-[15px] opacity-85">Divine Comfort for Every Space.</p>
          <p className="text-[15px] opacity-75">Serving Homes & Hospitality Across India.</p>
        </div>

        {/* BED LINEN (UPDATED) */}
        <div className="md:col-span-2">
          <h3 className="font-heading text-xl font-semibold tracking-wide mb-3">
            Bed Linen
          </h3>
          <ul className="space-y-1.5 text-sm">

            <li>
              <Link to="/bedsheets#bedsheets" className="hover:underline underline-offset-4">
                Bed Sheets
              </Link>
            </li>

            <li>
              <Link to="/bedsheets#pillow-cases" className="hover:underline underline-offset-4">
                Pillow Cases
              </Link>
            </li>

            <li>
              <Link to="/bedsheets#duvet-covers" className="hover:underline underline-offset-4">
                Duvet Covers
              </Link>
            </li>

            <li>
              <Link to="/bedsheets#duvets" className="hover:underline underline-offset-4">
                Duvets
              </Link>
            </li>

            <li>
              <Link to="/bedsheets#pillows" className="hover:underline underline-offset-4">
                Pillows
              </Link>
            </li>
          </ul>
        </div>

        {/* BATH LINEN (UPDATED) */}
        <div className="md:col-span-2">
          <h3 className="font-heading text-xl font-semibold tracking-wide mb-3">
            Bath Linen
          </h3>
          <ul className="space-y-1.5 text-sm">

            <li>
              <Link to="/bath-linen#bath" className="hover:underline underline-offset-4">
                Bath Towels
              </Link>
            </li>

            <li>
              <Link to="/bath-linen#face" className="hover:underline underline-offset-4">
                Face Towels
              </Link>
            </li>

            <li>
              <Link to="/bath-linen#hand" className="hover:underline underline-offset-4">
                Hand Towels
              </Link>
            </li>

            <li>
              <Link to="/bath-linen#mat" className="hover:underline underline-offset-4">
                Bath Mats
              </Link>
            </li>

            <li>
              <Link to="/bath-linen#robe" className="hover:underline underline-offset-4">
                Bath Robe
              </Link>
            </li>

          </ul>
        </div>

        {/* CONTACT (unchanged) */}
        <div className="md:col-span-3">
          <h3 className="font-heading text-xl font-semibold tracking-wide mb-3">
            Contact
          </h3>

          <p className="text-sm mb-1">WhatsApp / Call:</p>
          <a href="https://wa.me/919004865002" className="text-sm font-medium hover:underline underline-offset-4">
            +91 90048 65002
          </a>
          <br />
          <a
            href="mailto:shreemayahome@gmail.com"
            className="text-sm hover:underline underline-offset-4"
          >
            shreemayahome@gmail.com
          </a>

          <div className="mt-3 w-full h-44 rounded-lg overflow-hidden border border-brandBrown/25">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.0157612923745!2d73.10420947139576!3d18.974911315842135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9684590313d%3A0x4abca0bbf81385a6!2sShree%20Maya%20Homes!5e0!3m2!1sen!2sin!4v1762351368322!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex justify-center gap-6  text-3xl">
        <a href="https://www.instagram.com/shreemayahomes" target="_blank" className="hover:opacity-80 transition">
          <FaInstagram />
        </a>
        <a href="https://wa.me/919004865002" target="_blank" className="hover:opacity-80 transition">
          <FaWhatsapp />
        </a>
        <a href="mailto:shreemayahome@gmail.com" className="hover:opacity-80 transition">
          <FaEnvelope />
        </a>
      </div>

      {/* COPYRIGHT */}
      <p className="text-center text-xs mt-4 opacity-70">
        © 2025 Shree Maya Homes. All Rights Reserved.
      </p>
      <p className="text-center mt-2 text-xs opacity-70">
        Website designed & developed by <span className="font-medium">Sumit Gurbani</span>.
      </p>
    </footer>
  );
}