import {  upcomingGames } from "../projects/games";

export default function UpcomingGameCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl ">
      {upcomingGames.map((game) => (
        <div
          key={game.id}
          className="group border-4 border-black bg-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer flex flex-col"
        >
          {/* Game Image */}
          <div className="w-full  bg-neutral-100 mb-4 border-2 border-black flex items-center justify-center text-neutral-400 group-hover:bg-pink-100 transition-colors uppercase font-bold text-xs">
            {game.gif ? (
              <img
                src={game.gif}
                alt={game.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="h-[100%] flex items-center justify-center p-2">
                {game.title}_PREVIEW
              </div>
            )}
          </div>
          <h3 className="font-black text-lg md:text-xl uppercase italic">
            {game.title}
          </h3>
          <p className="text-[10px] mt-2 text-neutral-500 uppercase leading-tight font-bold flex-grow">
            {game.desc}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(game.link, "_blank");
            }}
            className="mt-6 w-full py-2 bg-black text-white font-bold text-xs md:text-sm uppercase hover:bg-pink-500 transition-colors"
          >
            Initialize
          </button>
        </div>
      ))}
    </div>
  );
}
