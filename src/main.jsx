import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Privacy from "./Components/Privacy.jsx";
import Consultation from "./Components/ConsultationForm";
import WholesaleInquiriesForm from "./Components/WholesaleInquiriesForm";
import ProductsPage from "./Components/ProductsPage";
import AboutUs from "./Components/AboutUs.jsx";
import CartPage from "./Components/CartPage.jsx";
import CheckoutPage from "./Components/CheckoutPage.jsx";
import Careers from "./Components/Careers.jsx";
import Terms from "./Components/Terms.jsx";
import Press from "./Components/Press.jsx"; 
export function AppRouter() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/consultation" element={<Consultation />} />
        <Route path="/wholesale" element={<WholesaleInquiriesForm />} />
        <Route
          path="/products"
          element={<ProductsPage cart={cart} setCart={setCart} />}
        />
        <Route
          path="/products/:category"
          element={<ProductsPage cart={cart} setCart={setCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} setCart={setCart} />}
        />
        <Route
          path="/checkoutPage"
          element={<CheckoutPage cart={cart} setCart={setCart} />}
        />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
