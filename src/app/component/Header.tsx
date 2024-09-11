
'use client'
import React from 'react';
import { motion } from 'framer-motion'
import { fadein } from '../variants'

const Header = () => {
  return (
   
    <div className="min-h-screen w-full bg-slate-950 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] px-5 py-24">
      <motion.div
        className="p-8"
        variants={fadein('right', 0.6)}
        initial="hidden"
        whileInView="show"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2"
            variants={fadein('down', 0.6)}
            initial="hidden"
            whileInView="show"
          >
            <h1 className="text-4xl font-bold mb-4 text-white">Best Car Service</h1>
            <p className="text-lg mb-4 text-white">
              A regular service schedule can help keep your car running at its best. A regular service schedule can help keep your car running at its best.
            </p>
            <motion.button
              className="bg-black hover:bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white font-bold py-2 px-4 rounded"
              variants={fadein('right', 0.6)}
              initial="hidden"
              whileInView="show"
            >
              Read More
            </motion.button>
          </motion.div>
          <motion.div
            className="md:w-1/2 relative overflow-hidden mt-8"
            variants={fadein('up', 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <img
              src="dev5.png"
              alt="Red sports car"
              className="rounded-lg w-full h-auto object-cover"
            />
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-black opacity-40"
              variants={fadein('up', 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header
