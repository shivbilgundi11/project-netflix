import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Loader from "./components/loader/loader";

const LandingPage = lazy(() => import("./pages/intro-page"));
const Authentication = lazy(() => import("./pages/authentication"));
const SignIn = lazy(() => import("./pages/sub-routes/sign-in"));
const SignUp = lazy(() => import("./pages/sub-routes/sign-up"));
const BrowseShowsMovies = lazy(() => import("./pages/browse"));

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Authentication />}>
            <Route path="/auth/sign-in" element={<SignIn />} />
            <Route path="/auth/sign-up" element={<SignUp />} />
          </Route>
          <Route path="/browse" element={<BrowseShowsMovies />} />
        </Routes>
      </Suspense>
    </>
  );
}
