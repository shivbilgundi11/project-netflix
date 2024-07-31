import { Plus, X } from "lucide-react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Accordion = ({ faq }) => {
  const [isClose, setisClose] = useState(false);

  return (
    <div className="my-1">
      <p
        className={`bg-dark-gray hover:bg-light-gray flex w-full cursor-pointer items-center justify-between p-6 text-lg md:text-2xl ${
          isClose && "rotate-180deg"
        }`}
        onClick={() => setisClose(!isClose)}
      >
        {/* eslint-disable-next-line react/prop-types */}
        {faq.title}

        {!isClose ? <Plus color="#ffffff" /> : <X color="#ffffff" />}
      </p>

      <p
        className={`bg-dark-gray font-netflixRg mt-0.5 w-full p-6 text-lg font-thin ${
          isClose ? "block" : "hidden"
        } leading-8 md:text-2xl`}
      >
        {/* eslint-disable-next-line react/prop-types */}
        {faq.answer}
      </p>
    </div>
  );
};

export default Accordion;
