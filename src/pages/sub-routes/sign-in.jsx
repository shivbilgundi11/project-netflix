import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <>
      <div className="my-9 flex items-center justify-center md:my-12 xl:my-16">
        <SignIn fallbackRedirectUrl={"/browse"} />
      </div>
    </>
  );
}
