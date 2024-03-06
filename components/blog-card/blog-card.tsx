import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogCard(props: any) {
  return (
    <div className="p-4 lg:mb-[98px] md:mb-[60px] mb-[30px]">
      <div className="h-full shadow-md border-gray-200 border-opacity-60 rounded-[5px] overflow-hidden">
        <div className="relative w-[100%] bg-red-700 h-[27vh]">
          <Image
            className=" object-cover object-center"
            src={props.image}
            alt="blog"
            fill={true}
          />
        </div>
        <div className="px-6">
          <h1 className=" font-[700] text-[#2D3748] text-[20px] my-[19px]">
            {props.heading}
          </h1>
          <div className="text-ellipsis mb-3 text-[14px] w-[100%] font-[400] text-[#718096]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that....
          </div>
          <div className="flex items-center flex-wrap ">
            <div className="flex justify-between w-[100%] mt-[25px] mb-7 pr-6">
              <div className="text-[#718096] text-[12px] font-[400]">
                May 20th 2020
              </div>
              <Link
                href={"/templates"}
                className="text-[#2D3748] text-[12px] font-[700]"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
