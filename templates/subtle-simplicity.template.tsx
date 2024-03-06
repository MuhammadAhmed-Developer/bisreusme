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
import AddressField from "./common-fields/address.field";
import CustomTitleField from "./common-fields/custom-title.field";
import CustomDescField from "./common-fields/custom-desc.field";
import CertificateInstituteNameField from "./common-fields/certificate-institute-name.field";
import CertificationStartDateField from "./common-fields/certification-startdate.field";
import CertificationEndDateField from "./common-fields/certification-enddate.field";
import CertificateNameField from "./common-fields/certificate-name.field";
import CoursesInstituteNameField from "./common-fields/courses-institute-name.field copy";
import CoursesStartDateField from "./common-fields/courses-startdate.field";
import CoursesEndDateField from "./common-fields/courses-enddate.field";
import CoursesNameField from "./common-fields/courses-name.field copy";

export default function SubtleSimplicity() {
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

  const FONTFAMILY = updateData.themeConfiguration?.fontFamily;
  const MAINHEADING = updateData.themeConfiguration?.fontSize?.mainHeading;
  const TITLEHEADING = updateData?.themeConfiguration?.fontSize?.titleHeading;
  const SUBHEADING = updateData.themeConfiguration?.fontSize?.subHeading;
  const BODYTEXT = updateData.themeConfiguration?.fontSize?.bodyText;
  const PRIMARYCOLOR = updateData.themeConfiguration?.themeColor?.primaryColor;
  const SECONDARYCOLOR =
    updateData.themeConfiguration.themeColor.secondaryColor;
  const SECTIONSPACING = updateData.themeConfiguration?.sectionSpacing;
  const PAGEMARGIN = updateData.themeConfiguration?.pageMargin;

  return (
    <div className="templates-main">
      <div
        className="bg-white pb-10 templates"
        style={{ fontFamily: FONTFAMILY }}
      >
        <div
          className="flex gap-3  bg-[#F9F9F9]"
          style={{
            padding: `32px ${PAGEMARGIN}px`,
            backgroundColor: SECONDARYCOLOR,
          }}
        >
          <div className="w-[70%]">
            <NameField
              resumeDetails={resumeDetails}
              className=" font-[700] w-[100%]"
              style={{
                fontSize: MAINHEADING,
                color: PRIMARYCOLOR,
                fontFamily: FONTFAMILY,
              }}
            />
            <JobTitleField
              className="w-[100%] text-[16px] font-[600] "
              style={{
                fontSize: SUBHEADING,
                color: PRIMARYCOLOR,
              }}
            />
            <div className="mt-[14px]">
              <SummaryField
                className="resize-none w-[90%]"
                style={{
                  fontSize: BODYTEXT,
                }}
              />
            </div>
          </div>
          <div className="w-[30%]">
            <div>
              <span
                style={{
                  fontSize: BODYTEXT,
                  color: PRIMARYCOLOR,
                }}
              >
                Email:
              </span>
              <EmailField
                className="underline w-[100%] "
                style={{
                  fontSize: BODYTEXT,
                }}
                maxlength={35}
              />
            </div>
            <div className="my-[12px]">
              <span
                style={{
                  fontSize: BODYTEXT,
                  color: PRIMARYCOLOR,
                }}
              >
                Address:
              </span>
              <AddressField
                className="underline w-[100%]"
                style={{
                  fontSize: BODYTEXT,
                }}
                maxlength={45}
              />
            </div>
            <div>
              <span
                style={{
                  fontSize: BODYTEXT,
                  color: PRIMARYCOLOR,
                }}
              >
                Phone:
              </span>
              <div className="flex underline items-baseline">
                <span
                  className=" text-[12px]"
                  style={{
                    fontSize:
                      updateData?.themeConfiguration?.fontSize?.bodyText,
                  }}
                >
                  +
                </span>
                <PhoneNumberField
                  className="underline"
                  style={{
                    fontSize: BODYTEXT,
                  }}
                  maxlength={15}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex gap-5 "
          style={{
            marginTop: SECTIONSPACING,
            padding: `0 ${PAGEMARGIN}px`,
          }}
        >
          {/* Experience */}
          <div className="w-[50%]">
            <div className="ml-[3px]">
              <h2
                style={{
                  fontSize: SUBHEADING,
                  color: PRIMARYCOLOR,
                  fontWeight:
                    updateData?.themeConfiguration?.fontWeight?.heading,
                }}
              >
                Work Experience
              </h2>
              <div>
                <Dnd
                  data={resumeDetails.resumeData?.experience}
                  direction={"horizontal"}
                  reorder={handleExperienceOrderChange}
                  additem={(e) => handleAddExperience(e)}
                  removeitem={(e) => handleRemoveExperience(e)}
                  renderItem={(item, index) => (
                    <div className="text-[12px] flex">
                      <div className="">
                        <div className="w-[100%]">
                          <ExperienceCompanyName
                            value={item.company}
                            index={index}
                            className="text-[14px] w-[20vw]"
                            style={{
                              fontSize: TITLEHEADING,
                              fontWeight:
                                updateData?.themeConfiguration?.fontWeight
                                  ?.heading,
                            }}
                          />
                        </div>
                        <div className="flex items-start gap-[4px]">
                          <ExperienceJobStartDate
                            className="text-start"
                            index={index}
                            value={item.startDate}
                            style={{
                              fontSize: BODYTEXT,
                            }}
                            placeholder="Oct 2019"
                            maxlength={15}
                            type="text"
                          />{" "}
                          <span>-</span>
                          <ExperienceJobEndDate
                            className="text-center"
                            index={index}
                            value={item.endDate}
                            style={{
                              fontSize: BODYTEXT,
                            }}
                            placeholder="Sep 2019"
                            maxlength={15}
                            type="text"
                          />
                        </div>
                        <div className="">
                          <div>
                            <ul className=" mt-[8px] list-none tracking-wider">
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
                    </div>
                  )}
                />
              </div>
            </div>

            {/* Certification section */}
            {updateData?.themeConfiguration?.visibleSections
              ?.certifications && (
              <div
                style={{
                  marginTop: SECTIONSPACING,
                }}
              >
                <h2
                  style={{
                    fontSize: SUBHEADING,
                    color: PRIMARYCOLOR,
                    fontWeight:
                      updateData?.themeConfiguration?.fontWeight?.heading,
                  }}
                >
                  Certifications
                </h2>
                <div>
                  <Dnd
                    data={resumeDetails.resumeData?.certifications}
                    direction={"horizontal"}
                    reorder={handleCertificationOrderChange}
                    additem={(e) => handleAddCertification(e)}
                    removeitem={(e) => handleRemoveCertification(e)}
                    renderItem={(item, indexOfEdu) => (
                      <div className="text-[12px] flex">
                        <div>
                          <div className="flex gap-4">
                            <CertificateNameField
                              value={item.name}
                              indexOfEdu={indexOfEdu}
                              className="w-[100%]"
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
                style={{
                  marginTop: SECTIONSPACING,
                }}
              >
                <h2
                  style={{
                    fontSize: SUBHEADING,
                    color: PRIMARYCOLOR,
                    fontWeight:
                      updateData?.themeConfiguration?.fontWeight?.heading,
                  }}
                >
                  Courses
                </h2>
                <div>
                  <Dnd
                    data={resumeDetails.resumeData?.courses}
                    direction={"horizontal"}
                    reorder={handleCoursesOrderChange}
                    additem={(e) => handleAddCourses(e)}
                    removeitem={(e) => handleRemoveCourses(e)}
                    renderItem={(item, indexOfEdu) => (
                      <div className="text-[12px] flex">
                        <div className="">
                          <div className="w-[100%]">
                            <CoursesInstituteNameField
                              value={item.organization}
                              indexOfEdu={indexOfEdu}
                              className="text-[14px] w-[16vw]"
                              style={{
                                fontSize: TITLEHEADING,
                                fontWeight:
                                  updateData?.themeConfiguration?.fontWeight
                                    ?.heading,
                              }}
                            />
                          </div>
                          <div className="flex items-start gap-[4px]">
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
                            />{" "}
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
                          <div>
                            <ul className="list-none mt-[8px] tracking-wider">
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
                      </div>
                    )}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Education -------------- */}

          <div className="w-[50%] ">
            <h2
              style={{
                fontSize: SUBHEADING,
                color: PRIMARYCOLOR,
                fontWeight: updateData?.themeConfiguration?.fontWeight?.heading,
              }}
            >
              Education & Learning
            </h2>
            <div>
              <Dnd
                data={resumeDetails.resumeData?.education}
                direction={"horizontal"}
                reorder={handleEducationOrderChange}
                additem={(e) => handleAddEducation(e)}
                removeitem={(e) => handleRemoveEducation(e)}
                renderItem={(item, indexofEdu) => (
                  <div className="text-[12px] flex">
                    <div className="">
                      <div className="w-[100%]">
                        <EducationInstituteNameField
                          value={item.school}
                          indexOfEdu={indexofEdu}
                          className="text-[14px] w-[18vw]"
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
                          <ul className=" list-none tracking-wider">
                            <li>
                              <EducationDegreeNameField
                                value={item.degree}
                                indexOfEdu={indexofEdu}
                                className="w-[100%]"
                                style={{
                                  fontSize: BODYTEXT,
                                }}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex items-start gap-[4px]">
                        <EducationStartDateField
                          className="text-start"
                          indexOfEdu={indexofEdu}
                          value={item.startDate}
                          style={{
                            fontSize: BODYTEXT,
                          }}
                          placeholder="2012"
                          type="YYYY"
                          maxlength={4}
                        />
                        <span>-</span>
                        <EducationEndDateField
                          className="text-end"
                          indexOfEdu={indexofEdu}
                          value={item.endDate}
                          style={{
                            fontSize: BODYTEXT,
                          }}
                          placeholder="1220"
                          type="YYYY"
                          maxlength={4}
                        />
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
            <div
              style={{
                marginTop: SECTIONSPACING,
              }}
            >
              <h2
                style={{
                  fontSize: SUBHEADING,
                  color: PRIMARYCOLOR,
                  fontWeight:
                    updateData?.themeConfiguration?.fontWeight?.heading,
                }}
              >
                Skills
              </h2>
              <div>
                <div className="w-[100%] mt-2">
                  <Lists
                    data={skillsData}
                    path={"skills"}
                    classname="text-start w-[100%] text-[12px]"
                    layout={"flex flex-row gap-y-2 flex-wrap"}
                    bullet={true}
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
                style={{
                  marginTop: SECTIONSPACING,
                }}
              >
                <h3
                  className="text-blue-500"
                  style={{
                    fontSize: SUBHEADING,
                    color: PRIMARYCOLOR,
                    marginTop: "0.25rem",
                    fontWeight:
                      updateData?.themeConfiguration?.fontWeight?.heading,
                  }}
                >
                  Languages
                </h3>

                <div
                  className=" text-[12px]  mt-[12px]"
                  style={{
                    marginTop: "12px",
                    fontSize: "12px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div>
                      <Lists
                        style={{
                          fontSize: BODYTEXT,
                          textAlign: "start",
                        }}
                        data={languagesData}
                        path={"languages"}
                        classname="text-start w-[100%] text-[12px]"
                        layout={"flex flex-row gap-y-2 flex-wrap"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Custom field */}
            {updateData?.themeConfiguration?.visibleSections?.custom && (
              <div
                style={{
                  marginTop: SECTIONSPACING,
                }}
              >
                <Dnd
                  data={resumeDetails.resumeData?.custom}
                  direction={"horizontal"}
                  reorder={handleCustomOrderChange}
                  additem={(e) => handleAddCustom(e)}
                  removeitem={(e) => handleRemoveCustom(e)}
                  renderItem={(item, indexOfCus) => (
                    <div>
                      <CustomTitleField
                        indexOfCus={indexOfCus}
                        value={item.title}
                        style={{
                          fontSize: SUBHEADING,
                          color: PRIMARYCOLOR,
                          paddingLeft: "0",
                          fontWeight:
                            updateData?.themeConfiguration?.fontWeight?.heading,
                        }}
                        className="text-[18px] pl-0"
                      />

                      <div style={{ fontSize: "12px", marginTop: "2px" }}>
                        <CustomDescField
                          indexOfCus={indexOfCus}
                          value={item.description}
                          style={{
                            fontSize: BODYTEXT,
                            borderStyle: "none",
                            resize: "none",
                            width: "96%",
                            textAlign: "justify",
                          }}
                        />
                      </div>
                    </div>
                  )}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
