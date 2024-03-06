import { client } from "@/sanity/lib/client";
import FrequentlyAskedQuestions from "../../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import ContactForm from "@/components/contact-form/ContactForm";

const fetchFaqs = async () => {
  const Faqs = await client.fetch(
    `*[_type == "faqs"]`,
    {},
    { cache: "no-cache" }
  );
  return Faqs;
};

export default async function ContactUs() {
  const Faqs: any = await fetchFaqs();
  return (
    <>
      <div className="main">
        <div className="bg-[#EAF1FC] h-auto w-full">
          <div className="px-3 sm:px-0">
            <h1 className="pt-[116px]  text-center text-[24px] sm:text-[32px] lg:text-[48px] text-[#2871DE]  font-Claris-sans">
              Contact <span className="  text-[#102D59]">Us</span>{" "}
            </h1>
            <p className="text-center pt-5 pb-11 sm:px-[60px] lg:px-[170px] text-[14px] sm:text-[20px] font-normal text-[#5E5E5F]  font-poppins">
              Have comments, questions, or feedback to share? Our team would
              love to hear from you. Give us a call or submit a message below.
            </p>
          </div>
        </div>
        <ContactForm/>
        <FrequentlyAskedQuestions FaqListLandingPage={Faqs} />
      </div>
    </>
  );
}
