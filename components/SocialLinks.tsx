"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function SocialLinks() {
  const [isGithubHovered, setIsGithubHovered] = useState(false);

  return (
    <div className="flex space-x-4 relative items-center">
      {/* Custom Github Dropdown */}
      <div 
        className="relative"
        onMouseEnter={() => setIsGithubHovered(true)}
        onMouseLeave={() => setIsGithubHovered(false)}
      >
        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center justify-center p-2 rounded-full hover:bg-white/5">
          <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        
        <AnimatePresence>
          {isGithubHovered && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden z-50 flex flex-col"
            >
              <a 
                href="https://github.com/ChaniruWeerasinghe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200 border-b border-white/5 text-left"
              >
                <span className="block font-semibold">Latest Projects</span>
                <span className="text-xs text-gray-500">@ChaniruWeerasinghe</span>
              </a>
              <a 
                href="https://github.com/Chanii2024" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200 text-left"
              >
                <span className="block font-semibold">Legacy Account</span>
                <span className="text-xs text-gray-500">@Chanii2024</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <a href="https://www.linkedin.com/in/chaniru-weerasinghe-36aa2a326/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0a66c2] transition-colors duration-200 flex items-center justify-center p-2 rounded-full hover:bg-[#0a66c2]/10">
        <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
      <a href="https://www.instagram.com/chaniruweerasinghe" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#e1306c] transition-colors duration-200 flex items-center justify-center p-2 rounded-full hover:bg-[#e1306c]/10">
        <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
      <a href="https://web.facebook.com/Chanii2003/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877f2] transition-colors duration-200 flex items-center justify-center p-2 rounded-full hover:bg-[#1877f2]/10">
        <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </div>
  );
}
