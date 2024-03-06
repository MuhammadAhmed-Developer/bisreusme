import Text from "@/components/resume-builder/text";
import { UseFieldValidation } from "@/hooks/useFieldValidation";
import handleInputChange from "@/utils/handleDate";
import React, { useState } from "react";

interface ExperienceJobStartDateProps {
  style?: {
    fontSize?: number;
    textAlign?: string;
    color?: string;
    width?: string;
    resize?: string;
  };
  placeholder?: string;
  maxlength?: number;
  index?: number;
  value: any;
  className?: string;
  type?: string; // Add the 'type' property to the type definition
}

const ExperienceJobStartDate: React.FC<ExperienceJobStartDateProps> = ({
  style,
  placeholder,
  maxlength,
  index,
  value: initialValue,
  className,
  type,
}) => {
  const { validateField } = UseFieldValidation();
  const [value, setValue] = useState(initialValue || "");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const inputValue = handleInputChange(e.target.value, type);
    setValue(e.target.value);
  };
  console.log(value);
  return (
    <Text
      element="textarea"
      value={value}
      path={`experience.${index}.startDate`}
      placeholder={"Oct 2020"}
      className={`${validateField(value)} ${className}`}
      maxlength={16}
      style={{
        ...style,
        maxWidth: `${value.length > 0 ? value.length : 8}ch`,
      }}
      onChange={handleChange}
    />
  );
};

export default ExperienceJobStartDate;
