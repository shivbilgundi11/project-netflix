import { FaPlay } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { SlLike } from "react-icons/sl";

const MovieCard = ({ movieData }) => {
  const bg_url = "https://image.tmdb.org/t/p/original";
  return (
    <div className="col-span group relative aspect-video h-[96px] w-[190px] bg-zinc-900 md:h-[130px] md:w-[240px] lg:h-[164px] lg:w-[290px]">
      <img
        src={`${bg_url}${movieData?.backdrop_path || movieData?.poster_path}`}
        alt="movie_poster"
        className="duration block h-[96px] w-[190px] cursor-pointer rounded-md object-cover object-center shadow-xl transition delay-300 group-hover:opacity-90 sm:group-hover:opacity-0 md:h-[130px] md:w-[240px] lg:h-[164px] lg:w-[290px]"
      />

      <div className="invisible absolute right-0 top-5 z-10 w-full scale-0 opacity-0 transition delay-300 duration-200 group-hover:-translate-x-[2vw] group-hover:-translate-y-[6vw] group-hover:scale-125 group-hover:opacity-100 sm:visible md:top-10 lg:left-10 lg:top-20">
        <img
          src={`${bg_url}${movieData?.backdrop_path || movieData?.poster_path}`}
          alt="Thumbnail"
          className="duration aspect-video h-[100px] w-full cursor-pointer rounded-t-md object-cover shadow-xl transition sm:h-[80px] md:h-[140px]"
        />

        <div className="absolute z-10 w-full rounded-b-lg bg-zinc-800 p-2 shadow-md transition lg:p-3">
          <p className="lg:text-md mb-1 text-xs md:text-sm lg:mb-1">
            {movieData?.title || movieData?.name || movieData?.original_name}
          </p>

          <p className="mb-2 text-[8px] text-slate-400 md:text-sm">
            {movieData?.release_date || movieData?.first_air_date}
          </p>
          <div className="flex flex-row items-center gap-3">
            <div
              className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-white transition hover:bg-neutral-300 lg:h-8 lg:w-8"
              onClick={() => {}}
            >
              <FaPlay className="text-xs text-black" />
            </div>
            <div
              className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-white transition lg:h-8 lg:w-8"
              onClick={() => {}}
            >
              <GoPlus className="text-xs lg:text-lg" />
            </div>
            <div
              className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-white transition lg:h-8 lg:w-8"
              onClick={() => {}}
            >
              <SlLike className="text-xs lg:text-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
