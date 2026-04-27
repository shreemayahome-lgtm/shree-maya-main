import { Routes, Route } from "react-router-dom";
import HeroSection from "../components/HeroSection.jsx";
import BedsheetsPage from "../pages/BedsheetsPage";
import BathLinenPage from "../pages/BathLinenPage";
import ProductCategories from "../components/ProductCategories";
import MoreCategories from "../components/MoreCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import IconMarquee from "../components/IconMarquee";
import AmenitiesPage from "../pages/AmenitiesPage.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HeroSection />
            <ProductCategories />
            <IconMarquee />
            
            <MoreCategories />
            <FeaturedProducts />
          </>
        }
      />

      {/* PRODUCT CATEGORY PAGES */}
      <Route path="/bedsheets" element={<BedsheetsPage />} />
      <Route path="/bath-linen" element={<BathLinenPage />} />
      <Route path="/amenities" element={<AmenitiesPage />} />
    </Routes>
  );
}
