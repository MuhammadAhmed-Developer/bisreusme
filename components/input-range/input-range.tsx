import React, { useState } from "react";
import style from "@/style/inputRange/inputRange.module.css";

const InputRange = () => {
  const [range, setRange] = useState(0);
  console.log(range);
  return (
    <input
      type="range"
      min={50}
      max={100}
      className={`${style.input_range_clg} !h-1`}
    />
  );
};

export default InputRange;
