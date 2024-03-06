"use client";
import DropdownIcon from "@/public/assets/images/svg-Images/dropdown-Icon";
import { updateThemeValue } from "@/redux/slices/template-theme.slice";
import { useAppDispatch } from "@/redux/store";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";


export default function CustomColorPanal() {
   const [shownCustomColorButton, setShownCustomColorButton] = useState(false);
   const [selectedColor, setSelectedColor] = useState('#cccccc');
   const [selectedColorSecondary, setSelectedColorSecondary] = useState('#cccccc');
   const dispatch = useAppDispatch()
   const [dropdownOpen, setDropdownOpen] = useState(false);
   const handleDropdownToggle = () => {
     setDropdownOpen(!dropdownOpen);
   };

   const handleColorChange = (event:any) => {
    setSelectedColor(event.target.value);
    dispatch(updateThemeValue({
      path: "themeColor",
      value: {
        primaryColor: event.target.value,
        secondaryColor:selectedColorSecondary
      }
    }))
  };

   const handleColorChangeSecondary = (event:any) => {
    setSelectedColorSecondary(event.target.value);
    dispatch(updateThemeValue({
      path: "themeColor",
      value: {
        primaryColor: selectedColor,
        secondaryColor: event.target.value
      }
    }))
  };
  return (
    <div className="mt-4 ">
      <Menu as="div" className="relative inline-block  w-[100%]">
        <div>
          <Menu.Button className="flex justify-between items-center w-[100%] px-[20px] rounded-[10px] shadow-md bg-white text-black text-[20px] py-[20px] text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <div className="flex items-center gap-2">
          <div
              className={`w-[25px h-[25px] border-[5px] rotate-[-45deg] divide-solid  text-[14px]`}
              style={{
                backgroundColor: "white",
                width: 25,
                height: 25,
                borderRadius: 25,
                // border: `5px solid ${selectedColorSecondary}`
                borderLeftColor: selectedColor,
                borderTopColor: selectedColor,

                borderRightColor: selectedColorSecondary,
                borderBottomColor: selectedColorSecondary,
                }}></div>
            <div className="text-[14px]">{selectedColor}</div>
            {/* <div className="text-[14px]">{selectedColorSecondary}</div> */}
            </div>
            <div className="flex justify-between items-center">
            <div
          className={` cursor-pointer  ${
            dropdownOpen && "rotate-180 duration-500 transition-transform"
          }`}
          onClick={handleDropdownToggle}
        >
          <DropdownIcon />
        </div>
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 bg-white p-4 left-0 my-2 w-[100%] origin-top-right divide-y  divide-gray-100 rounded-md  shadow-lg  ring-1 ring-black/5 focus:outline-none">
            <div>
              <h2 className="text-[14px] text-[#0000005C] pt-[17px] pb-[5px] leading-[18px]">SELECT COLOR:</h2>
              <div className="flex justify-between rounded-[8px] p-2 bg-[#E6E6E6]  shadow-inner">
                <button onClick={() => setShownCustomColorButton(false)} className={` w-[48%] h-[34px]  ${!shownCustomColorButton && 'bg-[#fff]  rounded-[8px] shadow-md shadow-[#00000033' } text-[#000] text-[12px] font-medium ]`}>Primary</button>
                <button onClick={() => setShownCustomColorButton(true)} className={` w-[48%] h-[34px]  ${shownCustomColorButton && 'bg-[#fff]  rounded-[8px] shadow-md shadow-[#00000033' } text-[#000] text-[12px] font-medium ]`}>Secondary</button>
              </div>
              <h2 className="text-[14px] text-[#0000005C] pt-[17px] pb-[5px] leading-[18px]">HEX</h2>
              <div className="flex gap-[13px] pb-[16px]">
              { !shownCustomColorButton &&   <div className="w-[80%] border py-2 pl-[11px] text-[14px] font-light rounded-[5px]">{selectedColor}</div> }
              { shownCustomColorButton && <div className="w-[80%] border py-2 pl-[11px] text-[14px] font-light rounded-[5px]">{selectedColorSecondary}</div> }
              { !shownCustomColorButton &&
                <div className="rounded-full w-[31px] h-[31px] overflow-hidden">
                <input onChange={handleColorChange} value={selectedColor}  type="color" className="border w-[100vh] h-[100vh] rounded-full mt-[-10px] ml-[-10px] " />
                </div>
              }
              {  shownCustomColorButton &&
                <div className="rounded-full w-[31px] h-[31px] overflow-hidden">
                <input onChange={handleColorChangeSecondary} value={selectedColorSecondary} type="color" className="border w-[100vh] h-[100vh] rounded-full mt-[-10px] ml-[-10px] " />
                </div>
              }  
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
