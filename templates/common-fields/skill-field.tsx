import Text from "@/components/resume-builder/text";
import { updateThemeValue } from "@/redux/slices/template-theme.slice";
import {useAppDispatch, useAppSelector } from "@/redux/store";

function SkillField({ className, style }: { className?: string; style?: any }) {
  const resumeDetails = useAppSelector((state) => state.resume);

  return (
    <Text
      element="textarea"
      value={resumeDetails.resumeData?.skills?.name}
      path="skills"
      placeholder="react"
      className={className}
      spellCheck={true}
      style={style}

    />
  );
}

export default SkillField;
