import MinusIcon from "@/public/assets/images/svg-Images/minus-icon";
import PlusIcon from "@/public/assets/images/svg-Images/plus-icon";
import { updateThemeValue } from "@/redux/slices/template-theme.slice";
import { useAppDispatch } from "@/redux/store";
import React, { useState } from "react";

function SectionSpacingRangebar({
  heading,
  increaseText,
  decreaseText,
}: {
  heading: string;
  increaseText: string;
  decreaseText: string;
}) {
  const defaultValue = 20;

  const [value, setValue] = useState(defaultValue);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    const newValue = Math.min(40, value + 20); // Limit max value to 40
    setValue(newValue);

    dispatch(
      updateThemeValue({
        path: "sectionSpacing",
        value: newValue,
      })
    );
  };

  const handleDecrement = () => {
    const newValue = Math.max(0, value - 20); // Limit min value to 0
    setValue(newValue);

    dispatch(
      updateThemeValue({
        path: "sectionSpacing",
        value: newValue,
      })
    );
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);

    dispatch(
      updateThemeValue({
        path: "sectionSpacing",
        value: newValue,
      })
    );
  };
  const handleSpacingChange = (spacing: number) => {
    switch (spacing) {
      case 0:
        return "SECTION SPACING: 2";
      case 20:
        return "SECTION SPACING: 4";
      case 40:
        return "SECTION SPACING: 6";
    }
  };
  return (
    <div>
      <p className="text-[12px] font-medium text-[#0000005C]">
        {handleSpacingChange(value)}
      </p>
      <div className="flex items-center gap-[9px]">
        <div onClick={handleDecrement} style={{ cursor: "pointer" }}>
          <MinusIcon />
        </div>

        <input
          min={0}
          max={40}
          step={20}
          type="range"
          className="w-full"
          value={value}
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

export default SectionSpacingRangebar;
