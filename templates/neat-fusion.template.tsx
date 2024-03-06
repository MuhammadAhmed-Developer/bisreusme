"use client";
import React, { useRef, useState } from "react";
import Dnd from "@/components/resume-builder/dnd";
import {
  addField,
  removeField,
  updateOrder,
} from "@/redux/slices/resume.slice";
import NameField from "@/templates/common-fields/name.field";
import Lists from "@/components/resume-builder/lists";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import EmailField from "./common-fields/email.field";
import PhoneNumberField from "./common-fields/phone-number.field";
import JobTitleField from "./common-fields/job-title.field";
import SummaryField from "./common-fields/summary.field";
import ExperienceCompanyName from "./common-fields/experience-company-name.field";
import ExperienceJobDescription from "./common-fields/experience-job-description.field";
import ExperienceJobStartDate from "./common-fields/experience-job-startdate.field";
import ExperienceJobEndDate from "./common-fields/experience-job-enddate.field";
import EducationInstituteNameField from "./common-fields/education-institute-name.field";
import EducationDegreeNameField from "./common-fields/education-degree-name.field";
import EducationStartDateField from "./common-fields/education-startdate.field";
import EducationEndDateField from "./common-fields/education-enddate.field";
import CustomSection from "./template-sections/custom-section";
import AddressField from "./common-fields/address.field";
import CertificateInstituteNameField from "./common-fields/certificate-institute-name.field";
import CertificationStartDateField from "./common-fields/certification-startdate.field";
import CertificationEndDateField from "./common-fields/certification-enddate.field";
import CertificateNameField from "./common-fields/certificate-name.field";
import CoursesInstituteNameField from "./common-fields/courses-institute-name.field copy";
import CoursesStartDateField from "./common-fields/courses-startdate.field";
import CoursesEndDateField from "./common-fields/courses-enddate.field";
import CoursesNameField from "./common-fields/courses-name.field copy";
import useOverflowDetection from "@/utils/overflowDetect";
import { updateThemeValue } from "@/redux/slices/template-theme.slice";
export default function KateBishop() {
  const dispatch = useAppDispatch();
  const resumeDetails = useAppSelector((state) => state.resume);
  const updateData = useAppSelector((state) => state.templateTheme);

  const pdfExportComponent = useRef<null | any>(null);
  const [text, setText] = useState("");
  const [showGrammarCheckButton, setShowGrammarCheckButton] = useState(false);

  const handleExportPDF = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current?.save();
    }
  };

  async function checkGrammarAndSpelling(inputText: string) {
    try {
      const response = await fetch(
        "https://ammadai.pythonanywhere.com/api/ai",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: `correct grammar in it ${inputText}`,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setText(data.response);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = event.target.value;

    if (userInput.includes(".") || userInput.split(" ").length >= 12) {
      setShowGrammarCheckButton(true);
    } else {
      setShowGrammarCheckButton(false);
    }
  };

  const handleGrammarCheck = () => {
    checkGrammarAndSpelling(text);
  };

  const handleExperienceOrderChange = (e: any) => {
    dispatch(
      updateOrder({
        path: "experience",
        updatedData: e,
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

  const handleAddExperience = (e: any) => {
    dispatch(
      addField({
        path: `experience`,
        index: e + 1,
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

  const handleRemoveExperience = (e: any) => {
    dispatch(
      removeField({
        path: `experience.${e}`,
      })
    );
  };

  const handleRemoveEducation = (e: any) => {
    dispatch(
      removeField({
        path: `education.${e}`,
      })
    );
  };

  const handleCertificationOrderChange = (e: any) => {
    dispatch(
      updateOrder({
        path: "certifications",
        updatedData: e,
      })
    );
  };

  const handleAddCertification = (e: any) => {
    dispatch(
      addField({
        path: `certifications`,
        index: e + 1,
      })
    );
  };

  const handleRemoveCertification = (e: any) => {
    dispatch(
      removeField({
        path: `certifications.${e}`,
      })
    );
  };

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

  const skillsData = resumeDetails.resumeData?.skills || [];
  const languagesData = resumeDetails.resumeData?.languages || [];

  const ref = useRef(null);
  const isOverflow = useOverflowDetection(ref);

  dispatch(
    updateThemeValue({
      path: "overflowDetected",
      value: isOverflow,
    })
  );

  const FONTFAMILY = updateData.themeConfiguration?.fontFamily;
  const MAINHEADING = updateData.themeConfiguration?.fontSize?.mainHeading;
  const SUBHEADING = updateData.themeConfiguration?.fontSize?.subHeading;
  const TITLEHEADING = updateData.themeConfiguration.fontSize.titleHeading;
  const BODYTEXT = updateData.themeConfiguration?.fontSize?.bodyText;
  const PRIMARYCOLOR = updateData.themeConfiguration?.themeColor?.primaryColor;
  const SECTIONSPACING = updateData.themeConfiguration?.sectionSpacing;
  const PAGEMARGIN = updateData.themeConfiguration?.pageMargin;

  return (
    <div>
      <div
        className="bg-white"
        ref={ref}
        style={{
          fontFamily: FONTFAMILY,
        }}
      >
        <div className="p-[36px]">
          <div
            className="flex gap-[39px] justify-items-stretch w-[100%]"
            style={{
              padding: `0 ${PAGEMARGIN}px`,
            }}
          >
            <div>
              <NameField
                resumeDetails={resumeDetails}
                className="text-[18px] font-[600] w-[23vw]"
                style={{
                  fontSize: MAINHEADING,
                  color: PRIMARYCOLOR,
                  marginBottom: "1.25rem",
                  marginTop: "1.25rem",
                  fontWeight:
                    updateData?.themeConfiguration?.fontWeight?.heading,
                  textAlign: "start",
                  width: "100%",
                }}
              />
              <JobTitleField
                className="text-[14px] font-[400] w-[100%]"
                style={{
                  fontSize: SUBHEADING,
                  color: PRIMARYCOLOR,
                  paddingLeft: "0",
                  fontWeight:
                    updateData?.themeConfiguration?.fontWeight?.heading,
                }}
              />
            </div>
            <div className="mt-2 flex flex-col gap-1 w-[50%]">
              <EmailField
                className="text-[12px] font-[500] underline "
                style={{
                  fontSize: BODYTEXT,
                  width: "120%",
                  textAlign: "start",
                }}
                maxlength={35}
              />
              <AddressField
                className=" text-start "
                style={{
                  fontSize: BODYTEXT,
                }}
                maxlength={45}
              />
              <div className="flex underline items-baseline">
                <span
                  className=" text-[12px] placeholder:!text-gray-800"
                  style={{
                    fontSize:
                      updateData?.themeConfiguration?.fontSize?.bodyText,
                  }}
                >
                  +
                </span>
                <PhoneNumberField
                  className=" text-[12px]"
                  style={{
                    fontSize:
                      updateData?.themeConfiguration?.fontSize?.bodyText,
                  }}
                  maxlength={15}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: SECTIONSPACING,
              padding: `0 ${PAGEMARGIN}px`,
            }}
          >
            <SummaryField
              className="w-[100%] text-[12px] resize-none"
              style={{
                fontSize: BODYTEXT,
                borderStyle: "none",
                resize: "none",
                width: "100%",
              }}
            />
          </div>
          <div
            className="mt-12  flex items-center gap-3"
            style={{
              marginTop: SECTIONSPACING,
              padding: `0 ${PAGEMARGIN}px`,
            }}
          >
            <h3
              className="text-[16px] self-start mt-2"
              style={{
                fontSize: SUBHEADING,
                color: PRIMARYCOLOR,
                fontWeight: updateData?.themeConfiguration?.fontWeight?.heading,
              }}
            >
              Experience
            </h3>
            <div className="w-[5%]"></div>

            <div className=" w-[80%]">
              <Dnd
                data={resumeDetails.resumeData?.experience}
                direction={"horizontal"}
                reorder={handleExperienceOrderChange}
                additem={(e) => handleAddExperience(e)}
                removeitem={(e) => handleRemoveExperience(e)}
                renderItem={(item, index) => (
                  <div className="text-[12px] pl-[30px] flex">
                    <div>
                      <div className="w-[100%]">
                        <ExperienceCompanyName
                          value={item.company}
                          index={index}
                          className="text-[14px] w-[100%]"
                          style={{
                            fontSize: TITLEHEADING,
                            fontWeight:
                              updateData?.themeConfiguration?.fontWeight
                                ?.heading,
                          }}
                        />
                      </div>
                      <div className="flex items-start gap-[6px] mt-[6px]">
                        <ExperienceJobStartDate
                          className="text-end"
                          index={index}
                          value={item.startDate}
                          style={{
                            fontSize: BODYTEXT,
                          }}
                          placeholder="14 December 2022"
                          maxlength={16}
                          type="text"
                        />
                        <span>-</span>
                        <ExperienceJobEndDate
                          className="text-start"
                          index={index}
                          value={item.endDate}
                          style={{
                            fontSize: BODYTEXT,
                          }}
                          placeholder="14 December 2022"
                          maxlength={16}
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <ul className="ml-[30px] mt-[5px] list-none tracking-wider w-[100%]">
                          <li>
                            <ExperienceJobDescription
                              value={item.title}
                              index={index}
                              className="w-[100%]"
                              style={{
                                fontSize: BODYTEXT,
                              }}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
          {/* Education ------------------- */}

          <div
            className="mt-12  flex  items-center gap-3 w-[100%]"
            style={{
              marginTop: SECTIONSPACING,
              padding: `0 ${PAGEMARGIN}px`,
            }}
          >
            <h3
              className="font-[600] text-[16px] self-start mt-2"
              style={{
                fontSize: SUBHEADING,
                color: PRIMARYCOLOR,
                fontWeight: updateData?.themeConfiguration?.fontWeight?.heading,
              }}
            >
              Education
            </h3>

            <div className="w-[5%]"></div>
            <div className="w-[95%] ml-4">
              <Dnd
                data={resumeDetails.resumeData?.education}
                direction={"horizontal"}
                reorder={handleEducationOrderChange}
                additem={(e) => handleAddEducation(e)}
                removeitem={(e) => handleRemoveEducation(e)}
                renderItem={(item, indexOfEdu) => (
                  <div className="text-[12px] pl-[30px] flex justify-center items-start w-[100%]">
                    <div className="w-[100%]">
                      <div className="w-[100%]">
                        <EducationInstituteNameField
                          value={item.school}
                          indexOfEdu={indexOfEdu}
                          className="text-[14px]   w-[100%]"
                          style={{
                            fontSize: TITLEHEADING,
                            fontWeight:
                              updateData?.themeConfiguration?.fontWeight
                                ?.heading,
                          }}
                        />
                      </div>
                      <div>
                        <div>
                          <ul className="list-none tracking-wider mt-[6px]">
                            <li>
                              <EducationDegreeNameField
                                value={item.degree}
                                indexOfEdu={indexOfEdu}
                                className="w-[100%]"
                                style={{
                                  fontSize: BODYTEXT,
                                }}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex items-start gap-[4px] mt-[6px]">
                        <EducationStartDateField
                          className="text-start"
                          indexOfEdu={indexOfEdu}
                          value={item.startDate}
                          style={{
                            fontSize: BODYTEXT,
                          }}
                          placeholder="14 December 2022"
                          maxlength={16}
                          type="text"
                        />
                        <span>-</span>
                        <EducationEndDateField
                          className="text-center"
                          indexOfEdu={indexOfEdu}
                          value={item.endDate}
                          style={{
                            fontSize: BODYTEXT,
                          }}
                          placeholder="14 December 2022"
                          maxlength={16}
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
          {/* Skills ========= */}
          <div
            className="mt-12"
            style={{
              marginTop: SECTIONSPACING,
              padding: `0 ${PAGEMARGIN}px`,
            }}
          >
            <div className="flex">
              <div className="w-[30%]">
                <h3
                  style={{
                    fontSize: SUBHEADING,
                    color: PRIMARYCOLOR,
                    fontWeight:
                      updateData?.themeConfiguration?.fontWeight?.heading,
                  }}
                >
                  Skills
                </h3>
              </div>
              <div className="w-[80%] ml-6 mt-2">
                <Lists
                  data={skillsData}
                  path={"skills"}
                  classname="text-start w-[100%] text-[12px] -mt-5"
                  layout={"flex flex-row gap-y-2 flex-wrap"}
                  style={{
                    fontSize: BODYTEXT,
                  }}
                />
              </div>
            </div>
          </div>

          {/* languages section  */}
          {updateData?.themeConfiguration?.visibleSections?.languages && (
            <div
              className="flex"
              style={{
                marginTop: SECTIONSPACING,
              }}
            >
              <h3
                style={{
                  padding: `0 ${PAGEMARGIN}px`,
                  fontSize: SUBHEADING,
                  color: PRIMARYCOLOR,
                  marginTop: "0.25rem",
                  fontWeight: 600,
                }}
              >
                Languages
              </h3>
              <div
                className=" text-[12px]  mt-[12px]"
                style={{
                  padding: `0 ${PAGEMARGIN}px`,
                  marginTop: "12px",
                  fontSize: "12px",
                }}
              >
                <div>
                  <div className="ml-6">
                    <Lists
                      style={{
                        fontSize: BODYTEXT,
                        textAlign: "start",
                      }}
                      data={languagesData}
                      path={"languages"}
                      classname="text-start w-[100%] text-[12px] -mt-5"
                      layout={"flex flex-row gap-y-2 flex-wrap"}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Certification section */}
          {updateData?.themeConfiguration?.visibleSections?.certifications && (
            <div
              className="mt-12  flex  items-center gap-4 w-[100%]"
              style={{
                marginTop: SECTIONSPACING,
                padding: `0 ${PAGEMARGIN}px`,
              }}
            >
              <h3
                className="font-[600] text-[16px] self-start mt-2"
                style={{
                  fontSize: SUBHEADING,
                  color: PRIMARYCOLOR,
                  fontWeight:
                    updateData?.themeConfiguration?.fontWeight?.heading,
                }}
              >
                Certifications
              </h3>

              <div className="w-[5%]"></div>
              <div className="w-[95%]">
                <Dnd
                  data={resumeDetails.resumeData?.certifications}
                  direction={"horizontal"}
                  reorder={handleCertificationOrderChange}
                  additem={(e) => handleAddCertification(e)}
                  removeitem={(e) => handleRemoveCertification(e)}
                  renderItem={(item, indexOfEdu) => (
                    <div className="text-[12px] flex">
                      <div>
                        <div className="flex gap-4 w-full">
                          <CertificateNameField
                            value={item.name}
                            indexOfEdu={indexOfEdu}
                            className="w-[300px]"
                            style={{
                              fontSize: TITLEHEADING,
                              fontWeight:
                                updateData?.themeConfiguration?.fontWeight
                                  ?.heading,
                            }}
                          />
                          (
                          <CertificationEndDateField
                            className="text-center"
                            indexOfEdu={indexOfEdu}
                            value={item.endDate}
                            style={{
                              fontSize: BODYTEXT,
                              width: "fit-content",
                            }}
                            type="YYYY"
                            maxlength={4}
                          />
                          )
                        </div>
                        <div className="w-[100%]">
                          <CertificateInstituteNameField
                            value={item.organization}
                            indexOfEdu={indexOfEdu}
                            className="placeholder:text-black  text-[10px]  text-black w-[20vw]"
                            style={{
                              fontSize: BODYTEXT,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                />
              </div>
            </div>
          )}
          {/* Courses */}

          {updateData?.themeConfiguration?.visibleSections?.courses && (
            <div
              className="mt-12  flex  items-center gap-4 w-[100%]"
              style={{
                marginTop: SECTIONSPACING,
                padding: `0 ${PAGEMARGIN}px`,
              }}
            >
              <h3
                className="font-[600] text-[16px] self-start mt-2"
                style={{
                  fontSize: SUBHEADING,
                  color: PRIMARYCOLOR,
                  fontWeight:
                    updateData?.themeConfiguration?.fontWeight?.heading,
                }}
              >
                Courses
              </h3>

              <div className="w-[5%]"></div>
              <div className="w-[95%] ml-[6vh]">
                <Dnd
                  data={resumeDetails.resumeData?.courses}
                  direction={"horizontal"}
                  reorder={handleCoursesOrderChange}
                  additem={(e) => handleAddCourses(e)}
                  removeitem={(e) => handleRemoveCourses(e)}
                  renderItem={(item, indexOfEdu) => (
                    <div>
                      <div>
                        <CoursesInstituteNameField
                          value={item.organization}
                          indexOfEdu={indexOfEdu}
                          className="text-[14px] w-full"
                          style={{
                            fontSize: TITLEHEADING,
                            fontWeight:
                              updateData?.themeConfiguration?.fontWeight
                                ?.heading,
                          }}
                        />

                        <div>
                          <div>
                            <ul className="list-none tracking-wider mt-[6px]">
                              <li>
                                <CoursesNameField
                                  value={item.name}
                                  indexOfEdu={indexOfEdu}
                                  className="w-[100%]"
                                  style={{
                                    fontSize: BODYTEXT,
                                  }}
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex items-center gap-[4px] mt-[6px]">
                          <CoursesStartDateField
                            className="text-start"
                            indexOfEdu={indexOfEdu}
                            value={item.startDate}
                            style={{
                              fontSize: BODYTEXT,
                            }}
                            type="MM/YYYY"
                            maxlength={7}
                            placeholder="10/2008"
                          />
                          <span>-</span>
                          <CoursesEndDateField
                            className="text-center"
                            indexOfEdu={indexOfEdu}
                            value={item.endDate}
                            style={{
                              fontSize: BODYTEXT,
                            }}
                            placeholder="01/2010"
                            type="MM/YYYY"
                            maxlength={7}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                />
              </div>
            </div>
          )}
          {updateData?.themeConfiguration?.visibleSections?.custom && (
            <div style={{ marginTop: SECTIONSPACING }}>
              <CustomSection />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
