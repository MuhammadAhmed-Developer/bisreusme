import React from "react";
import style from "@/style/mainScreen/mainScreen.module.css";
import Image from "next/image";
import Link from "next/link";
import BuildResume from "@/components/hero-section/build-resume";
import HeroLeftStarIcon from "@/public/assets/images/svg-Images/hero-left-starIcon";
import HeroLeftUserIcon from "@/public/assets/images/svg-Images/hero-left-userIcon";
import HeroLeftSmileIcon from "@/public/assets/images/svg-Images/hero-left-smileIcon";
import HeroRightArrowIcon from "@/public/assets/images/svg-Images/hero-right-arrowIcon";
import HeroMobileArrow from "@/public/assets/images/svg-Images/hero-arrow-mobile";
import { useAppDispatch } from "@/redux/store";
import templateThemeSlice, { updateThemeValue } from "@/redux/slices/template-theme.slice";
import AiButton from "@/app/(resume-editor)/components/aibutton";

function HeroSection() {



  return (
    <>
      <div className={`${style.main} `}>
        <div>
          <h1 className={`${style.mainHeading} font-Claris-sans  `}>
            From a total{" "}
            <span className={`${style.mainHeadingLight}  `}>
              of 70 applicants,
              <span className={`border-b-[3px] border-b-[#2871DE]`}> only 3 </span>
                will be invited
            </span>{" "}
            
            to the first round interview
          </h1>

          <div className={`${style.contentParent} `}>
            <div className={`${style.leftContentParent} `}>
              <p className={`${style.parGraphFirst} lg:mt-0 mt-4`}>
                With our professional
                <span className={`${style.parGraphBoldText}`}>
                  &nbsp; AI enabled resume builder, &nbsp;
                </span>
                you:
              </p>
              <div className={style.iconsContentParent}>
                <div className={`${style.parentContentIcon} `}>
                  <div>

                  <HeroLeftStarIcon />
                  </div>

                  <p className={`${style.parGraph}`}>
                    will match all the
                    <span className={style.parGraphBoldText}>
                      {" "}
                      hidden checks{" "}
                    </span>{" "}
                    HRs are filtering by
                  </p>
                </div>

                <div className={`${style.parentContentIconTwo}`}>
                  <HeroLeftUserIcon />

                  <p className={`${style.parGraph}`}>
                    become{" "}
                    <span className={`${style.parGraphBoldText}`}>
                      {" "}
                      wanted{" "}
                    </span>
                  </p>
                </div>

                <div className={`${style.parentContentIconThree}`}>
                  <HeroLeftSmileIcon />

                  <p className={`${style.parGraph}`}>
                    get an 1{" "}
                    <span className={`${style.parGraphBoldText}`}> offer</span>{" "}
                    - out of 70
                  </p>
                </div>
              </div>
            </div>

            <div className={`${style.imageParent} `}>
              <div className={style.arrowSectionParentShown}>
                <p className={`${style.parGraph}`}>
                  To make it through, Resume has to be really impressive.
                  <span className={`${style.parGraphBoldText}`}>
                    {" "}
                    Like this one{" "}
                  </span>
                </p>

                <div className={style.arrowParent}>
                  <HeroMobileArrow />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className={style.resumeImageParent}>
                  <Image
                    fill
                    alt="resume"
                    src={
                      "/assets/images/home-screen-images/resumeBackground.png"
                    }
                  />
                </div>
              </div>
              <div className={style.buttonContentParent}>
                <p className={style.parGraphSeCOND}>
                  Make Ultimate Resume{" "}
                  <span className={style.parGraphBoldText}> now </span> or take
                  a look at templates
                </p>
                <div className={`${style.buttonParent} `}>
                  <Link href={"/templates"}>
                    <button className={`${style.ButtonStyle}`}>
                      Create Resume
                      <Image
                        alt="arrow"
                        src={"/assets/images/home-screen-images/arrowBtn.svg"}
                        width={24}
                        height={24}
                        className="mt-1"
                      />
                    </button>
                  </Link>
                  <Link href={"/templates"}>
                    {/* <button className={style.buttonSecond}>
                      Create Using AI
                    </button> */}
                    <AiButton/>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`${style.rightContentParent}`}>
              <div className={style.arrowSectionParent}>
                <p className={`${style.parGraph}`}>
                  To make it through, Resume has to be really impressive.
                  <span className={`${style.parGraphBoldText}`}>
                    {" "}
                    Like this one{" "}
                  </span>
                </p>

                <div className={style.arrowParent}>
                  <HeroRightArrowIcon />
                </div>
              </div>
                <div className="lg:-mt-8 -m-0">
              <div className={style.profileParent}>

                <p className={style.parGraph}>
                  100s of people made their Resume{" "}
                  <span className={style.parGraphBoldText}> perfect </span>{" "}
                  today:
                </p>
                <div>
                  <Image
                    className={style.profileImages}
                    alt="profile"
                    width={195}
                    height={55}
                    src={"/assets/images/home-screen-images/peoples.png"}
                  />
                </div>
              </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <BuildResume />
    </>
  );
}

export default HeroSection;
