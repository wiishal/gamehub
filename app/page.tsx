"use client";
import GifComp from "@/component/gifComp";
import GameCard from "../component/gameCard";
import UpcomingGameCard from "../component/upcomingGameCard";
import MobileGameCard from "@/component/mobileGameCard";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white font-mono selection:bg-pink-200 text-black overflow-x-hidden scroll-smooth">
      {/* SECTION 1: HERO (THE DESKTOP) */}
      <section className="relative w-full h-screen overflow-hidden border-b-4 border-black">
        
        {/* Main Title - Responsive sizing */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-50 pointer-events-none">
          <h1 className="text-5xl md:text-8xl font-black text-black uppercase leading-[0.8]">
            GAME
            <br />
            <span className="text-pink-500">HUB</span>
          </h1>
          <div className="mt-2 bg-black text-white px-2 py-1 inline-block text-[10px] font-bold">
            VERSION 0.4.2
          </div>
        </div>

        {/* --- FLOATING ASSETS --- */}


        <GifComp />

        {/* Swipe Up Indicator - Centered at bottom */}

       
        {/* Background Grid */}
        <div
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        {/* Bottom Taskbar */}
        <div className="absolute bottom-0 w-full h-10 border-t-4 border-black bg-white flex items-center px-4 justify-between text-[10px] md:text-[12px] font-bold z-50">
          <div className="flex gap-4 md:gap-6">
            <span className="cursor-pointer hover:text-pink-500 underline decoration-2">
              START
            </span>
            <span className="hidden sm:inline text-neutral-400">
              D:\GAMES\HUB
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE GAMES */}
      <section
        id="games"
        className="min-h-screen bg-pink-50 p-6 md:p-10 flex flex-col items-center relative z-20"
      >
        <h2 className="text-3xl md:text-4xl font-black mb-12 bg-black text-white px-4 py-2 self-start rotate-[-1deg] shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] uppercase">
          Select_Game.bat
        </h2>

        {/*Game Card Section & Grid */}
        <div className="text-3xl md:text-4xl font-black mb-22">
          <GameCard />
        </div>

         <h2 className="text-3xl md:text-4xl font-black mb-12 bg-black text-white px-4 py-2 self-start rotate-[-1deg] shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] uppercase">
          Mobile_Games.bat
        </h2>
        <div className="text-3xl md:text-4xl font-black mb-22">
          <MobileGameCard />
        </div>

        <h2 className="text-3xl md:text-4xl font-black mb-12 bg-black text-white px-4 py-2 self-start rotate-[-1deg] shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] uppercase">
          Upcoming_Games.bat
        </h2>

        <div className="text-3xl md:text-4xl font-black mb-22">
          <UpcomingGameCard />
        </div>

        <footer className="mt-20 text-[10px] text-neutral-400 uppercase font-bold flex items-center gap-2 flex-col">
          <div>[ End of Directory ] — 2026 GameHub.sys</div>
          <div>
            [© {new Date().getFullYear()} Vishal Nanaware. All rights reserved ]
          </div>
        </footer>
      </section>
    </div>
  );
}
