"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./SkillTree.css";
import GlitchTitle from "./GlitchTitle";

const skills = [
  {
    category: "FRONTEND",
    color: "text-neon-pink",
    barColor: "bg-neon-pink",
    items: [
      { name: "HTML / CSS", level: 95 }, // Advanced
      { name: "Bootstrap / Tailwind", level: 90 }, // Advanced (Bootstrap) + Tailwind
      { name: "JavaScript", level: 80 }, // Intermediate
      { name: "React / Next.js", level: 60 }, // Novice
    ],
  },
  {
    category: "BACKEND / DB",
    color: "text-neon-cyan",
    barColor: "bg-neon-cyan",
    items: [
      { name: "Node.js / Express", level: 75 }, // Intermediate
      { name: "MongoDB / Firebase", level: 75 }, // Intermediate
      { name: "WebRTC / Socket.io", level: 70 }, // Intermediate
      { name: "Java / SQL", level: 65 }, // Intermediate Java, Novice SQL
    ],
  },
  {
    category: "TOOLS",
    color: "text-green-500",
    barColor: "bg-green-500",
    items: [
      { name: "Git / GitHub", level: 85 },
      { name: "Figma", level: 75 },
      { name: "Postman / NPM", level: 80 },
    ],
  }
];

const Card3D = ({ skillGroup }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Main Card Tilt
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Badge Reverse Tilt (Parallax)
  const badgeRotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["-30deg", "30deg"]);
  const badgeRotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["30deg", "-30deg"]);
  const badgeTranslateZ = useTransform(mouseYSpring, [-0.5, 0.5], ["60px", "80px"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="skill-card-perspective w-full h-full min-h-[500px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1200,
      }}
    >
      <motion.div
        className="skill-card relative w-full h-full p-8 border-2 border-[#141414] shadow-2xl overflow-hidden flex flex-col"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        
        {/* "Motion Scroll Like Effect" on Hover via CSS Class is handled in CSS, 
            but we verify the z-index here */}
        
        {/* Content Box - CRITICAL: Must have preserve-3d for children to float */}
        <div className="content-box relative z-20 h-full flex flex-col pointer-events-none w-full" style={{ transformStyle: "preserve-3d" }}>
          
          {/* Header - Centered Upper Middle */}
          <div className="card-title w-full flex flex-col items-center justify-center pt-8 pb-10 border-b border-white/5 pointer-events-auto">
            <h3 className={`font-tech font-black text-3xl tracking-widest uppercase ${skillGroup.category === 'DEVOPS' ? 'text-green-400' : skillGroup.color} drop-shadow-lg`}>
              {skillGroup.category}
            </h3>
          </div>

          {/* Content (Progress Bars) */}
          <div className="card-content space-y-5 flex-grow pt-6 pointer-events-auto px-2">
            {skillGroup.items.map((item, i) => (
              <div key={i} className="group/item">
                <div className="flex justify-between text-xs font-pixel uppercase text-gray-400 mb-2 group-hover/item:text-white transition-colors">
                  <span className="transform transition-transform duration-300 group-hover/item:translate-x-1">{item.name}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="h-3 bg-black/60 rounded-full overflow-hidden border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]">
                  <div 
                    className={`h-full ${skillGroup.barColor} relative transform origin-left transition-transform duration-1000`} 
                    style={{ width: `${item.level}%` }}
                  >
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-white opacity-50 shadow-[0_0_10px_white]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto pt-4 flex justify-center pointer-events-auto">
            <button className={`see-more font-pixel text-[10px] uppercase font-bold px-6 py-2 bg-black border ${skillGroup.category === 'TOOLS' ? 'text-green-500 border-green-500' : 'text-neon-cyan border-neon-cyan'} shadow-[0_5px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:scale-105 transition-all`}>
              VIEW DETAILS
            </button>
          </div>
        </div>

        {/* Status Badge (Top Right) - Reverse Tilt */}
        <motion.div 
           className="absolute top-4 right-4 w-16 h-16 bg-[#0f0f0f] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-30 pointer-events-auto flex flex-col items-center justify-center p-1"
           style={{
             rotateX: badgeRotateX,
             rotateY: badgeRotateY,
             z: badgeTranslateZ,
             transformStyle: "preserve-3d",
           }}
        >
           <span className={`text-[8px] font-bold tracking-wider ${skillGroup.category === 'TOOLS' ? 'text-green-500' : 'text-neon-cyan'}`}>LEVEL</span>
           <span className="text-2xl font-black text-white">99</span>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

const SkillTree = () => {
  return (
    <section id="skill-tree" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 flex flex-col items-center gap-6">
        <GlitchTitle text="Technical Skills" className="text-4xl md:text-5xl font-black font-tech uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
        <div className="inline-block px-4 py-1 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
          <p className="font-pixel text-[10px] text-neon-pink tracking-widest uppercase">
            Proficiency Level: Advanced
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {skills.map((skillGroup, index) => (
          <Card3D key={index} skillGroup={skillGroup} />
        ))}
      </div>
    </section>
  );
};

export default SkillTree;
