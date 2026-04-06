import { mobileGames } from "../projects/games";

export default function MobileGameCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl mx-auto">
      {mobileGames.map((game) => (
        <div
          key={game.id}
          className="max-w-sm w-full mx-auto group border-4 border-black bg-white p-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer flex flex-col"
        >
          {/* Game Image */}
          <div className=" bg-neutral-100 mb-3 border-2 border-black flex items-center justify-center group-hover:bg-pink-100 transition-colors">
            {game.gif ? (
              <img
                src={game.gif}
                alt={game.title}
                className="h-full object-contain"
              />
            ) : (
              <div className="h-full flex items-center justify-center p-2 text-neutral-400 uppercase font-bold text-xs">
                {game.title}_PREVIEW
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="font-black text-base md:text-lg uppercase italic">
            {game.title}
          </h3>

          {/* Description */}
          <p className="text-[10px] mt-2 text-neutral-500 uppercase leading-tight font-bold flex-grow">
            {game.desc}
          </p>

          {/* Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(game.link, "_blank");
            }}
            className="mt-4 w-full py-2 bg-black text-white font-bold text-xs uppercase hover:bg-pink-500 transition-colors"
          >
            Initialize
          </button>
        </div>
      ))}
    </div>
  );
}