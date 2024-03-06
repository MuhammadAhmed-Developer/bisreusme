import React from "react";
import FeaturesCard from "./features-card";

import FirstFeatureIcon from "@/public/assets/images/svg-Images/first-feature-card-icon";
import SecondFeatureIcon from "@/public/assets/images/svg-Images/secont-feature-card-icon";
import ThirdFeatureIcon from "@/public/assets/images/svg-Images/third-feature-card-icon";
import ForthFeatureIcon from "@/public/assets/images/svg-Images/forth-feature-card-icon";
import FivthFeatureIcon from "@/public/assets/images/svg-Images/fivth-feature-card-icon";
import SixthFeatureIcon from "@/public/assets/images/svg-Images/sixth-feature-card-icon";

const featuresData = [
  {
    icon: <FirstFeatureIcon />,
    heading: "Proven templates to increase hiring chance",
    para: "Boost your hiring odds with proven resume templates, meticulously optimized for applicant tracking systems and expertly tailored to industry trends.",
    bg: "#CAEDFF",
  },
  {
    icon: <SecondFeatureIcon />,
    heading: "Creative, Modern and Clean Template Design",
    para: "Make a lasting first impression with our Creative, Modern and Clean Template Design that showcases your skills and experience in a visually appealing way.",
    bg: "#E9E7FF",
  },
  {
    icon: <ThirdFeatureIcon />,
    heading: "Easy & Intuitive Online Resume & Cover Letter",
    para: "Build your dream career with our Easy & Intuitive Online Resume & Cover Letter builder. Create professional documents in minutes, no design experience needed.",
    bg: "#FCF2D7",
  },
  {
    icon: <ForthFeatureIcon />,
    heading: "Free to use. Developed by hiring professionals",
    para: "Unlock professional-quality resumes and cover letters at no cost, built by industry veterans who intimately know what recruiters want and seek.",
    bg: "#D8F5D7",
  },
  {
    icon: <FivthFeatureIcon />,
    heading: "Recruiter Approved Phrases with Modules",
    para: "Speak the language of recruiters with our Recruiter Approved Phrases with Modules, helping you craft effective resumes that get noticed.",
    bg: "#F7D9D1",
  },
  {
    icon: <SixthFeatureIcon />,
    heading: "Fast Easy Resume with Artificial Intelligence",
    para: "Land your dream job faster with Fast Easy Resume powered by AI, instantly creating a tailored resume that catches the eye of recruiters.",
    bg: "#D8E4F0",
  },
];

export default function Features(props: any) {
  return (
    <section className="my-10">
      <div className="text-center">
        <h1 className="md:text-[48px] text-[32px] text-medium-blue font-Claris-sans ">
          Our main <span className="text-primary-blue">features</span>
        </h1>
      </div>
      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mx-5 sm:mx-[40px] gap-4 lg:mx-[80px] md:mt-[41px] mt-5 md:gap-5 lg:gap-[34px]">
        {featuresData.map((feature, index) => (
          <FeaturesCard
            key={index}
            icon={feature.icon}
            heading={feature.heading}
            para={feature.para}
            bg={feature.bg}
          />
        ))}
      </div>
    </section>
  );
}
