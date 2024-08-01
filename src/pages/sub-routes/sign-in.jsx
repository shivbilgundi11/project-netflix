import { SignIn } from "@clerk/clerk-react";
import { useEffect } from "react";

export default function SignInPage() {
  useEffect(() => {
    window.document.title = "Netflix | Sign-In";
  });
  return (
    <>
      <div className="my-9 flex items-center justify-center md:my-12 xl:my-16">
        <SignIn fallbackRedirectUrl={"/browse"} />
      </div>
    </>
  );
}
