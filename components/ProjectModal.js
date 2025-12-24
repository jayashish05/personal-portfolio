"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LaunchButton from "./LaunchButton";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

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
        className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-[#2a2a2a] rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden"
      >
        {/* Header Section */}
        <div className="p-6 md:p-8 border-b border-[#2a2a2a] flex justify-between items-start bg-gradient-to-r from-[#1a1a1a] to-transparent">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#ff0099] text-[10px] font-bold tracking-widest uppercase">
                🚩 Level Complete
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black font-tech text-white uppercase tracking-tighter mb-2">
              {project.title}
            </h2>
            <p className="text-gray-400 font-mono text-sm max-w-xl">
              {project.desc}
            </p>
          </div>
          <button
            onClick={onClose}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#333] hover:border-[#ff0099] transition-all !cursor-pointer"
          >
            <span className="text-gray-400 text-xs font-bold font-mono group-hover:text-white">
              RETURN TO MAP
            </span>
            <span className="text-[#ff0099] rotate-180">➜</span>
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 flex-1 overflow-visible md:overflow-hidden relative">
            
            {/* Left Column: Media & Brief (Scrollable if needed) */}
            <div className="lg:col-span-2 p-6 md:p-8 border-r border-[#2a2a2a] overflow-y-auto custom-scrollbar">
                
                {/* Main Media Area */}
                <div className="relative aspect-video bg-black rounded-xl overflow-hidden mb-8 border border-[#333] group">
                    {/* Placeholder for Video/Image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#121212] to-[#000] flex items-center justify-center">
                         {project.image ? (
                           <div className="relative w-full h-full">
                             <Image 
                               src={project.image} 
                               alt={project.title} 
                               fill 
                               className="object-cover"
                             />
                           </div>
                         ) : (
                           <span className="text-8xl opacity-20 filter grayscale">{project.icon || '🎮'}</span>
                         )}
                    </div>
                    
                    {/* REC Indicator */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-mono text-white tracking-widest">REC</span>
                    </div>


                </div>

                {/* Inventory / Tech Stack */}
                <div className="mb-8">
                    <h3 className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                        <span>🎒</span> INVENTORY / TECH STACK
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack?.map((tech, i) => (
                            <span key={i} className="px-3 py-1.5 bg-[#1a1a1a] border border-[#333] rounded-lg text-xs font-mono text-gray-300 hover:border-[#ff0099] hover:text-white transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Mission Brief */}
                <div className="p-6 bg-[#111] rounded-2xl border border-[#222]">
                    <h3 className="flex items-center gap-2 text-sm font-bold text-[#ff0099] uppercase tracking-wider mb-4">
                        <span>💾</span> MISSION BRIEF
                    </h3>
                    <p className="text-gray-400 font-mono text-sm leading-relaxed">
                        {project.longDesc || project.desc}
                    </p>
                </div>
            </div>

            {/* Right Sidebar: Stats */}
            <div className="lg:col-span-1 bg-[#0f0f0f] p-6 md:p-8 flex flex-col justify-between">
                <div>
                    <h3 className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-[#222] pb-4">
                        <span>📊</span> GAME STATS
                    </h3>
                    
                    <div className="space-y-6">
                        {Object.entries(project.stats || {}).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center group">
                                <span className="text-xs font-mono text-gray-500 uppercase">{key}</span>
                                <span className="text-sm font-bold font-tech text-white group-hover:text-[#00f3ff] transition-colors text-right">
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 space-y-4">
                    {project.liveUrl && (
                        <LaunchButton onClick={() => window.open(project.liveUrl, "_blank")} />
                    )}
                    
                    {project.githubUrl && (
                        <button 
                            onClick={() => window.open(project.githubUrl, "_blank")}
                            className="w-full py-3 bg-transparent border border-[#333] hover:border-white text-gray-400 hover:text-white font-bold font-mono text-xs uppercase tracking-wider rounded-full transition-all flex items-center justify-center gap-2 !cursor-pointer"
                        >
                            <span>&lt;/&gt;</span> VIEW SOURCE
                        </button>
                    )}
                </div>
            </div>

        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
