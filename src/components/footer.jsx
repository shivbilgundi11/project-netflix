import "../index.css";

import LanguageDropDown from "./language";

// eslint-disable-next-line react/prop-types
const Footer = ({ links, transparent }) => {
  return (
    <footer
      className={`bg-black px-6 py-10 md:py-10 ${
        transparent ? "sm:bg-[#00000066]" : "sm:bg-black"
      }`}
    >
      <div className="md:max-container">
        <p className="text-md font-netflixRg text-white-400 font-thin leading-snug">
          Questions? Call{" "}
          <a href="#" className="underline">
            000-800-919-1694
          </a>
        </p>

        <div className="my-7 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {/* eslint-disable-next-line react/prop-types */}
          {links.map((link, id) => {
            return (
              <a
                href="#"
                className="font-netflixRg text-white-400 text-sm font-thin underline"
                key={id}
              >
                {link}
              </a>
            );
          })}
        </div>

        <div>
          <LanguageDropDown />
        </div>

        <div className="text-white-400 font-netflixRg my-5 text-sm">
          Netflix India
        </div>
      </div>
    </footer>
  );
};

export default Footer;
