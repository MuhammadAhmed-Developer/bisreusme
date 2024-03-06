import BtnArrowRight from "@/public/assets/images/svg-Images/btn-arrow-right";
import Image from "next/image";

export default function Btn(props:any) {
  return (
        <button className=" px-[32px] py-[12px] rounded-full text-[16px] flex justify-center items-center  text-[#F9FAFB] bg-[#3B82F6]">
         {props.title}
         <div className="ms-2 mt-1">
         <BtnArrowRight/>
         </div>
        </button>
  )
}