import Text from "@/components/resume-builder/text";
import { UseFieldValidation } from "@/hooks/useFieldValidation";
import { updateThemeValue } from "@/redux/slices/template-theme.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React from "react";

function JobTitleField({ className, style,maxLength,lineBreak }: { className?: string, style?:any ,maxLength?:number, lineBreak?:boolean}) {
  const resumeDetails = useAppSelector((state) => state.resume);
  const { validateField } = UseFieldValidation();

  const dispatch = useAppDispatch();
  const handleFocus = () => {
    dispatch(
      updateThemeValue({
        path: "activeSections",
        value: {
          skills: true,
          summary: false,
          certifications: false,
          experience: false,
        },
      })
    );
  };

  return (
    <Text
    value={resumeDetails.resumeData.jobTitle}
    path="jobTitle"
    placeholder="CHEMICAL ENGINEER"
    className={`${validateField(resumeDetails.resumeData.jobTitle)} ${className}`}
    style={style}
    onFocus={handleFocus}
    maxlength={maxLength}
    lineBreak={lineBreak}
  />
  );
}

export default JobTitleField;
