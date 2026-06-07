"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="w-full relative bg-[#050505]/80 backdrop-blur-xl pt-20 pb-8 px-6 mt-12 z-20">
      {/* Top Subtle Glow Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-24">
        
        {/* Brand & Description */}
        <div className="flex flex-col space-y-6 max-w-sm text-center md:text-left mx-auto md:mx-0">
          <h2 className="text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            C-Stacks
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            A curated collection of digital experiences, interactive utilities, and premium interfaces designed for the modern web.
          </p>
          <div className="flex justify-center md:justify-start">
            <SocialLinks />
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-24 text-center md:text-left">
          {/* Navigation */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-white/40 font-bold tracking-widest uppercase text-xs">Navigation</h4>
            <nav className="flex flex-col space-y-4 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors duration-300">Home</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Web Tools</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Websites</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Experiences</a>
            </nav>
          </div>

          {/* Build Stack */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-white/40 font-bold tracking-widest uppercase text-xs">Build Stack</h4>
            <nav className="flex flex-col space-y-4 text-gray-400 text-sm">
              <span className="hover:text-white transition-colors duration-300 cursor-default">Next.js App Router</span>
              <span className="hover:text-[#38bdf8] transition-colors duration-300 cursor-default">Tailwind CSS v4</span>
              <span className="hover:text-[#ec4899] transition-colors duration-300 cursor-default">Framer Motion</span>
              <span className="hover:text-[#3178c6] transition-colors duration-300 cursor-default">TypeScript</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
        <p>© {new Date().getFullYear()} C-Stacks. All rights reserved.</p>
        <p>Developed by <span className="text-gray-400 font-medium tracking-wide">Chaniru Weerasinghe</span></p>
      </div>
    </footer>
  );
}
