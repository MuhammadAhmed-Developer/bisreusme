import { useAppSelector } from "@/redux/store";
import styles from '../style/templates/templates.module.css'
export const UseFieldValidation = () => {
  const isFieldEmpty: any = useAppSelector(
    (state) => state.templateTheme.isFieldsEmpty
  );
  const validateField = (resumeData: string) => {
    if (resumeData?.length == 0 && isFieldEmpty?.payload) {
      return styles.textRed;
    } else {
      return styles.textGrey;
    }
  };

  return {
    validateField,
  };
};
