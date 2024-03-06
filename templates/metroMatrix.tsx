import {
  addField,
  removeField,
  updateOrder,
} from "@/redux/slices/resume.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useState } from "react";
import NameField from "./common-fields/name.field";
import JobTitleField from "./common-fields/job-title.field";
import SummaryField from "./common-fields/summary.field";
import EssentialPhoneIcon from "@/public/assets/images/svg-Images/essential-resume-phone-icon";
import PhoneNumberField from "./common-fields/phone-number.field";
import EssentialAddressIcon from "@/public/assets/images/svg-Images/essential-resume-location-icon";
import AddressField from "./common-fields/address.field";
import EssentialEmailIcon from "@/public/assets/images/svg-Images/essential-resume-email-icon";
import EmailField from "./common-fields/email.field";
import WebsiteIcon from "@/public/assets/images/svg-Images/website-icon";
import WebsiteUrl from "./common-fields/website-url.field";
import { Bagicon } from "@/public/assets/images/svg-Images/bag";
import { Capicon } from "@/public/assets/images/svg-Images/cap";
import Dnd from "@/components/resume-builder/dnd";
import EducationDegreeNameField from "./common-fields/education-degree-name.field";
import EducationInstituteNameField from "./common-fields/education-institute-name.field";
import EducationStartDateField from "./common-fields/education-startdate.field";
import EducationEndDateField from "./common-fields/education-enddate.field";
import ExperienceCompanyName from "./common-fields/experience-company-name.field";
import ExperienceJobStartDate from "./common-fields/experience-job-startdate.field";
import ExperienceJobEndDate from "./common-fields/experience-job-enddate.field";
import ExperienceJobDescription from "./common-fields/experience-job-description.field";
import { SkillsIcon } from "@/public/assets/images/svg-Images/skillsIcon";
import Lists from "@/components/resume-builder/lists";
import { Badgeicon } from "@/public/assets/images/svg-Images/badgeIcon";
import CertificateInstituteNameField from "./common-fields/certificate-institute-name.field";
import CertificateNameField from "./common-fields/certificate-name.field";
import CoursesInstituteNameField from "./common-fields/courses-institute-name.field copy";
import { CalenderIcon } from "@/public/assets/images/svg-Images/calender";
import CoursesStartDateField from "./common-fields/courses-startdate.field";
import CoursesEndDateField from "./common-fields/courses-enddate.field";
import { LanguageIcon } from "@/public/assets/images/svg-Images/language";
import CustomTitleField from "./common-fields/custom-title.field";
import CustomDescField from "./common-fields/custom-desc.field";

