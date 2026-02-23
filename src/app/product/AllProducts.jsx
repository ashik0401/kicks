"use client";

import Image from "next/image";
import Link from "next/link";
import { useApp } from "../context/AppContext";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AllProducts() {
  const { products, addToCart } = useApp();
  const perPage = 4;
  const [page, setPage] = useState(0);
  const router = useRouter();

  const totalPages = Math.ceil(products.length / perPage);
  const startIndex = page * perPage;
  const endIndex = startIndex + perPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <section className="md:w-10/12 mx-auto px-4 py-25  md:mt-22.5">
      <div>
        <div className="relative flex justify-between items-center mb-6">
          <h2 className="font-semibold uppercase lg:text-[48px] text-2xl text-[#232321] md:text-[40px]">
            You may also like
          </h2>
          <div className="flex items-center gap-3 text-black">
            <button
              disabled={page === 0}
              onClick={() => setPage(page - 1)}
              className={`md:w-10 w-9 md:h-10 h-9 flex items-center justify-center  rounded-lg transition ${
                page === 0
                  ? "bg-gray-300  cursor-not-allowed"
                  : "bg-[#232321] hover:bg-black cursor-pointer text-white"
              }`}
            >
              <IoIosArrowBack size={16} />
            </button>
            <button
              disabled={page + 1 >= totalPages}
              onClick={() => setPage(page + 1)}
              className={`md:w-10 w-9 md:h-10 h-9 flex items-center justify-center  rounded-lg transition ${
                page + 1 >= totalPages
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-[#232321] hover:bg-black cursor-pointer text-white"
              }`}
            >
              <IoIosArrowForward size={16} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => {
            const handleClick = (e) => {
              e.preventDefault();
              addToCart(product);
              router.push("/cart");
            };
            return (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="flex flex-col overflow-hidden transition relative cursor-pointer"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={product.images?.[0] || "/placeholder.png"}
                    alt={product.title}
                    fill
                    className="object-cover border-4 rounded-3xl border-white"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <p className="text-[12px] font-semibold md:py-3 py-1 md:px-4 px-2 text-center border-t-4 border-l-4 bg-[#4A69E2] rounded-tl-3xl text-white rounded-br-3xl absolute top-0 left-0">
                  new
                </p>

                <div className="flex flex-col flex-1 py-2 justify-between">
                  <h3 className="text-[#232321] md:text-2xl font-semibold line-clamp-2 min-h-12">
                    {product.title}
                  </h3>
                  <button
                    onClick={handleClick}
                    className="w-full bg-[#232321] text-white py-2 rounded-lg hover:bg-black transition cursor-pointer mt-2"
                  >
                    Add to Cart
                  </button>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              className={`w-5 h-1 rounded-full transition ${
                page === i ? "bg-[#4A69E2]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}