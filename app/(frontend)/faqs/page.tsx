import { client } from "@/sanity/lib/client";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";

const fetchFaqs = async () => {
  const Faqs = await client.fetch(
    `*[_type == "faqs"]`,
    {},
    { cache: "no-cache" }
  );
  return Faqs;
};

export default async function Faqs() {
  const Faqs: any = await fetchFaqs();
  return (
    <>
      <div className="main">
        <div className="bg-[#EAF1FC] h-auto w-full">
          <div className="px-3 sm:px-0">
            <h1 className="pt-[116px]  text-center text-[24px] sm:text-[32px] lg:text-[48px] text-[#102D59] font-Claris-sans">
              Frequently Asked{" "}
              <span className=" text-[#2871DE] ">Questions</span>{" "}
            </h1>
            <p className="text-center pt-5 pb-11 sm:px-[60px] lg:px-[170px] text-[14px] sm:text-[20px] font-normal text-[#5E5E5F]  font-poppins">
              Unlock Your Potential with{" "}
              <span className="text-black font-bold  ">Precision</span> and{" "}
              <span className="text-black font-bold ">Ease</span>: Your
              Comprehensive Guide to Crafting the Perfect Resume. Navigate{" "}
              <span className="text-black font-bold ">FAQs</span> for Seamless
              Resume Creation with{" "}
              <span className="text-black font-bold ">AI-Powered</span>{" "}
              Templates.
            </p>
          </div>
        </div>
        <FrequentlyAskedQuestions FaqListLandingPage={Faqs} />
      </div>
    </>
  );
}
