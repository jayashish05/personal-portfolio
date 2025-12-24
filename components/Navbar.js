"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 flex justify-between items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
      
      {/* Left: Player Status */}
      <div className="flex items-center gap-4">
        {/* Heart Icon */}
        <div className="relative flex items-center justify-center group cursor-help">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#b026ff] drop-shadow-[0_0_8px_rgba(176,38,255,0.8)] group-hover:scale-110 transition-transform duration-300">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            <div className="absolute top-10 left-0 bg-black/80 text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
               HP: 100/100
            </div>
        </div>
        
        {/* Text */}
        <div className="flex flex-col leading-none">
            <span className="font-tech font-black text-lg text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] tracking-wide">
                JAYASHISH MUPPUR
            </span>
            <span className="font-mono text-[10px] text-green-400 tracking-wider">
                [ONLINE]
            </span>
        </div>
      </div>

      {/* Center: Navigation Pill */}
      <div className="hidden md:flex items-center bg-black/20 backdrop-blur-md border border-white/5 rounded-full px-8 py-2.5 gap-8 shadow-inner">
        {[
            { label: "HOME", href: "#home" },
            { label: "PROFILE", href: "#character-select" },
            { label: "SKILLS", href: "#skill-tree" }, 
            { label: "PROJECTS", href: "#high-score-projects" }
        ].map((link, index) => (
            <button 
                key={index} 
                onClick={() => document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: "smooth" })}
                className="font-tech font-bold text-sm text-gray-300 hover:text-white transition-all tracking-widest uppercase hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:scale-105 !cursor-pointer"
            >
                {link.label}
            </button>
        ))}
      </div>

      {/* Right: Hire Me Button */}
      <div className="flex items-center">
        <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#e000ce] hover:bg-[#ff00eb] text-white font-tech font-black text-sm px-8 py-2.5 rounded-full shadow-[0_0_15px_rgba(224,0,206,0.6)] hover:shadow-[0_0_25px_rgba(224,0,206,0.8)] transition-all transform hover:scale-105 tracking-wider uppercase border border-white/20 !cursor-pointer"
        >
            CONTACT ME
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-white cursor-pointer ml-4">
        <div className="w-6 h-0.5 bg-white mb-1.5 shadow-[0_0_5px_white]" />
        <div className="w-6 h-0.5 bg-white mb-1.5 shadow-[0_0_5px_white]" />
        <div className="w-6 h-0.5 bg-white shadow-[0_0_5px_white]" />
      </div>

    </nav>
  );
};

export default Navbar;
