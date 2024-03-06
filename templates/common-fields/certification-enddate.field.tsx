import Text from "@/components/resume-builder/text";
import handleInputChange from "@/utils/handleDate";
import React from "react";

function CertificationEndDateField({
  className,
  indexOfEdu,
  value: initialValue,
  style,
  maxlength,
  type,
}: {
  className?: string;
  indexOfEdu: number;
  value: string;
  style?: any;
  maxlength?: number;
  type?: string;
}) {
  const [value, setValue] = React.useState(initialValue || "");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const inputValue = handleInputChange(e.target.value, type);
    setValue(e.target.value);
  };
  return (
    <Text
      value={value}
      path={`certifications.${indexOfEdu}.endDate`}
      placeholder="Oct 2020"
      className={`${className}`}
      style={{
        ...style,
        maxWidth: `${value.length > 0 ? value.length : 8}ch`,
      }}
      maxlength={16}
      onChange={handleChange}
    />
  );
}

export default CertificationEndDateField;
