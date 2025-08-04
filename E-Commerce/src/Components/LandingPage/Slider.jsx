import React, { useState, useEffect } from 'react';
import carousel1 from '../../Images/carousel1.jpg';
import carousel2 from '../../Images/carousel2.jpg';
import carousel3 from '../../Images/carousel3.jpg';

const Slider = () => {
  const images = [carousel1, carousel2, carousel3];
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // ✅ Auto-slide effect
useEffect(() => {
  const interval = setInterval(() => {
    setIndex(prev => (prev + 1) % images.length);
  }, 4000);

  return () => clearInterval(interval);
}, [images.length]);


  return (
    <div className="w-full max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 relative rounded-lg sm:rounded-xl overflow-hidden shadow-lg h-[200px] sm:h-[350px] md:h-[450px] lg:h-[420px] transition-all duration-500">
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="w-full h-full object-cover object-center transition duration-500 ease-in-out"
      />

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 sm:left-6 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black text-lg sm:text-2xl rounded-full p-1 sm:p-2 shadow-md transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 sm:right-6 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black text-lg sm:text-2xl rounded-full p-1 sm:p-2 shadow-md transition"
      >
        ❯
      </button>
    </div>
  );
};

export default Slider;
