import Text from "@/components/resume-builder/text";
import { UseFieldValidation } from "@/hooks/useFieldValidation";
import React from "react";

function CertificateInstituteNameField({ className, indexOfEdu, value,style }: { className?: string, indexOfEdu:number, value:string, style?:any }) {
  // const { validateField } = UseFieldValidation();
  return (
    <Text
    value={value}
    path={`certifications.${indexOfEdu}.organization`}
    placeholder="SMIT Institute"
    // className={`${validateField(value)} ${className}`}
    className= {className}
    style={style}
  />
    )    
}

export default CertificateInstituteNameField;
