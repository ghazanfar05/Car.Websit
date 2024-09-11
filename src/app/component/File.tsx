'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { fadein } from '../variants';

const File = () => {
  const features = [
    { icon: '🚗', title: 'Sporty Design', description: 'Sleek and modern aesthetics for a standout look.' },
    { icon: '⚡', title: 'Electric Power', description: 'High-performance electric engine with zero emissions.' },
    { icon: '🛠️', title: 'Advanced Safety', description: 'Equipped with the latest safety technologies and features.' },
    { icon: '📱', title: 'Smart Connectivity', description: 'Seamless integration with your devices for a smarter drive.' }
  ];

  return (
    <section className="py-12 bg-slate-950 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
      <div className="container mx-auto px-4 text-white">
        <motion.div
          variants={fadein("down", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Car Features</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-slate-900  bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] hover:bg-gray-950 p-6 rounded-lg shadow-current text-center"
              variants={fadein("up", 0.2 + index * 0.1)} // Slight delay for stagger effect
              initial="hidden"
              whileInView="show"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-white">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Separate Box with Framer Motion */}
        <motion.div
          className="mt-8 bg-slate-900 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] hover:bg-gray-950 p-6 rounded-lg shadow-current text-center"
          variants={fadein("up", 0.6)} // Custom animation variant with delay
          initial="hidden"
          whileInView="show"
        >
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl mb-2">Separate Feature</h3>
          <p className="text-white">This is a separate feature not included in the mapped items.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default File
