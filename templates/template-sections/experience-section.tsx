import Dnd from "@/components/resume-builder/dnd";
import {
  addField,
  removeField,
  updateOrder,
} from "@/redux/slices/resume.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React from "react";
import ExperienceCompanyName from "../common-fields/experience-company-name.field";
import ExperienceJobStartDate from "../common-fields/experience-job-startdate.field";
import ExperienceJobEndDate from "../common-fields/experience-job-enddate.field";
import ExperienceJobDescription from "../common-fields/experience-job-description.field";

export default function ExperienceSection() {
  const dispatch = useAppDispatch();
  const resumeDetails = useAppSelector((state) => state.resume);
  const updateData = useAppSelector((state) => state.templateTheme);

  const handleRemoveExperience = (e: any) => {
    dispatch(
      removeField({
        path: `experience.${e}`,
      })
    );
  };

  const handleAddExperience = (e: any) => {
    dispatch(
      addField({
        path: `experience`,
        index: e + 1,
      })
    );
  };

  const handleExperienceOrderChange = (e: any) => {
    dispatch(
      updateOrder({
        path: "experience",
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
        WORK EXPERIENCE
      </h3>

      <div className="h-[1px] bg-slate-500 mt-3 w-[100%]"></div>

      <Dnd
        data={resumeDetails.resumeData?.experience}
        direction={"horizontal"}
        reorder={handleExperienceOrderChange}
        additem={(e) => handleAddExperience(e)}
        removeitem={(e) => handleRemoveExperience(e)}
        renderItem={(item, index) => (
          <div
            style={{
              padding: `0 ${PAGEMARGIN}px`,
              fontSize: "12px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "100%" }}>
                <ExperienceCompanyName
                  value={item.company}
                  index={index}
                  style={{
                    fontSize: TITLEHEADING,
                    fontWeight: 700,
                    color: "#000000",
                    width: "100%",
                    resize: "none",
                  }}
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
                <ExperienceJobStartDate
                  style={{
                    fontSize: BODYTEXT,
                    textAlign: "end",
                    resize: "none",
                  }}
                  index={index}
                  value={item.startDate}
                  maxlength={16}
                  type="text"
                  placeholder="Oct 2022"
                />
                <span>-</span>
                <ExperienceJobEndDate
                  style={{
                    fontSize: BODYTEXT,
                    textAlign: "start",
                    resize: "none",
                  }}
                  index={index}
                  value={item.endDate}
                  maxlength={16}
                  type="text"
                  placeholder="Present"
                />
              </div>
            </div>
            <div>
              <div>
                <ul
                  style={{
                    letterSpacing: "0.05em",
                    listStyleType: "disc",
                    marginLeft: "35px",
                  }}
                >
                  <li className="mt-2">
                    <ExperienceJobDescription
                      style={{
                        fontSize: BODYTEXT,
                        width: "100%",
                        resize: "none",
                      }}
                      value={item.title}
                      index={index}
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
