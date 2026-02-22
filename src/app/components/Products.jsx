"use client";

import Image from "next/image";
import { useApp } from "../context/AppContext";

export default function Products() {
  const { products, addToCart } = useApp();

  const latestProducts = products.slice(-4).reverse();

  return (
    <section className="md:w-10/12 mx-auto px-4 pb-32 mt-22.5">
      <div className="">
        <div className="relative flex justify-between items-center ">
          <h2 className="font-semibold uppercase xl:text-[74px] text-2xl text-[#232321] mb-8 lg:text-[55px] md:text-[40px]">
            Don’t miss out <br /> new drops
          </h2>
          <button className="text-sm font-medium bg-[#4A69E2] px-4 py-4 text-white rounded-lg  absolute right-0 bottom-10 uppercase tracking-wider">
            Shop new drops
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {latestProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col   overflow-hidden  transition"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={product.images?.[0] || "/placeholder.png"}
                  alt={product.title}
                  fill
                  className="object-cover border-4 rounded-3xl border-white "
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <p className="text-[12px] font-semibold md:py-3 py-1  md:px-4 px-2 text-center border-t-4 border-l-4 bg-[#4A69E2] rounded-tl-3xl text-white rounded-br-3xl absolute">
                new
              </p>
              <div className="flex flex-col flex-1 py-2">
                <h3 className="text-[#232321]md:text-2xl font-semibold line-clamp-2 min-h-12">
                  {product.title}
                </h3>

                <div className=" ">
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition cursor-pointer "
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
