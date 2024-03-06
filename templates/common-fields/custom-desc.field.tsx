import Text from "@/components/resume-builder/text";
import { UseFieldValidation } from "@/hooks/useFieldValidation";
import { useAppSelector } from "@/redux/store";
import React from "react";

function CustomDescField({ className, style,indexOfCus, value }: { className?: string, style?:any,  indexOfCus:number, value:string, }) {
  // const { validateField } = UseFieldValidation();
  return (
 
    <Text
    element="textarea"
    value={value}
    path={`custom.${indexOfCus}.description`}
    placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis tenetur quidem aspernatur reiciendis praesentium aspernatur reiciendis praesentium"
    // className={`${validateField(value)} ${className}`}
    className={className}
    cols={60}
    rows={3}
    spellCheck={true}
    style={style}
  />
  );
}

export default CustomDescField;
