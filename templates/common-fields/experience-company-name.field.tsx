import Text from "@/components/resume-builder/text";
import { UseFieldValidation } from "@/hooks/useFieldValidation";
import React from "react";

function ExperienceCompanyName({ className, index, value, style }: { className?: string, index:number, value:string, style?:any }) {
  const { validateField } = UseFieldValidation();
  return (
    <Text
    element="textarea"
    value={value}
    path={`experience.${index}.company`}
    placeholder="Techloset Solutions"
    className={`${validateField(value)} ${className}`}
    style={style}
    onInput={(e: any) => {
      e.target.style.height = "auto";
      e.target.style.height = e.target.scrollHeight + 1 + "px";
    }}
  />
  );
}

export default ExperienceCompanyName;
