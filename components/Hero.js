"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Terminal from "./Terminal";
import DownloadButton from "./DownloadButton";
import GlitchTitle from "./GlitchTitle";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "DEVELOPER";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 md:px-20 pt-20 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-neon-purple/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-cyan/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid md:grid-cols-2 gap-12 w-full max-w-7xl relative z-10 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-neon-pink font-pixel text-xs tracking-widest mb-4">
            <span className="animate-pulse">●</span>
            <span>PORTFOLIO.INIT()</span>
          </div>

          <GlitchTitle text="Current Role:" className="text-2xl md:text-3xl font-tech uppercase tracking-wider" />
          
          <h1 className="text-5xl md:text-8xl font-black font-tech text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple drop-shadow-[0_0_10px_rgba(255,0,153,0.5)] min-h-[1.2em]">
            {text}
            <span className="animate-pulse text-neon-cyan">_</span>
          </h1>

          <p className="font-tech text-gray-300 md:text-xl max-w-lg leading-relaxed border-l-2 border-neon-cyan/30 pl-4">
            Building digital experiences. Full-stack wizardry for the modern web with pixel-perfect precision.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => document.getElementById("high-score-projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-neon-pink text-white font-bold font-tech uppercase tracking-wider hover:bg-neon-pink/80 transition-all clip-path-slant hover:shadow-[0_0_20px_rgba(255,0,153,0.6)] flex items-center gap-2 group h-[50px] !cursor-pointer"
            >
              <span>View Work</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            
            <DownloadButton />
          </div>
        </div>

        {/* Right Content - Terminal */}
        <div className="relative group w-full flex justify-center md:justify-end">
           <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-cyan rounded-xl blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
           <Terminal />
        </div>

      </div>
    </section>
  );
};

export default Hero;
