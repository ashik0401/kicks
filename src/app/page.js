import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/home/HeroSection";
import ProductsSection from "./sections/home/ProductsSection";

export default function Home() {
  return (
    <>
      <div className="bg-[#23232120]">
        <div className="md:w-10/12 mx-auto px-4">
          <Navbar />
          <HeroSection/>
          <ProductsSection/>
        </div>
      </div>
    </>
  );
}
