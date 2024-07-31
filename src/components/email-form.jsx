import { ChevronRight } from "lucide-react";
import { useState } from "react";

const EmailForm = () => {
  const [emailId, setEmailId] = useState("");

  return (
    <div className="mx-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
      <input
        type="email"
        name="getstartedEmail"
        placeholder="Email address"
        value={emailId}
        onChange={(e) => setEmailId(e.target.value)}
        autoComplete="false"
        className="input-email email-bg"
      />
      <button className="btn-secondary">
        Get Started {<ChevronRight color="#fff" />}
      </button>
    </div>
  );
};

export default EmailForm;
