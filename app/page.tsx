import React from "react";

export default function Home() {
  // Add your games here!
  const myGames = [
    { id: 1, title: "CYBER_RUNNER", desc: "8-bit platformer" },
    { id: 2, title: "PIXEL_QUEST", desc: "Retro RPG adventure" },
    { id: 3, title: "VOID_VOID", desc: "Space survival" },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-mono selection:bg-pink-200 text-black overflow-x-hidden scroll-smooth">
      {/* SECTION 1: HERO (THE DESKTOP) */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Main Title */}
        <div className="absolute top-10 left-10 z-50 pointer-events-none">
          <h1 className="text-6xl md:text-8xl font-black text-black uppercase leading-[0.8]">
            GAME
            <br />
            <span className="text-pink-500">HUB</span>
          </h1>
          <div className="mt-2 bg-black text-white px-2 py-1 inline-block text-[10px] font-bold">
            VERSION 0.4.2
          </div>
        </div>

        {/* Floating Assets */}
        <img
          src="/rafabansi-sun-15710.gif"
          alt="sun"
          className="absolute top-5 right-5 w-24 h-24 z-10"
        />
        <img
          src="/cow.gif"
          alt="cow"
          className="absolute top-[40%] left-[2%] w-16 lg:40 md:36  z-10 opacity-50"
        />

        {/* The Central PC */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 text-center">
          <img
            src="https://media.tenor.com/uPKBSSYU8BcAAAAi/computer-pixel.gif"
            alt="90's computer"
            className="w-64 md:w-80 mb-6"
          />
          <a
            href="#games"
            className="px-6 py-3 bg-white border-4 border-black font-black text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-pink-500 hover:text-white transition-all cursor-pointer"
          >
            SWIPE OR CLICK TO PLAY
          </a>
        </div>

        {/* Swipe Up Indicator */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce bg-amber-400">
          <img src="/swipeup.gif" alt="swipe" className="w-10 h-10 grayscale" />
        </div>

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
        <img
          src="https://media.tenor.com/JfwV_Pn5sRAAAAAi/sleeping-cat.gif"
          alt="cat"
          className="absolute bottom-12 right-6 w-[20%] lg:w-32 md:32 z-10"
        />
        {/* Bottom Taskbar */}
        <div className="absolute bottom-0 w-full h-10 border-t-4 border-black bg-white flex items-center px-4 justify-between text-[12px] font-bold z-50">
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-pink-500 underline">
              START
            </span>
          </div>
          <div>
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: THE GAMES (Visible on Scroll) */}
      <section
        id="games"
        className="min-h-screen bg-pink-50 p-10 flex flex-col items-center border-t-4 border-black relative z-20"
      >
        <h2 className="text-4xl font-black mb-12 bg-black text-white px-4 py-2 self-start rotate-[-1deg] shadow-[4px_4px_0px_0px_rgba(236,72,153,1)]">
          SELECT_GAME.BAT
        </h2>

        {/* Fixed Game Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {myGames.map((game) => (
            <div
              key={game.id}
              className="group border-4 border-black bg-white p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer"
            >
              <div className="w-full h-40 bg-neutral-100 mb-4 border-2 border-black flex items-center justify-center text-neutral-400 group-hover:bg-pink-100 transition-colors uppercase font-bold text-xs">
                {game.title}_PREVIEW
              </div>
              <h3 className="font-black text-xl uppercase italic">
                {game.title}
              </h3>
              <p className="text-[10px] mt-2 text-neutral-500 uppercase leading-tight font-bold">
                {game.desc}
              </p>
              <button className="mt-6 w-full py-2 bg-black text-white font-bold text-sm uppercase hover:bg-pink-500 transition-colors">
                Initialize
              </button>
            </div>
          ))}
        </div>

        <footer className="mt-20 text-[10px] text-neutral-400">
          END OF DIRECTORY // 2026 GAMEHUB
        </footer>
      </section>
    </div>
  );
}
