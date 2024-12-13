import React from 'react';
import cardimg1 from '../img/cardimg1.png';
import Cardimg2 from '../img/Cardimg2.png';
import Cardimg3 from '../img/Cardimg3.png';
import Oval from '../img/Oval.png'; // Ensure this file exists
import Oval2 from '../img/Oval2.png'; // Ensure this file exists
import Oval3 from '../img/Oval3.png'; // Ensure this file exists

const details = [
  {
    img: cardimg1,
    heading: '2021 Cadillac Escalade',
    paragraph: 'The 2021 Escalade is a technological showcase and a worthy claimant of the flagship American luxury vehicle title.',
    profileName: 'John Doe',
    profileimg: Oval,
    rating: 4.5,
  },
  {
    img: Cardimg2,
    heading: '2021 Hyundai Elantra',
    paragraph: 'If developing a car was a marathon technological showcase, Hyundai didn’t run the last mile with the 2021 Elantra.',
    profileName: 'Jane Smith',
    profileimg: Oval2,
    rating: 4.2,
  },
  {
    img: Cardimg3,
    heading: '2021 Mercedes-Benz GLA250',
    paragraph: 'The new entry point into Mercedes-Benz’s SUV lineup is bigger and improved, but still features a frustrating powertrain.',
    profileName: 'Alex Johnson',
    profileimg: Oval3,
    rating: 4.7,
  },
];

function RecentView() {
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
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={item.img}
                  alt={item.heading}
                  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.heading}</h2>
                <p className="text-sm text-gray-600 mb-3">{item.paragraph}</p>
                <div className="flex items-center justify-between mt-4">
                  {/* Profile Section */}
                  <div className="flex items-center">
                    <img
                      src={item.profileimg}
                      alt={item.profileName}
                      className="h-10 w-10 rounded-full border border-gray-300 object-cover"
                    />
                    <span className="ml-3 text-gray-800 font-medium">{item.profileName}</span>
                  </div>
                  {/* Rating Section */}
                  {/* <div className="flex items-center text-yellow-500">
                    <FaStar />
                    <span className="ml-1 text-gray-700">{item.rating.toFixed(1)}</span>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentView;
