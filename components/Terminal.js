"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Terminal = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Terminal Container */}
      <div 
        className="w-full bg-[#1e1e1e]/90 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl overflow-hidden font-mono text-sm"
        onClick={handleTerminalClick}
      >
        {/* Toolbar */}
        <div className="h-8 bg-[#2a2a2a] flex items-center justify-between px-3 border-b border-black/50">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
          </div>
          <div className="text-gray-400 text-xs font-semibold tracking-wide">
             visitor@portfolio: ~
          </div>
          <div className="w-12 border border-white/20 rounded-t-md text-[10px] text-center text-gray-400 cursor-pointer hover:bg-white/5 transition-colors">
            +
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 min-h-[350px] text-gray-300 relative">
           {/* Scanline Effect */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20" />

           <div className="space-y-2 relative z-20">
             {/* Creating a history effect simulation */}
             <div className="opacity-50">
                <div className="flex gap-2">
                    <span className="text-neon-pink">visitor@portfolio:</span>
                    <span className="text-neon-cyan">~</span>
                    <span>$ npm run start:dev</span>
                </div>
                <div className="pl-4 text-green-400">
                    &gt; Initializing neural link...
                </div>
                <div className="pl-4 text-green-400">
                    &gt; Access granted.
                </div>
             </div>

             {/* Live Input Line */}
             <div className="flex gap-2 flex-wrap">
                <div className="flex gap-2 whitespace-nowrap">
                    <span className="text-neon-pink">visitor@portfolio:</span>
                    <span className="text-neon-cyan">~</span>
                    <span>$</span>
                </div>
                <div className="flex-1 relative min-w-[50px]">
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full bg-transparent border-none outline-none text-white font-mono p-0 m-0 cursor-text caret-transparent"
                        autoComplete="off"
                        autoFocus
                    />
                    {/* Custom Blinking Cursor positioned at end of text */}
                    <span className="absolute top-0 left-0 pointer-events-none">
                        {input}
                        <span className="inline-block w-2.5 h-4 bg-white ml-0.5 align-middle animate-[curbl_1s_linear_infinite]" />
                    </span>
                </div>
             </div>
           </div>
        </div>
      </div>

      {/* Open to Work Badge (Bouncing Below) */}
      <div className="absolute -bottom-16 right-0 md:-right-8 animate-bounce transition-all duration-1000">
         <div className="bg-[#1a1a1a]/90 backdrop-blur border border-neon-cyan/50 px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(0,243,255,0.4)]">
             <div className="w-2.5 h-2.5 bg-neon-cyan rounded-full animate-pulse shadow-[0_0_10px_#00f3ff]" />
             <span className="text-sm font-tech text-white font-bold tracking-wide uppercase">Open to Work</span>
         </div>
      </div>

      <style jsx>{`
        @keyframes curbl {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Terminal;
