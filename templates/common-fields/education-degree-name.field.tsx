import Text from "@/components/resume-builder/text";
import { UseFieldValidation } from "@/hooks/useFieldValidation";
import React from "react";

function EducationDegreeNameField({ className, indexOfEdu, value, style}: { className?: string, indexOfEdu:number, value:string, style?:any}) {
  const { validateField } = UseFieldValidation();
  return (
    <Text
    element="textarea"
    value={value}
    path={`education.${indexOfEdu}.degree`}
    placeholder="MAsc Prosess Engineering "
    className={`${validateField(value)} ${className} `}
    style={style}
    onInput={(e: any) => {
      e.target.style.height = "auto";
      e.target.style.height = e.target.scrollHeight + 1 + "px";
    }}
  />
    )    
}

export default EducationDegreeNameField;
