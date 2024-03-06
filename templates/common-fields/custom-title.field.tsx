import Text from "@/components/resume-builder/text";
import { UseFieldValidation } from "@/hooks/useFieldValidation";
import { useAppSelector } from "@/redux/store";
import React from "react";

function CustomTitleField({ className, style, indexOfCus, value }: { className?: string, style?:any,  indexOfCus:number, value:string, }) {
  // const { validateField } = UseFieldValidation();
  return (
    <Text
    value={value}
    path={`custom.${indexOfCus}.title`}
    placeholder="Write what you want"
    className={className}
    // className={`${validateField(value)} ${className}`}
    style={style}
  />
  );
}

export default CustomTitleField;
