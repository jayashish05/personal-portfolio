"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PowerUps from "../components/PowerUps";
import CharacterSelect from "../components/CharacterSelect";
import SkillTree from "../components/SkillTree";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="min-h-screen bg-[#050505] relative selection:bg-neon-pink selection:text-white">
      <AnimatePresence mode="wait">
        {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <div className="animate-in fade-in zoom-in duration-1000">
          <Navbar />
      <ScrollToTop />
          <Hero />
          <PowerUps />
          <CharacterSelect />
          <SkillTree />
          <Projects />
          <Footer />
        </div>
      )}
    </main>
  );
}``
