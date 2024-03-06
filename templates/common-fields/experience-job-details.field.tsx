import Text from "@/components/resume-builder/text";
import React from "react";

function ExperienceJobDescription({
  className,
  index,
  value,
  style,
  bullet,
  placeholder,
}: {
  className?: string;
  index: number;
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
        element="textarea"
        value={value}
        path={`experience.${index}.title`}
        placeholder={placeholder || "Junior Software Engineer"}
        className={className}
        style={style}
        onInput={(e: any) => {
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + 1 + "px";
        }}
      />
    </div>
  );
}

export default ExperienceJobDescription;
