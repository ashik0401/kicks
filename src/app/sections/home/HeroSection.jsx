"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import HERO_IMAGE from "../../../../public/HeroImage.json";

export default function HeroSection() {
  const [active, setActive] = useState(HERO_IMAGE[0]);

  const thumbnails = useMemo(
    () => HERO_IMAGE.filter((item) => item.id !== active.id),
    [active.id]
  );

  return (
    <section className="md:w-10/12 mx-auto px-4">
      <section className="w-full flex justify-center items-center overflow-hidden mb-6">
        <h1 className="uppercase font-bold text-[14vw] leading-none whitespace-nowrap tracking-wider w-full text-center">
          Do it <span className="text-[#4A69E2]">right</span>
        </h1>
      </section>

      <section className="relative h-112.5 md:h-140 xl:h-187.5 rounded-4xl md:rounded-[64px] overflow-hidden text-white">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="absolute inset-0"
          >
            <Image
              src={active.src}
              alt={active.title || "Hero background"}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-black/10" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-8 md:top-12 z-30">
          <p className="uppercase text-[12px] md:text-xs font-medium [writing-mode:vertical-rl] rotate-180 p-2 bg-[#232321]">
            Nike product of the year
          </p>
        </div>

        <div className="relative z-20 flex h-full w-full p-6 md:flex-row items-end justify-between md:p-8 lg:p-12 xl:p-18">
          <div className="">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className=" text- md:text-[40px] font-semibold uppercase tracking-widest lg:text-[50px] xl:text-[74px] text-[24px]">
                NIKE AIR MAX
              </span>
              <h2 className="font-semibold font-sans text-[#E7E7E3] md:text-[24px] text-sm">
                Nike introducing the new air max for everyone's comfort
              </h2>
              <button className="mt-5 rounded-full bg-[#4A69E2] md:px-8 md:py-3 px-4 py-2 backdrop-blur-md transition-all hover:bg-[#4A69E280] uppercase font-medium cursor-pointer text-sm md:text-xl">
                Shop Now
              </button>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4 self-end">
            {thumbnails.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item)}
                className="group relative  h-16 w-16 md:h-20 md:w-20 lg:h-25 lg:w-25 overflow-hidden rounded-lg md:rounded-3xl transition-all duration-500 hover:scale-105 cursor-pointer border-2 border-white/20 shadow-2xl"
              >
                <Image
                  src={item.src}
                  alt={item.title || "product image"}
                  fill
                  sizes="(max-width: 768px) 150px, 300px"
                  placeholder="blur"
                  blurDataURL={item.blur || "/placeholder.png"}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 group-hover:bg-transparent transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}