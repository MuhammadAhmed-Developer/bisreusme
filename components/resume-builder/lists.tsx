import React, { useRef } from "react";
import Text from "@/components/resume-builder/text";
import { useAppDispatch } from "@/redux/store";
import { addField, removeField } from "@/redux/slices/resume.slice";
import { ListField } from "@/redux/types";
import { updateThemeValue } from "@/redux/slices/template-theme.slice";
import { UseFieldValidation } from "@/hooks/useFieldValidation";

interface ListsProps {
  data: ListField[];
  path: string;
  classname: string;
  style?: any;
  listBoxStyling?: any;
  layout: any;
  type?: string;
  placeholder?: string;
  customWidth?: boolean;
  bullet?: boolean;
}

const Lists: React.FC<ListsProps> = ({
  data,
  path,
  classname,
  style,
  listBoxStyling,
  layout,
  type,
  placeholder,
  customWidth,
  bullet,
}) => {
  const dispatch = useAppDispatch();
  const fieldsRef = useRef<React.RefObject<HTMLInputElement>[] | any>([]);
  const { validateField } = UseFieldValidation();
  const handleEnterPress = (e: React.KeyboardEvent, index: number) => {
    e.preventDefault();
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

  return (
    <ul className={`${layout}`}>
      {(data || []).map((item, index) => (
        <li
          key={index}
          style={{
            ...listBoxStyling,
            width: "auto",
          }}
        >
          {bullet && (
            <span
              style={{
                marginTop: 7,
                height: 5,
                width: 5,
                borderRadius: "100%",
                backgroundColor: "black",
              }}
            />
          )}
          <Text
            element={"textarea"}
            ref={(ref) => {
              if (ref) fieldsRef.current[index] = ref;
            }}
            value={item?.name?.trim()}
            path={`${path}.${index}.name`}
            placeholder={placeholder || "Time Managenment"}
            onEnterPress={(e: React.KeyboardEvent) =>
              handleEnterPress(e, index)
            }
            onBackspacePress={() => {
              if (!item?.name) {
                handleBackspacePress(index);
              }
            }}
            autoFocus={false}
            className={`${validateField(item.name)} ${classname} text-left`}
            style={{
              ...style,

              maxWidth: customWidth
                ? `${item.name.length > 0 ? item.name.length+1 : 10}ch`
                : "",
            }}
            onFocus={handleFocus}
          />
        </li>
      ))}
    </ul>
  );
};

export default Lists;
