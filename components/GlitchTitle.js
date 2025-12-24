"use client";
import React from "react";

const GlitchTitle = ({ text, className = "", as = "h2", color = "white" }) => {
  const Tag = as;
  
  return (
    <>
      <Tag className={`glitch-title ${className}`} data-text={text}>
        {text}
      </Tag>

      <style jsx>{`
        .glitch-title {
          position: relative;
          color: ${color}; /* Base color, usually white */
          background-color: transparent;
          cursor: default; /* Titles usually aren't buttons, but maybe crosshair? */
          display: inline-block; /* Needed for transform/width */
        }

        .glitch-title::after {
          /* Glitch Slices */
          --move1: inset(50% 50% 50% 50%);
          --move2: inset(31% 0 40% 0);
          --move3: inset(39% 0 15% 0);
          --move4: inset(45% 0 40% 0);
          --move5: inset(45% 0 6% 0);
          --move6: inset(14% 0 61% 0);
          
          clip-path: var(--move1);
          content: attr(data-text); /* Dynamic Text */
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: block;
        }

        .glitch-title:hover::after {
          animation: glitch_4011 1s;
          text-shadow: 10px 10px 10px black;
          animation-timing-function: steps(2, end);
          /* Theme Colors: Neon Cyan and Neon Pink */
          text-shadow: -3px -3px 0px #00f3ff, 3px 3px 0px #ff0099;
          background-color: transparent;
        }

        .glitch-title:hover {
          /* Initial static shadow before animation kicks in fully? 
             The original CSS has :hover styles separate from :hover::after.
          */
          text-shadow: -1px -1px 0px #00f3ff, 1px 1px 0px #ff0099;
          background-color: transparent;
        }
        
        /* Original Title Style (when not hovered) needs to support the transition to boxed */
        .glitch-title {
            padding: 0 10px; /* Keep layout stable */
            border: 1px solid transparent; /* Prevent layout shift */
            transition: all 0.2s;
        }

        @keyframes glitch_4011 {
          0% {
            clip-path: var(--move1);
            transform: translate(0px,-10px);
          }
          10% {
            clip-path: var(--move2);
            transform: translate(-10px,10px);
          }
          20% {
            clip-path: var(--move3);
            transform: translate(10px,0px);
          }
          30% {
            clip-path: var(--move4);
            transform: translate(-10px,10px);
          }
          40% {
            clip-path: var(--move5);
            transform: translate(10px,-10px);
          }
          50% {
            clip-path: var(--move6);
            transform: translate(-10px,10px);
          }
          60% {
            clip-path: var(--move1);
            transform: translate(10px,-10px);
          }
          70% {
            clip-path: var(--move3);
            transform: translate(-10px,10px);
          }
          80% {
            clip-path: var(--move2);
            transform: translate(10px,-10px);
          }
          90% {
            clip-path: var(--move4);
            transform: translate(-10px,10px);
          }
          100% {
            clip-path: var(--move1);
            transform: translate(0);
          }
        }
      `}</style>
    </>
  );
};

export default GlitchTitle;
