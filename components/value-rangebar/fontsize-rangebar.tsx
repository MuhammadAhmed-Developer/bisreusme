import MinusIcon from "@/public/assets/images/svg-Images/minus-icon";
import PlusIcon from "@/public/assets/images/svg-Images/plus-icon";
import { updateThemeValue } from "@/redux/slices/template-theme.slice";
import { useAppDispatch } from "@/redux/store";
import React, { useState } from "react";

function FontSizeRangebar({
  heading,
  increaseText,
  decreaseText,
}: {
  heading: string;
  increaseText: string;
  decreaseText: string;
}) {
  const defaultValues = {
    bodyText: 12,
    titleHeading: 14,
    subHeading: 20,
    mainHeading: 26,
  };

  const [value, setValue] = useState(defaultValues);
  const dispatch = useAppDispatch();
  const handleIncrement = () => {
    const newValue = {
      bodyText: value.bodyText + 2,
      subHeading: value.subHeading + 2,
      titleHeading: value.titleHeading + 2,
      mainHeading: value.mainHeading + 6,
    };

    setValue(newValue);

    dispatch(
      updateThemeValue({
        path: "fontSize",
        value: newValue,
      })
    );
  };

  const handleDecrement = () => {
    const newValue = {
      bodyText: Math.max(defaultValues.bodyText, value.bodyText - 2),
      subHeading: Math.max(defaultValues.subHeading, value.subHeading - 2),
      titleHeading: Math.max(
        defaultValues.titleHeading,
        value.titleHeading - 2
      ),
      mainHeading: Math.max(defaultValues.mainHeading, value.mainHeading - 6),
    };

    setValue(newValue);

    dispatch(
      updateThemeValue({
        path: "fontSize",
        value: newValue,
      })
    );
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rangeValue = parseInt(e.target.value);
    const newValue = {
      bodyText: rangeValue * 1 + defaultValues.bodyText,
      subHeading: rangeValue * 1 + defaultValues.subHeading,
      titleHeading: rangeValue * 1 + defaultValues.titleHeading,
      mainHeading: rangeValue * 2 + defaultValues.mainHeading,
    };

    setValue(newValue);

    dispatch(
      updateThemeValue({
        path: "fontSize",
        value: newValue,
      })
    );
  };

  const handleFontSize = (fontSize: number) => {
    switch (fontSize) {
      case 12:
        return "FONT SIZE: SMALL";
      case 13:
        return "FONT SIZE: MEDIUM";
      case 14:
        return "FONT SIZE: LARGE";
    }
  };

  return (
    <div>
      <p className="text-[12px] font-medium text-[#0000005C]">
        {handleFontSize(value.bodyText)}
      </p>
      <div className="flex items-center gap-[9px]">
        <div onClick={handleDecrement} style={{ cursor: "pointer" }}>
          <MinusIcon />
        </div>

        <input
          min={0}
          max={2}
          type="range"
          className="w-full"
          value={(value.bodyText - defaultValues.bodyText) / 1}
          onChange={handleRangeChange}
        />

        <div onClick={handleIncrement} style={{ cursor: "pointer" }}>
          <PlusIcon />
        </div>
      </div>

      <div className="flex justify-between">
        <p className="text-[#0000005C] text-[12px]">{increaseText}</p>
        <p className="text-[#0000005C] text-[12px]">{decreaseText}</p>
      </div>
    </div>
  );
}

export default FontSizeRangebar;
