import DropdownIcon from "@/public/assets/images/svg-Images/dropdown-Icon";
import { updateThemeValue } from "@/redux/slices/template-theme.slice";
import { useAppDispatch } from "@/redux/store";
import React, { useState } from "react";

const ColorsDropdown = (props:any) => {
  const primaryColor = props?.activeTemp?.colors?.primaryColor
  const SecondaryColor = props?.activeTemp?.colors?.secondaryColor

  const allColors: any = [
    {
      primaryColor:primaryColor,
      secondaryColor: SecondaryColor,
    },
    {
      primaryColor: "#FFB100",
      secondaryColor: "#fff3b0",
    },
    {
      primaryColor: "#495057",
      secondaryColor: "#D4DADF",
    },
    {
      primaryColor: "#1A1796",
      secondaryColor: "#B3CBFB",
    },
    {
      primaryColor: "#fb5607",
      secondaryColor: "#ffc2a5",
    },
    {
      primaryColor: "#003049",
      secondaryColor: "#e7ecef",
    },
    {
      primaryColor: "#14213d",
      secondaryColor: "#a8dadc",
    },
    {
      primaryColor: "#561796",
      secondaryColor: "#CEB3FB",
    },
    {
      primaryColor: "#177096",
      secondaryColor: "#B3E1FB",
    },
    {
      primaryColor: "#F194B4",
      secondaryColor: "#fcd5ce",
    },
    // {
    //   primaryColor: "#17962B",
    //   secondaryColor: "#B4FBB3",
    // },
    {
      primaryColor: "#963D17",
      secondaryColor: "#FBCDB3",
    },
   
    {
      primaryColor: "#A513FF",
      secondaryColor: "#FFE1FC",
    },
    // {
    //   primaryColor: "#F6C000",
    //   secondaryColor: "#FFE791",
    // },
    {
      primaryColor: "#961F17",
      secondaryColor: "#FBB3B3",
    },
    {
      primaryColor: "#1F30CF",
      secondaryColor: "#A7AFF2",
    },
    {
      primaryColor: "#CF6300",
      secondaryColor: "#FFD5AE",
    },
  
    {
      primaryColor: "#179664",
      secondaryColor: "#B3FBDF",
    },
  ];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const defaultColors = {
    primaryColor: "",
    secondaryColor: "",
  };
  const [selectedColor, setSelectedColor] = useState(defaultColors);
  const dispatch = useAppDispatch();
  const visibleColors = dropdownOpen ? allColors : allColors.slice(0, 12);
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickSelectedColor = (color: any) => {
    setSelectedColor(color);
    dispatch(
      updateThemeValue({
        path: "themeColor",
        value: color,
      })
    );
  };

  return (
    <>
      <div className="mt-3 flex flex-wrap  max-w-[100%] duration-700  transition-all ">
        {visibleColors.map((color: any, index: number) => (
          <div
            key={index}
            className="lg:w-1/6 md:w-1/4 sm:w-1/3 flex justify-center"
          >
            <div className="duration-700 transition-transform px-1 ">
              <button
                className={`w-[35px] h-[35px] my-2   rounded-full  duration-700 transition-transform  rotate-[-45deg]  border-[8px] divide-solid`}
                style={{
                  backgroundColor: "white",
                  borderLeftColor: color.primaryColor,
                  borderTopColor: color.primaryColor,
                  borderRightColor: color.secondaryColor,
                  borderBottomColor: color.secondaryColor,
                }}
                onClick={() => handleClickSelectedColor(color)}
              ></button>
            </div>
          </div>
        ))}
      </div>
      <div className="border mt-3 flex justify-center">
        <div
          className={` cursor-pointer   p-3 ${
            dropdownOpen && "rotate-180 duration-500 transition-transform"
          }`}
          onClick={handleDropdownToggle}
        >
          <DropdownIcon />
        </div>
      </div>
    </>
  );
};

export default ColorsDropdown;
