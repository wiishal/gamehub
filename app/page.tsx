import React from "react";

export default function Home() {
  const myGames = [
    { id: 1, title: "CYBER_RUNNER", desc: "8-bit platformer" },
    { id: 2, title: "PIXEL_QUEST", desc: "Retro RPG adventure" },
    { id: 3, title: "VOID_VOID", desc: "Space survival" },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-mono selection:bg-pink-200 text-black overflow-x-hidden scroll-smooth">
      {/* SECTION 1: HERO (THE DESKTOP) */}
      <section className="relative w-full h-screen overflow-hidden border-b-4 border-black">
        
        {/* Main Title - Responsive sizing */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-50 pointer-events-none">
          <h1 className="text-5xl md:text-8xl font-black text-black uppercase leading-[0.8]">
            GAME<br />
            <span className="text-pink-500">HUB</span>
          </h1>
          <div className="mt-2 bg-black text-white px-2 py-1 inline-block text-[10px] font-bold">
            VERSION 0.4.2
          </div>
        </div>

        {/* --- FLOATING ASSETS --- */}
        
        {/* Sun - Top Right */}
        <img
          src="/rafabansi-sun-15710.gif"
          alt="sun"
          className="absolute top-4 right-4 w-16 md:w-24 z-10"
        />

        {/* Cow - Left Center */}
        <img
          src="/cow.gif"
          alt="cow"
          className="absolute top-[50%] left-[5%] w-22 md:w-34 lg:w-42 z-10 opacity-60"
        />

        {/* Meditate GIF - Mid Right */}
        <img
          src="/meditate.gif"
          alt="meditate"
          className="absolute top-[20%] right-[10%] w-30 md:w-42 lg:w-50 z-10"
        />

        {/* Sleeping Cat - Bottom Right (above taskbar) */}
        <img
          src="https://media.tenor.com/JfwV_Pn5sRAAAAAi/sleeping-cat.gif"
          alt="cat"
          className="absolute bottom-14 right-4 w-16 md:w-24 lg:w-32 z-10"
        />

        {/* --- CENTRAL INTERACTION --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 text-center w-full px-4">
          <img
            src="https://media.tenor.com/uPKBSSYU8BcAAAAi/computer-pixel.gif"
            alt="90's computer"
            className="w-48 md:w-64 lg:w-80 mb-6 drop-shadow-xl"
          />
          <a
            href="#games"
            className="px-6 py-3 bg-white border-4 border-black font-black text-sm md:text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-pink-500 hover:text-white transition-all active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            SWIPE OR CLICK TO PLAY
          </a>
        </div>

        {/* Swipe Up Indicator - Centered at bottom */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
          <div className="bg-amber-400 border-2 border-black p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <img src="/swipeup.gif" alt="swipe" className="h-8 md:h-12 w-auto" />
          </div>
          <span className="text-[8px] font-black mt-1 bg-white px-1 border border-black">SCROLL</span>
        </div>

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
            <span className="cursor-pointer hover:text-pink-500 underline decoration-2">START</span>
            <span className="hidden sm:inline text-neutral-400">D:\GAMES\HUB</span>
          </div>
          <div className="tabular-nums">
            {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
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

        {/* Responsive Game Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl">
          {myGames.map((game) => (
            <div
              key={game.id}
              className="group border-4 border-black bg-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer flex flex-col"
            >
              <div className="w-full h-40 bg-neutral-100 mb-4 border-2 border-black flex items-center justify-center text-neutral-400 group-hover:bg-pink-100 transition-colors uppercase font-bold text-xs">
                {game.title}_PREVIEW
              </div>
              <h3 className="font-black text-lg md:text-xl uppercase italic">
                {game.title}
              </h3>
              <p className="text-[10px] mt-2 text-neutral-500 uppercase leading-tight font-bold flex-grow">
                {game.desc}
              </p>
              <button className="mt-6 w-full py-2 bg-black text-white font-bold text-xs md:text-sm uppercase hover:bg-pink-500 transition-colors">
                Initialize
              </button>
            </div>
          ))}
        </div>

        <footer className="mt-20 text-[10px] text-neutral-400 uppercase font-bold">
          [ End of Directory ] — 2026 GameHub.sys
        </footer>
      </section>
    </div>
  );
}