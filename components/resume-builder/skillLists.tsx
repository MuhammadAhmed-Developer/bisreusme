import React, { useEffect, useRef } from "react";
import Text from "@/components/resume-builder/text";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  addField,
  addPointerField,
  removeField,
} from "@/redux/slices/resume.slice";
import { ListField } from "@/redux/types";
import { updateThemeValue } from "@/redux/slices/template-theme.slice";
import { UseFieldValidation } from "@/hooks/useFieldValidation";
import InputRange from "../input-range/input-range";

interface ListsProps {
  data: ListField[];
  path: string;
  classname: string;
  style?: any;
  layout: any;
  type?: string;
  placeholder?: string;
}

const SkillLists: React.FC<ListsProps> = ({
  data,
  path,
  classname,
  style,
  layout,
  type,
  placeholder,
}) => {
  const dispatch = useAppDispatch();
  const fieldsRef = useRef<React.RefObject<HTMLInputElement>[] | any>([]);

  const handleEnterPress = (index: number) => {
    dispatch(addField({ index: index + 1, path: path }));

    const timeout = setTimeout(() => {
      fieldsRef.current?.[index + 1]?.focus();
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  };

  const handleBackspacePress = (index: number) => {
    if (data?.length <= 1) return;

    dispatch(
      removeField({
        path: `${path}.${index}`,
      })
    );

    fieldsRef.current?.[index - 1]?.focus();
  };
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


  // useEffect(() => {
  //  handleFocus()
  // }, [handleFocus])
  



  const { validateField } = UseFieldValidation();
  return (
    <ul className={`${layout}`}>
      {(data || []).map((item, index) => (
        <li key={index} className="flex items-center justify-between gap-4">
            <div>
          <Text
            element={"textarea"}
            ref={(ref) => {
                if (ref) fieldsRef.current[index] = ref;
            }}
            value={item?.name?.trim()}
            path={`${path}.${index}.name`}
            placeholder={placeholder || "Time Managenment"}
            onEnterPress={() => handleEnterPress(index)}
            onBackspacePress={() => {
              if (!item?.name) {
                  handleBackspacePress(index);
                }
            }}
            autoFocus={false}
            className={`${validateField(item?.name?.trim())} ${classname}`}
            style={style}
            onFocus={handleFocus}
            />
            </div>
         <InputRange/>

        </li>
      ))}
    </ul>
  );
};

export default SkillLists;
