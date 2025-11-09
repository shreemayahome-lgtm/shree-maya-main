import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import TowelsHero from "./components/TowelsHero";
import ProductCategories from "./components/ProductCategories";
import MoreCategories from "./components/MoreCategories";
import FeaturedProducts from "./components/FeaturedProducts";
import IconMarquee from "./components/IconMarquee";
import AppRoutes from "./Router/AppRoutes";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <AppRoutes/> 
      <Footer />
      {/* <HeroSection />
            <ProductCategories />
            <IconMarquee />
            <FeaturedProducts />
            <MoreCategories /> */}
    </div>
  );
}