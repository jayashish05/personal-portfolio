"use client";
import React from "react";

const SendButton = ({ onClick, type = "submit", disabled = false }) => {
  return (
    <>
      <button className="send-btn" onClick={onClick} type={type} disabled={disabled}>
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
          </div>
        </div>
        <span>TRANSMIT DATA</span>
      </button>

      <style jsx>{`
        .send-btn {
          font-family: inherit;
          font-size: 16px; 
          background: #ff0099; /* Neon Pink */
          color: white;
          padding: 1em 1em;
          padding-left: 0.9em; /* Balanced padding */
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 8px; /* Slightly sharper than 16px to match tech theme */
          overflow: hidden;
          transition: all 0.2s;
          cursor: pointer !important;
          width: 100%; /* Full width for form */
          letter-spacing: 0.1em;
          font-weight: bold;
          text-transform: uppercase;
          box-shadow: 0 0 20px rgba(255,0,153,0.4);
        }

        .send-btn span {
          display: block;
          margin-left: 0.3em;
          transition: all 0.3s ease-in-out;
        }

        .send-btn svg {
          display: block;
          transform-origin: center center;
          transition: transform 0.3s ease-in-out;
        }

        .send-btn:hover .svg-wrapper {
          animation: fly-1 0.6s ease-in-out infinite alternate;
        }

        .send-btn:hover svg {
          transform: translateX(2.5em) rotate(45deg) scale(1.1);
        }

        .send-btn:hover span {
          transform: translateX(8em); /* Push text out of view or to side */
        }

        .send-btn:active {
          transform: scale(0.95);
        }

        .send-btn:hover {
            background: #d6008b;
            box-shadow: 0 0 30px rgba(255,0,153,0.6);
        }

        @keyframes fly-1 {
          from {
            transform: translateY(0.1em);
          }

          to {
            transform: translateY(-0.1em);
          }
        }
      `}</style>
    </>
  );
};

export default SendButton;
