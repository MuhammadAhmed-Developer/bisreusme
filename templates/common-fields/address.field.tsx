import { useAppSelector } from "@/redux/store";
import Text from "@/components/resume-builder/text";
import React from "react";
import { UseFieldValidation } from "@/hooks/useFieldValidation";

function AddressField({ className, style,maxlength,lineBreak }: { className?: string, style?:any,maxlength?:number,lineBreak?:boolean }) {
  const resumeDetails = useAppSelector((state) => state.resume);
  const { validateField } = UseFieldValidation();
  return (
    <Text
      element="textarea"
      value={resumeDetails.resumeData.address}
      path="address"
      placeholder="1234 Main Street, Anytown"
      className={`${validateField(resumeDetails.resumeData.address)} ${className}`}
      style={style}
      onInput={(e: any) => {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + 1 + "px";
      }}
      maxlength={50}
      lineBreak={lineBreak}
    />
  );
}

export default AddressField;
