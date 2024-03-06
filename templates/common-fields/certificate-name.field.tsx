import Text from "@/components/resume-builder/text";
import { updateThemeValue } from "@/redux/slices/template-theme.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { UseFieldValidation } from "@/hooks/useFieldValidation";
import React from "react";

function CertificateNameField({
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
  const dispatch = useAppDispatch();
  const handleFocus = () => {
    dispatch(
      updateThemeValue({
        path: "activeSections",
        value: {
          skills: false,
          summary: false,
          certifications: true,
          experience: false,
          indexCertificationField: indexOfEdu,
        },
      })
    );
  };

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
        path={`certifications.${indexOfEdu}.name`}
        placeholder="Web and Mobile App Development"
        // className={`${validateField(value)} ${className}`}
        className={className}
        style={style}
        onFocus={handleFocus}
      />
    </div>
  );
}

export default CertificateNameField;
