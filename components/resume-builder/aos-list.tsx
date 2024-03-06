import React, { useRef } from "react";
import Text from "@/components/resume-builder/text";
import { useAppDispatch } from "@/redux/store";
import { addPointerField, removeField } from "@/redux/slices/resume.slice";

interface ListsProps {
  data: string[];
  path: string;
  classname: string;
  style?: any;
  layout?: any;
}

const AOSList: React.FC<ListsProps> = ({
  data,
  path,
  classname,
  style,
  layout,
}) => {
  const dispatch = useAppDispatch();
  const fieldsRef = useRef<React.RefObject<HTMLInputElement>[] | any>([]);

  const handleEnterPress = (index: number, e: any) => {
    e.preventDefault();
    dispatch(addPointerField({ index: index + 1, path: path }));

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

  return (
    <ul className={`${layout}`}>
      {(data || []).map((item, index) => (
        <li key={index}>
          <Text
            element="textarea"
            ref={(ref) => {
              if (ref) fieldsRef.current[index] = ref;
            }}
            value={item}
            path={`${path}.${index}`}
            placeholder="Programming"
            onEnterPress={(e: any) => handleEnterPress(index, e)}
            onBackspacePress={() => {
              if (!item) {
                handleBackspacePress(index);
              }
            }}
            autoFocus={false}
            className={classname}
            style={style}
          />
        </li>
      ))}
    </ul>
  );
};

export default AOSList;
