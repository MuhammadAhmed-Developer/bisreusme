import Dnd from "@/components/resume-builder/dnd";
import {
  addField,
  removeField,
  updateOrder,
} from "@/redux/slices/resume.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React from "react";
import EducationInstituteNameField from "../common-fields/education-institute-name.field";
import EducationStartDateField from "../common-fields/education-startdate.field";
import EducationEndDateField from "../common-fields/education-enddate.field";
import EducationDegreeNameField from "../common-fields/education-degree-name.field";

export default function EducationSection() {
  const dispatch = useAppDispatch();
  const resumeDetails = useAppSelector((state) => state.resume);
  const updateData = useAppSelector((state) => state.templateTheme);

  const handleRemoveEducation = (e: any) => {
    dispatch(
      removeField({
        path: `education.${e}`,
      })
    );
  };

  const handleAddEducation = (e: any) => {
    dispatch(
      addField({
        path: `education`,
        index: e + 1,
      })
    );
  };

  const handleEducationOrderChange = (e: any) => {
    dispatch(
      updateOrder({
        path: "education",
        updatedData: e,
      })
    );
  };

  const FONTFAMILY = updateData.themeConfiguration?.fontFamily;
  const SUBHEADING = updateData.themeConfiguration?.fontSize?.subHeading;
  const TITLEHEADING = updateData.themeConfiguration?.fontSize?.titleHeading;
  const BODYTEXT = updateData.themeConfiguration?.fontSize?.bodyText;
  const PRIMARYCOLOR = updateData.themeConfiguration?.themeColor?.primaryColor;
  const SECTIONSPACING = updateData.themeConfiguration?.sectionSpacing;
  const PAGEMARGIN = updateData.themeConfiguration?.pageMargin;

  return (
    <div style={{ marginTop: SECTIONSPACING }}>
      <h3
        className="text-blue-500"
        style={{
          padding: `0 ${PAGEMARGIN}px`,
          fontSize: SUBHEADING,
          fontFamily: FONTFAMILY,
          color: PRIMARYCOLOR,
          marginTop: "0.25rem",
          fontWeight: 700,
        }}
      >
        EDUCATION
      </h3>
      <div className="h-[1px] bg-slate-500  mt-3"></div>

      <Dnd
        data={resumeDetails.resumeData?.education}
        direction={"horizontal"}
        reorder={handleEducationOrderChange}
        additem={(e) => handleAddEducation(e)}
        removeitem={(e) => handleRemoveEducation(e)}
        renderItem={(item, indexOfEdu) => (
          <div
            style={{
              padding: `0 ${PAGEMARGIN}px`,
              fontSize: "12px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "100%" }}>
                <EducationInstituteNameField
                  style={{
                    fontSize: TITLEHEADING,
                    fontWeight: 600,
                    color: ["#000000", "14px"],
                    marginLeft: "-8px",
                    width: "100%",
                    resize: "none",
                  }}
                  value={item.school}
                  indexOfEdu={indexOfEdu}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  gap: 6,
                }}
              >
                <EducationStartDateField
                  style={{
                    fontSize: BODYTEXT,
                    textAlign: "end",
                    resize: "none",
                  }}
                  indexOfEdu={indexOfEdu}
                  value={item.startDate}
                  maxlength={16}
                  type="text"
                  placeholder="Feb 2033"
                />
                <span>-</span>
                <EducationEndDateField
                  style={{
                    fontSize: BODYTEXT,
                    textAlign: "start",
                    resize: "none",
                  }}
                  indexOfEdu={indexOfEdu}
                  value={item.endDate}
                  maxlength={16}
                  type="text"
                  placeholder="Jan 2022"
                />
              </div>
            </div>
            <div>
              <div>
                <ul
                  style={{
                    letterSpacing: "0.05em",
                    listStyleType: "disc",
                    marginLeft: "40px",
                    marginTop: "5px",
                  }}
                >
                  <li className="mt-2">
                    <EducationDegreeNameField
                      className="mt-5"
                      style={{
                        fontSize: BODYTEXT,
                        color: ["#000000", "12px"],
                        width: "100%",
                        resize: "none",
                      }}
                      value={item.degree}
                      indexOfEdu={indexOfEdu}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
}
