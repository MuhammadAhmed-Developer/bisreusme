import Image from "next/image";
import React from "react";
import style from "@/style/buildResume/buildResume.module.css";
import BtnArrowRight from "@/public/assets/images/svg-Images/btn-arrow-right";
import Btn from "../btn/btn";
import Link from "next/link";

function BuildResume() {
  return (
    <div className=" bg-white mt-[8px] px-10">
      <div className="flex justify-center mt-4">
        <Image
          alt="bisResume"
          src={"/assets/images/home-screen-images/star.svg"}
          width={32}
          height={32}
          className="pb-[50px] mr-[18px] md:block hidden"
        />
        <h1 className="text-[#102D59] text-center text-[32px] md:text-[48px] font-Claris-sans">
          Build in seconds with{" "}
          <span className="text-[#2871DE]  text-[32px] md:text-[48px] font-Claris-sans">
            {" "}
            AI Builder
          </span>
        </h1>
        <Image
          alt="bisResume"
          src={"/assets/images/home-screen-images/star.svg"}
          width={32}
          height={32}
          className="ml-[68px] md:block hidden"
        />
      </div>
      <div
        className={`flex justify-center mt-8 ${style.contentParentContainer}`}
      >
        <div className="flex flex-col ">
          <div className="flex flex-col gap-[13px] items-end">
            <Image
              width={36.15}
              height={36}
              alt="crown"
              src={"/assets/images/home-screen-images/postericon.svg"}
            />
            <p className="text-[#5E5E5F] text-[20px] font-Poppins font-normal ">
              Created by experts
            </p>
          </div>
          <div className="pt-10 flex flex-col gap-[13px] items-end mr-28">
            <Image
              width={35.03}
              height={31}
              alt="crown"
              src={"/assets/images/home-screen-images/messageIcon.svg"}
            />
            <p className="text-[#5E5E5F] text-[20px] font-Poppins font-normal text-right">
              Guided by hiring managers <br /> recommendation
            </p>
          </div>
          <div className="pt-20  flex flex-col gap-[13px] items-end ">
            <Image
              width={37}
              height={37}
              alt="crown"
              src={"/assets/images/home-screen-images/analytics.svg"}
            />
            <p className="text-[#5E5E5F] text-[20px] font-Poppins font-normal ">
              Distilled with analytics
            </p>
          </div>
        </div>
        <div className={style.imageParent}>
          <Image
            alt="bisResume"
            src={"/assets/images/home-screen-images/mobileCircle.svg"}
            fill
          />
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-col gap-[13px] items-baseline">
            <Image
              width={26}
              height={36}
              alt="crown"
              src={"/assets/images/home-screen-images/batchIcon.svg"}
            />
            <p className="text-[#5E5E5F] text-[20px] font-Poppins font-normal ">
              Approved by recruiters
            </p>
          </div>
          <div className="pt-10 flex flex-col gap-[13px] items-baseline ml-24">
            <Image
              width={34}
              height={33.08}
              alt="crown"
              src={"/assets/images/home-screen-images/thumbIcon.svg"}
            />
            <p className="text-[#5E5E5F] text-[20px] font-Poppins font-normal ">
              Proven by thousands hired
            </p>
          </div>
          <div className="pt-20  flex flex-col gap-[13px]">
            <Image
              width={33}
              height={29}
              alt="crown"
              src={"/assets/images/home-screen-images/heartIcon.svg"}
            />
            <p className="text-[#5E5E5F] text-[20px] font-Poppins font-normal ">
              And it looks perfectly <br /> everywhere
            </p>
          </div>
        </div>
      </div>

      <div className={style.contentParent}>
        <div className="relative w-[90%] h-[300px] m-auto">
          <Image
            alt="bisResume"
            src={"/assets/images/home-screen-images/mobileCircle.svg"}
            fill
          />
        </div>
        <div className={style.iconContentParent}>
          <Image
            width={27}
            height={27}
            alt="crown"
            src={"/assets/images/home-screen-images/crownIcon.svg"}
          />
          <p>Created by experts</p>
        </div>

        <div className={style.iconContentParent}>
          <Image
            width={20}
            height={28}
            alt="crown"
            src={"/assets/images/home-screen-images/batchIcon.svg"}
          />
          <p>Approved by recruiters</p>
        </div>

        <div className={style.iconContentParent}>
          <Image
            width={29}
            height={25}
            alt="crown"
            src={"/assets/images/home-screen-images/messageIcon.svg"}
          />
          <p>Guided by hiring managers recommendation</p>
        </div>

        <div className={style.iconContentParent}>
          <Image
            width={29}
            height={25}
            alt="crown"
            src={"/assets/images/home-screen-images/thumbIcon.svg"}
          />
          <p>Proven by thousands hired</p>
        </div>

        <div className={style.iconContentParent}>
          <Image
            width={29}
            height={25}
            alt="crown"
            src={"/assets/images/home-screen-images/barIcon.svg"}
          />
          <p>Distilled with analytics</p>
        </div>

        <div className={style.iconContentParent}>
          <Image
            width={29}
            height={25}
            alt="crown"
            src={"/assets/images/home-screen-images/heartIcon.svg"}
          />
          <p>And it looks perfectly everywhere</p>
        </div>
      </div>

      <div className="flex items-center justify-center pt-8 md:pt-0 flex-col">
        <h1 className="text-[#000000] font-Poppins font-bold text-[20px]">
          Boost your career with
        </h1>
        <div className="flex gap-0">
          <Image
            alt="starts"
            src={"/assets/images/home-screen-images/stars.svg"}
            width={151}
            height={27}
            className=""
          />
          <div className="">
            <p className="text-[#000000] font-Poppins font-bold text-[20px]">
              resume
            </p>
            <Image
              width={92}
              height={4}
              alt="brown"
              src={"/assets/images/home-screen-images/brownLine.svg"}
            />
          </div>
        </div>
        <div className="flex justify-center gap-[125px] mt-4">
          <Image
            alt="bisResume"
            src={"/assets/images/home-screen-images/star.svg"}
            width={32}
            height={32}
            className=" md:block hidden"
          />
          <Link href={"/templates"}>
            <Btn title="Create Resume" />
          </Link>
          <Image
            alt="bisResume"
            src={"/assets/images/home-screen-images/star.svg"}
            width={32}
            height={32}
            className="pb-10 md:block hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default BuildResume;
