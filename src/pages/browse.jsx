import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import requests from "../api/request-endpoints";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Row from "../components/movies-row";
import Navbar from "../components/navbar";
import { actionMovies } from "../db/actionMovies";
import { comedyMovies } from "../db/comedyMovies";
import { documentaries } from "../db/documentaries";
import { horrorMovies } from "../db/horrorMovies";
import { romanceMovies } from "../db/romanceMovies";
import { topRated } from "../db/topRated";
import { trendingNow } from "../db/trending-now";
import { links } from "../lib/utils";

export default function BrowseShowsMovies() {
  const { isSignedIn, userId } = useAuth();

  const navigate = useNavigate();

  if (!isSignedIn || !userId) {
    navigate("/auth/sign-in");
  }

  useEffect(() => {
    window.document.title = "Home - Netflix";
  });

  return (
    <>
      <section className="w-full overflow-hidden bg-[#141414]">
        <Navbar />

        <Banner />

        <Row
          title={"Trending Now"}
          fetchUrl={requests?.fetchTrending}
          backup={trendingNow}
        />
        <Row
          title={"Top Rated"}
          fetchUrl={requests?.fetchTopRated}
          backup={topRated}
        />
        <Row
          title={"Action Movies"}
          fetchUrl={requests?.fetchActionMovies}
          backup={actionMovies}
        />
        <Row
          title={"Comedy Movies"}
          fetchUrl={requests?.fetchComedyMovies}
          backup={comedyMovies}
        />
        <Row
          title={"Horror Movies"}
          fetchUrl={requests?.fetchHorrorMovies}
          backup={horrorMovies}
        />
        <Row
          title={"Romance Movies"}
          fetchUrl={requests?.fetchRomanceMovies}
          backup={romanceMovies}
        />
        <Row
          title={"Documentaries"}
          fetchUrl={requests?.fetchDocumentaries}
          backup={documentaries}
        />
      </section>

      <Footer links={links} transparent={false} />
    </>
  );
}
