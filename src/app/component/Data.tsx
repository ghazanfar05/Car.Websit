"use client";
import React from 'react';
import { motion } from 'framer-motion'
import { fadein } from '../variants'
function Data() {
  return (
    <motion.div
      variants={fadein("up,0.2")}
      initial="hidden"
      whileinvew={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className=" bg-slate-950 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] text-black p-4">
      <h1 className="text-2xl text-center text-white mb-4 ">Latest Work</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <motion.div
          variants={fadein("up", 0.6)}
          initial="hidden"
          whileInView="show"
          className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg shadow-md text-white animate-fade-in"
        >
          <h2 className="text-lg font-bold mb-2">Customize</h2>
          <p className="text-sm mb-2">Customization: Many vehicles offer options for personalizing the interior, such as different trim levels, color choices, and accessory packages. Are you looking for tips on designing a car interior, or are you curious about trends and innovations in this field?</p>
        </motion.div>
        <motion.div
          variants={fadein("up", 0.6)}
          initial="hidden"
          whileInView="show"
          className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg shadow-md text-white animate-fade-in"
        >
          <h2 className="text-xl font-bold mb-2">Storage</h2>
          <p className="text-sm mb-2">Clever storage solutions, such as compartmentalized centers and rear cargo spaces, help keep the interior organized and clutter-free. Effective air conditioning and heating systems, along with adjustable vents, are essential for maintaining comfort. Good insulation helps reduce road noise and provides a quieter, more peaceful ride.</p>
        </motion.div>
        <motion.div
          variants={fadein("up", 0.6)}
          initial="hidden"
          whileInView="show"
          className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg shadow-md text-white animate-fade-in"
        >
          <img src="dev16.png" alt="Image" className="rounded-md w-full" />
        </motion.div>
        <motion.div
          variants={fadein("up", 0.6)}
          initial="hidden"
          whileInView="show"
          className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg shadow-md text-white animate-fade-in"
        >
          <ul className="text-sm list-disc list-inside">
            <li>Seats</li>
            <li>Dashboard</li>
            <li>Steering wheel</li>
            <li>Infotainment system</li>
            <li>Climate control</li>
            <li>Gear shift</li>
            <li>Instrument panel</li>
            <li>Storage compartments</li>
            <li>Lighting</li>
            <li>Door panels</li>
            <li>Upholstery</li>
            <li>Audio system</li>
          </ul>
        </motion.div>
        <motion.div
          variants={fadein("up", 0.6)}
          initial="hidden"
          whileInView="show"
          className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg shadow-md text-white animate-fade-in"
        >
          <h2 className="text-lg font-bold mb-2">Materials</h2>
          <p className="text-sm mb-2">High-quality materials can make a big difference. Leather, suede, and high-grade fabrics are common, while accents like brushed aluminum or wood trim can add a touch of luxury. Ambient lighting can enhance the atmosphere inside the car. Adjustable LED lights and illuminated controls contribute to a more enjoyable driving experience.</p>
        </motion.div>
        <motion.div
          variants={fadein("up", 0.6)}
          initial="hidden"
          whileInView="show"
          className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg shadow-md text-white animate-fade-in"
        >
          <h2 className="text-lg font-bold mb-2">Interior</h2>
          <p className="text-sm mb-2">It combines elements of ergonomics, materials, and technology to enhance the driving experience. Here are some key aspects:</p>
          <img src="dev15.png" alt="Interior" className="rounded-md mb-2 w-full" />
          <button className="bg-black hover:bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white py-2 px-4 rounded-md w-full sm:w-auto">View</button>
        </motion.div>
        <motion.div
          variants={fadein("up", 0.6)}
          initial="hidden"
          whileInView="show"
          className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg shadow-md text-white animate-fade-in"
        >
          <h2 className="text-lg font-bold mb-2">Technology</h2>
          <p className="text-sm mb-2">Modern cars feature advanced infotainment systems, digital displays, and integrated navigation. Touchscreens, voice control, and smartphone connectivity are important for convenience and safety.</p>
        </motion.div>
        <motion.div
          variants={fadein("up", 0.6)}
          initial="hidden"
          whileInView="show"
          className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg shadow-md text-white animate-fade-in"
        >
          <h2 className="text-lg font-bold mb-2">We just need your Car</h2>
          <p className="text-sm mb-2">Modern cars feature advanced infotainment systems, digital displays, and integrated navigation. Touchscreens.</p>
          <img src="dev13.png" alt="Car" className="rounded-md mb-2 w-full" />
          <button className="bg-black hover:bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white py-2 px-4 rounded-md w-full sm:w-auto">Submit</button>
        </motion.div>
        <motion.div
          variants={fadein("up", 0.6)}
          initial="hidden"
          whileInView="show"
          className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg shadow-md text-white animate-fade-in"
        >
          <h2 className="text-lg font-bold mb-2">Good Looking Cars</h2>
          <p className="text-sm mb-2">High-quality materials can make a big difference. Leather, suede, and high-grade fabrics.</p>
          <img src="dev14.png" alt="Car" className="rounded-md mb-2 w-full" />
          <button className="bg-black hover:bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white py-2 px-4 rounded-md w-full sm:w-auto">View</button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Data









