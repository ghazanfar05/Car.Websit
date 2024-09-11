'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';

import { motion } from 'framer-motion'
import { fadein } from '../variants'

function Line() {
  const [email, setEmail] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted:', email);
  };

  return (
    <div className="bg-slate-950 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-3xl font-bold mb-6 text-white text-center"
          variants={fadein('down', 0.6)}
          initial="hidden"
          whileInView="show"
        >
          Car Sales Proposal
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Animated sections */}
          {['Terms and Conditions:', 'Proposal Overview:', 'Vehicle Features and Specifications:'].map((title, index) => (
            <motion.div
              key={index}
              className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg"
              variants={fadein('up', index * 0.6)}
              initial="hidden"
              whileInView="show"
            >
              <h2 className="text-xl font-bold mb-2">{title}</h2>
              <p className="text-sm">
                {/* Sample text */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a href="#" className="text-gray-500 hover:text-gray-600 font-bold text-sm mt-2 inline-block">
                Learn More &gt;
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12"
          variants={fadein('up', 0.6)}
          initial="hidden"
          whileInView="show"
        >
          <h2 className="text-2xl text-white mb-4">Sign Up to the Weekly Newsletter</h2>
          <p className="mb-6">Get insights & More about everything the Design world has to offer.</p>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <motion.input
              type="email"
              placeholder="SignUp@Gmail.com"
              value={email}
              onChange={handleChange}
              className="bg-neutral-950 p-6 rounded-lg shadow-md text-white mb-4"
              variants={fadein('up', 0.8)}
              initial="hidden"
              whileInView="show"
            />
            <motion.button
              type="submit"
              className="bg-black hover:bg-neutral-950 p-6 shadow-md text-white rounded-md"
              variants={fadein('left', 0.8)}
              initial="hidden"
              whileInView="show"
            >
              Contact Me
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className="mt-12 text-center text-sm text-white"
          variants={fadein('up', 1.2)}
          initial="hidden"
          whileInView="show"
        >
          <p className="text-2xl">Insert. All rights reserved.</p>
          <div className="flex justify-center mt-4">
            {['More', 'Stylish', 'Shop', 'Brands'].map((item, idx) => (
              <a key={idx} href="#" className="mr-4">
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Line
