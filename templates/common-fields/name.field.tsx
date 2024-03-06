import Text from "@/components/resume-builder/text";
import { UseFieldValidation } from "@/hooks/useFieldValidation";
import { useAppSelector } from "@/redux/store";
import { ClassValue } from "clsx";
import React from "react";

function NameField({
  className,
  style,
  maxLength,
  resumeDetails,
  lineBreak
}: {
  className?: ClassValue;
  style?: any;
  maxLength?: number;
  resumeDetails?: any;
  lineBreak?:boolean
}) {
  const { validateField } = UseFieldValidation();
  return (
    <Text
      element="textarea"
      maxlength={maxLength}
      value={resumeDetails?.resumeData?.name}
      placeholder="OLIVIA WILSON"
      path="name"
      className={`${validateField(resumeDetails.resumeData.name)} ${className}`}
      style={style}
      lineBreak={lineBreak}
    />
  );
}

export default NameField;
