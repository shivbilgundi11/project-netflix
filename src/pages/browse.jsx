import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/navbar";

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
      </section>
    </>
  );
}
