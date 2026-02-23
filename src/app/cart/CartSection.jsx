"use client";

import { useApp } from "@/app/context/AppContext";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaRegHeart } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";

export default function CartPage() {
  const { cartItems, removeFromCart } = useApp();
  const [selectedSizes, setSelectedSizes] = useState({});
  const [quantities, setQuantities] = useState({});
  const [sizeOpen, setSizeOpen] = useState({});
  const [qtyOpen, setQtyOpen] = useState({});

  const handleSizeChange = (id, size) =>
    setSelectedSizes({ ...selectedSizes, [id]: size });
  const handleQuantityChange = (id, qty) =>
    setQuantities({ ...quantities, [id]: qty });

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (quantities[item.id] || 1),
    0
  );

  if (!cartItems.length) {
    return (
      <section className="md:w-10/12 mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-semibold text-[#232321] mb-2">
          Your Cart is Empty
        </h1>
        <p className="text-gray-500">Add some products to see them here</p>
      </section>
    );
  }

  return (
    <section className="md:w-10/12 mx-auto px-4 ">
      <div className="mb-8 space-y-2">
        <h1 className="text-[32px] font-semibold text-[#232321]">
          Saving to celebrate{" "}
        </h1>
        <p className="text-[#232321] font-sans text-sm font-semibold opacity-80">
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while suppiles last. No code needed.
        </p>
        <p className="font-semibold font-sans text-[#232321] opacity-80">
          <span className="underline">Join us </span> or{" "}
          <span className="underline">Sign-in</span>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center ">
        <div className="flex-1 bg-white rounded-2xl p-4 ">
          <div className="mb-5">
            <h1 className="text-[#232321] font-semibold text-[32px]">
              Your Bag
            </h1>
            <p className="text-[#232321] font-sans opacity-80">
              Items in your bag not reserved- check out now to make them yours.
            </p>
          </div>

          <div className="space-y-15 max-h-[50vh] overflow-y-scroll scrollbar-hide">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4  ">
                <div className="relative w-32  rounded-xl  overflow-hidden">
                  <Image
                    src={item.images?.[0] || "/placeholder.png"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <h2 className="md:text-2xl font-semibold text-[#232321] ">
                        {item.title}
                      </h2>
                      <p className="text-[#4A69E2] md:text-2xl font-semibold">
                        ${item.price}
                      </p>
                    </div>
                    <p className="text-[#232321] text-sm md:text-xl font-semibold opacity-80 font-sans">
                      {item.description?.slice(0, 60)}...
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 md:text-xl font-semibold font-sans">
                        <div className="relative w-20">
                      <button
                        onClick={() =>
                          setSizeOpen({ ...sizeOpen, [item.id]: !sizeOpen[item.id] })
                        }
                        className=" py-1  flex justify-between  items-center text-[#232321] opacity-80 w-full cursor-pointer"
                      >
                        {selectedSizes[item.id] || "Size"}
                        <FaChevronDown className="ml-2 text-gray-500" />
                      </button>
                      {sizeOpen[item.id] && (
                        <div className="absolute z-10 top-full border rounded-lg border-gray-300 left-0 w-full bg-white  ">
                          {Array.from({ length: 10 }, (_, i) => 38 + i).map(
                            (size) => (
                              <div
                                key={size}
                                onClick={() => {
                                  handleSizeChange(item.id, size);
                                  setSizeOpen({ ...sizeOpen, [item.id]: false });
                                }}
                                className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                              >
                                {size}
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>

                    <div className="relative ">
                      <button
                        onClick={() =>
                          setQtyOpen({ ...qtyOpen, [item.id]: !qtyOpen[item.id] })
                        }
                        className="px-3 py-1  flex justify-between items-center text-[#232321] opacity-80 w-full cursor-pointer"
                      >
                        {quantities[item.id] || 'Quantity 1'}
                        <FaChevronDown className="ml-2 text-gray-500 " />
                      </button>
                      {qtyOpen[item.id] && (
                        <div className="absolute z-10 top-full left-0 w-full bg-white border rounded-lg border-gray-300">
                          {Array.from({ length: 10 }, (_, i) => i + 1).map(
                            (qty) => (
                              <div
                                key={qty}
                                onClick={() => {
                                  handleQuantityChange(item.id, qty);
                                  setQtyOpen({ ...qtyOpen, [item.id]: false });
                                }}
                                className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                              >
                                {qty}
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>

                    </div>
                    <div className="space-x-5 ">
                        <button className=" text-[#232321] text-2xl md:text-3xl">
                      <FaRegHeart   />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className=" text-[#232321] text-2xl md:text-3xl"
                    >
                      <RiDeleteBin2Line   />
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-2/5 w-full bg-white md:bg-transparent  p-6 rounded-xl flex flex-col gap-4">
          <h2 className="text-[32px] font-semibold text-[#232321]">Order Summary</h2>
          <div className="flex justify-between text-[#232321] font-semibold font-sans text-xl uppercase">
            <span className="opacity-80">{cartItems.length} Items</span>
            <span className="opacity-80">${totalPrice}</span>
          </div>
          <div className="flex justify-between text-[#232321] font-semibold font-sans text-xl">
            <span>Delivery</span>
            <span className="opacity-80">$5</span>
          </div>
          <div className="flex justify-between text-[#232321] font-semibold font-sans text-xl">
            <span>Sales Tax</span>
            <span className="opacity-80">-</span>
          </div>
          <div className="flex justify-between text-[#232321] font-sans  font-bold text-2xl mt-2">
            <span >Total</span>
            <span className="opacity-80">${totalPrice + 5}</span>
          </div>
          <button className="bg-[#232321] text-white py-3 cursor-pointer rounded-lg mt-4 uppercase">
            Checkout
          </button>
          <div className="mt-4">
            <p className="text-[#232321] text-xl font-semibold font-sans underline">Have a promo code?</p>
           
          </div>
        </div>
      </div>
    </section>
  );
}