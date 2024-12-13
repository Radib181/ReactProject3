import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material"; // Modern Slider Icons
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from '../img/img3.png'

const slides = [
  {
    id: 1,
    title: "Welcome to ACME",
    description: "Innovating the future, one step at a time.",
    image: img1,
  },
  {
    id: 2,
    title: "Explore Our Products",
    description: "Quality and precision in every detail.",
    image: img2,
  },
  {
    id: 3,
    title: "Join Our Journey",
    description: "Empowering communities worldwide.",
    image:img3,
  },
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full py-10 bg-gray-50 pt-16 overflow-hidden ">
      {/* Carousel Container */}
      <div className="relative w-11/12 max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg">
        {/* Current Slide */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 w-full h-96 flex flex-col justify-center items-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center text-center px-6">
                <h1 className="text-3xl md:text-4xl text-white font-bold mb-3">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white mb-5">
                  {slide.description}
                </p>
                <Button
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                  color="primary"
                  variant="flat"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2  text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
          onClick={handlePrev}
        >
          <ChevronLeft fontSize="large" />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2  text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
          onClick={handleNext}
        >
          <ChevronRight fontSize="large" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-5 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-blue-500" : "bg-gray-300"
            } transition`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
