"use client";
import React, { useRef, useState } from "react";
import Dnd from "@/components/resume-builder/dnd";
import {
  addField,
  removeField,
  updateImage,
  updateOrder,
} from "@/redux/slices/resume.slice";
import NameField from "@/templates/common-fields/name.field";
import Lists from "@/components/resume-builder/lists";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import EmailField from "./common-fields/email.field";
import PhoneNumberField from "./common-fields/phone-number.field";
import JobTitleField from "./common-fields/job-title.field";
import ExperienceCompanyName from "./common-fields/experience-company-name.field";
import ExperienceJobDescription from "./common-fields/experience-job-description.field";
import ExperienceJobStartDate from "./common-fields/experience-job-startdate.field";
import ExperienceJobEndDate from "./common-fields/experience-job-enddate.field";
import EducationInstituteNameField from "./common-fields/education-institute-name.field";
import EducationDegreeNameField from "./common-fields/education-degree-name.field";
import EducationStartDateField from "./common-fields/education-startdate.field";
import EducationEndDateField from "./common-fields/education-enddate.field";
import Image from "next/image";
import ResumeEmailIcon from "@/public/assets/images/svg-Images/resume-email-icon";
import ResumeLocationIcon from "@/public/assets/images/svg-Images/resume-location-icon";
import ResumeCallIcon from "@/public/assets/images/svg-Images/resume-call-icon";
import AddressField from "./common-fields/address.field";
import CoursesNameField from "./common-fields/courses-name.field copy";
import CoursesEndDateField from "./common-fields/courses-enddate.field";
import CoursesStartDateField from "./common-fields/courses-startdate.field";
import CoursesInstituteNameField from "./common-fields/courses-institute-name.field copy";
import CertificateNameField from "./common-fields/certificate-name.field";
import CertificationEndDateField from "./common-fields/certification-enddate.field";
import CertificationStartDateField from "./common-fields/certification-startdate.field";
import CertificateInstituteNameField from "./common-fields/certificate-institute-name.field";
import CustomDescField from "./common-fields/custom-desc.field";
import CustomTitleField from "./common-fields/custom-title.field";
import ProfileImage from "./common-fields/profile-image";
import { handleImageChange } from "@/utils/profileImage";
import { BGClean } from "@/public/assets/images/svg-Images/bg-clean";
export default function CleanCanvas() {
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
  const imageData =
    resumeDetails.resumeData?.profileImage ||
    "/assets/images/templates/cvprofile.png";
  return (
    <div
      className="bg-white templates pb-10"
      style={{ fontFamily: updateData?.themeConfiguration?.fontFamily }}
    >
      <div className="relative z-[1]">
        <BGClean
          color={updateData?.themeConfiguration?.themeColor?.secondaryColor}
        />
      </div>
      <div
        className="flex p-[36px] novo-header"
        style={{
          padding: `0px ${updateData?.themeConfiguration?.pageMargin}px`,
          position: "absolute",
          top: "40px",
          width: "100%",
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
            <div className="ml-[14px] mt-4">
              <JobTitleField
                className="text-[#CA6D18] text-[16px] placeholder:text-[#CA6D18]"
                style={{
                  fontSize:
                    updateData?.themeConfiguration?.fontSize?.subHeading,
                  color:
                    updateData?.themeConfiguration?.themeColor?.primaryColor,
                  fontWeight: updateData?.themeConfiguration?.fontWeight?.body,
                }}
                maxLength={35}
                lineBreak={true}
              />
              <NameField
                className="text-[26px] w-[100%]"
                resumeDetails={resumeDetails}
                style={{
                  fontSize:
                    updateData?.themeConfiguration?.fontSize?.mainHeading,
                  color:
                    updateData?.themeConfiguration?.themeColor?.primaryColor,
                  fontFamily: updateData?.themeConfiguration?.fontFamily,
                  fontWeight: updateData?.themeConfiguration?.fontWeight?.body,
                }}
                maxLength={30}
                lineBreak={true}
              />
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <div className="flex items-center gap-3">
            <span className=" text-[#CA6D18] ">
              <ResumeEmailIcon
                primary={
                  updateData?.themeConfiguration?.themeColor?.primaryColor
                }
              />
            </span>
            <EmailField
              className="underline text-[12px] w-[100%]"
              style={{
                fontSize: updateData?.themeConfiguration?.fontSize?.bodyText,
              }}
              maxlength={35}
              lineBreak={true}
            />
          </div>
          <div className=" flex items-center gap-3 my-[8px]">
            <span className="text-[12px] text-[#CA6D18] ">
              <ResumeLocationIcon
                primary={
                  updateData?.themeConfiguration?.themeColor?.primaryColor
                }
              />
            </span>
            <AddressField
              className="underline text-[12px] -ml-4 w-[100%]"
              style={{
                fontSize: updateData?.themeConfiguration?.fontSize?.bodyText,
              }}
              maxlength={45}
              lineBreak={true}
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[12px] text-[#CA6D18] ">
              <ResumeCallIcon
                primary={
                  updateData?.themeConfiguration?.themeColor?.primaryColor
                }
              />
            </span>
            <div className="flex underline items-baseline">
              <span
                className=" text-[12px]"
                style={{
                  fontSize: updateData?.themeConfiguration?.fontSize?.bodyText,
                }}
              >
                +
              </span>
              <PhoneNumberField
                className="underline text-[12px]"
                style={{
                  fontSize: updateData?.themeConfiguration?.fontSize?.bodyText,
                }}
                maxlength={15}
                lineBreak={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex mt-14 gap-5 px-[32px]"
        style={{
          marginTop: updateData?.themeConfiguration?.sectionSpacing,
          padding: `0 ${updateData?.themeConfiguration?.pageMargin}px`,
        }}
      >
        {/* Experience */}
        <div className="w-[50%]">
          <h2
            className="text-[#CA6D18] text-[16px] placeholder:text-[#CA6D18]"
            style={{
              fontSize: updateData?.themeConfiguration?.fontSize?.subHeading,
              color: updateData?.themeConfiguration?.themeColor?.primaryColor,
              fontWeight: updateData?.themeConfiguration?.fontWeight?.body,
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
                  <div className="w-[100%]">
                    <div className="w-[100%]">
                      <ExperienceCompanyName
                        value={item.company}
                        index={index}
                        className="text-[14px] w-[100%]"
                        style={{
                          fontSize:
                            updateData?.themeConfiguration?.fontSize
                              ?.titleHeading,
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
                            updateData?.themeConfiguration?.fontSize?.bodyText,
                        }}
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
                            updateData?.themeConfiguration?.fontSize?.bodyText,
                        }}
                        maxlength={15}
                        type="text"
                      />
                    </div>
                    <div>
                      <div>
                        <ul className="mt-[8px] list-none tracking-wider">
                          <li>
                            <ExperienceJobDescription
                              value={item.title}
                              index={index}
                              className="w-[80%]"
                              style={{
                                fontSize:
                                  updateData?.themeConfiguration?.fontSize
                                    ?.bodyText,
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
            <div
              className="mt-10 "
              style={{
                marginTop: updateData?.themeConfiguration?.sectionSpacing,
              }}
            >
              <h2
                className="text-[#CA6D18] text-[16px] placeholder:text-[#CA6D18]"
                style={{
                  fontSize:
                    updateData?.themeConfiguration?.fontSize?.subHeading,
                  color:
                    updateData?.themeConfiguration?.themeColor?.primaryColor,
                  fontWeight: updateData?.themeConfiguration?.fontWeight?.body,
                }}
              >
                Skills
              </h2>
              <div>
                <div className="w-[100%]">
                  <Lists
                    data={skillsData}
                    path={"skills"}
                    classname="text-start text-[12px]"
                    layout="gap-x-14 gap-y-2 flex flex-row flex-wrap mt-3  tracking-wider"
                    style={{
                      fontSize:
                        updateData?.themeConfiguration?.fontSize?.bodyText,
                    }}
                  />
                </div>
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
                    fontSize: updateData.themeConfiguration.fontSize.subHeading,
                    color:
                      updateData.themeConfiguration.themeColor.primaryColor,
                    marginTop: "0.25rem",
                    fontWeight:
                      updateData?.themeConfiguration?.fontWeight?.body,
                  }}
                >
                  Languages
                </h3>

                <div
                  className=" text-[12px] "
                  style={{
                    marginTop: "12px",
                    fontSize: "12px",
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
                      classname="text-start text-[12px]"
                      layout="gap-x-14 gap-y-2 flex flex-row flex-wrap mt-3  tracking-wider"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Education -------------- */}
        <div className=" w-[50%]">
          <div>
            <h2
              className="text-[#CA6D18] text-[16px] font-[600] placeholder:text-[#CA6D18]"
              style={{
                fontSize: updateData?.themeConfiguration?.fontSize?.subHeading,
                color: updateData?.themeConfiguration?.themeColor?.primaryColor,
                fontWeight: updateData?.themeConfiguration?.fontWeight?.body,
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
                    <div className="w-[100%]">
                      <div className="w-[100%]">
                        <EducationInstituteNameField
                          value={item.school}
                          indexOfEdu={indexofEdu}
                          className="text-[14px]  w-[100%]"
                          style={{
                            fontSize:
                              updateData?.themeConfiguration?.fontSize
                                ?.titleHeading,
                          }}
                        />
                      </div>
                      <div>
                        <ul className="list-none tracking-wider">
                          <li>
                            <EducationDegreeNameField
                              value={item.degree}
                              indexOfEdu={indexofEdu}
                              className="w-[100%]"
                              style={{
                                fontSize:
                                  updateData?.themeConfiguration?.fontSize
                                    ?.bodyText,
                              }}
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="flex items-start gap-[4px]">
                        <EducationStartDateField
                          className="text-start"
                          indexOfEdu={indexofEdu}
                          value={item.startDate}
                          style={{
                            fontSize:
                              updateData?.themeConfiguration?.fontSize
                                ?.bodyText,
                          }}
                          type="YYYY"
                          maxlength={4}
                        />{" "}
                        <span>-</span>
                        <EducationEndDateField
                          className="text-center"
                          indexOfEdu={indexofEdu}
                          value={item.endDate}
                          style={{
                            fontSize:
                              updateData?.themeConfiguration?.fontSize
                                ?.bodyText,
                          }}
                          type="YYYY"
                          maxlength={4}
                        />
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>

          {/* Certification section */}
          {updateData?.themeConfiguration?.visibleSections?.certifications && (
            <div
              style={{
                marginTop: updateData.themeConfiguration.sectionSpacing,
              }}
            >
              <h2
                style={{
                  fontSize: updateData.themeConfiguration.fontSize.subHeading,
                  color: updateData.themeConfiguration.themeColor.primaryColor,
                  fontWeight: updateData?.themeConfiguration?.fontWeight?.body,
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
                      <div className="w-[100%]">
                        <div className="w-[100%]">
                          <CertificateInstituteNameField
                            value={item.organization}
                            indexOfEdu={indexOfEdu}
                            className="text-[14px] w-[100%]"
                            style={{
                              fontSize:
                                updateData.themeConfiguration.fontSize
                                  .titleHeading,
                              fontWeight:
                                updateData?.themeConfiguration?.fontWeight
                                  ?.body,
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
                                updateData.themeConfiguration.fontSize.bodyText,
                            }}
                            type="YYYY"
                            maxlength={4}
                          />{" "}
                          <span>-</span>
                          <CertificationEndDateField
                            className="text-center"
                            indexOfEdu={indexOfEdu}
                            value={item.endDate}
                            style={{
                              fontSize:
                                updateData.themeConfiguration.fontSize.bodyText,
                            }}
                            type="YYYY"
                            maxlength={4}
                          />
                        </div>
                        <div className="w-[100%]">
                          <ul className="list-none tracking-wider w-[100%]">
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
                  fontSize: updateData.themeConfiguration.fontSize.subHeading,
                  color: updateData.themeConfiguration.themeColor.primaryColor,
                  fontWeight: updateData?.themeConfiguration?.fontWeight?.body,
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
                      <div className="w-[100%]">
                        <div className="w-[100%]">
                          <CoursesInstituteNameField
                            value={item.organization}
                            indexOfEdu={indexOfEdu}
                            className="text-[14px]  w-[100%]"
                            style={{
                              fontSize:
                                updateData.themeConfiguration.fontSize
                                  .titleHeading,
                              fontWeight:
                                updateData?.themeConfiguration?.fontWeight
                                  ?.body,
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
                                updateData.themeConfiguration.fontSize.bodyText,
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
                                updateData.themeConfiguration.fontSize.bodyText,
                            }}
                            type="MM/YYYY"
                            maxlength={7}
                            placeholder="10/2208"
                          />
                        </div>
                        <div className="">
                          <div>
                            <ul className="list-none tracking-wider w-[100%]">
                              <li>
                                <CoursesNameField
                                  value={item.name}
                                  indexOfEdu={indexOfEdu}
                                  className="w-[100%] "
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
                          updateData.themeConfiguration.themeColor.primaryColor,
                        paddingLeft: "0",
                        fontWeight:
                          updateData?.themeConfiguration?.fontWeight?.body,
                      }}
                      className="text-[18px"
                    />

                    <div className="ml-1">
                      <CustomDescField
                        indexOfCus={indexOfCus}
                        value={item.description}
                        style={{
                          fontSize:
                            updateData.themeConfiguration.fontSize.bodyText,
                          borderStyle: "none",
                          resize: "none",
                          width: "100%",
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
  );
}
