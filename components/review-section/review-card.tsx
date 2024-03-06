"use client";
import ReviewData from "@/constants/reviewData";
import QuoteEnd from "@/public/assets/images/svg-Images/quote-end";
import { QuoteStart } from "@/public/assets/images/svg-Images/quote-start";
import ReviewLine from "@/public/assets/images/svg-Images/review-line";
import Image from "next/image";
import React, { useEffect, useState } from "react";
export default function ReviewCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDataTransitioning, setIsDataTransitioning] = useState(false);
  const [dotColors, setDotColors] = useState([true, false, false]);

  const transitionDuration = 500;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDataTransitioning(true);

      setTimeout(() => {
        const newIndex = (currentIndex + 1) % ReviewData.length;
        setCurrentIndex(newIndex);
        const newDotColors = dotColors.map((_, index) => index === newIndex);
        setDotColors(newDotColors);
        setIsDataTransitioning(false);
      }, transitionDuration);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, dotColors]);

  const QouteIcon = ReviewData[currentIndex].logo;

  return (
    <>
      <div className="lg:order-2 md:order-5 order-5 lg:w-fit md:w-[50%] w-[100%]  rounded-[21px] flex flex-col items-center justify-center">
        <div className=" transition-opacity lg:h-[502px] md:h-[350px] h-[400px] duration-1000 ease-in-out opacity-100 bg-white  lg:ml-[38px] md:ml-[0px] ml-[-15px]  rounded-[15px] lg:px-[31px] md:px-[20px] px-[16px] py-[12px] w-[90%] lg:mt-[-15vh] md:mt-[10vh] mt-[10vh]">
          <div
            className={`card-data  ${
              isDataTransitioning ? "opacity-0" : "opacity-1"
            }`}
            style={{
              transition: `opacity ${transitionDuration}ms ease-in-out`,
            }}
          >
            <div className="flex justify-center group transform  transition-transform duration-300">
              <Image
                src={ReviewData[currentIndex].profileimg}
                alt={ReviewData[currentIndex].name}
                width={97}
                height={97}
                className="mt-[-7vh]"
              />
            </div>
            <div className="mt-[33px] lg:w-[256px]">
              <div className="lg:text-[18px] md:text-[12px] text-[16px]">
                <QuoteStart />
                {ReviewData[currentIndex].review}
                <div className="flex justify-end">
                  <QuoteEnd />
                </div>
              </div>
              <div className="mt-3 text-[20px]">
                <div>{ReviewData[currentIndex].name}</div>
                <div className="font-bold mt-[-4px]">
                  {ReviewData[currentIndex].designation}
                </div>
              </div>
              <div className="mt-3">
                <ReviewLine />
              </div>
              <div className="flex justify-center mt-[14px]">
                <div>
                  <QouteIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[15px]">
          <div className="flex gap-[15px]">
            {dotColors.map((active, index) => (
              <div
                key={index}
                className={`h-[10px] w-[10px] rounded-full mt-[14px] ${
                  active ? "bg-white" : "bg-[#A5AAAB]"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
