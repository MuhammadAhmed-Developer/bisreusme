import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useState } from "react";
import NameField from "./common-fields/name.field";
import JobTitleField from "./common-fields/job-title.field";
import SummaryField from "./common-fields/summary.field";
import Image from "next/image";
import EssentialEmailIcon from "@/public/assets/images/svg-Images/essential-resume-email-icon";
import EmailField from "./common-fields/email.field";
import EssentialAddressIcon from "@/public/assets/images/svg-Images/essential-resume-location-icon";
import AddressField from "./common-fields/address.field";
import EssentialPhoneIcon from "@/public/assets/images/svg-Images/essential-resume-phone-icon";
import PhoneNumberField from "./common-fields/phone-number.field";
import NovoHeader from "@/public/assets/images/svg-Images/nove-header";
import Dnd from "@/components/resume-builder/dnd";
import ExperienceCompanyName from "./common-fields/experience-company-name.field";
import ExperienceJobStartDate from "./common-fields/experience-job-startdate.field";
import ExperienceJobEndDate from "./common-fields/experience-job-enddate.field";
import ExperienceJobDescription from "./common-fields/experience-job-description.field";
import {
  addField,
  removeField,
  updateOrder,
} from "@/redux/slices/resume.slice";
import NovoExperienceIcon from "@/public/assets/images/svg-Images/novo-experience-icon";
import { Color } from "@progress/kendo-drawing";
import Lists from "@/components/resume-builder/lists";
import NovoSkillsIcon from "@/public/assets/images/svg-Images/novo-skills-icon";
import CertificateNameField from "./common-fields/certificate-name.field";
import CertificationEndDateField from "./common-fields/certification-enddate.field";
import CertificationStartDateField from "./common-fields/certification-startdate.field";
import CertificateInstituteNameField from "./common-fields/certificate-institute-name.field";
import NovoCertifictionIcon from "@/public/assets/images/svg-Images/novo-certification-icon";
import EducationInstituteNameField from "./common-fields/education-institute-name.field";
import EducationDegreeNameField from "./common-fields/education-degree-name.field";
import EducationStartDateField from "./common-fields/education-startdate.field";
import EducationEndDateField from "./common-fields/education-enddate.field";
import NovoEducationIcon from "@/public/assets/images/svg-Images/novo-education-icon";
import NovoAwardsIcon from "@/public/assets/images/svg-Images/novo-awards-icon";
import AwardNameField from "./common-fields/awards-name.field";
import AwardInstituteNameField from "./common-fields/awards-organization-name.field";
import AwardJobEndDate from "./common-fields/awards-endDate";
import NovoLanguagesIcon from "@/public/assets/images/svg-Images/novo-languages-icon";
import CoursesNameField from "./common-fields/courses-name.field copy";
import CoursesEndDateField from "./common-fields/courses-enddate.field";
import CoursesInstituteNameField from "./common-fields/courses-institute-name.field copy";
import CustomDescField from "./common-fields/custom-desc.field";
import CustomTitleField from "./common-fields/custom-title.field";
import SocialLinkName from "./common-fields/social-link-name";
import NovoLinkdinIcon from "@/public/assets/images/svg-Images/novo-linkdin-icon";
import { handleImageChange } from "@/utils/profileImage";
import ProfileImage from "./common-fields/profile-image";
import { HeaderBg } from "@/public/assets/images/svg-Images/bg-nova";
export default function NoveHorizon() {
  const dispatch = useAppDispatch();
  const resumeDetails = useAppSelector((state) => state.resume);
  const updateData = useAppSelector((state) => state.templateTheme);

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

  const handleAwardOrderChange = (e: any) => {
    dispatch(
      updateOrder({
        path: "awards",
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

  const handleAddAwards = (e: any) => {
    dispatch(
      addField({
        path: `awards`,
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

  const handleRemoveAwards = (e: any) => {
    dispatch(
      removeField({
        path: `awards.${e}`,
      })
    );
  };

  const skillsData = resumeDetails.resumeData?.skills || [];
  const languagesData = resumeDetails.resumeData?.languages || [];

  const FONTFAMILY = updateData.themeConfiguration?.fontFamily;
  const MAINHEADING = updateData.themeConfiguration?.fontSize?.mainHeading;
  const SUBHEADING = updateData.themeConfiguration?.fontSize?.subHeading;
  const TITLEHEADING = updateData.themeConfiguration?.fontSize?.titleHeading;
  const BODYTEXT = updateData.themeConfiguration?.fontSize?.bodyText;
  const PRIMARYCOLOR =
    updateData.themeConfiguration?.themeColor?.primaryColor || "#000";
  const SECONDARYCOLOR =
    updateData.themeConfiguration?.themeColor?.secondaryColor || "#479099";
  const SECTIONSPACING = updateData.themeConfiguration?.sectionSpacing;
  const PAGEMARGIN = updateData.themeConfiguration?.pageMargin;

  const imageData =
    resumeDetails.resumeData?.profileImage ||
    "/assets/images/templates/cvprofile.png";
  console.log(SECONDARYCOLOR);
  return (
    <div className="p-[7px] bg-white" style={{ fontFamily: FONTFAMILY }}>
      <div className="relative z-[1]">
        <HeaderBg color={SECONDARYCOLOR} />
      </div>
      <div
        className="novo-header  "
        style={{
          padding: `0px ${PAGEMARGIN}px`,
          position: "absolute",
          top: "40px",
          width: "100%",
        }}
      >
        <div className="flex justify-between gap-3">
          <div>
            <NameField
              resumeDetails={resumeDetails}
              className="text-[20px] font-[500]"
              style={{
                fontSize: MAINHEADING,
                color: PRIMARYCOLOR,
                fontWeight: updateData?.themeConfiguration?.fontWeight?.heading,
                resize: "none",
              }}
            />

            <JobTitleField
              style={{
                fontSize: SUBHEADING,
                color: PRIMARYCOLOR,
                paddingLeft: "0",
                fontWeight: updateData?.themeConfiguration?.fontWeight?.heading,
              }}
              className="w-[100%]  text-[18px]"
            />
            <div className="mt-[10px]">
              <SummaryField
                style={{
                  fontSize: BODYTEXT,
                  resize: "none",
                  width: "100%",
                }}
              />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center gap-3">
              <EmailField
                className="underline text-end text-[12px] w-[100%]"
                style={{
                  fontSize: updateData?.themeConfiguration?.fontSize?.bodyText,
                }}
                maxlength={35}
              />
              <span>
                <EssentialEmailIcon
                  primary={
                    updateData?.themeConfiguration?.themeColor?.primaryColor
                  }
                />
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="my-[8px]">
                <AddressField
                  className="underline text-end text-[12px] w-[17vw]"
                  style={{
                    fontSize:
                      updateData?.themeConfiguration?.fontSize?.bodyText,
                  }}
                  maxlength={45}
                />
              </div>
              <span>
                <EssentialAddressIcon
                  primary={
                    updateData?.themeConfiguration?.themeColor?.primaryColor
                  }
                />
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <PhoneNumberField
                  className="underline text-end text-[12px] w-[17vw]"
                  style={{
                    fontSize:
                      updateData?.themeConfiguration?.fontSize?.bodyText,
                  }}
                  maxlength={15}
                />
              </div>
              <span>
                <EssentialPhoneIcon
                  primary={
                    updateData?.themeConfiguration?.themeColor?.primaryColor
                  }
                />
              </span>
            </div>
            <div className="flex gap-3 mt-1">
              <div>
                <SocialLinkName
                  className="underline text-end text-[12px] w-[17vw]"
                  style={{
                    fontSize:
                      updateData?.themeConfiguration?.fontSize?.bodyText,
                  }}
                  maxlength={50}
                />
              </div>
              <span>
                <NovoLinkdinIcon color={PRIMARYCOLOR} />
              </span>
            </div>
          </div>
        </div>
        <div className="text-center relative mt-8 z-50  ml-8">
          <ProfileImage
            height={100}
            width={100}
            src={imageData}
            alt="profile"
            radius="100"
            classname="border-[5px] border-white"
            onChange={(e) => handleImageChange(e, dispatch)}
          />
        </div>
      </div>

      <div
        className="px-6 flex gap-[30px]"
        style={{
          padding: `17px ${PAGEMARGIN}px`,
          marginTop: SECTIONSPACING + 29,
        }}
      >
        <div className="w-[45%]">
          <div>
            <h2
              className="flex gap-2 items-center"
              style={{
                fontSize: SUBHEADING,
                color: SECONDARYCOLOR,
                fontWeight: updateData?.themeConfiguration?.fontWeight?.heading,
              }}
            >
              <span>
                <NovoExperienceIcon color={SECONDARYCOLOR} />
              </span>
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
                          className="placeholder:text-black text-[14px]  text-black w-[17vw]"
                          style={{
                            fontWeight:
                              updateData?.themeConfiguration?.fontWeight
                                ?.heading,
                            fontSize: TITLEHEADING,
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
                          type="MM/YYYY"
                          maxlength={7}
                          placeholder="03/2016"
                        />
                        <span>-</span>
                        <ExperienceJobEndDate
                          className="text-center"
                          index={index}
                          value={item.endDate}
                          style={{
                            fontSize: BODYTEXT,
                          }}
                          placeholder="Present"
                          type="text"
                          maxlength={9}
                        />
                      </div>
                      <div>
                        <ul
                          className={`mt-[2px] list-disc marker:text-["${PRIMARYCOLOR}"] ml-4 tracking-wider`}
                        >
                          <li
                            style={{
                              listStyleType: "disc",
                              color: PRIMARYCOLOR,
                            }}
                          >
                            <ExperienceJobDescription
                              value={item.desc}
                              index={index}
                              className="w-[100%]"
                              style={{
                                fontSize: BODYTEXT,
                              }}
                              placeholder="Manage the full cycle of recruitment for open positions by using a variety of recruiting tools to hire highly qualified candidates"
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
          {/*  */}
          {updateData.themeConfiguration.visibleSections.courses && (
            <div
              style={{
                marginTop: SECTIONSPACING + 10,
              }}
            >
              <h2
                className="flex items-center gap-2"
                style={{
                  fontSize: SUBHEADING,
                  color: SECONDARYCOLOR,
                  fontWeight:
                    updateData?.themeConfiguration?.fontWeight?.heading,
                }}
              >
                <span>
                  <NovoCertifictionIcon color={SECONDARYCOLOR} />
                </span>
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
                      <div>
                        <div className="flex">
                          <CoursesNameField
                            value={item.name}
                            indexOfEdu={indexOfEdu}
                            className="w-[100%]"
                            style={{
                              fontSize: TITLEHEADING,
                            }}
                          />
                          (
                          <CoursesEndDateField
                            className="text-center"
                            indexOfEdu={indexOfEdu}
                            value={item.endDate}
                            style={{
                              fontSize: BODYTEXT,
                            }}
                            type="text"
                            maxlength={8}
                          />
                          )
                        </div>
                        <div className="w-[100%]">
                          <CoursesInstituteNameField
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
                          width: "100%",
                        }}
                      />
                    </div>
                  </div>
                )}
              />
            </div>
          )}
        </div>
        <div
          className="w-[54%]"
          style={{
            padding: `0px 0px 0px  ${PAGEMARGIN}px`,
          }}
        >
          {/* Skills */}
          <div>
            <h2
              className="flex gap-2 items-center"
              style={{
                fontSize: SUBHEADING,
                color: SECONDARYCOLOR,
                fontWeight: updateData?.themeConfiguration?.fontWeight?.heading,
              }}
            >
              <span>
                <NovoSkillsIcon color={SECONDARYCOLOR} />
              </span>{" "}
              Skills
            </h2>
            <div>
              <div className="w-[90%] mt-2">
                <Lists
                  data={skillsData}
                  path={"skills"}
                  classname="w-[100%] text-[12px] "
                  layout={"flex flex-row gap-y-2 gap-x-2 flex-wrap"}
                  listBoxStyling={{
                    backgroundColor: SECONDARYCOLOR,
                    fontSize: BODYTEXT,
                    padding: "5px 3px 5px 20px",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: 2,
                  }}
                  customWidth={true}
                  placeholder="Coding"
                />
              </div>
            </div>
          </div>
          {/* Certification */}
          {updateData.themeConfiguration.visibleSections.certifications && (
            <div
              style={{
                marginTop: SECTIONSPACING + 10,
              }}
            >
              <h2
                className="flex items-center gap-2"
                style={{
                  fontSize: SUBHEADING,
                  color: SECONDARYCOLOR,
                  fontWeight:
                    updateData?.themeConfiguration?.fontWeight?.heading,
                }}
              >
                <span>
                  <NovoCertifictionIcon color={SECONDARYCOLOR} />
                </span>
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
                        <div className="flex">
                          <CertificateNameField
                            value={item.name}
                            indexOfEdu={indexOfEdu}
                            className="w-[100%]"
                            style={{
                              fontSize: TITLEHEADING,
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
                            // type="YYYY"
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
                              color: "#D8A65D",
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
          {/* Education */}
          <div
            style={{
              marginTop: SECTIONSPACING,
            }}
          >
            <h2
              className="mt-2 flex items-center gap-2"
              style={{
                fontSize: SUBHEADING,
                color: SECONDARYCOLOR,
                fontWeight: updateData?.themeConfiguration?.fontWeight?.heading,
              }}
            >
              <span>
                <NovoEducationIcon color={SECONDARYCOLOR} />
              </span>
              Education
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
                        <div className="-mt-1">
                          <EducationDegreeNameField
                            value={item.degree}
                            indexOfEdu={indexofEdu}
                            className="placeholder:text-black text-[14px] text-black w-[18vw]"
                            style={{
                              fontSize: TITLEHEADING,
                              fontWeight:
                                updateData?.themeConfiguration?.fontWeight
                                  ?.heading,
                            }}
                          />
                        </div>
                        <EducationInstituteNameField
                          value={item.school}
                          indexOfEdu={indexofEdu}
                          className=" w-[18vw]"
                          style={{
                            fontSize: BODYTEXT,
                          }}
                        />
                      </div>
                      <div className="flex items-start gap-[4px]" >
                        <EducationStartDateField
                          className="text-start"
                          indexOfEdu={indexofEdu}
                          value={item.startDate}
                          style={{
                            fontSize: BODYTEXT,
                          }}
                          placeholder="2008"
                          // type="YYYY"
                          maxlength={4}
                        />
                        <span>-</span>
                        <EducationEndDateField
                          className="text-center"
                          indexOfEdu={indexofEdu}
                          value={item.endDate}
                          style={{
                            fontSize: BODYTEXT,
                          }}
                          placeholder="2010"
                          // type="YYYY"
                          maxlength={4}
                        />
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
          {/* Awards */}
          <div
            style={{
              marginTop: SECTIONSPACING + 10,
            }}
          >
            <h2
              className="flex items-center gap-2"
              style={{
                fontSize: SUBHEADING,
                color: SECONDARYCOLOR,
                fontWeight: updateData?.themeConfiguration?.fontWeight?.heading,
              }}
            >
              <span>
                <NovoAwardsIcon color={SECONDARYCOLOR} />
              </span>
              Awards
            </h2>
            <div>
              <Dnd
                data={resumeDetails.resumeData?.awards}
                direction={"horizontal"}
                reorder={handleAwardOrderChange}
                additem={(e) => handleAddAwards(e)}
                removeitem={(e) => handleRemoveAwards(e)}
                renderItem={(item, indexOfEdu) => (
                  <div className="text-[12px] flex">
                    <div>
                      <div className="flex">
                        <AwardNameField
                          value={item.name}
                          indexOfEdu={indexOfEdu}
                          className="w-[100%]"
                          style={{
                            fontSize: TITLEHEADING,
                          }}
                          placeholder="Employee of the Month"
                        />
                        (
                        <AwardJobEndDate
                          className="text-center"
                          index={indexOfEdu}
                          value={item.endDate}
                          style={{
                            fontSize: BODYTEXT,
                          }}
                          placeholder="2022"
                          // type="text"
                          maxlength={9}
                        />
                        )
                      </div>
                      <div className="w-[100%]">
                        <AwardInstituteNameField
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
          {/* languages */}
          {updateData?.themeConfiguration?.visibleSections?.languages && (
            <div
              style={{
                marginTop: SECTIONSPACING + 10,
              }}
            >
              <h3
                className="flex items-center gap-2"
                style={{
                  fontSize: SUBHEADING,
                  color: SECONDARYCOLOR,
                  fontWeight:
                    updateData?.themeConfiguration?.fontWeight?.heading,
                }}
              >
                <span>
                  <NovoLanguagesIcon color={SECONDARYCOLOR} />
                </span>
                Languages
              </h3>

              <div className=" text-[12px]  mt-2 ">
                <div style={{ display: "flex" }}>
                  <div>
                    <Lists
                      style={{
                        fontSize: BODYTEXT,
                        textAlign: "start",
                      }}
                      data={languagesData}
                      path={"languages"}
                      classname="text-start"
                      layout={"flex flex-col gap-y-2"}
                      placeholder="English"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
