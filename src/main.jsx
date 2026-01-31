import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUsPage from "./Components/ContactUsPage";
import Consultation from "./Components/ConsultationForm";
import WholesaleInquiriesForm from "./Components/WholesaleInquiriesForm";
import ProductsPage from "./Components/ProductsPage";
import AboutUs from "./Components/AboutUs.jsx";
import CartPage from "./Components/CartPage.jsx"
import CheckoutPage from "./Components/CheckoutPage.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/wholesale" element={<WholesaleInquiriesForm />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:category" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage/>} />
<Route path="checkoutPage" element={<CheckoutPage/>} />
          <Route path="/about" element={<AboutUs/>} />


      </Routes>
    </BrowserRouter>
  </StrictMode>
);
