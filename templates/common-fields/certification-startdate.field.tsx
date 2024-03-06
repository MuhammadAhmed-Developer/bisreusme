import Text from "@/components/resume-builder/text";
import React, { useState, ChangeEvent } from "react";
import handleInputChange from "@/utils/handleDate";

interface CertificationStartDateFieldProps {
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

const CertificationStartDateField: React.FC<
  CertificationStartDateFieldProps
> = ({
  style,
  placeholder,
  maxlength,
  indexOfEdu,
  value: initialValue,
  className,
  type,
}) => {
  const [value, setValue] = useState(initialValue || "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // const inputValue = handleInputChange(e.target.value, type);
    setValue(e.target.value);
  };

  return (
    <Text
      element="textarea"
      value={value}
      path={`certifications.${indexOfEdu}.startDate`}
      placeholder={"Oct 2020"}
      className={`${className}`}
      maxlength={16}
      style={{
        ...style,
        maxWidth: `${value.length > 0 ? value.length : 7.5}ch`,
      }}
      onChange={handleChange}
    />
  );
};

export default CertificationStartDateField;
