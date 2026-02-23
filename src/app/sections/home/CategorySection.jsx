import axios from "axios";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward, IoMdArrowUp } from "react-icons/io";

async function Categories() {
  try {
    const res = await axios.get("https://api.escuelajs.co/api/v1/categories?limit=2");
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function CategorySection() {
  const categories = await Categories();

  if (!categories || categories.length === 0) return null;

  return (
    <section className="w-full bg-[#232321] text-white">
      <div className="pt-20">
        <div className="flex items-center justify-between md:w-10/12 px-4 mx-auto mb-10">
          <h2 className="text-2xl md:text-[74px] font-semibold tracking-wider">Categories</h2>
          <div className="flex items-center gap-3 text-black">
            <button className="md:w-10 w-9 md:h-10 h-9 flex items-center justify-center cursor-pointer rounded-lg bg-[#E7E7E3] hover:bg-white transition">
              <IoIosArrowBack size={16} />
            </button>
            <button className="md:w-10 w-9 md:h-10 h-9 flex items-center cursor-pointer justify-center rounded-lg bg-white transition">
              <IoIosArrowForward size={16} />
            </button>
          </div>
        </div>

        <div className="md:flex md:w-11/12 mx-auto mr-0 pl-4">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`relative flex-1 overflow-hidden h-85 xl:h-200 lg:h-170 ${
                index === 0 ? "md:rounded-tl-[64px] rounded-tl-3xl" : ""
              }`}
            >
              <div className="relative w-full h-full bg-[#232321]">
                <Image
                  src={category.image || "/placeholder.png"}
                  alt={category.name || "Category"}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover  "
                  priority={index < 2}
                />
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <h3 className=" xl:text-[36px]  font-semibold  uppercase text-black text-2xl lg:text-3xl">
                  {category.name}
                </h3>
                <button className="text-white bg-[#232321] rounded-lg  cursor-pointer flex justify-center items-center  md:w-12 md:h-12">
                  <IoMdArrowUp  className="rotate-45 text-2xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}