import ArrowDropdownDIcon from "@/public/assets/images/svg-Images/arrow-dropdown-icon";
import NavbarDownIcon from "@/public/assets/images/svg-Images/navbar-down-arrow-icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function dropdown(props: any) {
  const handleClickUsingAi = () => {
    localStorage.setItem('clickOnAiButton', 'true');
  }
  return (
    <div className="dropdown group">
      <div className="flex items-center gap-[7px] cursor-pointer w-[100%] h-[100%] group">
        <h1
          className={`dropbtn  cursor-pointer  text-medium-blue font-medium text-[16px] group-hover:text-primary-blue`}
        >
          {props.title}
        </h1>
        <NavbarDownIcon className="group-hover:text-primary-blue transform group-hover:rotate-180 transition-transform duration-300 ease-in-out" />
      </div>
      <div className="dropdown-content lg:-z-20 z-20 maingroup">
        <div className="deoe bg-white  xl:px-[40px] xl:py-[40px] lg:px-[40px] lg:py-[40px] py-[25px] px-[20px] lg:flex-row lg:justify-start lg:flex flex flex-col justify-center lg:items-start items-center lg:mt-[32px] mt-2 lg:w-[820px] w-[440px]">
          <div className="flex lg:flex-col flex-col  lg:gap-[38px] gap-10">
            {props.title !== "Cover Letter" && 
            <div className="flex  items-center gap-[18px]">
              <div className="w-[60px] h-[60px] bg-[#fff] rounded-2xl flex justify-center items-center shadow-md">
                <Image
                  alt="aiiii"
                  src={props.data.mainIamgeSrc}
                  width={33}
                  height={33}
                />
              </div>
              <div>
                <div className="flex flex-row  items-center gap-[8px]">
                  <h1 onClick={handleClickUsingAi} className="text-[20px] font-bold text-[#170F49] group hover:text-[#2871DE]  cursor-pointer">
                    <Link href={`${props.data.herf1}`}>{props.data.main}</Link>
                  </h1>
                  <ArrowDropdownDIcon className="group-hover:text-[#2871DE] w-[12px] h-[15px]" />
                </div>
                <p className="text-[18px] font-normal text-[#6F6C90] ">
                  {props.data.subMain}
                </p>
              </div>
            </div>}
            <div className="flex w-[100%] items-center gap-[18px]">
              <div className="w-[60px] h-[60px] bg-[#fff] rounded-2xl flex justify-center items-center shadow-md">
                <Image
                  alt="ai"
                  src={props.data.secondImageSrc}
                  width={33}
                  height={33}
                />
              </div>
              <div>
                <div className="flex gap-[8px] items-center">
                  <h1 className="text-[20px] font-bold text-[#170F49] hover:text-[#2871DE] cursor-pointer">
                    <Link href={`${props.data.herf2}`}>
                      {props.data.secondMain}
                    </Link>
                  </h1>
                  <ArrowDropdownDIcon className="group-hover:text-[#2871DE] w-[12px] h-[15px]" />
                </div>
                <p className="text-[18px] font-normal text-[#6F6C90]">
                  {props.data.secondSubMain}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-[18px] ">
              <div className="w-[60px] h-[60px] bg-[#fff] rounded-2xl flex justify-center items-center shadow-md">
                <Image
                  alt="ai"
                  src={props.data.thirdImageSrc}
                  width={33}
                  height={33}
                />
              </div>
              <div>
                <div className="flex gap-[8px] items-center">
                  <h1 className="text-[20px] font-bold text-[#170F49] hover:text-[#2871DE] cursor-pointer">
                    <Link href={`${props.data.herf3}`}>
                      {props.data.thirdMain}
                    </Link>
                  </h1>
                  <ArrowDropdownDIcon className="group-hover:text-[#2871DE] w-[12px] h-[15px]" />
                </div>
                <p className="text-[18px] font-normal text-[#6F6C90]">
                  {props.data.thirdSubMain}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[38px] lg:mt-0 mt-10">
          {props.title !== "Cover Letter" && 
            <div className="flex  gap-[18px]">
              <div className="w-[60px] h-[60px] bg-[#fff] rounded-2xl flex justify-center items-center shadow-md">
                <Image
                  alt="ai"
                  src={props.data.forthImageSrc}
                  width={33}
                  height={33}
                />
              </div>
              <div>
                <div className="flex gap-[8px] items-center">
                  <h1 className="text-[20px] font-bold text-[#170F49] hover:text-[#2871DE] cursor-pointer">
                    <Link href={`${props.data.herf4}`}>
                      {props.data.forthMain}
                    </Link>
                  </h1>
                  <ArrowDropdownDIcon className="group-hover:text-[#2871DE] w-[12px] h-[15px]" />
                </div>
                <p className="text-[18px] font-normal text-[#6F6C90]">
                  {props.data.forthSubMain}
                </p>
              </div>
            </div>
}
            <div className="flex items-center gap-[18px] lg:-m-0 -mt-5">
              <div className="w-[60px] h-[60px] bg-[#fff] rounded-2xl flex justify-center items-center shadow-md">
                <Image
                  alt="ai"
                  src={props.data.fifthImageSrc}
                  width={33}
                  height={33}
                />
              </div>
              <div>
                <div className="flex gap-[8px] items-center">
                  <h1 className="text-[20px] font-bold text-[#170F49] hover:text-[#2871DE] cursor-pointer">
                    <Link href={`${props.data.herf5}`}>
                      {props.data.fifthMain}
                    </Link>
                  </h1>
                  <ArrowDropdownDIcon className="group-hover:text-[#2871DE] w-[12px] h-[15px]" />
                </div>
                <p className="text-[18px] font-normal text-[#6F6C90]">
                  {props.data.fifthSubMain}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dropdown;
