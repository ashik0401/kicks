"use client";

import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useApp } from "@/app/context/AppContext";

export default function SearchSidebar({ isOpen, onClose }) {
  const { searchQuery, setSearchQuery, products, addToCart } = useApp();
  const router = useRouter();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  const handleClose = () => {
    setSearchQuery("");
    onClose();
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-300">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          className="flex-1 outline-0 px-4 py-2 rounded-lg "
        />
        <button
          onClick={handleClose}
          className="ml-2 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <IoClose size={24} />
        </button>
      </div>

      <div className="p-4 overflow-y-auto h-[calc(100%-64px)] space-y-4">
        {searchQuery.trim() && filteredProducts.length === 0 && (
          <p className="text-gray-500 text-center mt-4">No products found.</p>
        )}

        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
          >
            <div
              className="relative w-16 h-16 shrink-0"
              onClick={() => {
                router.push(`/products/${product.id}`);
                handleClose();
              }}
            >
              <Image
                src={product.images?.[0] || "/placeholder.png"}
                alt={product.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <p
                className="font-semibold truncate cursor-pointer"
                onClick={() => {
                  router.push(`/products/${product.id}`);
                  handleClose();
                }}
              >
                {product.title}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="mt-1 w-full bg-black text-white py-1 rounded-lg text-sm hover:bg-gray-900 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}