const MobileMenu = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="absolute left-0 top-8 flex w-56 flex-col border-2 border-gray-800 bg-black py-5">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">Home</div>
        <div className="px-3 text-center text-white hover:underline">
          TV Shows
        </div>
        <div className="px-3 text-center text-white hover:underline">Films</div>
        <div className="px-3 text-center text-white hover:underline">
          New & Popular
        </div>
        <div className="px-3 text-center text-white hover:underline">
          My List
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Browse by Languages
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
