"use client";
import React from "react";
import { motion } from "framer-motion";
import GlitchTitle from "./GlitchTitle";

const stats = [
  { label: "Years Experience", value: "2+", icon: "📅", sub: "> CONTINUOUS LEARNING" },
  { label: "Projects Shipped", value: "10+", icon: "🏆", sub: "FULL STACK APPS" },
  { label: "Code Quality", value: "100%", icon: "🤖", sub: "OPTIMIZED & CLEAN" },
  { label: "Coffee Fueled", value: "∞", icon: "☕", sub: "CAFFEINE POWERED" },
];

const PowerUps = () => {
  return (
    <section id="xp-gained" className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="mb-12">
        <GlitchTitle text="Core Statistics" className="text-3xl md:text-4xl font-black font-tech uppercase tracking-wider drop-shadow-[0_0_5px_rgba(255,0,153,0.5)]" />
        <div className="flex items-center gap-2 text-neon-cyan/60 font-pixel text-xs mt-2">
          <span>{">>"} VIEWING SYSTEM METRICS</span>
          <span className="animate-pulse">_</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-[#0f0f0f] border border-white/10 rounded-xl p-6 hover:border-neon-pink/50 transition-all duration-300 overflow-hidden"
          >
            {/* Hover Scanline Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-pink/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-neon-pink/20 transition-all duration-300">
                {stat.icon}
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-bold font-tech text-white group-hover:text-neon-pink transition-colors">
                  {stat.value}
                </h3>
                <p className="text-xs font-pixel text-gray-400 mt-1 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>

              <div className="text-[10px] text-neon-cyan font-tech tracking-widest opacity-60 group-hover:opacity-100">
                {stat.sub}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PowerUps;
