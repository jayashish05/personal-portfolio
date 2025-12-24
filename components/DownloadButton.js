"use client";
import React from "react";

const DownloadButton = () => {
  return (
    <>
      <a 
        href="/jayashish's resume main.pdf" 
        download="Jayashish_Resume.pdf"
        className="button !cursor-pointer" 
        data-tooltip="Size: 204Kb"
      >
        <div className="button-wrapper">
          <div className="text font-bold font-tech uppercase tracking-wider">Resume</div>
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"/>
            </svg>
          </span>
        </div>
      </a>

      <style jsx>{`
        .button {
          --width: 160px;
          --height: 50px;
          --tooltip-height: 35px;
          --tooltip-width: 100px;
          --gap-between-tooltip-to-button: 18px;
          --button-color: #00f3ff; /* Neon Cyan */
          --tooltip-color: #fff;
          width: var(--width);
          height: var(--height);
          background: rgba(0, 243, 255, 0.1);
          border: 1px solid var(--button-color);
          position: relative;
          text-align: center;
          border-radius: 0; /* Cyberpunk style */
          font-family: inherit;
          transition: background 0.3s;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--button-color);
          clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
        }

        .button::before {
          position: absolute;
          content: attr(data-tooltip);
          width: var(--tooltip-width);
          height: var(--tooltip-height);
          background-color: var(--tooltip-color);
          font-size: 0.8rem;
          color: #111;
          border-radius: .25em;
          line-height: var(--tooltip-height);
          bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px);
          left: calc(50% - var(--tooltip-width) / 2);
          font-family: monospace;
          font-weight: bold;
        }

        .button::after {
          position: absolute;
          content: '';
          width: 0;
          height: 0;
          border: 10px solid transparent;
          border-top-color: var(--tooltip-color);
          left: calc(50% - 10px);
          bottom: calc(100% + var(--gap-between-tooltip-to-button) - 10px);
        }

        .button::after,.button::before {
          opacity: 0;
          visibility: hidden;
          transition: all 0.5s;
          z-index: 50;
        }

        .text {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .button-wrapper, .text, .icon {
          overflow: hidden;
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
        }

        .text {
          top: 0;
        }

        .text, .icon {
          transition: top 0.5s;
        }

        .icon {
          color: #000;
          top: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--button-color);
        }

        .icon svg {
          width: 24px;
          height: 24px;
        }

        .button:hover {
          background: var(--button-color);
          color: #000;
          box-shadow: 0 0 20px rgba(0, 243, 255, 0.4);
        }

        .button:hover .text {
          top: -100%;
        }

        .button:hover .icon {
          top: 0;
        }

        .button:hover:before, .button:hover:after {
          opacity: 1;
          visibility: visible;
        }

        .button:hover:after {
          bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);
        }

        .button:hover:before {
          bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
        }
      `}</style>
    </>
  );
};

export default DownloadButton;
