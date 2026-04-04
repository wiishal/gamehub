export default function GifComp() {
  return (
    <div>
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

       <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
          <div className="bg-amber-400 border-2 border-black p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="/swipeup.gif"
              alt="swipe"
              className="h-8 md:h-12 w-auto"
            />
          </div>
          <span className="text-[8px] font-black mt-1 bg-white px-1 border border-black">
            SCROLL
          </span>
        </div>

    </div>
  );
}
