'use client'
import React from 'react';
import { motion } from 'framer-motion'
import { fadein } from '../variants'

function Hero() {
  return (
    <div className="min-h-screen w-full px-4 py-8 bg-slate-950 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <h1 className="text-4xl font-bold text-center mb-8 text-white sm:text-3xl">
            Website Templates and Landing Pages
          </h1>

        </motion.div>



        <motion.div
          variants={fadein("right", 0.2)}
          initial="hidden"
          whileInView="show"
        >
         <p className="text-lg text-center mb-8 text-white sm:text-base">
          Launch your fully-functional Website within hours. SEO friendly Website Templates with Fast Page Speed. Built with HTML5, React, Next.js, Astro, TailwindCSS & Sanity CMS.
        </p>  
        </motion.div>




        <motion.div
          variants={fadein("left", 0.2)}
          initial="hidden"
          whileInView="show"
        >
           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button className="bg-black hover:bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]  text-white py-2 px-4 rounded-md w-full sm:w-auto">
            Browse All Templates
          </button>
          <button className=" bg-black hover:bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white py-2 px-4 rounded-md w-full sm:w-auto">
            Component Library
          </button>
        </div>
        </motion.div>


       
        <motion.div
          variants={fadein("left", 0.2)}
          initial="hidden"
          whileInView="show"
        >
            <div className="bg-slate-900 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]  p-4 rounded-md shadow-md mb-8">
          <p className="text-lg text-white">“</p>
          <p className="text-lg mt-2 text-white">
            The template was a pleasure. It had the right premade components, allowing us to inject our own designs and styles. We never had trouble modifying it to suit our needs.
          </p>
          <p className="text-sm mt-2 text-gray-400">
            — Josh Beck bought Astroship Pro
          </p>
        </div>
          
        </motion.div>



      </div>
    </div>
  );
}

export default Hero











