import Link from "next/link";
import React from "react";
import { GoHistory } from "react-icons/go";
import { TbTargetArrow } from "react-icons/tb";
import { FaEarthAmericas } from "react-icons/fa6";
import { FcProcess } from "react-icons/fc";
import AvatarBlue from "@/public/assets/images/svg-Images/avater-blue";
import AvatarPink from "@/public/assets/images/svg-Images/avater-pink";
import AvatarPurple from "@/public/assets/images/svg-Images/avater-purple";

export default function About() {
  return (
    <div>
      <div className="bg-[#EAF1FC] h-auto w-full">
        <div className="px-3 sm:px-0">
          <h1 className="pt-[116px]  text-center text-[24px] sm:text-[32px] lg:text-[48px] text-[#102D59] font-Claris-sans">
            About <span className=" text-[#2871DE] ">Us</span>{" "}
          </h1>
          <div className="text-center pt-5 pb-11 sm:px-[20px] lg:px-[170px] text-[14px] sm:text-[20px] font-normal text-[#5E5E5F]  font-poppins">
            No matter where you’re at on your job hunt &nbsp;
            <span className="text-black font-semibold">
              we’re here to help &nbsp;
            </span>
            Resume Genius provides all the resources you need to go from job
            application to job offer, including expertly &nbsp;
            <span>
              <Link
                href={"/blogs/writing-guide"}
                className="text-black font-semibold"
              >
                written guides
              </Link>{" "}
              examples{" "}
              <Link href={"/templates"} className="text-black font-semibold">
                resume
              </Link>{" "}
              and{" "}
              <Link href={"/cover-letter"} className="text-black font-semibold">
                cover letter
              </Link>{" "}
              &nbsp;
            </span>
            builder software, and more. &nbsp;
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-1 grid-cols-1 px-10 my-10 gap-10">
        <div className="p-3 lg:col-span-1 md:col-span-4 col-span-4">
          <div>
            <h1 className="text-[#2D3748] text-[30px] font-bold flex items-center gap-2">
              <GoHistory className="text-primary-blue text-2xl" /> Our History
            </h1>
            <div>
              BisResume was founded in 2009 with the idea that the resume
              creation process could be automated and simplified. Millions of
              people have since built resumes using our software, many of whom
              landed jobs at Fortune 500 companies.
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-[#2D3748] text-[30px] font-bold  flex items-center gap-2">
              <TbTargetArrow className="text-pink-500 text-2xl" /> Our Mission
            </h1>
            <div>
              We want to make your next job hunt easy by providing the best
              career resources on the web. Our cutting-edge software and
              comprehensive guides are made to help you achieve professional
              success and land your dream job.
            </div>
          </div>
        </div>
        <div className="p-3 lg:col-span-1 md:col-span-4 col-span-4 lg:mt-16">
          <div>
            <h1 className="text-[#2D3748] text-[30px] font-bold flex items-center gap-2">
              <FaEarthAmericas className="text-green-500 text-2xl" /> Our
              Culture
            </h1>
            <div>
              The Bisresume team is a mix of career veterans and ambitious young
              professionals. Our office culture is defined by our commitment to
              learning – from each other, from other industry experts, and from
              job hunters.
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-[#2D3748] text-[30px] font-bold  flex items-center gap-2">
              <FcProcess className="text-2xl" /> Our Process
            </h1>
            <div>
              To provide our users with the best possible experience when
              visiting our site, each piece of content must follow our strict
              editorial process prior to publication. This process includes fact
              checking, ensuring sources are cited, and having a certified,
              relevant expert review each.
            </div>
          </div>
        </div>
        <div className="lg:px-20 lg:py-5 lg:col-span-2 md:col-span-4 col-span-4 flex justify-center">
          <img
            src={"/assets/images/resumeGif.gif"}
            alt="resume"
            className="w-full h-full border-[3px] border-white rounded-2xl"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 items-center lg:px-30 xl:px-52 md:px-20 px-3 flex-wrap mt-10 mb-20">
        <div className="lg:p-3 md:p-5 p-5 relative flex md:justify-center justify-center lg:justify-end xl:justify-end">
        <div className="absolute lg:top-28 xl:top-28 md:top-28 top-0 xl:right-24 z-10 flex flex-wrap gap-5 md:justify-center justify-center lg:justify-end xl:justify-end">
          <AvatarBlue className="vert-move"/>
          <AvatarPink className="vert-move"/>
          <AvatarPurple className="vert-move"/>
          </div>
          <div className="">
          <img src="/assets/images/teamBisresume.svg" alt="Team Bisresume" />
          </div>
        </div>
        <div className="p-3">
          <h1 className="text-[#2D3748] text-[26px] leading-7 font-semibold">
            Boost your career with us!
          </h1>
          <div className="text-sm mt-2">
            Passionate about helping people find their dream jobs? Come make an
            impact with us!
          </div>
          <div className="mt-5">
            <Link
              href={"/templates"}
              className="bg-primary-blue px-6 py-2 rounded-lg text-white text-sm "
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center bg-gradient-to-r from-sky-light to-primary-blue py-16">
        <h1 className="text-[30px] font-bold text-white">Do you have any questions?</h1>
        <div className="mt-8">
          <Link href={"/contact-us"} className="text-primary-blue bg-white rounded-full px-7 py-2 border-[1px] border-primary-blue">
            We are here to help you
          </Link>
        </div>
      </div>
    </div>
  );
}
