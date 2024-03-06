import Text from "@/components/resume-builder/text";
import { UseFieldValidation } from "@/hooks/useFieldValidation";
import { useAppSelector } from "@/redux/store";
import React from "react";

function PhoneNumberField({
  className,
  style,
  maxlength,
  lineBreak
}: {
  className?: string;
  style?: React.CSSProperties;
  maxlength?: number;
  lineBreak?:boolean
}) {
  const resumeDetails = useAppSelector((state) => state.resume);
  const { validateField } = UseFieldValidation();
  return (
    <Text
      element="textarea"
      value={resumeDetails.resumeData.phone}
      path="phone"
      className={`${validateField(
        resumeDetails.resumeData.phone
      )} ${className}`}
      placeholder="1 123-456-7890"
      style={style}
      maxlength={maxlength}
      lineBreak={lineBreak}
    />
  );
}

export default PhoneNumberField;
