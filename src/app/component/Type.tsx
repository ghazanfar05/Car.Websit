'use client'
import React from 'react';
import Image from 'next/image'; // Adjust if you're using a different image loader

import { motion } from 'framer-motion'
import { fadein } from '../variants'


const Type = () => {
  return (

    <section className="relative  text-white py-20 overflow-hidden  bg-slate-950 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
      <div className="absolute inset-0">
      </div>

      <div className="relative container mx-auto px-4 text-center">

        <motion.div
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView="show"
        >

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Experience the Future of Driving
          </h1>
        </motion.div>



        <motion.div
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <p className="text-lg md:text-xl mb-6">
            Discover unparalleled performance and advanced technology with our latest model. Designed for those who demand excellence and innovation in every journey.
          </p>

        </motion.div>



        <motion.div
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          
        <button className="px-6 py-3 bg-black hover:bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white rounded-lg shadow-lg  transition-colors duration-300">
          Learn More
        </button>



        </motion.div>









      </div>
    </section>
  );
};

export default Type
