import Text from "@/components/resume-builder/text";
import { UseFieldValidation } from "@/hooks/useFieldValidation";
import handleInputChange from "@/utils/handleDate";
import React, { useState } from "react";

interface ExperienceJobEndDateProps {
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
  type?: string;
}

const ExperienceJobEndDate: React.FC<ExperienceJobEndDateProps> = ({
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

  return (
    <Text
      element="textarea"
      value={value}
      path={`experience.${index}.endDate`}
      placeholder={"Oct 2020"}
      className={`${validateField(value)} ${className}`}
      style={{
        ...style,
        maxWidth: `${value.length > 0 ? value.length : 8}ch`,
      }}
      maxlength={16}
      onChange={handleChange}
    />
  );
};

export default ExperienceJobEndDate; // Fix the component name in the export statement
