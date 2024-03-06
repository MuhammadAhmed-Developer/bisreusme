import Link from "next/link";
import React from "react";

export default function FooterList(props: any) {
  return (
    <div className="lg:w-1/4 md:w-1/2 w-full px-4 mt-5 md:mt-10 lg:mt-0">
      <h2 className="lg:-mt-3 text-white font-bold text-[16px] tracking-widest">
        {props.heading}
      </h2>
      <ul className="list-none mt-4 text-[14px] font-normal text-white opacity-60 lg:w-[183.84px]">
        {props.items?.map(
          (item: { title: string; link: string }, index: number) => {
            return (
              <li className="mb-2" key={index}>
                <Link href={`${item.link}`} key={index}>
                  {item?.title}
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
