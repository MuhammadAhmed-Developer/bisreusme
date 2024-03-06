import Dnd from "@/components/resume-builder/dnd";
import {
  addField,
  removeField,
  updateOrder,
} from "@/redux/slices/resume.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React from "react";
import CustomTitleField from "../common-fields/custom-title.field";
import CustomDescField from "../common-fields/custom-desc.field";

export default function CustomSection() {
  const updateData = useAppSelector((state) => state.templateTheme);
  const resumeDetails = useAppSelector((state) => state.resume);

  const dispatch = useAppDispatch();

  const handleRemoveCustom = (e: any) => {
    dispatch(
      removeField({
        path: `custom.${e}`,
      })
    );
  };

  const handleAddCustom = (e: any) => {
    dispatch(
      addField({
        path: `custom`,
        index: e + 1,
      })
    );
  };

  const handleCustomOrderChange = (e: any) => {
    dispatch(
      updateOrder({
        path: "custom",
        updatedData: e,
      })
    );
  };

  const SUBHEADING = updateData.themeConfiguration?.fontSize?.subHeading;
  const BODYTEXT = updateData.themeConfiguration?.fontSize?.bodyText;
  const PRIMARYCOLOR = updateData.themeConfiguration?.themeColor?.primaryColor;
  const SECTIONSPACING = updateData.themeConfiguration?.sectionSpacing;
  const PAGEMARGIN = updateData.themeConfiguration?.pageMargin;

  return (
    <div>
      <Dnd
        data={resumeDetails.resumeData?.custom}
        direction={"horizontal"}
        reorder={handleCustomOrderChange}
        additem={(e) => handleAddCustom(e)}
        removeitem={(e) => handleRemoveCustom(e)}
        renderItem={(item, indexOfCus) => (
          <div
            style={{
              padding: `0 ${PAGEMARGIN}px`,
            }}
          >
            <CustomTitleField
              indexOfCus={indexOfCus}
              value={item.title}
              style={{
                fontSize: SUBHEADING,
                color: PRIMARYCOLOR,
                paddingLeft: "0",
                fontWeight: 700,
              }}
              className="font-semibold text-[18px]"
            />

            <div className="text-[12px] mt-2">
              <CustomDescField
                indexOfCus={indexOfCus}
                value={item.description}
                style={{
                  fontSize: BODYTEXT,
                  borderStyle: "none",
                  resize: "none",
                  width: "100%",
                  marginLeft: "-8px",
                  textAlign: "justify",
                }}
              />
            </div>
          </div>
        )}
      />
    </div>
  );
}
