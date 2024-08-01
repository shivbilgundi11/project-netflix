import { SignUp } from "@clerk/clerk-react";
import { useEffect } from "react";

export default function SignUpPage() {
  useEffect(() => {
    window.document.title = "Netflix | Sign-Up";
  });
  return (
    <>
      <div className="my-9 flex items-center justify-center md:my-12 xl:my-16">
        <SignUp fallbackRedirectUrl={"/auth/sign-in"} />
      </div>
    </>
  );
}
