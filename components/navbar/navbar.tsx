"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "@/style/navbar/navbar.module.css";
import Dropdown from "../dropdown/dropdown";
import Logo from "@/public/assets/images/svg-Images/logo";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const pathname = usePathname()
  const isPricingRoute = pathname === '/pricing';
  const [bgColor, setBgColor] = useState<string>("");
  const [transition, setTransition] = useState<string>("");
  const [dropdownShown, setDropdownShown] = useState<Boolean>(false);
  const [dropdownShownSecond, setDropdownShownSecond] =
    useState<Boolean>(false);
  const [dropdownShownThird, setDropdownShownThird] = useState<Boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string>("");

  const handleScroll = () => {
    const position = window.pageYOffset;

    if (position > 50) {
      setBgColor("rgba(255, 255, 255, 0.8)");
      setTransition("0.5s");
    } else {
      setBgColor("");
      setTransition("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onclickOption = () => {
    setDropdownShownSecond(false);
    setDropdownShownThird(false);

    if (!dropdownShown) {
      setDropdownShown(true);
    }
    if (dropdownShown) {
      setDropdownShown(false);
    }
  };

  const onclickOptionSecond = () => {
    setDropdownShown(false);
    setDropdownShownThird(false);

    if (!dropdownShownSecond) {
      setDropdownShownSecond(true);
    }
    if (dropdownShownSecond) {
      setDropdownShownSecond(false);
    }
  };

  const onclickOptionThird = () => {
    setDropdownShown(false);
    setDropdownShownSecond(false);

    if (!dropdownShownThird) {
      setDropdownShownThird(true);
    }
    if (dropdownShownThird) {
      setDropdownShownThird(false);
    }
  };

  const data = {
    main: "Build with Ai",
    subMain: "Unleashing the Power of AI",
    mainIamgeSrc: "/assets/images/home-screen-images/AiLogo.svg",
    herf1: "/templates",
    secondMain: "Simple Build",
    secondSubMain: "Build in Seconds",
    secondImageSrc: "/assets/images/home-screen-images/simple.svg",
    herf2: "/templates",
    thirdMain: "Resume templates",
    thirdSubMain: "Templates that attracts",
    thirdImageSrc: "/assets/images/home-screen-images/resumeTemp.svg",
    herf3: "/templates",
    forthMain: "Writing Guide",
    forthSubMain: "How to write a resume",
    forthImageSrc: "/assets/images/home-screen-images/writeGuide.svg",
    herf4: "/blogs/writing-guide",
    fifthMain: "Resume Formats",
    fifthSubMain: "Discover which is the best",
    fifthImageSrc: "/assets/images/home-screen-images/resumeFromate.svg",
    herf5: "/templates",
  };

  const dataSecond = {
    main: "Jobs",
    subMain: "Jobs that best suits you",
    mainIamgeSrc: "/assets/images/home-screen-images/searchIcon.svg",
    herf1: "/jobs",
    secondMain: "FAQs",
    secondSubMain: "Frequently asked questions",
    secondImageSrc: "/assets/images/home-screen-images/faqsIcon.svg",
    herf2: "/faqs",
    thirdMain: "Success Stories",
    thirdSubMain: "People who made us proud",
    thirdImageSrc: "/assets/images/home-screen-images/success.svg",
    herf3: "/success-stories",
    forthMain: "Blogs",
    forthSubMain: "Helpful Content ",
    forthImageSrc: "/assets/images/home-screen-images/blogIcon.svg",
    herf4: "/blogs",
    fifthMain: "Interview Questions",
    fifthSubMain: "Prepare for interview",
    fifthImageSrc: "/assets/images/home-screen-images/interviewIcon.svg",
    herf5: "/blogs/10-most-common-job-interview-questions",
  };

  const dataThird = {
    main: "Create Cover letter",
    subMain: "Build in Seconds",
    mainIamgeSrc: "/assets/images/home-screen-images/letterIcon.svg",
    herf1: "/cover-letter",
    secondMain: "Cover letter Using Ai",
    secondSubMain: "Unleashing the Power of AI",
    secondImageSrc: "/assets/images/home-screen-images/AiLogo.svg",
    herf2: "/cover-letter",
    thirdMain: "Cover letter Format",
    thirdSubMain: "Discover which is the best",
    thirdImageSrc: "/assets/images/home-screen-images/coverLetterIcon.svg",
    herf3: "/blogs/guide-to-write-cover-letter",
    forthMain: "Templates",
    forthSubMain: "Templates that attracts",
    forthImageSrc: "/assets/images/home-screen-images/templates.svg",
    herf4: "/templates",
    fifthMain: "How to write",
    fifthSubMain: "Guide to write cover letter",
    fifthImageSrc: "/assets/images/home-screen-images/blogIcon.svg",
    herf5: "/blogs/writing-guide",
  };

  const onMouseEnterOption = (dropdownType: string) => {
    setActiveDropdown(dropdownType);
  };

  const onMouseLeaveOption = () => {
    setActiveDropdown("");
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        transition: `background-color ${transition}`,
      }}
      className={"nav"}
    >
      <input type="checkbox" id="nav-check" />
      <Link className="nav-header -ml-2" href="/">
        <div>
          <Logo className="lg:w-[170px] md:w-[150px] w-[136px]" />
        </div>
      </Link>
      <div className="nav-btn">
        <label htmlFor="nav-check" className="hamburger">
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </label>
      </div>
      <Link href={"/templates"}
        className={`${"buttonMobile"} bg-[#2871DE] !text-[10px] !px-[10px] md:!px-[20px] lg:!px-[20px] py-[6px] text-white rounded-full  text-center`}
      >
        Create Resume
      </Link>

      <div className="nav-links">
        <Dropdown title="Resume" data={data} />
        <Dropdown title="Career Center" data={dataSecond} />
        <Dropdown title="Cover Letter" data={dataThird} />
        <div className="linkText hover:text-primary-blue">
          <Link href={"/about"}>About Us</Link>
        </div>

        <div className="buttonsParent">
          {/* <Link href={"/cover-letter"}>
            <button className={` ${"shownNavButton !text-[14px] !px-7"} `}>Cover Letter</button>
          </Link> */}

          <Link href={"/templates"}>
            <button className={`${"hiddenNavBtn !text-[14px] !px-7"}`}>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
