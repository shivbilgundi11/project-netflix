import { Link } from "react-router-dom";

import NetflixLogo from "../assets/images/Netflix_Logo_PMS.png";
import EmailForm from "../components/email-form";
import Faq from "../components/faq";
import Footer from "../components/footer";
import Feature1 from "../components/intro-page-features/feature1";
import Feature2 from "../components/intro-page-features/feature2";
import Feature3 from "../components/intro-page-features/feature3";
import Feature4 from "../components/intro-page-features/feature4.";
import LanguageDropDown from "../components/language";
import { links } from "../lib/utils";

export default function LandingPage() {
  return (
    <>
      <header className="bg-gradient flex h-[510px] w-full flex-col justify-between bg-cover bg-center md:h-[710px]">
        <nav className="max-container flex items-center justify-between px-4 py-3 md:px-8 md:py-2">
          <Link to="/" className="w-[110px] md:w-[190px]">
            <img
              src={NetflixLogo}
              alt="Netflix-Logo"
              className="block w-full"
            />
          </Link>

          <div className="cta flex items-center justify-center gap-x-2">
            <LanguageDropDown />
            <Link to="/auth/sign-in" className="btn-primary text-sm">
              Sign In
            </Link>
          </div>
        </nav>

        {/* Hero Section... */}
        <div className="max-container mx-auto flex h-full flex-col items-center justify-center gap-y-4 text-center sm:gap-y-5 md:gap-y-6">
          <h1 className="max-w-[350px] font-netflixBold text-[32px] sm:max-w-none md:text-4xl">
            Enjoy big movies, hit series and more from &#8377;149.
          </h1>

          <p className="font-netflixRg text-lg md:text-2xl">
            Join today. Cancel anytime.
          </p>
          <p className="font-netflixRg text-sm md:text-xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <EmailForm />
        </div>
      </header>

      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />

      <Faq />

      <Footer links={links} transparent={false} />
    </>
  );
}
