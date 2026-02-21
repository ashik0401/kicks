import Image from "next/image";

async function getProducts() {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=4",
    { next: { revalidate: 60 } },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function ProductsSection() {
  const products = await getProducts();

  return (
    <section className="w-full pb-32 mt-22.5">
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
          {products.map((product) => (
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
              <p className="text-[12px] font-semibold md:py-3 py-1  md:px-4 px-2 text-center border-t-4 border-l-4 bg-[#4A69E2] rounded-tl-3xl text-white rounded-br-3xl absolute">new</p>
              <div className="flex flex-col flex-1 py-2">
                <h3 className="text-[#232321]md:text-2xl font-semibold line-clamp-2 min-h-12">
                  {product.title}
                </h3>

                <div className=" ">
                  <button className="w-full bg-[#232321] text-white py-2.5 rounded-lg hover:bg-black cursor-pointer text-sm font-medium uppercase transition">
                    View Product - <span className="text-[#FFA52F]">$125</span>
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
