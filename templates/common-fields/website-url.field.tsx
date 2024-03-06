import Text from "@/components/resume-builder/text";
import { UseFieldValidation } from "@/hooks/useFieldValidation";
import { useAppSelector } from "@/redux/store";
import React from "react";

function WebsiteUrl({ className, style,maxlength }: { className?: string, style?:any,maxlength?:number  }) {
  const resumeDetails = useAppSelector((state) => state.resume);
  const { validateField } = UseFieldValidation();
  return (
    <Text
    value={resumeDetails.resumeData.websiteUrl}
    path="websiteUrl"
    className={`${validateField(resumeDetails.resumeData.name)} ${className}`}
    placeholder="techloset.com"
    style={style}
    maxlength={maxlength}
  />
  );
}

export default WebsiteUrl;
