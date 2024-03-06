"use client";
import React, { useState } from "react";
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
import CustomDescField from "./common-fields/custom-desc.field";
import CustomTitleField from "./common-fields/custom-title.field";
import CoursesNameField from "./common-fields/courses-name.field copy";
import CoursesEndDateField from "./common-fields/courses-enddate.field";
import CoursesStartDateField from "./common-fields/courses-startdate.field";
import CoursesInstituteNameField from "./common-fields/courses-institute-name.field copy";
import CertificateInstituteNameField from "./common-fields/certificate-institute-name.field";
import CertificationStartDateField from "./common-fields/certification-startdate.field";
import CertificationEndDateField from "./common-fields/certification-enddate.field";
import CertificateNameField from "./common-fields/certificate-name.field";
import ProfileImage from "./common-fields/profile-image";
import { handleImageChange } from "@/utils/profileImage";

export default function ClassicHarmony() {
  const dispatch = useAppDispatch();
  const resumeDetails = useAppSelector((state) => state.resume);
  const updateData = useAppSelector((state) => state.templateTheme);

  const [text, setText] = useState("");
  const [showGrammarCheckButton, setShowGrammarCheckButton] = useState(false);

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
  const imageData =
    resumeDetails.resumeData?.profileImage ||
    "/assets/images/templates/cvprofile.png";

  return (
    <div className="templates-main">
      <div className="bg-white pb-10 templates">
        <div style={{ fontFamily: updateData.themeConfiguration.fontFamily }}>
          <div
            className="flex bg-[#E4F6FB80] p-[32px]"
            style={{
              padding: `32px ${updateData.themeConfiguration.pageMargin}px`,
              backgroundColor:
                updateData.themeConfiguration.themeColor.secondaryColor,
            }}
          >
            <div className="w-[70%]">
              <div className="flex items-start">
                <ProfileImage
                  height={104}
                  width={104}
                  src={imageData}
                  alt="profile"
                  radius="100"
                  onChange={(e) => handleImageChange(e, dispatch)}
                />
                <div className="ml-3 mt-4">
                  <NameField
                    className="text-[26px] w-[100%]"
                    resumeDetails={resumeDetails}
                    style={{
                      fontSize:
                        updateData.themeConfiguration.fontSize.mainHeading,
                      color:
                        updateData.themeConfiguration.themeColor.primaryColor,
                      fontFamily: updateData.themeConfiguration.fontFamily,
                      fontWeight:
                        updateData?.themeConfiguration?.fontWeight?.heading,
                    }}
                    lineBreak={true}
                  />
                  <JobTitleField
                    className="text-[16px]"
                    style={{
                      fontSize:
                        updateData.themeConfiguration.fontSize.subHeading,
                      color:
                        updateData.themeConfiguration.themeColor.primaryColor,
                      fontWeight:
                        updateData?.themeConfiguration?.fontWeight?.heading,
                    }}
                    lineBreak={true}
                  />
                </div>
              </div>
              <div className="ml-4 mt-[14px]">
                <SummaryField
                  className="resize-none w-[90%] text-[12px]"
                  style={{
                    fontSize: updateData.themeConfiguration.fontSize.bodyText,
                  }}
                />
              </div>
            </div>
            <div className="w-[30%]">
              <div>
                <span
                  className="text-[12px] text-[#1C8EB5]"
                  style={{
                    color:
                      updateData.themeConfiguration.themeColor.primaryColor,
                  }}
                >
                  Email:
                </span>
                <EmailField
                  className=" text-[12px] w-[12vw]"
                  style={{
                    fontSize: updateData.themeConfiguration.fontSize.bodyText,
                  }}
                  maxlength={35}
                />
              </div>
              <div className="my-[14px]">
                <span
                  className="text-[12px] text-[#1C8EB5]"
                  style={{
                    color:
                      updateData.themeConfiguration.themeColor.primaryColor,
                  }}
                >
                  Address:
                </span>
                <AddressField
                  className=" text-[12px]  w-[12vw]"
                  style={{
                    fontSize: updateData.themeConfiguration.fontSize.bodyText,
                  }}
                  maxlength={45}
                />
              </div>
              <div>
                <span
                  className="text-[12px] text-[#1C8EB5]"
                  style={{
                    color:
                      updateData.themeConfiguration.themeColor.primaryColor,
                  }}
                >
                  Phone No:
                </span>
                <div className="flex  items-baseline">
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
                    className=" text-[12px]"
                    style={{
                      fontSize: updateData.themeConfiguration.fontSize.bodyText,
                    }}
                    maxlength={15}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex mt-14 gap-5 px-[32px] "
            style={{
              marginTop: updateData.themeConfiguration.sectionSpacing,
              padding: `0 ${updateData.themeConfiguration.pageMargin}px`,
            }}
          >
            {/* Experience */}
            <div className="w-[50%]">
              <div>
                <h2
                  className="font-[600] "
                  style={{
                    fontSize: updateData.themeConfiguration.fontSize.subHeading,
                    color:
                      updateData.themeConfiguration.themeColor.primaryColor,
                    fontWeight:
                      updateData?.themeConfiguration?.fontWeight?.heading,
                  }}
                >
                  Work experience
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
                              className="font-semibold text-[14px] w-[20vw]"
                              style={{
                                fontSize:
                                  updateData.themeConfiguration.fontSize
                                    .titleHeading,
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
                                fontSize:
                                  updateData.themeConfiguration.fontSize
                                    .bodyText,
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
                                fontSize:
                                  updateData.themeConfiguration.fontSize
                                    .bodyText,
                              }}
                              placeholder="Present"
                              maxlength={15}
                              type="text"
                            />
                          </div>
                          <div>
                            <div>
                              <ul className=" mt-[8px] list-none tracking-wider">
                                <li>
                                  <ExperienceJobDescription
                                    value={item.title}
                                    index={index}
                                    className="w-[100%] -mt-5"
                                    style={{
                                      fontSize:
                                        updateData.themeConfiguration.fontSize
                                          .bodyText,
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
                    marginTop: updateData.themeConfiguration.sectionSpacing,
                  }}
                >
                  <h2
                    style={{
                      fontSize:
                        updateData.themeConfiguration.fontSize.subHeading,
                      color:
                        updateData.themeConfiguration.themeColor.primaryColor,
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
                          <div className="">
                            <div className="w-[100%]">
                              <CertificateInstituteNameField
                                value={item.organization}
                                indexOfEdu={indexOfEdu}
                                className="font-semibold text-[14px] w-[20vw]"
                                style={{
                                  fontSize:
                                    updateData.themeConfiguration.fontSize
                                      .titleHeading,
                                }}
                              />
                            </div>
                            <div className="flex items-start gap-[4px]">
                              <CertificationStartDateField
                                className="text-start"
                                indexOfEdu={indexOfEdu}
                                value={item.startDate}
                                style={{
                                  fontSize:
                                    updateData.themeConfiguration.fontSize
                                      .bodyText,
                                }}
                                type="YYYY"
                                maxlength={4}
                              />
                              <span>-</span>
                              <CertificationEndDateField
                                className="text-center"
                                indexOfEdu={indexOfEdu}
                                value={item.endDate}
                                style={{
                                  fontSize:
                                    updateData.themeConfiguration.fontSize
                                      .bodyText,
                                }}
                                type="YYYY"
                                maxlength={4}
                              />
                            </div>
                            <div>
                              <div>
                                <ul className="mt-[8px] list-none tracking-wider">
                                  <li>
                                    <CertificateNameField
                                      value={item.name}
                                      indexOfEdu={indexOfEdu}
                                      className="w-[100%]"
                                      style={{
                                        fontSize:
                                          updateData.themeConfiguration.fontSize
                                            .bodyText,
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
              )}

              {/* Courses */}
              {updateData?.themeConfiguration?.visibleSections?.courses && (
                <div
                  style={{
                    marginTop: updateData.themeConfiguration.sectionSpacing,
                  }}
                >
                  <h2
                    style={{
                      fontSize:
                        updateData.themeConfiguration.fontSize.subHeading,
                      color:
                        updateData.themeConfiguration.themeColor.primaryColor,
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
                                className="font-semibold text-[14px] w-[20vw]"
                                style={{
                                  fontSize:
                                    updateData.themeConfiguration.fontSize
                                      .titleHeading,
                                }}
                              />
                            </div>
                            <div className="flex items-start gap-[4px]">
                              <CoursesStartDateField
                                className="text-start"
                                indexOfEdu={indexOfEdu}
                                value={item.startDate}
                                style={{
                                  fontSize:
                                    updateData.themeConfiguration.fontSize
                                      .bodyText,
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
                                  fontSize:
                                    updateData.themeConfiguration.fontSize
                                      .bodyText,
                                }}
                                type="MM/YYYY"
                                maxlength={7}
                                placeholder="10/2028"
                              />
                            </div>
                            <div>
                              <div>
                                <ul className="list-none mt-[8px] tracking-wider">
                                  <li>
                                    <CoursesNameField
                                      value={item.name}
                                      indexOfEdu={indexOfEdu}
                                      className="w-[100%]"
                                      style={{
                                        fontSize:
                                          updateData.themeConfiguration.fontSize
                                            .bodyText,
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
              )}
            </div>

            {/* Education -------------- */}

            <div className="w-[50%]">
              <h2
                className=" text-[16px]"
                style={{
                  fontSize: updateData.themeConfiguration.fontSize.subHeading,
                  color: updateData.themeConfiguration.themeColor.primaryColor,
                  fontWeight:
                    updateData?.themeConfiguration?.fontWeight?.heading,
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
                            className="font-semibold text-[14px] w-[18vw]"
                            style={{
                              fontSize:
                                updateData.themeConfiguration.fontSize
                                  .titleHeading,
                            }}
                          />
                        </div>
                        <div>
                          <div>
                            <ul className="list-none tracking-wider">
                              <li>
                                <EducationDegreeNameField
                                  value={item.degree}
                                  indexOfEdu={indexofEdu}
                                  className="w-[100%]"
                                  style={{
                                    fontSize:
                                      updateData.themeConfiguration.fontSize
                                        .bodyText,
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
                              fontSize:
                                updateData.themeConfiguration.fontSize.bodyText,
                            }}
                            maxlength={8}
                            type="text"
                          />{" "}
                          <span>-</span>
                          <EducationEndDateField
                            className="text-center"
                            indexOfEdu={indexofEdu}
                            value={item.endDate}
                            style={{
                              fontSize:
                                updateData.themeConfiguration.fontSize.bodyText,
                            }}
                            maxlength={8}
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                />
              </div>
              <div
                style={{
                  marginTop: updateData.themeConfiguration.sectionSpacing,
                }}
              >
                <h2
                  className="text-[16px]"
                  style={{
                    fontSize: updateData.themeConfiguration.fontSize.subHeading,
                    color:
                      updateData.themeConfiguration.themeColor.primaryColor,
                    fontWeight:
                      updateData?.themeConfiguration?.fontWeight?.heading,
                  }}
                >
                  Skills
                </h2>
                <div className="w-[100%] mt-3">
                  <Lists
                    data={skillsData}
                    path={"skills"}
                    classname="text-start w-[100%] text-[12px]"
                    layout={"flex flex-wrap gap-y-2"}
                    style={{
                      fontSize: updateData.themeConfiguration.fontSize.bodyText,
                    }}
                  />
                </div>
              </div>

              {/* languages section  */}
              {updateData?.themeConfiguration?.visibleSections?.languages && (
                <div
                  style={{
                    marginTop: updateData.themeConfiguration.sectionSpacing,
                  }}
                >
                  <h3
                    style={{
                      fontSize:
                        updateData.themeConfiguration.fontSize.subHeading,
                      color:
                        updateData.themeConfiguration.themeColor.primaryColor,
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
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <div>
                        <Lists
                          style={{
                            fontSize:
                              updateData.themeConfiguration.fontSize.bodyText,
                            textAlign: "start",
                          }}
                          data={languagesData}
                          path={"languages"}
                          classname="text-start w-[100%] text-[12px]"
                          layout={"flex flex-wrap gap-y-2"}
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
                    marginTop: updateData.themeConfiguration.sectionSpacing,
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
                            fontSize:
                              updateData.themeConfiguration.fontSize.subHeading,
                            color:
                              updateData.themeConfiguration.themeColor
                                .primaryColor,
                            paddingLeft: "0",
                            fontWeight:
                              updateData?.themeConfiguration?.fontWeight
                                ?.heading,
                          }}
                          className="text-[18px]"
                        />

                        <div className="text-[12px] ml-[2px]">
                          <CustomDescField
                            indexOfCus={indexOfCus}
                            value={item.description}
                            style={{
                              fontSize:
                                updateData.themeConfiguration.fontSize.bodyText,
                              borderStyle: "none",
                              resize: "none",
                              width: "97%",
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
    </div>
  );
}
