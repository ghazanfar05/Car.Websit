'use client'
import React from 'react';

import { motion } from 'framer-motion'
import { fadein } from '../variants'

import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <footer className=" bg-slate-950 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] py-8">
      <div className="container mx-auto text-center px-4">
        <h3
          className="text-white text-3xl  mb-4 sm:text-4xl">Car Rentol</h3>
        <motion.div
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <ul className="flex flex-wrap justify-center gap-4 mb-4 text-sm sm:text-base text-white">
            <li><a  className="hover:text-blue-700 ">About</a></li>
            <li><a  className="hover:text-blue-700 ">Services</a></li>
            <li><a  className="hover:text-blue-700 ">Press</a></li>
            <li><a  className="hover:text-blue-700 ">Careers</a></li>
            <li><a  className="hover:text-blue-700 ">FAQ</a></li>
            <li><a  className="hover:text-blue-700 ">Legal</a></li>
            <li><a  className="hover:text-blue-700 ">Contact</a></li>
          </ul>
        </motion.div>
        <div className="mt-4">
          <motion.div
            variants={fadein("up", 0.2)}
            initial="hidden"
            whileInView="show"
          >
            <h4 className="text-gray-200 font-semibold mb-2 text-lg sm:text-xl">Contact With Us</h4>
          </motion.div>
          <motion.div
            variants={fadein("up", 0.2)}
            initial="hidden"
            whileInView="show"
          >
            <ul className="flex flex-wrap justify-center gap-4 text-xl">
              <li>
                <a href="#" className="hover:text-pink-700">
                  <FaInstagram className="text-pink-500 hover:text-pink-900" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  <FaFacebookF className="text-blue-500 hover:text-blue-900" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  <FaXTwitter className="text-black hover:text-gray-700" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  <SiGmail className="text-red-500 hover:text-red-900" />
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <p className="text-gray-500 font-extrabold mt-4 text-sm sm:text-base">
            &copy; Colorlib. All Rights Reserved. &copy;
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;






