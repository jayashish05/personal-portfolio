"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendButton from "./SendButton";

const ContactModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log("Form Submitted:", formData);
    onClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-2xl bg-[#0a0a0a] border border-neon-pink/30 rounded-3xl shadow-[0_0_50px_rgba(255,0,153,0.3)] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-[#2a2a2a] flex justify-between items-start bg-gradient-to-r from-neon-pink/10 to-transparent">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-neon-cyan text-[10px] font-bold tracking-widest uppercase animate-pulse">
                ● SYSTEM COMMS_OPEN
              </span>
            </div>
            <h2 className="text-3xl font-black font-tech text-white uppercase tracking-tighter shadow-neon-pink">
              Initialize Contact
            </h2>
          </div>
          <button
            onClick={onClose}
            className="relative border-2 border-white/10 group hover:border-neon-pink w-12 h-12 duration-500 overflow-hidden rounded-full"
            type="button"
          >
            <p className="font-Manrope text-3xl h-full w-full flex items-center justify-center text-gray-400 duration-500 relative z-10 group-hover:scale-0">
              ×
            </p>
            <span className="absolute w-full h-full bg-neon-pink rotate-45 group-hover:top-9 duration-500 top-12 left-0" />
            <span className="absolute w-full h-full bg-neon-pink rotate-45 top-0 group-hover:left-9 duration-500 left-12" />
            <span className="absolute w-full h-full bg-neon-pink rotate-45 top-0 group-hover:right-9 duration-500 right-12" />
            <span className="absolute w-full h-full bg-neon-pink rotate-45 group-hover:bottom-9 duration-500 bottom-12 right-0" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 md:p-8 bg-[#0f0f0f]">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-mono text-neon-pink uppercase tracking-widest">Identify User</label>
                    <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="ENTER NAME"
                        className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white font-mono placeholder:text-gray-700 focus:border-neon-pink focus:outline-none transition-colors"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-mono text-neon-pink uppercase tracking-widest">Comm Link</label>
                    <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ENTER EMAIL"
                        className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white font-mono placeholder:text-gray-700 focus:border-neon-pink focus:outline-none transition-colors"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-xs font-mono text-neon-pink uppercase tracking-widest">Mission Objective</label>
                <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="SUBJECT LINE"
                    className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white font-mono placeholder:text-gray-700 focus:border-neon-pink focus:outline-none transition-colors"
                />
            </div>

            <div className="space-y-2">
                <label className="text-xs font-mono text-neon-pink uppercase tracking-widest">Transmission Data</label>
                <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="ENTER YOUR MESSAGE..."
                    className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white font-mono placeholder:text-gray-700 focus:border-neon-pink focus:outline-none transition-colors resize-none"
                />
            </div>

            <SendButton type="submit" />

          </form>
        </div>
        
        {/* Footer aesthetics */}
        <div className="bg-[#050505] p-3 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-gray-600">
            <span>SECURE CONNECTION ESTABLISHED</span>
            <span>ENCRYPTION: AES-256</span>
        </div>

      </motion.div>
    </div>
  );
};

export default ContactModal;
