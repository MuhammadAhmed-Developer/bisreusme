import MinusIcon from "@/public/assets/images/svg-Images/minus-icon";
import PlusIcon from "@/public/assets/images/svg-Images/plus-icon";
import { updateThemeValue } from "@/redux/slices/template-theme.slice";
import { useAppDispatch } from "@/redux/store";
import React, { useState } from "react";

function ValueRangeBar({
  heading,
  increaseText,
  decreaseText,
}: {
  heading: string;
  increaseText: string;
  decreaseText: string;
}) {
  const defaultValue = 32;
  const [value, setValue] = useState(defaultValue);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    const updatedValue = value + 6;
    if (updatedValue <= 56) {
      setValue(updatedValue);
      dispatch(
        updateThemeValue({
          path: "pageMargin",
          value: updatedValue,
        })
      );
    }
  };

  const handleDecrement = () => {
    const updatedValue = value - 6;
    if (updatedValue >= 32) {
      setValue(updatedValue);
      dispatch(
        updateThemeValue({
          path: "pageMargin",
          value: updatedValue,
        })
      );
    }
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = parseInt(e.target.value);
    setValue(updatedValue);
    dispatch(
      updateThemeValue({
        path: "pageMargin",
        value: updatedValue,
      })
    );
  };

  const handlemMarginChange = (margin: number) => {
    switch (margin) {
      case 32:
        return "PAGE MARGIN: 3";
      case 38:
        return "PAGE MARGIN: 4";
      case 44:
        return "PAGE MARGIN: 5";
      case 50:
        return "PAGE MARGIN: 6";
      case 56:
        return "PAGE MARGIN: 7";
    }
  };
  return (
    <div>
      <p className="text-[12px] font-medium text-[#0000005C]">
        {handlemMarginChange(value)}
      </p>
      <div className="flex items-center gap-[9px]">
        <div onClick={handleDecrement} style={{ cursor: "pointer" }}>
          <MinusIcon />
        </div>

        <input
          min={32}
          max={56}
          step={6}
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

export default ValueRangeBar;
