import Children from "../../assets/images/children.png";

const Feature4 = () => {
  return (
    <section className="mt-2 bg-black py-10 md:py-10">
      <div className="md:max-container mx-auto grid h-full w-full grid-cols-1 items-center justify-center gap-y-12 px-4 py-4 md:grid-cols-2 md:p-8">
        {/* Col-1 */}
        <div className="text-center md:order-2 md:text-left">
          <h2 className="font-netflixBold mb-3 text-[32px] font-bold md:text-4xl">
            Create profiles for kids
          </h2>
          <p className="text-lg md:text-2xl">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>

        {/* Col-2 */}
        <div className="relative mx-auto flex max-w-[470px] items-center justify-center">
          <img src={Children} alt="tv-image" className="" />
        </div>
      </div>
    </section>
  );
};

export default Feature4;