export default function MetroMatrix() {
  const dispatch = useAppDispatch();
  const resumeDetails = useAppSelector((state) => state.resume);
  const updateData = useAppSelector((state) => state.templateTheme);
  const skillsData = resumeDetails.resumeData?.skills || [];
  const intrestData = resumeDetails.resumeData?.interests || [];
  const languagesData = resumeDetails.resumeData?.languages || [];

  const [showCameraIcon, setShowCameraIcon] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(
    "/assets/images/templates/cvprofile.png"
  );

  const handleHover = () => {
    setShowCameraIcon(true);
  };

  const handleLeave = () => {
    setShowCameraIcon(false);
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const result = event.target?.result as string;
        setImageSrc(result);
      };

      reader.readAsDataURL(file);
    }
  };
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
    <div className="px-[24.84px] py-[40.11px] bg-white">
      {/* {} */}
      <div
        style={{
          border: `1px solid ${updateData?.themeConfiguration?.themeColor.secondaryColor}`,
          borderRadius: 13,
          paddingBottom: 10.61,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="bg-[#fff] px-7 mt-[-20px] ">
            <NameField
              resumeDetails={resumeDetails}
              className="text-[24px] placeholder:text-black mb-[10px] text-center"
              style={{
                fontFamily: updateData?.themeConfiguration?.fontFamily,
                color: updateData?.themeConfiguration?.themeColor.primaryColor,
                fontWeight: updateData?.themeConfiguration?.fontWeight?.heading,
              }}
            />
          </div>
          <JobTitleField
            className="text-center"
            style={{
              fontSize: 14,
              color: updateData?.themeConfiguration?.themeColor.primaryColor,
              fontWeight: updateData?.themeConfiguration?.fontWeight?.body,
              width: "500px",
            }}
          />
          <div className="px-[63.58px] w-[100%] mt-1">
            <SummaryField
              className="resize-none text-black -ml-4 w-[100%] placeholder:text-black"
              style={{
                fontSize: 12,
                fontWeight: updateData?.themeConfiguration?.fontWeight?.body,
              }}
            />
          </div>
        </div>
      </div>
      {/* {} */}
      <div
        className="mt-[16.49px] px-[40.61px] py-[15.39px] flex gap-[122.88px]"
        style={{
          backgroundColor:
            updateData?.themeConfiguration?.themeColor.secondaryColor,
          borderRadius: 5,
        }}
      >
        <div>
          <div className="flex gap-[4px] items-center">
            <span>
              <EssentialEmailIcon
                primary={
                  updateData?.themeConfiguration?.themeColor.primaryColor ==
                  "#E16E68"
                    ? "white"
                    : updateData?.themeConfiguration?.themeColor.primaryColor
                }
              />
            </span>
            <EmailField
              style={{
                fontSize: updateData?.themeConfiguration?.fontSize?.bodyText,
                color:
                  updateData?.themeConfiguration?.themeColor.primaryColor ==
                  "#E16E68"
                    ? "white"
                    : updateData?.themeConfiguration?.themeColor.primaryColor,
                width: "200px",
              }}
              maxlength={35}
              // className="placeholder-black"
            />
          </div>
          <div className="flex gap-[5px] items-center mt-[6.97px]">
            <span>
              <WebsiteIcon
                primary={
                  updateData?.themeConfiguration?.themeColor.primaryColor ==
                  "#E16E68"
                    ? "white"
                    : updateData?.themeConfiguration?.themeColor.primaryColor
                }
              />
            </span>
            <WebsiteUrl
              style={{
                fontSize: updateData?.themeConfiguration?.fontSize?.bodyText,
                color:
                  updateData?.themeConfiguration?.themeColor.primaryColor ==
                  "#E16E68"
                    ? "white"
                    : updateData?.themeConfiguration?.themeColor.primaryColor,
                width: "200px",
              }}
              maxlength={35}
            />
          </div>
        </div>
        <div>
          <div className="flex gap-[4px] items-center">
            <span>
              <EssentialPhoneIcon
                primary={
                  updateData?.themeConfiguration?.themeColor.primaryColor ==
                  "#E16E68"
                    ? "white"
                    : updateData?.themeConfiguration?.themeColor.primaryColor
                }
              />
            </span>
            <div className="flex  items-baseline">
              <span
                className=" text-[12px] placeholder:!text-gray-800"
                style={{
                  fontSize: updateData?.themeConfiguration?.fontSize?.bodyText,
                  color:
                    updateData?.themeConfiguration?.themeColor.primaryColor,
                }}
              >
                +
              </span>
              <PhoneNumberField
                className=" text-[12px] "
                style={{
                  fontSize: updateData?.themeConfiguration?.fontSize?.bodyText,
                  color:
                    updateData?.themeConfiguration?.themeColor.primaryColor ==
                    "#E16E68"
                      ? "white"
                      : updateData?.themeConfiguration?.themeColor.primaryColor,
                  width: "200px",
                }}
                maxlength={15}
              />
            </div>
          </div>
          <div className="flex gap-[6px] items-start mt-[6.97px]">
            <span style={{marginTop:4}}>
              <EssentialAddressIcon
                primary={
                  updateData?.themeConfiguration?.themeColor.primaryColor ==
                  "#E16E68"
                    ? "white"
                    : updateData?.themeConfiguration?.themeColor.primaryColor
                }
              />
            </span>
            <AddressField
              style={{
                fontSize: updateData?.themeConfiguration?.fontSize?.bodyText,
                color:
                  updateData?.themeConfiguration?.themeColor.primaryColor ==
                  "#E16E68"
                    ? "white"
                    : updateData?.themeConfiguration?.themeColor.primaryColor,

                width: "200px",
              }}
              maxlength={45}
            />
          </div>
        </div>
      </div>
      {/* {} */}
      <div className="mt-[21.22px] flex gap-[10px]">
        <div className="w-[55%]">
          {/* {} */}
          <div>
            <div className="flex items-center gap-[8.77px]">
              <Capicon
                color={updateData.themeConfiguration.themeColor.primaryColor}
              />
              <h1
                className="text-[16px]"
                style={{
                  color: updateData.themeConfiguration.themeColor.primaryColor,
                  fontWeight:
                    updateData?.themeConfiguration?.fontWeight?.heading,
                  fontFamily: updateData?.themeConfiguration?.fontFamily,
                }}
              >
                EDUCATION
              </h1>
            </div>
            <div className="w-[100%]">
              <Dnd
                data={resumeDetails.resumeData?.education}
                direction={"horizontal"}
                reorder={handleEducationOrderChange}
                additem={(e) => handleAddEducation(e)}
                removeitem={(e) => handleRemoveEducation(e)}
                renderItem={(item, indexofEdu) => (
                  <>
                    <EducationDegreeNameField
                      value={item.degree}
                      indexOfEdu={indexofEdu}
                      className="w-[100%] h-['100%] placeholder:text-black"
                      style={{
                        fontSize: 14,
                        fontWeight:
                          updateData?.themeConfiguration?.fontWeight?.heading,
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

                    <div
                      style={{
                        marginTop: -4,
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <EducationStartDateField
                        style={{
                          fontSize: 10,
                          textAlign: "start",
                          color:
                            updateData.themeConfiguration.themeColor
                              .primaryColor,
                        }}
                        placeholder="2012"
                        maxlength={4}
                        type="YYYY"
                        indexOfEdu={indexofEdu}
                        value={item.startDate}
                      />
                      <span
                        style={{
                          marginTop: 4,
                          color:
                            updateData.themeConfiguration.themeColor
                              .primaryColor,
                        }}
                      >
                        -
                      </span>
                      <EducationEndDateField
                        style={{
                          fontSize: 10,
                          textAlign: "center",
                          color:
                            updateData.themeConfiguration.themeColor
                              .primaryColor,
                        }}
                        placeholder="2012"
                        maxlength={4}
                        type="YYYY"
                        indexOfEdu={indexofEdu}
                        value={item.endDate}
                      />
                    </div>
                  </>
                )}
              />
            </div>
          </div>
          {/* {} */}
          <div className="mt-4">
            <div className="flex items-center gap-[8.77px]">
              <Bagicon
                color={updateData.themeConfiguration.themeColor.primaryColor}
              />
              <h1
                className="text-[16px] font-[500]"
                style={{
                  color: updateData.themeConfiguration.themeColor.primaryColor,
                  fontWeight:
                    updateData?.themeConfiguration?.fontWeight?.heading,
                  fontFamily: updateData?.themeConfiguration?.fontFamily,
                }}
              >
                WORK EXPERIENCE
              </h1>
            </div>
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
                        fontSize: 14,
                        fontWeight:
                          updateData?.themeConfiguration?.fontWeight?.heading,
                        color: "#000",
                        width: "100%",
                      }}
                    />

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <ExperienceJobStartDate
                        style={{
                          fontSize: 10,
                          textAlign: "start",
                          color:
                            updateData.themeConfiguration.themeColor
                              .primaryColor,
                        }}
                        placeholder="02/2012"
                        maxlength={7}
                        index={index}
                        value={item.startDate}
                        type="MM/YYYY"
                      />
                      <span
                        style={{
                          marginTop: 4,
                          color:
                            updateData.themeConfiguration.themeColor
                              .primaryColor,
                        }}
                      >
                        -
                      </span>
                      <ExperienceJobEndDate
                        style={{
                          fontSize: 10,
                          textAlign: "center",
                          color:
                            updateData.themeConfiguration.themeColor
                              .primaryColor,
                        }}
                        placeholder="04/2012"
                        maxlength={7}
                        index={index}
                        value={item.endDate}
                        type="text"
                      />
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
          {updateData?.themeConfiguration?.visibleSections?.languages && (
            <div className="mt-4">
              <div className="flex items-center gap-[8.77px]">
                <LanguageIcon
                  color={updateData.themeConfiguration.themeColor.primaryColor}
                />
                <h1
                  className="text-[16px] font-[500]"
                  style={{
                    color:
                      updateData.themeConfiguration.themeColor.primaryColor,
                    fontWeight:
                      updateData?.themeConfiguration?.fontWeight?.heading,
                    fontFamily: updateData?.themeConfiguration?.fontFamily,
                  }}
                >
                  LANGUAGES
                </h1>
              </div>

              <div className="ml-[10px] mt-2">
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
        </div>
        <div className="w-[45%]">
          {/* {} */}
          <div>
            <div className="flex items-center gap-[8.77px]">
              <SkillsIcon
                color={updateData.themeConfiguration.themeColor.primaryColor}
              />
              <h1
                className="text-[16px] font-[500]"
                style={{
                  color: updateData.themeConfiguration.themeColor.primaryColor,
                  fontWeight:
                    updateData?.themeConfiguration?.fontWeight?.heading,
                  fontFamily: updateData?.themeConfiguration?.fontFamily,
                }}
              >
                SKILLS AND COMPETENCIES
              </h1>
            </div>
            <div className="mt-2">
              <Lists
                style={{
                  fontSize: updateData?.themeConfiguration?.fontSize?.bodyText,
                  textAlign: "start",
                }}
                layout={"list-disc ml-6"}
                data={skillsData}
                placeholder="Skills"
                path={"skills"}
                classname="text-start text-black  w-[50vh]"
              />
            </div>
          </div>
          {/* {} */}
          {updateData?.themeConfiguration?.visibleSections?.certifications && (
            <div className="mt-4">
              <div className="flex items-center gap-[8.77px]">
                <Badgeicon
                  color={updateData.themeConfiguration.themeColor.primaryColor}
                />
                <h1
                  className="text-[16px] font-[500]"
                  style={{
                    color:
                      updateData.themeConfiguration.themeColor.primaryColor,
                    fontWeight:
                      updateData?.themeConfiguration?.fontWeight?.heading,
                    fontFamily: updateData?.themeConfiguration?.fontFamily,
                  }}
                >
                  TRAININGS AND CERTIFICATIONS
                </h1>
              </div>
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
                        className="text-black placeholder:text-black"
                        style={{
                          fontSize:
                            updateData.themeConfiguration.fontSize.titleHeading,
                          fontWeight:
                            updateData?.themeConfiguration?.fontWeight?.heading,
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
          )}
          {/* {} */}
          {updateData?.themeConfiguration?.visibleSections?.courses && (
            <div className="mt-4">
              <div className="flex items-center gap-[8.77px]">
                <Badgeicon
                  color={updateData.themeConfiguration.themeColor.primaryColor}
                />
                <h1
                  className="text-[16px] font-[500]"
                  style={{
                    color:
                      updateData.themeConfiguration.themeColor.primaryColor,
                    fontWeight:
                      updateData?.themeConfiguration?.fontWeight?.heading,
                    fontFamily: updateData?.themeConfiguration?.fontFamily,
                  }}
                >
                  COURSES
                </h1>
              </div>

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
                      className="text-black placeholder:text-black w-[100%] mb-[-20px]"
                      style={{
                        fontSize:
                          updateData.themeConfiguration.fontSize.titleHeading,
                        fontWeight:
                          updateData?.themeConfiguration?.fontWeight?.heading,
                      }}
                    />

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        marginTop: -5,
                      }}
                    >
                      <CoursesStartDateField
                        style={{
                          fontSize: 10,
                          textAlign: "start",
                          color:
                            updateData.themeConfiguration.themeColor
                              .primaryColor,
                        }}
                        placeholder="02/2012"
                        type="MM/YYYY"
                        maxlength={7}
                        indexOfEdu={indexOfEdu}
                        value={item.startDate}
                      />
                      <span
                        style={{
                          marginTop: 4,
                          color:
                            updateData.themeConfiguration.themeColor
                              .primaryColor,
                        }}
                      >
                        -
                      </span>
                      <CoursesEndDateField
                        style={{
                          fontSize: 10,
                          textAlign: "center",
                          color:
                            updateData.themeConfiguration.themeColor
                              .primaryColor,
                        }}
                        type="MM/YYYY"
                        maxlength={7}
                        placeholder="10/2208"
                        indexOfEdu={indexOfEdu}
                        value={item.endDate}
                      />
                    </div>
                  </div>
                )}
              />
            </div>
          )}
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
                      className="text-blue-500 font-semibold  text-[18px] placeholder:text-grey-500 pl-0"
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
      </div>
    </div>
  );
}
