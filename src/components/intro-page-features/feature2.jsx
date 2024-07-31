import Poster from "../../assets/images/boxshot.png";
import Downloading from "../../assets/images/download-icon.gif";
import Mobile from "../../assets/images/mobile-0819.jpg";

const Feature2 = () => {
  return (
    <section className="mt-2 bg-black py-10 md:py-10">
      <div className="md:max-container mx-auto grid h-full w-full grid-cols-1 items-center justify-center gap-y-12 px-4 py-4 md:grid-cols-2 md:p-8">
        {/* Col-1 */}
        <div className="text-center md:order-2 md:text-left">
          <h2 className="font-netflixBold mb-3 text-[32px] font-bold md:text-4xl">
            Download your shows to watch offline
          </h2>
          <p className="text-lg md:text-2xl">
            Save your favourites easily and always have something to watch.
          </p>
        </div>

        {/* Col-2 */}
        <div className="relative flex items-center justify-center md:order-1">
          <img src={Mobile} alt="tv-image" className="" />

          <div className="z-1 border-dark-gray absolute bottom-0 flex h-[80px] w-[280px] items-center justify-between overflow-hidden rounded-xl border bg-black p-2 sm:h-[100px] sm:w-[340px]">
            <div className="flex items-center justify-center gap-x-4">
              <img
                src={Poster}
                className="w-[45px] sm:w-[50px]"
                alt="stranger-things-poster"
              />

              <span>
                <p className="text-sm sm:text-lg">Stranger Things</p>
                <p className="sm:text-md text-sm text-blue-600">
                  Downloading...
                </p>
              </span>
            </div>

            <span className="w-[40px] sm:w-[50px]">
              <img src={Downloading} alt="downloading-gif" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
