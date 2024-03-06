import Text from "@/components/resume-builder/text";
import { sampleThemeData } from "@/constants/sampleThemeData";
import { updateThemeValue } from "@/redux/slices/template-theme.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { UseFieldValidation } from "@/hooks/useFieldValidation";
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
  placeholder?: string;
}) {
  const dispatch = useAppDispatch();
  const handleFocus = () => {
    dispatch(
      updateThemeValue({
        path: "activeSections",
        value: {
          skills: false,
          summary: false,
          certifications: false,
          experience: true,
          indexExperienceField: index,
        },
      })
    );
  };

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
        path={`experience.${index}.title`}
        placeholder={placeholder || "Junior Software Engineer"}
        className={`${validateField(value)} ${className}`}
        style={style}
        onFocus={handleFocus}
      />
    </div>
  );
}

export default ExperienceJobDescription;
