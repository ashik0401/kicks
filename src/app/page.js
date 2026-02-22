import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/home/HeroSection";
import ProductsSection from "./sections/home/ProductsSection";
import CategorySection from "./sections/home/CategorySection";
import ReviewsSection from "./sections/home/ReviewsSection";

export default function Home() {
  return (
    <>
      <div className="bg-[#23232120]">
        <Navbar />
        <HeroSection />
        <ProductsSection />
        <CategorySection />
        <ReviewsSection />
      </div>
    </>
  );
}
