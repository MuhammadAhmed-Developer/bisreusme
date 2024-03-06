import React from "react";
import Navbar from "../../../components/navbar/navbar";
import style from "@/style/templates/templates.module.css";
import TemplateSection from "../../../components/resumes-section/resumes-section";
import Link from "next/link";
import Footer from "@/components/footer/footer";
import Btn from "@/components/btn/btn";

function Templates() {
  return (
    <>
      <Navbar />
      <div className={`${style.main} `}>
        <div className={style.contentParent}>
          <h1 className={`${style.mainHeading} lg:text-[48px] md:text-[36px] text-[30px] font-Claris-sans`}>
            100+ professional
            <span className={`${style.mainHeadingLight} text-primary-blue`}>
              &nbsp; resume templates
            </span>
          </h1>

          <p className={`${style.paraGraph} lg:text-[20px]  md:mx-[100px] mx-[30px] md:text-[18px] text-[14px]`}>
            Get hired faster with our
            <span className={style.boldParagraph}> HR-approved </span> resume
            templates. Pick a resume template, add{" "}
            <span className={style.boldParagraph}> ready-made </span> content
            from Certified Professional Resume Writers (CPRW), and have a resume
            ready in no time.
          </p>
          <Link href={"#temlates-section"} className="my-[20px]">
            <Btn title="Create Resume"/>
          </Link>
        </div>
      </div>
      <div id="temlates-section">
        <TemplateSection />
      </div>
      <div className="mt-[52px]">
        <Footer />
      </div>
    </>
  );
}

export default Templates;
