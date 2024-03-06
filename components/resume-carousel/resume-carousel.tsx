"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";
import Btn from "../btn/btn";
import CaresoulIconLeft from "@/public/assets/images/svg-Images/caresoul-arrow-left";
import CaresoulIconRight from "@/public/assets/images/svg-Images/caresoul-arrow-right";
import Link from "next/link";
import { useWindowDimensions } from "@/utils/useWindow";

const CustomPagination = ({ totalSlides, activeIndex, onSlideChange }: any) => {
  return (
    <div className="flex justify-center items-center my-5 md:hidden ">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          className={`pagination-bullet ${
            index === activeIndex ? "active" : ""
          }`}
          onClick={() => onSlideChange(index)}
          style={{
            width: "9px",
            height: "9px",
            flexShrink: 0,
            borderRadius: "9px",
            background:
              index === activeIndex ? "var(--Primary-Blue, #2871DE)" : "#fff",
            marginRight: "5px",
          }}
        />
      ))}
    </div>
  );
};
const slideData = [
  {
    src: "/assets/images/resume1.jpg",
    alt: "Slide 1",
  },
  {
    src: "/assets/images/resume2.jpg",
    alt: "Slide 2",
  },
  {
    src: "/assets/images/resume3.jpg",
    alt: "Slide 3",
  },
  {
    src: "/assets/images/resume5.jpg",
    alt: "Slide 4",
  },
  {
    src: "/assets/images/resume4.jpg",
    alt: "Slide 5",
  },
];

export default function ResumeCarousel() {
  const { width } = useWindowDimensions();

  const [activeSlide, setActiveSlide] = React.useState(0);
  const [slideImages, setSlideImages] = React.useState(slideData);
  const [swiperLoad, setSwiperLoad] = React.useState(false);
  useEffect(() => {
    if (width < 767) setSlideImages(slideData.slice(0, 3));
    else setSlideImages(slideData);
  }, [width]);

  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.realIndex);
  };
  useEffect(() => {
    setTimeout(() => {
      setSwiperLoad(true);
    }, 800);
  });

  return (
    <section className="bg-sky-light  mt-[53px]  pb-[48px] ">
      <h1 className="lg:text-[48px] text-center m-0  text-[30px] font-Claris-sans text-medium-blue pt-6 ">
        Our creative <span className="text-primary-blue">templates</span>
      </h1>
      <div className="flex justify-between items-center mt-11 lg:mx-[30px]">
        <div className="slider-controler">
          <button className="swiper-button-prev  slider-arrow bg-medium-blue  flex justify-center items-center">
            <div className="h-[14px] w-[19]">
              <CaresoulIconLeft />
            </div>
          </button>
        </div>
        <div className="container">
          {swiperLoad && (
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 5.7,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[EffectCoverflow, Navigation]}
              className="swiper_container"
              onSlideChange={(swiper) => handleSlideChange(swiper)}
            >
              {slideImages?.map((slide, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={351}
                    height={484}
                    objectFit="contain"
                    className="shadow-xl lg:rounded-[25px] md:rounded-[15px] rounded-[11px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
        <div className="slider-controler">
          <button className="swiper-button-next slider-arrow lg:ml-[-15vh] md:ml-[0vh] ml-[0vh]  bg-medium-blue  flex justify-center items-center">
            <div className="h-[14px] w-[19px] ">
              <CaresoulIconRight />
            </div>
          </button>
        </div>
      </div>

      <CustomPagination
        totalSlides={3} // Replace with the actual total number of slides
        activeIndex={activeSlide}
        onSlideChange={handleSlideChange}
      />
      <div className="flex justify-center mt-8 md:mt-12">
        <Link href={"/templates"}>
          <Btn title="See more templates" />
        </Link>
      </div>
    </section>
  );
}
