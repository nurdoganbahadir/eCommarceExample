"use client";
import { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {" "}
      <div className="relative w-full " data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96 border-2 rounded-md">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                currentIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                className="block w-full h-full object-contain"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handlePrev}
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white">
            <svg
              className="w-2 h-2 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white">
            <svg
              className="w-2 h-2 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div className="flex justify-center space-x-6 my-10">
        {images.map((images, index) => (
          <img
            src={images}
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`w-16 h-20 rounded-md border-2 ${
              currentIndex === index ? "border-lastColor" : "bg-white"
            }`}
            aria-current={currentIndex === index}
            aria-label={`Slide ${index + 1}`}
          ></img>
        ))}
      </div>
    </>
  );
};

export default Carousel;
