import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import useFetchMovies from "../hooks/useFetchMovies";
import MovieCard from "./movie-card";
import Loader from "./loader/loader";

const Row = ({ title, fetchUrl, backup }) => {
  const [movies, setMovies] = useState([]);
  const [slideNum, setSlideNum] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const [loading, setLoading] = useState(true);

  const sliderRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = sliderRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNum > 0) {
      setSlideNum(slideNum - 1);
      sliderRef.current.style.transform = `translateX(${297 + distance}px)`;
    }
    if (direction === "right" && slideNum < movies.length - 1) {
      setSlideNum(slideNum + 1);
      sliderRef.current.style.transform = `translateX(${-297 + distance}px)`;
    }
  };

  const { data, error } = useFetchMovies(fetchUrl);

  useEffect(() => {
    const fetchTimeout = setTimeout(() => {
      if (loading) {
        setMovies(backup);
        setLoading(false);
      }
    }, 1000);

    if (data?.results) {
      setMovies(data.results);
      setLoading(false);
      clearTimeout(fetchTimeout);
    } else if (error) {
      setMovies(backup);
      setLoading(false);
      clearTimeout(fetchTimeout);
    }

    return () => clearTimeout(fetchTimeout);
  }, [data, error, backup, loading]);

  if (loading) {
    return (
      <div className="mb-16 mt-8 h-[96px] w-[100vw] space-y-8 md:h-[130px] lg:h-[168px]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="mb-16 mt-8 w-full space-y-8 px-4 py-4 md:px-12 md:py-6">
      <p className="text-md mb-4 font-semibold text-white md:text-xl lg:text-2xl">
        {title}
      </p>

      <div className="relative w-full">
        <ChevronLeft
          className={`${
            !isMoved ? "hidden" : "block"
          } absolute left-0 top-0 z-30 h-full w-8 cursor-pointer rounded-md bg-black opacity-50 transition hover:scale-110 md:w-12`}
          onClick={() => handleClick("left")}
        />
        <div
          className="flex w-max -translate-x-0 justify-center gap-1 transition duration-1000 md:gap-2"
          ref={sliderRef}
        >
          {movies &&
            movies.map((movieData) => (
              <MovieCard key={movieData.id} movieData={movieData} />
            ))}
        </div>
        <ChevronRight
          className="z-9 absolute right-0 top-0 h-full w-8 cursor-pointer rounded-md bg-black opacity-50 transition hover:scale-110 md:w-12"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default Row;
