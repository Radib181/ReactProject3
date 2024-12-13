import React from 'react';
import map1 from "../img/map1.png";

function MapImg() {
  return (
    <section className="bg-gray-50 py-10">
      <div className=" mx-auto px-5">
        {/* Heading */}
        <h1 className="text-center text-3xl sm:text-5xl text-gray-800 font-bold ">
          Find Vehicles Near You
        </h1>

        {/* Map Image */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
          <img 
            src={map1}
            alt="Map illustration"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center  p-6 rounded-lg bg-white shadow-md">
          {/* Left Section */}
          <div className="flex flex-wrap space-x-5 text-center md:text-left">
            <a
              href="#privacy"
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Terms of Use
            </a>
            <span className="text-gray-600 font-medium">
              © 2021 All rights reserved
            </span>
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end items-center space-x-5">
            <button className="text-gray-600 hover:text-gray-800 font-medium">
              English
            </button>
            <button className="text-gray-600 hover:text-gray-800 font-medium">
              ...
            </button>
            <button className="text-gray-600 hover:text-gray-800 font-medium">
              🤑 USD
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapImg;
