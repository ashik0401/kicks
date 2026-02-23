"use client";

import { useParams } from "next/navigation";
import { useState, useMemo } from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { useApp } from "@/app/context/AppContext";
import { useRouter } from "next/navigation";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { products, addToCart } = useApp();
  const router = useRouter();

  const product = useMemo(
    () => products.find((p) => p.id === Number(id)),
    [products, id],
  );

  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  const sizes = Array.from({ length: 10 }, (_, i) => 38 + i);
  const unavailableSizes = [40, 45];
  const colors = ["black", "red", "blue", "green"];

  const handleAddToCart = () => {
    addToCart(product);
    router.push("/cart");
  };

  return (
    <section className="md:w-10/12 mx-auto px-4 py-8 grid md:grid-cols-2 gap-12 ">
      <div className="w-full">
        {product.images && product.images.length > 0 ? (
          <>
            <div className="hidden md:grid grid-cols-2 gap-4">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className="relative w-full xl:h-75 lg:h-55 md:h-40 overflow-hidden rounded-2xl"
                >
                  <Image
                    src={img || "/placeholder.png"}
                    alt={`${product.title}-${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="md:hidden space-y-4">
              <div className="relative w-full h-100 rounded-2xl overflow-hidden">
                <Image
                  src={product.images[activeImage] || "/placeholder.png"}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex gap-3">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden cursor-pointer border-2 ${
                      activeImage === index
                        ? "border-white"
                        : "border-transparent"
                    }`}
                  >
                    <Image
                      src={img || "/placeholder.png"}
                      alt={`${product.title}-${index}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="relative w-full h-75 bg-gray-200 rounded-2xl" />
        )}
      </div>

      <div className="md:space-y-6 space-y-3">
        <p className="font-semibold text-[12px] bg-[#4A69E2] rounded-xl py-3 px-4 w-30 text-center text-white font-sans ">
          New Release
        </p>

        <h1 className="text-[32px] text-[#232321]  font-semibold">
          {product.title}
        </h1>

        <p className="text-2xl font-semibold text-[#4A69E2]">
          ${product.price}
        </p>

        <div>
          <p className="font-semibold mb-3 text-[#232321] uppercase">Color</p>
          <div className="flex gap-4">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`p-0.5 rounded-full border-2 cursor-pointer ${
                  selectedColor === color
                    ? "border-[#232321]"
                    : "border-transparent"
                }`}
              >
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: color }}
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center uppercase mb-2">
            <p className="font-semibold ">Size</p>
            <p className="font-semibold  border-b">Size chart</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {sizes.map((size) => (
              <button
                key={size}
                disabled={unavailableSizes.includes(size)}
                onClick={() => setSelectedSize(size)}
                className={`py-2 border border-[#232321]  rounded-lg w-[50.25px] h-12 ${
                  selectedSize === size
                    ? "bg-[#232321] text-white"
                    : "bg-white text-[#232321]"
                } ${
                  unavailableSizes.includes(size)
                    ? "opacity-40 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex gap-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[#232321] text-white py-3 cursor-pointer hover:bg-black rounded-lg uppercase"
            >
              Add to Cart
            </button>
            <button className="w-12 h-12 border rounded-lg flex items-center justify-center bg-[#232321] text-white cursor-pointer hover:bg-black">
              <FaRegHeart />
            </button>
          </div>
          <button className="w-full hover:bg-[#1641eb] bg-[#4A69E2] text-white py-3 rounded-lg uppercase cursor-pointer">
            Buy It Now
          </button>
        </div>

        <div>
          <h3 className="text-[#232321] font-semibold mb-3">About the Product</h3>
          <ul className="list-disc pl-5 space-y-2 text-[#232321] font-sans opacity-80">
            <li>{product.description}</li>
            <li>Premium quality materials</li>
            <li>Modern and stylish design</li>
            <li>Durable and long lasting</li>
          </ul>
        </div>
      </div>
    </section>
  );
}