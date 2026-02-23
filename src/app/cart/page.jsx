import React from "react";
import Navbar from "../components/Navbar";
import CartPage from "./CartSection";
import AllProducts from "../product/AllProducts";
import Footer from "../components/Footer";

export default function page() {
  return (
    <div className="bg-[#23232120]">
      <Navbar />
      <CartPage />
      <AllProducts />
      <Footer />
    </div>
  );
}
