import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Bell, ChevronDown, Search } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import Logo from "../assets/images/Netflix_Logo_PMS.png";
import MobileMenu from "./mobile-menu";
import NavbarItem from "./navbar-link";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setshowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setshowBackground(true);
      } else {
        setshowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((curr) => !curr);
  }, []);

  return (
    <nav className="fixed z-50 w-full">
      <div
        className={`flex flex-row items-center px-4 py-2 transition duration-500 md:px-16 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <img src={Logo} alt="Log" className="h-8 lg:h-12" />

        <div className="ml-4 hidden flex-row gap-6 lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="TV Shows" />
          <NavbarItem label="Movies" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by Languages" />
        </div>

        <div
          onClick={toggleMobileMenu}
          className="relative ml-2 flex cursor-pointer flex-row items-center gap-2 md:ml-6 lg:hidden"
        >
          <p className="text-sm text-white">Browse</p>
          <ChevronDown
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />

          <MobileMenu visible={showMobileMenu} />
        </div>

        <div className="ml-auto flex flex-row items-center gap-3 lg:gap-5">
          <div className="cursor-pointer text-gray-200 transition hover:text-gray-300">
            <Search />
          </div>
          <div className="cursor-pointer text-gray-200 transition hover:text-gray-300">
            <Bell />
          </div>

          <div className="relative flex cursor-pointer flex-row items-center gap-1">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
