import MacImg from "../../assets/images/device-pile-in.png";
import DeviceAllVideo from "../../assets/images/video-devices-in.mp4";

const Feature3 = () => {
  return (
    <section className="mt-2 bg-black py-10 md:py-10">
      <div className="md:max-container mx-auto grid h-full w-full grid-cols-1 items-center justify-center gap-y-12 px-4 py-4 md:grid-cols-2 md:p-8">
        {/* Col-1 */}
        <div className="text-center md:text-left">
          <h2 className="font-netflixBold mb-4 text-[32px] font-bold md:text-4xl">
            Watch everywhere
          </h2>
          <p className="text-lg md:text-2xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>

        {/* Col-2 */}
        <div className="relative mx-auto flex max-w-[470px] items-center justify-center">
          <img src={MacImg} alt="tv-image" className="z-10 w-full" />
          <div className="absolute top-[35px] z-0 w-[65%] overflow-hidden">
            <video src={DeviceAllVideo} autoPlay playsInline muted loop></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3;
