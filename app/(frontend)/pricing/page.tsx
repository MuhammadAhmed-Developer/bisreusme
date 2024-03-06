import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { client } from "@/sanity/lib/client";
import FrequentlyAskedQuestions from "../../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import PricingCard from "@/components/pricing-card/PricingCard";

const fetchPricing = async () => {
  const pricing = await client.fetch(
    `*[_type == "pricing"]`,
    {},
    { cache: "no-cache" }
  );
  return pricing;
};

const fetchPricingFaqs = async () => {
  const pricingFaqs = await client.fetch(
    `*[_type == "pricingFaqs"]`,
    {},
    { cache: "no-cache" }
  );
  return pricingFaqs;
};

export default async function Pricing() {
  const pricingDetail: any = await fetchPricing();
  const PricingFaqs: any = await fetchPricingFaqs();
  const orderMapping: any = { Free: 1, Pro: 2, Enterprise: 3 };
  pricingDetail.sort(
    (a: any, b: any) => orderMapping[a.cardType] - orderMapping[b.cardType]
  );

  return (
    <>
      <div className="main">
        <div className="bg-[#fff] h-auto w-full">
          <div className="px-3 pt-[116px] sm:px-0">
            <div className="flex flex-col justify-center items-center">
              <h1 className=" font-bold  text-center text-[24px] sm:text-[32px] lg:text-[48px] text-[#170F49]  font-DM-Sans">
                Affordable pricing plans
              </h1>
              <p className="text-center pt-3 pb-11 sm:px-[60px] w-[96%] md:w-[70%] lg:w-[55%] text-[16px] font-DM-Sans sm:text-[18px] font-normal text-[#5E5E5F]  font-poppins">
              Smart savings, big results. Plans that fit your budget and fuel your dreams.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 ">
          {pricingDetail?.map((card: any) => {
            return (
            <PricingCard key={card._id} card={card} />

            )
          })}
        </div>
        <h1 className="pt-[116px]  text-center text-[24px] sm:text-[32px] lg:text-[48px] text-[#102D59] font-Claris-sans">
          Frequently Asked <span className=" text-[#2871DE] ">Questions</span>{" "}
        </h1>
        <FrequentlyAskedQuestions FaqListLandingPage={PricingFaqs} />
      </div>
    </>
  );
}
