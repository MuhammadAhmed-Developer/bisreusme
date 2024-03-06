import Text from "@/components/resume-builder/text";
import { UseFieldValidation } from "@/hooks/useFieldValidation";
import handleInputChange from "@/utils/handleDate";
import React from "react";

function AwardJobEndDate({
  className,
  index,
  value: initialValue,
  style,
  maxlength,
  placeholder,
  type,
}: {
  className?: string;
  index: number;
  value: string;
  style?: any;
  maxlength?: number;
  placeholder?: string;
  type?: string;
}) {
  const { validateField } = UseFieldValidation();
  const [value, setValue] = React.useState(initialValue || "");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const inputValue = handleInputChange(e.target.value, type);
    setValue(e.target.value);
  };
  return (
    <Text
      element="textarea"
      value={value}
      path={`awards.${index}.endDate`}
      placeholder={"Oct 2020"}
      className={`${validateField(value)} ${className}`}
      style={{
        ...style,
        maxWidth: `${value.length > 0 ? value.length : 8}ch`,
      }}
      maxlength={maxlength}
      onChange={handleChange}
    />
  );
}

export default AwardJobEndDate;
