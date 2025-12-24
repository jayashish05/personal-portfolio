"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Intro = ({ onComplete }) => {
  const [text, setText] = useState("INITIALIZING...");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 150);

    // Text sequence
    const timeouts = [
      setTimeout(() => setText("LOADING DATA..."), 1000),
      setTimeout(() => setText("ESTABLISHING CONNECTION..."), 2000),
      setTimeout(() => setText("ACCESS GRANTED"), 3200),
      setTimeout(() => onComplete(), 4000),
    ];

    return () => {
      clearInterval(interval);
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center font-pixel text-neon-pink"
    >
      <div className="w-64 mb-8 text-center space-y-2">
        <div className="text-xl animate-pulse">{text}</div>
        <div className="w-full h-2 bg-gray-900 rounded overflow-hidden border border-gray-800">
          <motion.div
            className="h-full bg-neon-pink"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-gray-500">
          <span>SYSTEM.SYS</span>
          <span>{Math.min(progress, 100)}%</span>
        </div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 z-[-1] bg-[linear-gradient(rgba(0,0,0,0)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0)_1px,transparent_1px)] bg-[size:40px_40px] [background-image:linear-gradient(rgba(255,0,153,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,153,0.1)_1px,transparent_1px)] opacity-20" />
    </motion.div>
  );
};

export default Intro;
