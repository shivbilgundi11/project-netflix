import { Link, Outlet } from "react-router-dom";

import Logo from "../assets/images/Netflix_Logo_PMS.png";
import Footer from "../components/footer";
import { links } from "../lib/utils";

export default function Authentication() {
  return (
    <>
      <main className="bg-gradient2 flex min-h-screen w-full flex-col justify-between bg-cover bg-center bg-no-repeat">
        <header className="flex h-[60px] w-full items-center bg-black sm:h-[100px] sm:bg-transparent">
          <nav className="">
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className="block w-[125px] sm:w-[220px] md:m-6 md:ml-10 md:w-[210px]"
              />
            </Link>
          </nav>
        </header>

        <Outlet />

        <Footer links={links} transparent={true} />
      </main>
    </>
  );
}
