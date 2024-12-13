import React from "react";
import Bitmap from "../img/Bitmap.png";
import iconimg from "../img/iconimg.png"
import iconImg2 from "../img/iconImg2.png"

const exploreData = [
  { img: Bitmap, name: "Subaru", price: "from $40k" },
  { img: iconimg, name: "Toyota", price: "from $25k" },
  { img: iconImg2, name: "Honda", price: "from $30k" },
  { img: Bitmap, name: "BMW", price: "from $50k" },
  { img: Bitmap, name: "Audi", price: "from $45k" },
  { img: Bitmap, name: "Mercedes", price: "from $60k" },
];

function Explore() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Explore Brands</h1>
          <p className="text-gray-600 mt-2 text-base">Discover top car brands and their starting prices</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols- gap-6">
          {exploreData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center  p-4 transition-shadow duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-12 w-12 rounded-full   object-cover border-4 border-gray-200 group-hover:border-blue-400"
              />
              <div className="ml-4">
                <h4 className="font-semibold text-gray-800 leading-snug">{item.name}</h4>
                <span className="text-sm text-gray-500">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Explore;
