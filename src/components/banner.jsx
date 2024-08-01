import { Info } from "lucide-react";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

import requests from "../api/request-endpoints";
import { bannerObj } from "../db/banner";
import useFetchMovies from "../hooks/useFetchMovies";
import { backgroundURL } from "../lib/utils";

import Loader from "../components/loader/loader";

const truncate = (string, num) => {
  return string?.length > num ? string.substr(0, num - 1) + "..." : string;
};

const Banner = () => {
  const [movie, setMovie] = useState();
  const { data, error, isLoading } = useFetchMovies(requests.fetchActionMovies);

  useEffect(() => {
    if (!error) {
      setMovie(
        data?.results[Math.floor(Math.random() * data?.results.length - 1)],
      );
    } else {
      setMovie(bannerObj);
    }
  }, [data, error]);

  if (isLoading) {
    return (
      <div className="flex h-[80vh] w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <section className="relative h-[50vh] w-full overflow-hidden sm:h-[50vh] md:h-[60vh] lg:h-[80vh]">
        {/* Movie Poster Background */}
        <div className="h-full w-full">
          <img
            src={`${backgroundURL}${movie?.backdrop_path}`}
            alt="background_poster"
            className="block h-full w-full object-cover object-center"
          />
        </div>
        {/* Black shadow overlay */}
        <div className="gradient-bg absolute left-0 top-0 h-full w-full"></div>

        {/* Movie Details */}
        <div className="absolute left-0 top-[40%] z-20 ml-3 flex h-full w-full flex-col gap-4 md:ml-16 lg:gap-3">
          <p className="w-full text-[28px] font-bold drop-shadow-xl md:w-[45%] md:text-[38px] lg:text-[48px]">
            {movie?.name || movie?.original_name || movie?.title}
          </p>

          <p className="w-[80%] sm:w-[60%] lg:w-[40%] lg:text-[24px]">
            {truncate(movie?.overview, 150)}
          </p>

          <div className="flex flex-row items-center gap-3">
            <button className="flex w-auto flex-row items-center rounded-md bg-white px-3 py-2 text-sm font-bold text-black transition hover:bg-opacity-90 sm:text-lg md:px-6 md:py-3 md:text-xl">
              <FaPlay className="mr-2" /> Play
            </button>
            <button className="flex w-auto flex-row items-center rounded-md bg-white bg-opacity-30 px-3 py-2 text-sm font-bold text-white transition hover:bg-opacity-20 sm:text-lg md:px-4 md:py-3">
              <Info className="mr-1" /> More Info
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
