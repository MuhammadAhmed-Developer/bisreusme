import Text from "@/components/resume-builder/text";
import { useAppSelector } from "@/redux/store";
import { ClassValue } from "clsx";
import React from "react";

function ImageField({ className, style }: { className?: ClassValue, style?:any }) {
  const resumeDetails = useAppSelector((state) => state.resume);

  return (
    <Text
      value={resumeDetails.resumeData.name}
      placeholder="OLIVIA WILSON"
      path="name"
      className={className}
      style={style}
    />
    
  );
}

export default ImageField;