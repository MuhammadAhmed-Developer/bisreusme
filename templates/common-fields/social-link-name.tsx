import Text from "@/components/resume-builder/text";
import { UseFieldValidation } from "@/hooks/useFieldValidation";
import { useAppSelector } from "@/redux/store";
import React from "react";

function SocialLinkName({
  className,
  style,
  maxlength,
}: {
  className?: string;
  style?: React.CSSProperties;
  maxlength?: number;
}) {
  const resumeDetails = useAppSelector((state) => state.resume);
  const { validateField } = UseFieldValidation();
  return (
    <Text
      value={resumeDetails.resumeData.socialLinkName}
      path="socialLinkName"
      className={`${validateField(
        resumeDetails.resumeData.socialLinkName
      )} ${className}`}
      placeholder="Linkedin"
      style={style}
      maxlength={maxlength}
    />
  );
}

export default SocialLinkName;
