import React, { useState } from "react";
import NameField from "./common-fields/name.field";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  addField,
  removeField,
  updateOrder,
} from "@/redux/slices/resume.slice";
import JobTitleField from "./common-fields/job-title.field";
import EssentialPhoneIcon from "@/public/assets/images/svg-Images/essential-resume-phone-icon";
import PhoneNumberField from "./common-fields/phone-number.field";
import EssentialAddressIcon from "@/public/assets/images/svg-Images/essential-resume-location-icon";
import AddressField from "./common-fields/address.field";
import WebsiteIcon from "@/public/assets/images/svg-Images/website-icon";
import WebsiteUrl from "./common-fields/website-url.field";
import EssentialEmailIcon from "@/public/assets/images/svg-Images/essential-resume-email-icon";
import EmailField from "./common-fields/email.field";
import Image from "next/image";
import SummaryField from "./common-fields/summary.field";
import Dnd from "@/components/resume-builder/dnd";
import ArrowLeft from "@/public/assets/images/svg-Images/arrow-left";
import ExperienceCompanyName from "./common-fields/experience-company-name.field";
import ExperienceJobStartDate from "./common-fields/experience-job-startdate.field";
import ExperienceJobEndDate from "./common-fields/experience-job-enddate.field";
import ExperienceJobDescription from "./common-fields/experience-job-description.field";
import Lists from "@/components/resume-builder/lists";
import EducationInstituteNameField from "./common-fields/education-institute-name.field";
import EducationDegreeNameField from "./common-fields/education-degree-name.field";
import EducationStartDateField from "./common-fields/education-startdate.field";
import EducationEndDateField from "./common-fields/education-enddate.field";
import { CalenderIcon } from "@/public/assets/images/svg-Images/calender";
import CertificateInstituteNameField from "./common-fields/certificate-institute-name.field";
import CertificateNameField from "./common-fields/certificate-name.field";
import CoursesInstituteNameField from "./common-fields/courses-institute-name.field copy";
import CoursesStartDateField from "./common-fields/courses-startdate.field";
import CoursesEndDateField from "./common-fields/courses-enddate.field";
import CoursesNameField from "./common-fields/courses-name.field copy";
import CustomTitleField from "./common-fields/custom-title.field";
import CustomDescField from "./common-fields/custom-desc.field";
import { handleImageChange } from "@/utils/profileImage";
import ProfileImage from "./common-fields/profile-image";

