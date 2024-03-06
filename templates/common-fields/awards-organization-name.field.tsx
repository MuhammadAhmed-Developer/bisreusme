import Text from "@/components/resume-builder/text";
import React from "react";

function AwardInstituteNameField({
  className,
  indexOfEdu,
  value,
  style,
  placeholder
}: {
  className?: string;
  indexOfEdu: number;
  value: string;
  style?: any;
  placeholder?:string
}) {
  return (
    <Text
      value={value}
      path={`awards.${indexOfEdu}.organization`}
      placeholder={placeholder || "Tech Institute in Faisalabad"}
      className={className}
      style={style}
    />
  );
}

export default AwardInstituteNameField;
