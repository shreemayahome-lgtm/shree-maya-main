import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AnimatePresence mode="wait">
      <App />
    </AnimatePresence>
  </BrowserRouter>
);
