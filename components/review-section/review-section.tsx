import Image from "next/image";
import Btn from "../btn/btn";
import ReviewCard from "./review-card";
import Stars from "@/public/assets/images/svg-Images/stars";
import Link from "next/link";
export default function ReviewSection() {
  return (
    <div className="mt-[74px]">
    <section className="bg-sky-light  w-[100%] lg:px-[80px] md:px-[30px] px-[20px] pb-[56px] pt-[175px] ">
      <div className="bg-medium-blue pl-[16px] flex justify-center lg:flex-nowrap md:flex-wrap flex-wrap xl:pr-[108px] lg:pr-[54px] md:pr-[16px] pr-[-1px] py-[53px] rounded-[21px] gap-4">
        <ReviewCard />
        <div className="lg:order-2 md:order-2 order-1 ">
          <div className="xl:ml-[114px] lg:ml-[54px] flex flex-col lg:justify-start  md:justify-center justify-center">
            <h1 className="xl:text-[48px] text-[24px] sm:text-[31px] px-6 lg:px-0 md:text-center font-Claris-sans  lg:text-start text-center text-white">
              Your resume is an extension of yourself - make one that’s truly
              you
            </h1>
            <div className="flex  lg:justify-start mt-[23px] md:justify-center justify-center">
              <Link href={"/templates"}>
                <Btn title="Create Resume" />
              </Link>
            </div>
            <div className="mt-[23px] flex lg:justify-start  md:justify-center justify-center">
              <Stars/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
