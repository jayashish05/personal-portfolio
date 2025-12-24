import { Press_Start_2P, Rajdhani } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  variable: "--font-pixel",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-tech",
  subsets: ["latin"],
});

export const metadata = {
  title: "PORTFOLIO.INIT() // PLAYER: GUEST",
  description: "Cyberpunk Developer Portfolio. Insert coin to hire.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2P.variable} ${rajdhani.variable} antialiased bg-[#050505] text-white overflow-x-hidden`}
      >
        <div className="fixed inset-0 z-[9999] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%220%200%20200%20200%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22noise%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.65%22%20numOctaves=%223%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23noise)%22%20opacity=%220.4%22/%3E%3C/svg%3E')] opacity-[0.03]"></div>
        <div className="fixed inset-0 z-[9999] pointer-events-none scanlines"></div>
        {children}
      </body>
    </html>
  );
}
