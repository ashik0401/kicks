import React from "react";
import ProductDetailsPage from "../ProductsDetailsPage";
import AllProducts from "../AllProducts";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function page() {
  return (
    <div className="bg-[#23232120]">
      <Navbar />
      <ProductDetailsPage />
      <AllProducts />
      <Footer />
    </div>
  );
}
