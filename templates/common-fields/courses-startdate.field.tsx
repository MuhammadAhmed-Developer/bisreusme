import Text from "@/components/resume-builder/text";
import handleInputChange from "@/utils/handleDate";
import React, { useState } from "react";

interface CoursesStartDateFieldProps {
  style?: {
    fontSize?: number;
    textAlign?: string;
    color?: string;
    width?: string;
    resize?: string;
  };
  placeholder?: string;
  maxlength?: number;
  indexOfEdu: number;
  value: string;
  className?: string;
  type?: string;
}

const CoursesStartDateField: React.FC<CoursesStartDateFieldProps> = ({
  style,
  placeholder,
  maxlength,
  indexOfEdu,
  value: initialValue,
  className,
  type,
}) => {
  const [value, setValue] = useState(initialValue || "");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const inputValue = handleInputChange(e.target.value, type);
    setValue(e.target.value);
  };

  return (
    <Text
      element="textarea"
      value={value}
      path={`courses.${indexOfEdu}.startDate`}
      placeholder={"Oct 2020"}
      className={`${className || ""}`}
      maxlength={16}
      style={{
        ...style,
        maxWidth: `${value.length > 0 ? value.length : 8}ch`,
      }}
      onChange={handleChange}
    />
  );
};

export default CoursesStartDateField;
