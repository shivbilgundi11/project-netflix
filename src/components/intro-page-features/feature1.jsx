import TVImg from "../../assets/images/tv.png";
import TVVideo from "../../assets/images/video-tv-in-0819.mp4";

const Feature1 = () => {
  return (
    <section className="mt-2 bg-black py-10 md:py-10">
      <div className="md:max-container mx-auto grid h-full w-full grid-cols-1 items-center justify-center gap-y-12 px-4 py-4 md:grid-cols-2 md:p-8">
        {/* Col-1 */}
        <div className="text-center md:text-left">
          <h2 className="font-netflixBold mb-4 text-[32px] font-bold md:text-4xl">
            Enjoy on your TV
          </h2>
          <p className="text-lg md:text-2xl">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>

        {/* Col-2 */}
        <div className="relative flex items-center justify-center">
          <img src={TVImg} alt="tv-image" className="z-10" />
          <div className="absolute z-0">
            <video src={TVVideo} autoPlay playsInline muted loop></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
