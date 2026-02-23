"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const visibleReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section className="md:w-10/12 px-4 mx-auto py-20">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl md:text-[74px] font-semibold uppercase text-[#232321]">
          Reviews
        </h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-2 bg-[#4A69E2] text-sm text-white rounded-lg hover:bg-[#2648d3] font-medium transition uppercase cursor-pointer"
        >
          {showAll ? "Show less" : "See all"}
        </button>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {visibleReviews.map((review, index) => (
          <div
            key={review.id}
            className={`bg-white rounded-4xl shadow-md overflow-hidden flex flex-col ${
              !showAll && index !== 0 ? "hidden md:flex" : ""
            }`}
          >
            <div className="p-6 flex justify-between gap-4 bg-[#FAFAFA]">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold mb-2 text-[#232321] text-[24px] line-clamp-1">
                    {review.title}
                  </h3>
                  <p className="text-[#232321] mb-4 font-sans line-clamp-2 opacity-80">
                    {review.description}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-500 text-xl">
                    {"★★★★★".slice(0, review.rating)}
                  </div>
                  <span className="text-[#232321] font-semibold font-sans">
                    {review.rating}.0
                  </span>
                </div>
              </div>

              <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                <Image
                  src={review.profile}
                  alt={review.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="relative w-full xl:h-81.5 lg:h-50 sm:h-90 h-70">
              <Image
                src={review.product}
                alt={review.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}