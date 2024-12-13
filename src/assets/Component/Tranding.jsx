import React from 'react';
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';


const details = [
  {
    img: img1,
    heading: 'Used 2019 Audi S4 Premium Plus',
    paragraph: '11,475 Miles',
    translation: "AWD",
    cylinders: "4-Cylinder Turbo",
    price: "$41,400",
  },
  {
    img: img2,
    heading: 'Used 2019 Audi S4 Premium Plus',
    paragraph: '11,475 Miles',
    translation: "AWD",
    cylinders: "4-Cylinder Turbo",
    price: "$41,400",
  },
  {
    img: img3,
    heading: 'Used 2019 Audi S4 Premium Plus',
    paragraph: '11,475 Miles',
    translation: "AWD",
    cylinders: "4-Cylinder Turbo",
    price: "$41,400",
  },
];

function Trending() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Trending Near You</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {details.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="overflow-hidden rounded-t-lg">/
                <img
                  src={item.img}
                  alt={item.heading}
                  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.heading}
                </h2>
                <p className="text-sm text-gray-600 mb-1">{item.paragraph}</p>
                <p className="text-sm text-gray-600 mb-1">{item.translation}</p>
                <p className="text-sm text-gray-600 mb-3">{item.cylinders}</p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-gray-900">{item.price}</p>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 hover:shadow-md transition">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

   
    </section>
  );
}

export default Trending;
