import Dnd from "@/components/resume-builder/dnd";
import {
  addField,
  removeField,
  updateOrder,
} from "@/redux/slices/resume.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React from "react";
import CertificateInstituteNameField from "../common-fields/certificate-institute-name.field";
import CertificationStartDateField from "../common-fields/certification-startdate.field";
import CertificationEndDateField from "../common-fields/certification-enddate.field";
import CertificateNameField from "../common-fields/certificate-name.field";
import CoursesInstituteNameField from "../common-fields/courses-institute-name.field copy";
import CoursesStartDateField from "../common-fields/courses-startdate.field";
import CoursesEndDateField from "../common-fields/courses-enddate.field";
import CoursesNameField from "../common-fields/courses-name.field copy";

export default function CoursesSection() {
  const dispatch = useAppDispatch();
  const resumeDetails = useAppSelector((state) => state.resume);
  const updateData = useAppSelector((state) => state.templateTheme);

  const handleCoursesOrderChange = (e: any) => {
    dispatch(
      updateOrder({
        path: "courses",
        updatedData: e,
      })
    );
  };

  const handleAddCourses = (e: any) => {
    dispatch(
      addField({
        path: `courses`,
        index: e + 1,
      })
    );
  };

  const handleRemoveCourses = (e: any) => {
    dispatch(
      removeField({
        path: `courses.${e}`,
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
        className=""
        style={{
          padding: `0 ${PAGEMARGIN}px`,
          fontSize: SUBHEADING,
          fontFamily: FONTFAMILY,
          color: PRIMARYCOLOR,
          marginTop: "0.25rem",
          fontWeight: 700,
        }}
      >
        COURSES
      </h3>
      <div className="h-[1px] bg-slate-500  mt-3"></div>

      <Dnd
        data={resumeDetails.resumeData?.courses}
        direction={"horizontal"}
        reorder={handleCoursesOrderChange}
        additem={(e) => handleAddCourses(e)}
        removeitem={(e) => handleRemoveCourses(e)}
        renderItem={(item, indexOfEdu) => (
          <div
            style={{
              padding: `0 ${PAGEMARGIN}px`,
              fontSize: "12px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "100%" }}>
                <CoursesInstituteNameField
                  style={{
                    fontSize: TITLEHEADING,
                    fontWeight: 600,
                    color: ["#000000", "14px"],
                    marginLeft: "-8px",
                    width: "100%",
                  }}
                  value={item.organization}
                  indexOfEdu={indexOfEdu}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  gap:"6px"
                }}
              >
                <CoursesStartDateField
                  style={{
                    fontSize: BODYTEXT,
                    textAlign: "end",
                  }}
                  indexOfEdu={indexOfEdu}
                  value={item.startDate}
                  type="MM/YYYY"
                  placeholder="02/2012"
                  maxlength={7}
                />{" "}
                <span>-</span>
                <CoursesEndDateField
                  style={{
                    fontSize: BODYTEXT,
                    textAlign: "start",
                  }}
                  indexOfEdu={indexOfEdu}
                  value={item.endDate}
                  type="MM/YYYY"
                  placeholder="04/3012"
                  maxlength={7}
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
                  <li>
                    <CoursesNameField
                      style={{
                        fontSize: BODYTEXT,
                        color: ["#000000", "12px"],
                        width: "100%",
                      }}
                      value={item.name}
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