export default function ChromaCraft() {
  const dispatch = useAppDispatch();
  const resumeDetails = useAppSelector((state) => state.resume);
  const updateData = useAppSelector((state) => state.templateTheme);
  const skillsData = resumeDetails.resumeData?.skills || [];
  const intrestData = resumeDetails.resumeData?.interests || [];
  const languagesData = resumeDetails.resumeData?.languages || [];
  const imageData =
    resumeDetails.resumeData?.profileImage ||
    "/assets/images/templates/cvprofile.png";

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
  return (
    <div
      className="templates"
      style={{
        backgroundColor: "white",
      }}
    >
      <div
        className="pt-[38px]  pb-[20.41px]"
        style={{
          backgroundColor:
            updateData?.themeConfiguration?.themeColor.secondaryColor,
        }}
      >
        <div className="flex justify-between pl-[55px]  pr-[55.82px]">
          <div>
            <div>
              <div
                style={{
                  marginBottom: 5,
                }}
              >
                <NameField
                  className="text-[24px] placeholder:text-black mb-[10px]"
                  resumeDetails={resumeDetails}
                  style={{
                    // fontFamily: updateData?.themeConfiguration?.fontFamily,
                    color:
                      updateData?.themeConfiguration?.themeColor.primaryColor,
                    fontWeight:
                      updateData?.themeConfiguration?.fontWeight?.heading,
                  }}
                />
              </div>
              <JobTitleField
                className="font?xt-[#0E6CC2]"
                style={{
                  fontSize: 14,
                  color:
                    updateData?.themeConfiguration?.themeColor.primaryColor,
                  fontWeight:
                    updateData?.themeConfiguration?.fontWeight?.heading,
                  width: "500px",
                }}
              />
            </div>
            <div className="flex gap-[25px] mt-[10px]">
              <div>
                <div className="flex items-start gap-2 mb-[7px]">
                  <span>
                    <EssentialPhoneIcon
                      primary={
                        updateData?.themeConfiguration?.themeColor?.primaryColor
                      }
                    />
                  </span>
                  <div className="flex  items-baseline">
                    <span
                      className=" text-[12px]"
                      style={{
                        fontSize:
                          updateData?.themeConfiguration?.fontSize?.bodyText,
                        color:
                          updateData?.themeConfiguration?.themeColor
                            .primaryColor,
                        fontWeight:
                          updateData?.themeConfiguration?.fontWeight?.heading,
                      }}
                    >
                      +
                    </span>
                    <PhoneNumberField
                      className=" text-[12px]"
                      style={{
                        fontSize:
                          updateData?.themeConfiguration?.fontSize?.bodyText,
                        color:
                          updateData?.themeConfiguration?.themeColor
                            .primaryColor,
                      }}
                      maxlength={15}
                    />
                  </div>
                </div>
                <div className=" flex items-start gap-2">
                  <span>
                    <EssentialAddressIcon
                      primary={
                        updateData?.themeConfiguration?.themeColor?.primaryColor
                      }
                    />
                  </span>
                  <AddressField
                    className=" text-[12px] w-[14vw] placeholder:!text-gray-800"
                    style={{
                      fontSize:
                        updateData?.themeConfiguration?.fontSize?.bodyText,
                      color:
                        updateData?.themeConfiguration?.themeColor.primaryColor,
                    }}
                    maxlength={45}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-start gap-2  mb-[7px]">
                  <span>
                    <WebsiteIcon
                      primary={
                        updateData?.themeConfiguration?.themeColor?.primaryColor
                      }
                    />
                  </span>
                  <WebsiteUrl
                    className=" text-[12px] w-[13vw]  placeholder:!text-gray-800"
                    style={{
                      fontSize:
                        updateData?.themeConfiguration?.fontSize?.bodyText,
                      color:
                        updateData?.themeConfiguration?.themeColor.primaryColor,
                    }}
                    maxlength={45}
                  />
                </div>
                <div className="flex items-start gap-2">
                  <span>
                    <EssentialEmailIcon
                      primary={
                        updateData?.themeConfiguration?.themeColor?.primaryColor
                      }
                    />
                  </span>
                  <EmailField
                    className=" text-[12px] w-[14vw] placeholder:!text-gray-800"
                    style={{
                      fontSize:
                        updateData?.themeConfiguration?.fontSize?.bodyText,
                      color:
                        updateData?.themeConfiguration?.themeColor.primaryColor,
                      // width: 150,
                    }}
                    maxlength={35}
                  />
                </div>
              </div>
            </div>
          </div>

          <ProfileImage
            height={100}
            width={100}
            src={imageData}
            alt="profile"
            classname=" mt-6 ml-[-20px]"
            radius={"5"}
            onChange={(e) => handleImageChange(e, dispatch)}
          />
        </div>
      </div>
      {/* {} */}

      <div className="flex gap-[26.84px] pt-[20.8px] px-[55px] pb-[20px]">
        {/* {left side} */}
        <div
          className="w-[55%]"
          style={{
            boxSizing: "border-box",
          }}
        >
          {/* {experience} */}
          <div>
            <h1
              className="text-[16px]"
              style={{
                color: updateData.themeConfiguration.themeColor.primaryColor,
                borderBottom: `2px solid ${updateData.themeConfiguration.themeColor.primaryColor}`,
                fontWeight: updateData?.themeConfiguration?.fontWeight?.heading,
                fontFamily: updateData?.themeConfiguration?.fontFamily,
              }}
            >
              EXPERIENCE
            </h1>
            <div>
              <Dnd
                data={resumeDetails.resumeData?.experience}
                direction={"horizontal"}
                reorder={handleExperienceOrderChange}
                additem={(e) => handleAddExperience(e)}
                removeitem={(e) => handleRemoveExperience(e)}
                renderItem={(item, index) => (
                  <div
                    style={{
                      borderBottom: "1px dashed #ccc",
                      paddingBottom: 7,
                    }}
                  >
                    <ExperienceCompanyName
                      value={item.company}
                      index={index}
                      style={{
                        fontSize:
                          updateData?.themeConfiguration?.fontSize
                            ?.titleHeading,
                        fontWeight:
                          updateData?.themeConfiguration?.fontWeight?.body,
                        color:
                          updateData.themeConfiguration.themeColor.primaryColor,
                        width: "100%",
                      }}
                    />
                    <div className="flex gap-[6px] items-center">
                      <CalenderIcon />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <ExperienceJobStartDate
                          style={{
                            fontSize:
                              updateData?.themeConfiguration?.fontSize
                                ?.bodyText,
                            textAlign: "start",
                          }}
                          placeholder="02/2012"
                          maxlength={7}
                          index={index}
                          value={item.startDate}
                          type="MM/YYYY"
                        />

                        <span>-</span>
                        <ExperienceJobEndDate
                          style={{
                            fontSize:
                              updateData?.themeConfiguration?.fontSize
                                ?.bodyText,
                            textAlign: "center",
                          }}
                          placeholder="04/2012"
                          maxlength={7}
                          index={index}
                          value={item.endDate}
                          type="MM/YYYY"
                        />
                      </div>
                    </div>
                    <div>
                      <ul
                        style={{
                          letterSpacing: "0.05em",
                          listStyleType: "disc",
                          marginLeft: "18px",
                          marginTop: "-5px",
                        }}
                      >
                        <li>
                          <ExperienceJobDescription
                            style={{
                              fontSize:
                                updateData?.themeConfiguration?.fontSize
                                  ?.bodyText,
                              width: "100%",
                            }}
                            value={item.title}
                            index={index}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
          {/* {tech stack} */}
          <div className="mt-[8px]">
            <h1
              className="text-[16px]"
              style={{
                color: updateData.themeConfiguration.themeColor.primaryColor,
                borderBottom: `2px solid ${updateData.themeConfiguration.themeColor.primaryColor}`,
                fontWeight: updateData?.themeConfiguration?.fontWeight?.heading,
                fontFamily: updateData?.themeConfiguration?.fontFamily,
              }}
            >
              TECH STACK
            </h1>
            <div>
              <Lists
                data={skillsData}
                path={"skills"}
                classname="text-center"
                layout={`flex flex-wrap gap-[7px] items-center p-[8px]`}
                style={{
                  borderBottom: "2px solid #000",
                  borderRadius: 0,
                  height: 30,
                  fontSize:
                    updateData?.themeConfiguration?.fontSize?.titleHeading,
                }}
                customWidth={true}
                placeholder="Coding"
              />
            </div>
          </div>
          {updateData?.themeConfiguration?.visibleSections?.custom && (
            <div>
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
                        color: "black",
                        paddingLeft: "0",
                        fontWeight: 600,
                      }}
                      className="text-blue-500 font-semibold  text-[18px] placeholder:text-blue-500 pl-0"
                    />

                    <div style={{ fontSize: "12px" }}>
                      <CustomDescField
                        indexOfCus={indexOfCus}
                        value={item.description}
                        style={{
                          fontSize:
                            updateData.themeConfiguration.fontSize.bodyText,
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
          )}
        </div>

        {/* {right side} */}
        <div className="w-[45%]">
          {/* {education} */}
          <div>
            <h1
              className="text-[16px]"
              style={{
                color: updateData.themeConfiguration.themeColor.primaryColor,
                borderBottom: `2px solid ${updateData.themeConfiguration.themeColor.primaryColor}`,
                fontWeight: updateData?.themeConfiguration?.fontWeight?.heading,
                fontFamily: updateData?.themeConfiguration?.fontFamily,
              }}
            >
              EDUCATION
            </h1>
            <div className="w-[100%]">
              <Dnd
                data={resumeDetails.resumeData?.education}
                direction={"horizontal"}
                reorder={handleEducationOrderChange}
                additem={(e) => handleAddEducation(e)}
                removeitem={(e) => handleRemoveEducation(e)}
                renderItem={(item, indexofEdu) => (
                  <div>
                    <EducationDegreeNameField
                      value={item.degree}
                      indexOfEdu={indexofEdu}
                      className="w-[100%] h-['100%] placeholder:text-black"
                      style={{
                        fontSize:
                          updateData?.themeConfiguration?.fontSize
                            ?.titleHeading,
                        fontWeight: 400,
                        color:
                          updateData.themeConfiguration.themeColor.primaryColor,
                      }}
                    />
                    <EducationInstituteNameField
                      value={item.school}
                      indexOfEdu={indexofEdu}
                      className="placeholder:text-black w-[100%]"
                      style={{
                        fontSize: 12,
                        fontWeight:
                          updateData?.themeConfiguration?.fontWeight?.heading,
                      }}
                    />
                    <div className="flex gap-[6px] items-center">
                      <CalenderIcon />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <EducationStartDateField
                          style={{
                            fontSize:
                              updateData?.themeConfiguration?.fontSize
                                ?.bodyText,
                            textAlign: "start",
                          }}
                          placeholder="02/2012"
                          maxlength={7}
                          indexOfEdu={indexofEdu}
                          value={item.startDate}
                          type="MM/YYYY"
                        />
                        <span>-</span>
                        <EducationEndDateField
                          style={{
                            fontSize:
                              updateData?.themeConfiguration?.fontSize
                                ?.bodyText,
                            textAlign: "center",
                          }}
                          placeholder="04/2012"
                          maxlength={7}
                          indexOfEdu={indexofEdu}
                          value={item.endDate}
                          type="MM/YYYY"
                        />
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
          {/* {certification} */}
          <div>
            <h1
              className="text-[16px]"
              style={{
                color: updateData.themeConfiguration.themeColor.primaryColor,
                borderBottom: `2px solid ${updateData.themeConfiguration.themeColor.primaryColor}`,
                fontWeight: updateData?.themeConfiguration?.fontWeight?.heading,
                fontFamily: updateData?.themeConfiguration?.fontFamily,
              }}
            >
              CERTIFICATIONS
            </h1>
            <div className="w-[100%]">
              <Dnd
                data={resumeDetails.resumeData?.certifications}
                direction={"horizontal"}
                reorder={handleCertificationOrderChange}
                additem={(e) => handleAddCertification(e)}
                removeitem={(e) => handleRemoveCertification(e)}
                renderItem={(item, indexOfEdu) => (
                  <div
                    style={{
                      borderBottom: "1px dashed #ccc",
                      paddingBottom: 2,
                    }}
                  >
                    <CertificateInstituteNameField
                      value={item.organization}
                      indexOfEdu={indexOfEdu}
                      className="text-black placeholder:text-black font-semibold "
                      style={{
                        fontSize:
                          updateData.themeConfiguration.fontSize.titleHeading,
                      }}
                    />
                    <CertificateNameField
                      value={item.name}
                      indexOfEdu={indexOfEdu}
                      className="w-[100%] ml-[10px] placeholder:text-black"
                      style={{
                        fontSize:
                          updateData.themeConfiguration.fontSize.bodyText,
                      }}
                    />
                  </div>
                )}
              />
            </div>
          </div>
          {/* courses */}
          {updateData?.themeConfiguration?.visibleSections?.courses && (
            <div className="mt-2">
              <h1
                className="text-[16px] font-[600]"
                style={{
                  color: updateData.themeConfiguration.themeColor.primaryColor,
                  borderBottom: `2px solid ${updateData.themeConfiguration.themeColor.primaryColor}`,
                  fontFamily: updateData?.themeConfiguration?.fontFamily,
                  fontWeight:
                    updateData?.themeConfiguration?.fontWeight?.heading,
                }}
              >
                COURSES
              </h1>
              <Dnd
                data={resumeDetails.resumeData?.courses}
                direction={"horizontal"}
                reorder={handleCoursesOrderChange}
                additem={(e) => handleAddCourses(e)}
                removeitem={(e) => handleRemoveCourses(e)}
                renderItem={(item, indexOfEdu) => (
                  <div>
                    <CoursesInstituteNameField
                      value={item.organization}
                      indexOfEdu={indexOfEdu}
                      className="text-black placeholder:text-black font-semibold w-[100%] mb-[-20px]"
                      style={{
                        fontSize:
                          updateData.themeConfiguration.fontSize.titleHeading,
                      }}
                    />
                    <div className="flex gap-[6px] items-center">
                      <CalenderIcon />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <CoursesStartDateField
                          style={{
                            fontSize:
                              updateData?.themeConfiguration?.fontSize
                                ?.bodyText,
                            textAlign: "start",
                          }}
                          placeholder="02/2012"
                          maxlength={7}
                          indexOfEdu={indexOfEdu}
                          value={item.startDate}
                          type="MM/YYYY"
                        />
                        <span>-</span>
                        <CoursesEndDateField
                          style={{
                            fontSize:
                              updateData?.themeConfiguration?.fontSize
                                ?.bodyText,
                            textAlign: "center",
                          }}
                          placeholder="04/2012"
                          maxlength={7}
                          indexOfEdu={indexOfEdu}
                          value={item.endDate}
                          type="MM/YYYY"
                        />
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          )}
          {/* {languages} */}
          {updateData?.themeConfiguration?.visibleSections?.languages && (
            <div className="mt-1">
              <h1
                className="text-[16px] font-[600]"
                style={{
                  color: updateData.themeConfiguration.themeColor.primaryColor,
                  borderBottom: `2px solid ${updateData.themeConfiguration.themeColor.primaryColor}`,
                  fontFamily: updateData?.themeConfiguration?.fontFamily,
                  fontWeight:
                    updateData?.themeConfiguration?.fontWeight?.heading,
                }}
              >
                LANGUAGES
              </h1>

              <div className="ml-[10px]">
                <Lists
                  style={{
                    fontSize: updateData.themeConfiguration.fontSize.bodyText,
                    textAlign: "start",
                  }}
                  data={languagesData}
                  path={"languages"}
                  placeholder="Language"
                  classname="text-start"
                  layout={"list-disc ml-3"}
                />
              </div>
            </div>
          )}
          {/* {custom} */}
        </div>
      </div>
    </div>
  );
}
