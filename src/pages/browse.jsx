import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

export default function BrowseShowsMovies() {
  return (
    <>
      <SignedIn>
        <div>
          <h1 className="text-3xl font-bold underline">BrowseShowsMovies</h1>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl={"/auth/sign-in"} />
      </SignedOut>
    </>
  );
}
