import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Loader from "./components/loader/loader";

const LandingPage = lazy(() => import("./pages/intro-page"));
const Authentication = lazy(() => import("./pages/authentication"));
const SignInPage = lazy(() => import("./pages/sub-routes/sign-in"));
const SignUpPage = lazy(() => import("./pages/sub-routes/sign-up"));
const BrowseShowsMovies = lazy(() => import("./pages/browse"));

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Authentication />}>
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Route>
        <Route
          path="/browse"
          element={
            <>
              <SignedIn>
                <BrowseShowsMovies />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </Suspense>
  );
}
