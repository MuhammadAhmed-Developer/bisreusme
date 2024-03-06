import Text from "@/components/resume-builder/text";
import { UseFieldValidation } from "@/hooks/useFieldValidation";
import React from "react";

function CoursesNameField({
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
  // const { validateField } = UseFieldValidation();
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
        value={value}
        path={`courses.${indexOfEdu}.name`}
        placeholder="Web and Mobile App Development"
        // className={`${validateField(value)} ${className}`}
        className={className}
        style={style}
      />
    </div>
  );
}

export default CoursesNameField;
