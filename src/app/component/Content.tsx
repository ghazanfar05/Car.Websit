'use client'
import React from 'react';
import { motion } from 'framer-motion'
import { fadein } from '../variants'
function Content() {
  return (
    <div className="min-h-screen w-full mx-auto   bg-slate-950 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">



      <motion.div
        variants={fadein("down", 0.2)}
        initial="hidden"
        whileInView="show"
      >
        <h1 className="text-3xl text-center text-white mb-8">Popular Categories</h1>
      </motion.div>
      <div className="flex flex-wrap  justify-center gap-4  mb-8 mt-4">
        <motion.div
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <button className="relative bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-white py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out">
            Electric
            <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-green-400 rounded-full"></span>
          </button>
        </motion.div>
        <motion.div
          variants={fadein("down", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <button className="relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out">
            SUV
            <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-400 rounded-full"></span>
          </button>
        </motion.div>
        <motion.div
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <button className="relative bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-500 hover:to-yellow-500 text-white py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out">
            Sedan
            <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-blue-400 rounded-full"></span>
          </button>
        </motion.div>
        <motion.div
          variants={fadein("down", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <button className="relative bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-cyan-500 hover:to-teal-500 text-white py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out">
            Pickup Truck
            <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-yellow-400 rounded-full"></span>
          </button>
        </motion.div>
        <motion.div
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <button className="relative bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 text-white py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out">
            Luxury
            <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-purple-400 rounded-full"></span>
          </button>
        </motion.div>
        <motion.div
          variants={fadein("down", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <button className="relative bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out">
            Crossover
            <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-teal-400 rounded-full"></span>
          </button>
        </motion.div>
        <motion.div
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <button className="relative bg-gradient-to-r from-gray-500 to-indigo-500 hover:from-indigo-500 hover:to-gray-500 text-white py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out">
            Hybrid
            <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-indigo-400 rounded-full"></span>
          </button>
        </motion.div>
        <motion.div
          variants={fadein("down", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <button className="relative bg-gradient-to-r from-indigo-500 to-gray-500 hover:from-gray-500 hover:to-indigo-500 text-white py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out">
            Diesel
            <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-gray-400 rounded-full"></span>
          </button>
        </motion.div>
        <motion.div
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <button className="relative bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out">
            Coupe
            <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-teal-400 rounded-full"></span>
          </button>
        </motion.div>
        <motion.div
          variants={fadein("down", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <button className="relative bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out">
            Hatchback
            <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-teal-400 rounded-full"></span>
          </button>
        </motion.div>

        {/* Additional buttons can follow the same pattern */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className=" bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg shadow-md">


          <motion.div
            variants={fadein("up", 0.2)}
            initial="hidden"
            whileInView="show"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">All new EVs</h2>
            <p className="text-white mb-4">Experience the best way to search new cars If you're looking to create a feature section for cars that is styled with Tailwind CSS and displayed in a 4-line format, you might want to present key features </p>
            <a href="#" className="bg-black hover:bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white font-bold py-2 px-4 rounded">Shop new cars</a>
          </motion.div>
        </div>
        <motion.div
          variants={fadein("down", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <div className=" bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg shadow-md">
            <img src="dev2.png" alt="Tesla Model 3" className="w-full h-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white"> Model ID.1</h3>
            <a href="#" className="bg-black hover:bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white font-bold py-2 px-4 rounded">Shop now</a>
          </div>
        </motion.div>
        <motion.div
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <div className=" bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg shadow-md">
            <img src="dev3.png" alt="Tesla Model 3" className="w-full h-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white"> Model ID.1</h3>
            <a href="#" className="bg-black hover:bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white font-bold py-2 px-4 rounded">Shop now</a>
          </div>
        </motion.div>
        <motion.div
          variants={fadein("down", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <div className=" bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg shadow-md">
            <img src="dev4.png" alt="Tesla Model 3" className="w-full h-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white"> Model ID.1</h3>
            <a href="#" className="bg-black hover:bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white font-bold py-2 px-4 rounded">Shop now</a>
          </div>
        </motion.div>
        <motion.div
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <div className=" bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg shadow-md">
            <img src="dev5.png" alt="Tesla Model 3" className="w-full h-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white"> Model ID.1</h3>
            <a href="#" className="bg-black hover:bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white font-bold py-2 px-4 rounded">Shop now</a>
          </div>
        </motion.div>
        <motion.div
          variants={fadein("down", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <div className=" bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg shadow-md">
            <img src="dev6.png" alt="Tesla Model 3" className="w-full h-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white"> Model ID.1</h3>
            <a href="#" className="bg-black hover:bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white font-bold py-2 px-4 rounded">Shop now</a>
          </div>
        </motion.div>
        <motion.div
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <div className=" bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg shadow-md">
            <img src="dev7.png" alt="Tesla Model 3" className="w-full h-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white"> Model ID.1</h3>
            <a href="#" className="bg-black hover:bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white font-bold py-2 px-4 rounded">Shop now</a>
          </div>
        </motion.div>
        <motion.div
          variants={fadein("down", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <div className=" bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg shadow-md">
            <img src="dev8.png" alt="Tesla Model 3" className="w-full h-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white"> Model ID.1</h3>
            <a href="#" className="bg-black hover:bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white font-bold py-2 px-4 rounded">Shop now</a>
          </div>
        </motion.div>
        <motion.div
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <div className=" bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg shadow-md">
            <img src="dev10.png" alt="Tesla Model 3" className="w-full h-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white"> Model ID.1</h3>
            <a href="#" className="bg-black hover:bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white font-bold py-2 px-4 rounded">Shop now</a>
          </div>
        </motion.div>
        <motion.div
          variants={fadein("down", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <div className=" bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg shadow-md">
            <img src="dev11.png" alt="Tesla Model 3" className="w-full h-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white"> Model ID.1</h3>
            <a href="#" className="bg-black hover:bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white font-bold py-2 px-4 rounded">Shop now</a>
          </div>
        </motion.div>
        <motion.div
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <div className=" bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg shadow-md">
            <img src="dev12.png" alt="Tesla Model 3" className="w-full h-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white"> Model ID.1</h3>
            <a href="#" className="bg-black hover:bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white font-bold py-2 px-4 rounded">Shop now</a>
          </div>
        </motion.div>
        <motion.div
          variants={fadein("down", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <div className=" bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg shadow-md">
            <img src="dev1.png" alt="Tesla Model 3" className="w-full h-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white"> Model ID.1</h3>
            <a href="#" className="bg-black hover:bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white font-bold py-2 px-4 rounded">Shop now</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Content










