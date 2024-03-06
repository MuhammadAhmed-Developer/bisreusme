import Text from "@/components/resume-builder/text";
import { UseFieldValidation } from "@/hooks/useFieldValidation";
import React from "react";

function EducationInstituteNameField({
  className,
  indexOfEdu,
  value,
  style,
  bullet,
}: {
  className?: string;
  indexOfEdu: number;
  value: string;
  style?: any;
  bullet?: boolean;
}) {
  const { validateField } = UseFieldValidation();
  return (
    <div className="flex justify-start item-center gap-2">
      {bullet && (
        <span
          style={{
            marginTop:7,
            height: 5,
            width: 5,
            borderRadius: "100%",
            backgroundColor: "black",
          }}
        />
      )}
      <Text
        element="textarea"
        value={value}
        path={`education.${indexOfEdu}.school`}
        placeholder="NTU University  Faisalabad"
        className={`${validateField(value)} ${className}`}
        style={style}
        onInput={(e: any) => {
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + 1 + "px";
        }}
      />
    </div>
  );
}

export default EducationInstituteNameField;
