import Text from "@/components/resume-builder/text";
import React from "react";

function AwardNameField({
  className,
  indexOfEdu,
  value,
  style,
  bullet,
  placeholder
}: {
  className?: string;
  indexOfEdu: number;
  value: string;
  style?: any;
  bullet?: boolean;
  placeholder?:string
}) {
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
      path={`awards.${indexOfEdu}.name`}
      placeholder={placeholder || "Web and Mobile App Development"}
      className={className}
      style={style}
    />
    </div>
   
  );
}

export default AwardNameField;
