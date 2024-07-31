import { faqs } from "../lib/utils";
import Accordion from "./accordion";
import EmailForm from "./email-form";
// import EmailForm from "./EmailForm";

const Faq = () => {
  return (
    <section className="my-2 bg-black py-10 md:py-10">
      <div className="md:max-container w-full">
        <h2 className="font-netflixBold text-center text-[32px] md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="max-container px-8 py-10">
          {faqs.map((faq, id) => {
            return <Accordion faq={faq} key={id} />;
          })}
        </div>

        <div className="mb-6 flex h-full w-full flex-col px-4">
          <p className="my-6 text-center text-lg sm:text-xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <EmailForm />
        </div>
      </div>
    </section>
  );
};

export default Faq;
