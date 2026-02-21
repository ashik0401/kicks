import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/home/HeroSection";

export default function Home() {
  return (
    <>
      <div className="bg-[#23232120]">
        <div>
          <Navbar />
          <HeroSection/>
        </div>
      </div>
    </>
  );
}
