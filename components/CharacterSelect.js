"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlitchTitle from "./GlitchTitle";

const CharacterSelect = () => {
  const [showBio, setShowBio] = useState(false);
  return (
    <section id="character-select" className="py-20 px-4 md:px-20 max-w-7xl mx-auto">
      {/* Decorative Border Container */}
      <div className="relative border border-neon-purple/30 bg-[#0a0a0a]/80 backdrop-blur-sm p-1 rounded-lg">
        {/* Corner Accents */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-neon-pink" />
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-neon-pink" />
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-neon-pink" />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-neon-pink" />

        <div className="grid md:grid-cols-12 gap-8 p-6 md:p-10">
          
          {/* Avatar Card (Left) */}
          <div className="md:col-span-4 flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-xs bg-[#111] border-2 border-white/10 rounded-lg overflow-hidden group">
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-30 pointer-events-none z-10" />
              
              {/* Avatar Placeholder - In real app, this would be an image */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
                  <span className="text-6xl">👨‍💻</span>
              </div>
              
              {/* HUD Overlay */}
              <div className="absolute top-4 left-4 right-4 flex justify-between z-20">
                 <div className="h-1 flex-1 bg-red-500/30 rounded-full overflow-hidden">
                    <div className="h-full w-[80%] bg-red-500" />
                 </div>
              </div>
            </div>
          </div>

          {/* Info Panel (Right) */}
          <div className="md:col-span-8 flex flex-col justify-center space-y-8">
            
          {/* Header - Centered Upper Middle */}
          <div className="card-title w-full flex flex-col items-center justify-center pt-8 pb-10 border-b border-white/5 pointer-events-auto">
            <GlitchTitle text="Developer Profile" color="#ff0099" className="text-3xl font-black font-tech uppercase" />
            <div className="flex gap-1 mt-1">
               <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
               <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse delay-75" />
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-150" />
            </div>
          </div>

            {/* Dynamic Bio Section */}
            <div className="relative min-h-[200px] flex flex-col justify-center">
              {!showBio ? (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => setShowBio(true)}
                  className="group relative px-8 py-4 bg-black/50 border border-neon-pink text-neon-pink font-tech font-bold uppercase tracking-widest hover:bg-neon-pink/10 transition-all mx-auto !cursor-pointer"
                >
                  <span className="relative z-10">Click to Initialize Profile</span>
                  {/* Corner accents for the button */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-pink group-hover:w-full group-hover:h-full transition-all duration-500" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-pink group-hover:w-full group-hover:h-full transition-all duration-500" />
                </motion.button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, height: 0, border: "1px solid rgba(255, 0, 153, 0.3)" }}
                  animate={{ opacity: 1, height: "auto", border: "1px solid rgba(255, 0, 153, 0)" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 font-mono text-sm md:text-base text-gray-300">
                    <p>
                        <span className="text-neon-pink font-bold">BIO:</span> Full Stack Web Developer leveling up in modern tech. Specializes in building scalable apps and real-time systems.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <p>
                            <span className="text-neon-pink font-bold">ROLE:</span> Full Stack Developer
                        </p>
                        <p>
                            <span className="text-neon-pink font-bold">EXPERIENCE:</span> Qube Space LLP (Intern)
                        </p>
                        <p>
                            <span className="text-neon-pink font-bold">EDUCATION:</span> B.Tech CSE
                        </p>
                        <p>
                            <span className="text-neon-pink font-bold">UNIVERSITY:</span> VIT Vellore
                        </p>
                        <p>
                            <span className="text-neon-pink font-bold">YEAR:</span> Pre-final Year
                        </p>
                        <p>
                            <span className="text-neon-pink font-bold">CGPA:</span> 8.98
                        </p>
                        <p>
                            <span className="text-neon-pink font-bold">TECH STACK:</span> MERN Stack, Next.js
                        </p>
                        <p>
                            <span className="text-neon-pink font-bold">LOCATION:</span> India
                        </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>



          </div>

        </div>
      </div>
    </section>
  );
};

export default CharacterSelect;
