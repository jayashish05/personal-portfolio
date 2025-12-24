import Link from "next/link";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ContactModal from "./ContactModal";
import GlitchTitle from "./GlitchTitle";

const Footer = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <footer id="contact" className="py-20 text-center relative overflow-hidden mt-20">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-neon-pink/5 blur-[100px] rounded-full pointer-events-none" />

      <GlitchTitle text="Let's Connect" className="text-3xl md:text-5xl font-black font-tech uppercase tracking-wider mb-2" />
      <p className="font-pixel text-neon-pink text-sm md:text-base mb-12 animate-pulse">
        READY TO BUILD SOMETHING AMAZING?
      </p>

      <div 
        className="text-8xl md:text-9xl font-black font-tech text-neon-cyan select-none mb-12 glitch-text opacity-90 drop-shadow-[0_0_5px_rgba(0,243,255,0.4)] animate-flicker" 
        data-text="99"
      >
        99
      </div>

      <button 
        onClick={() => setShowContactModal(true)}
        className="group relative inline-flex px-8 py-3 bg-neon-pink text-white font-bold font-tech uppercase tracking-wider clip-path-slant overflow-hidden hover:bg-neon-pink/90 transition-all !cursor-pointer"
      >
         <span className="relative z-10 flex items-center gap-2">
           <span className="animate-spin text-xl">⚙</span>
           Get In Touch
         </span>
         <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </button>

      <div className="flex justify-center gap-8 mt-16 text-gray-500 font-pixel text-xs uppercase tracking-widest">
        <a href="https://github.com/jayashish05" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
           <span>&lt;&gt;</span> GitHub
        </a>
        <a href="https://www.linkedin.com/in/jayashish-muppur" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
           <span>💼</span> LinkedIn
        </a>
        <a href="mailto:jayashishmuppur@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
           <span>📧</span> Email
        </a>
      </div>
      
      <div className="mt-12 text-[10px] text-gray-700 font-mono">
         © 2024 PORTFOLIO LOADED SUCCESSFULLY. <br/> DESIGNED IN THE GRID • SYSTEM AVAILABLE
      </div>

      <AnimatePresence>
        {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
