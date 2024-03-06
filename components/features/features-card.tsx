import React from 'react'

export default function FeaturesCard(props:any) {
  return (
    <div className="xl:w-fit sm:w-fit w-80  lg:mx-0 md:mx-0   pl-[25px] pt-[25px] pb-5 xl:pb-[38px] rounded-[20px]" style={{backgroundColor:props.bg}}>
      <div className="flex ">

          <div className=' bg-white w-[70px] h-[70px] flex justify-center items-center rounded-[11px]'>
            
          {props.icon}
          </div>
        <h3 className="md:text-[18px] md:pt-[7px]  ml-[17px] md:pb-1 text-base font-semibold leading-normal sm:font-bold pr-1 md:mr-[17px]">
          {props.heading}
        </h3>
      </div>
      <div className="text-[#5E5E5F] md:text-[16px] text-[14px]  mt-[16px] mr-[24px]">
        {props.para}
      </div>
    </div>
  )
}