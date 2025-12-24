"use client";
import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import GlitchTitle from "./GlitchTitle";

const projects = [
  {
    title: "Blood Line",
    type: "Web App / PWA",
    desc: "A next-generation platform streamlining blood donation with real-time donor matching.",
    longDesc: "The blood donation process often faces challenges such as delays in donor-recipient matching. Blood Line streamlines this by providing real-time donor matching, emergency request notifications, and an interactive donor map. Built with JavaScript and Firebase, it ensures secure authentication, encrypted data handling, and seamless backend operations using Cloud Functions. As a Progressive Web App (PWA), it offers a mobile-first accessible experience.",
    image: "/bloodline.png",
    techStack: ["HTML/CSS", "JavaScript", "Firebase", "Cloud Functions", "PWA"],
    liveUrl: "https://bloodline-v1.vercel.app",
    githubUrl: "https://github.com/jayashish05/BloodLine-v1.git",
    stats: {
      Genre: "Healthcare",
      Platform: "Web / Mobile",
      Release: "2024",
      Role: "Full Stack",
      Status: "RELEASED",
      Rank: "S"
    },
  },
  {
    title: "Code Collab",
    type: "Web App",
    desc: "Real-time collaborative coding platform with AI integration and live code execution.",
    longDesc: "Designed a collaborative environment enabling real-time code sharing, editing, and communication using Socket.io. Enhanced with AI models for code generation, review, and problem-solving. Features include interactive coding challenges, concurrent editing, and scalable code execution environments. Addresses complex technical challenges in synchronization and session management.",
    image: "/codecollab.png",
    techStack: ["Node.js", "Express.js", "MongoDB", "Socket.io", "EJS", "AI Models"],
    liveUrl: "https://www.code-collab.me",
    githubUrl: "https://github.com/jayashish05/code-collab-beta-v3.git",
    stats: {
      Genre: "EdTech / Dev",
      Platform: "Web",
      Release: "2025",
      Role: "Full Stack",
      Status: "BETA",
      Rank: "S+"
    },
  },
  {
    title: "Nexus",
    type: "Social Platform",
    desc: "A modern social networking platform with real-time features, multi-language support, and premium subscriptions.",
    longDesc: "Nexus is a feature-rich social networking platform built with Next.js and Node.js. It features secure authentication with OTP logging, a dynamic social feed for multimedia posts, and a subscription-based Q&A system integrated with Razorpay. The platform offers real-time content translation for 6+ languages, friend connection management, and a responsive UI with dark/light themes and festive animations. Backend services include MongoDB Atlas, AWS S3 for media, and Brevo for transactional emails.",
    image: "/nexus.png",
    techStack: ["Next.js", "Node.js", "MongoDB", "Razorpay", "AWS S3", "Socket.io"],
    liveUrl: "https://nexus-frontend-y7wx.onrender.com/",
    githubUrl: "https://github.com/jayashish05/Nexus.git",
    stats: {
      Genre: "Social Media",
      Platform: "Web",
      Release: "2025",
      Role: "Creator",
      Status: "LIVE",
      Rank: "A"
    },
  },
];

import { AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
import Image from "next/image";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="high-score-projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <GlitchTitle text="Featured Projects" color="#ff0099" className="text-3xl md:text-5xl font-black font-tech uppercase drop-shadow-[0_0_5px_rgba(255,0,153,0.8)]" />
        <p className="font-mono text-gray-400 mt-4 max-w-xl mx-auto">
          Explore my recent work and technical case studies.
        </p>
      </div>

      <div className="project-cards-container">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className={`project-card group cursor-pointer ${
                index === 0 ? 'border-neon-pink/20 hover:border-neon-pink' : 
                index === 1 ? 'border-neon-cyan/20 hover:border-neon-cyan' : 
                'border-green-500/20 hover:border-green-500'
            }`}
          >
            {/* Image Placeholder area */}
            <div className="project-card-image relative aspect-video overflow-hidden">
              <div className="absolute inset-0 bg-[#0a0a0a]">
                 <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                 />
              </div>
              
              {/* Scanline overlay only on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10" />

              {/* Rank Badge */}
              <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur border border-white/20 rounded font-pixel text-xs text-neon-cyan z-20">
                 RANK: {project.stats.Rank}
              </div>
            </div>

            <div className="p-6 relative z-20">
              <div className="flex justify-between items-start mb-2">
                <h3 className={`text-xl font-bold font-tech text-white transition-colors ${
                    index === 0 ? 'group-hover:text-neon-pink' : 
                    index === 1 ? 'group-hover:text-neon-cyan' : 
                    'group-hover:text-green-500'
                }`}>
                  {project.title}
                </h3>
                <span className={`text-[10px] px-2 py-1 rounded uppercase font-bold tracking-wider ${
                    index === 0 ? 'bg-neon-pink/20 text-neon-pink' :
                    index === 1 ? 'bg-neon-cyan/20 text-neon-cyan' :
                    'bg-green-500/20 text-green-500'
                }`}>
                  {project.type}
                </span>
              </div>
              
              <p className="text-sm text-gray-400 font-mono leading-relaxed mb-4 line-clamp-2">
                {project.desc}
              </p>

              <div className="flex gap-2">
                {project.techStack.slice(0, 3).map((tech, i) => (
                    <div key={i} className="px-2 py-1 bg-white/5 text-[10px] font-pixel text-gray-500 uppercase rounded">
                    {tech}
                    </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
