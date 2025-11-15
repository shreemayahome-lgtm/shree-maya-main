import Navbar from "./components/Navbar";
import AppRoutes from "./Router/AppRoutes";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}
