import Text from "@/components/resume-builder/text";
import { updateThemeValue } from "@/redux/slices/template-theme.slice";
import { useAppDispatch } from "@/redux/store";
import { UseFieldValidation } from "@/hooks/useFieldValidation";
import { useAppSelector } from "@/redux/store";


function SummaryField({ className, style }: { className?: string, style?:any }) {
  const resumeDetails = useAppSelector((state) => state.resume);
  const dispatch = useAppDispatch();
  const handleFocus = () => {
    dispatch(
      updateThemeValue({
        path: "activeSections",
        value: {
          skills: false,
          summary: true,
          certifications: false,
          experience: false,
        },
      })
    );
  };
  const { validateField } = UseFieldValidation();
  return (
    <Text
    element="textarea"
    value={resumeDetails.resumeData.summary}
    path="summary"
    placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis tenetur  "
    className={`${validateField(resumeDetails.resumeData.summary)} ${className} text-justify`}
    spellCheck={true}
    style={style}
    onFocus={handleFocus}
  />
  );
}

export default SummaryField;
