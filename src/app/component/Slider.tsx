'use client'
import Image from "next/image";
import React, { useState, useEffect } from 'react';


import { motion } from 'framer-motion'
import { fadein } from '../variants'





export const Slider = () => {
  const images = [
    { src: '/dev3.png', alt: 'Image 1', width: 2000, height: 300 },
    { src: '/dev4.png', alt: 'Image 2', width: 2000, height: 300 },
    { src: '/dev12.png', alt: 'Image 3', width: 2000, height: 300 },
    { src: '/dev7.png', alt: 'Image 4', width: 2000, height: 300 },
    { src: '/dev6.png', alt: 'Image 5', width: 2000, height: 300 },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden h-screen">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1920}
              height={300}
              quality={100}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <section className="flex flex-col items-center justify-center min-h-screen inset-0 absolute p-6">
        <motion.div
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <h1
            className="relative text-6xl md:text-6xl font-extrabold text-white mb-2 text-center"
            
          >
            Welcome to Our New CARS.
          </h1>
        </motion.div>
        <motion.div
          variants={fadein("down", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <p className="text-white font-bold mb-2">Are you talking about a new car you just got, or are you referring to something else?</p>
        </motion.div>
        <motion.div
          variants={fadein("right", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <button className="px-4 py-2 md:px-6 md:py-3 bg-black hover:bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white rounded-lg shadow-md  hover:text-white transition-colors duration-300">
            Learn More
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Slider;
