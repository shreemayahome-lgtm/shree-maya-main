import Navbar from "./components/Navbar";
import AppRoutes from "./Router/AppRoutes";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import ExploreMore from "./components/ExploreMore";
import { useLocation } from "react-router-dom";
export default function App() {
  const location = useLocation();
  return (

    <div className="overflow-x-hidden">
      <Navbar />
      <AppRoutes />
      {location.pathname !== "/" && <ExploreMore />}
<WhyChooseUs/>
      <Footer />
    </div>
  );
}
