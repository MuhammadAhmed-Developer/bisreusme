import Link from "next/link";
import React from "react";
import FooterList from "./footer-list";
import FooterLogo from "@/public/assets/images/svg-Images/footer-logo";
import FacebookLogo from "@/public/assets/images/svg-Images/facebook-logo";
import InstagramLogo from "@/public/assets/images/svg-Images/instagram-logo";
import TwitterLogo from "@/public/assets/images/svg-Images/twitter-logo";
import YouTubeLogo from "@/public/assets/images/svg-Images/youtube-logo";
export default function Footer() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  return (
    <footer>
      <div className=" bg-dark-blue w-[100%]  pb-[44px] ">
        <div className=" flex flex-col justify-center pt-[100px]  xl:mx-[188px] md:mx-[90px] mx-[40px] ">
          <div className="flex lg:items-start xl:gap-[50px] lg:gap-[50px] lg:flex-row md:flex-nowrap flex-nowrap flex-col xl:mx-0   md:[100px]">
            <div className="flex  items-center md:justify-start ">
              <FooterLogo />
            </div>
            <div className="flex-grow xl:gap-[40px] lg:gap-[50px]  grid  grid-cols-2 md:flex xl:flex-nowrap md:flex-wrap flex-wrap  md:mt-0 mt-10 md:text-left ">
              <FooterList
                heading="Resume"
                items={[
                  {
                    title: "Simple Build",
                    link: "/templates",
                  },
                  {
                    title: "Ai Build",
                    link: "/templates",
                  },
                  {
                    title: "Templates",
                    link: "/templates",
                  },
                  {
                    title: "Cover letter",
                    link: "/blogs/guide-to-write-cover-letter",
                  },
                  {
                    title: "Resume Formats",
                    link: "/templates",
                  },
                  {
                    title: "How to write resume",
                    link: "/blogs/writing-guide",
                  },
                ]}
              />
              <FooterList
                heading="Career Center"
                items={[
                  {
                    title: "Jobs",
                    link: "/jobs",
                  },
                  {
                    title: "Blogs",
                    link: "/blogs",
                  },
                  {
                    title: "FAQs",
                    link: "/faqs",
                  },
                  {
                    title: "Interview Questions",
                    link: "/blogs/10-most-common-job-interview-questions",
                  },
                  {
                    title: "Success Stories",
                    link: "/success-stories",
                  },
                ]}
              />
              <FooterList
                heading="Support"
                items={[
                  {
                    title: "About Us",
                    link: "/",
                  },
                  {
                    title: "Contact Us",
                    link: "/contact-us",
                  },
                  {
                    title: "Terms & Conditions",
                    link: "/terms-condition",
                  },
                  {
                    title: "Privacy Policy",
                    link: "/privacy-policy",
                  },
                ]}
              />
              <div className="lg:w-1/4 md:w-1/2 w-full px-4 mt-5 md:mt-10 lg:mt-0">
                <h2 className="lg:-mt-3 text-white font-bold  tracking-widest text-[16px] ">
                  Social
                </h2>
                <ul className="list-none  mt-4 text-[14px]  flex ">
                  <li className="mb-2 flex gap-[25px] justify-center lg:justify-start md:justify-start">
                    <Link
                      href={"https://www.facebook.com/techloset"}
                      target="_blank"
                    >
                      <FacebookLogo />
                    </Link>
                    <Link
                      href={"https://www.instagram.com/techlosetsolutions/"}
                      target="_blank"
                    >
                      <InstagramLogo />
                    </Link>
                    <Link
                      href={"https://twitter.com/techloset"}
                      target="_blank"
                    >
                      <TwitterLogo />
                    </Link>
                    <Link
                      href={"https://www.youtube.com/@techloset"}
                      target="_blank"
                    >
                      <YouTubeLogo />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10  h-[1px] w-full bg-white opacity-60 "></div>
        </div>
        <p className="text-white mt-11 opacity-60 text-center ">
          ©{currentYear} Bisresume.com | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
