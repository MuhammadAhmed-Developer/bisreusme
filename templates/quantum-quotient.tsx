import React, { useState } from "react";
import NameField from "./common-fields/name.field";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import JobTitleField from "./common-fields/job-title.field";
import EssentialPhoneIcon from "@/public/assets/images/svg-Images/essential-resume-phone-icon";
import PhoneNumberField from "./common-fields/phone-number.field";
import EssentialAddressIcon from "@/public/assets/images/svg-Images/essential-resume-location-icon";
import AddressField from "./common-fields/address.field";
import EssentialEmailIcon from "@/public/assets/images/svg-Images/essential-resume-email-icon";
import EmailField from "./common-fields/email.field";
import WebsiteIcon from "@/public/assets/images/svg-Images/website-icon";
import WebsiteUrl from "./common-fields/website-url.field";
import Image from "next/image";
import SummaryField from "./common-fields/summary.field";
import Lists from "@/components/resume-builder/lists";
import AOSList from "@/components/resume-builder/aos-list";
import VerticalLine from "@/public/assets/images/svg-Images/vertical-line";
import ExperienceJobDescription from "./common-fields/experience-job-description.field";
import ExperienceJobEndDate from "./common-fields/experience-job-enddate.field";
import ExperienceJobStartDate from "./common-fields/experience-job-startdate.field";
import ExperienceCompanyName from "./common-fields/experience-company-name.field";
import Dnd from "@/components/resume-builder/dnd";
import {
  addField,
  removeField,
  updateOrder,
} from "@/redux/slices/resume.slice";
import EducationDegreeNameField from "./common-fields/education-degree-name.field";
import EducationEndDateField from "./common-fields/education-enddate.field";
import EducationStartDateField from "./common-fields/education-startdate.field";
import EducationInstituteNameField from "./common-fields/education-institute-name.field";
import CertificateNameField from "./common-fields/certificate-name.field";
import CertificationEndDateField from "./common-fields/certification-enddate.field";
import CertificationStartDateField from "./common-fields/certification-startdate.field";
import CertificateInstituteNameField from "./common-fields/certificate-institute-name.field";
import CoursesInstituteNameField from "./common-fields/courses-institute-name.field copy";
import CoursesStartDateField from "./common-fields/courses-startdate.field";
import CoursesEndDateField from "./common-fields/courses-enddate.field";
import CoursesNameField from "./common-fields/courses-name.field copy";
import CustomDescField from "./common-fields/custom-desc.field";
import CustomTitleField from "./common-fields/custom-title.field";
import ArrowLeft from "@/public/assets/images/svg-Images/arrow-left";
import { handleImageChange } from "@/utils/profileImage";
import ProfileImage from "./common-fields/profile-image";
import SkillLists from "@/components/resume-builder/skillLists";

export default function QuantumQuotient() {
  const dispatch = useAppDispatch();
  const resumeDetails = useAppSelector((state) => state.resume);
  const updateData = useAppSelector((state) => state.templateTheme);
  const skillsData = resumeDetails.resumeData?.skills || [];
  const intrestData = resumeDetails.resumeData?.interests || [];
  const languagesData = resumeDetails.resumeData?.languages || [];
  const PAGEMARGIN = updateData.themeConfiguration?.pageMargin;
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
    <div className="bg-white  pb-16">
      <div
        style={{
          fontFamily: updateData?.themeConfiguration?.fontFamily,
        }}
      >
        <div
          className=" bg-[#C6D9DF]"
          style={{
            padding: `17px ${PAGEMARGIN}px`,
            backgroundColor:
              updateData?.themeConfiguration?.themeColor.secondaryColor,
            height: "auto",
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <div>
                <NameField
                  resumeDetails={resumeDetails}
                  className="text-[22px] font-[700] placeholder:text-black mb-[2px]"
                  style={{
                    fontSize: 30,
                    fontFamily: updateData?.themeConfiguration?.fontFamily,
                    fontWeight: 700,
                    color:
                      updateData?.themeConfiguration?.themeColor.primaryColor,
                  }}
                />
                <JobTitleField
                  className="font?xt-[#0E6CC2]"
                  style={{
                    fontSize: 14,
                    color:
                      updateData?.themeConfiguration?.themeColor.primaryColor,
                    fontWeight: 500,
                    width: "200px",
                  }}
                />
              </div>

              <div className="flex gap-[25px] mt-[30px]">
                <div>
                  <div className="flex items-start gap-3 mb-[15px]">
                    <span>
                      <EssentialPhoneIcon
                        primary={
                          updateData?.themeConfiguration?.themeColor
                            ?.primaryColor
                        }
                      />
                    </span>
                    <div className="flex  items-baseline">
                      <span
                        className=" text-[12px] "
                        style={{
                          fontSize:
                            updateData?.themeConfiguration?.fontSize?.bodyText,
                          color:
                            updateData?.themeConfiguration?.themeColor
                              .primaryColor,
                        }}
                      >
                        +
                      </span>
                      <PhoneNumberField
                        className=" text-[12px] "
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
                  <div className=" flex items-start gap-3">
                    <span>
                      <EssentialAddressIcon
                        primary={
                          updateData?.themeConfiguration?.themeColor
                            ?.primaryColor
                        }
                      />
                    </span>
                    <AddressField
                      className=" text-[12px]"
                      style={{
                        fontSize:
                          updateData?.themeConfiguration?.fontSize?.bodyText,
                        color:
                          updateData?.themeConfiguration?.themeColor
                            .primaryColor,
                        width: "200px",
                      }}
                      maxlength={45}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-3  mb-[15px]">
                    <span>
                      <WebsiteIcon
                        primary={
                          updateData?.themeConfiguration?.themeColor
                            ?.primaryColor
                        }
                      />
                    </span>
                    <WebsiteUrl
                      className=" text-[12px] -ml-4"
                      style={{
                        fontSize:
                          updateData?.themeConfiguration?.fontSize?.bodyText,
                        color:
                          updateData?.themeConfiguration?.themeColor
                            .primaryColor,
                      }}
                      maxlength={35}
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <span>
                      <EssentialEmailIcon
                        primary={
                          updateData?.themeConfiguration?.themeColor
                            ?.primaryColor
                        }
                      />
                    </span>
                    <EmailField
                      className=" text-[12px] -ml-4 "
                      style={{
                        fontSize:
                          updateData?.themeConfiguration?.fontSize?.bodyText,
                        color:
                          updateData?.themeConfiguration?.themeColor
                            .primaryColor,
                        width: 150,
                      }}
                      maxlength={35}
                    />
                  </div>
                </div>
              </div>
            </div>
            <ProfileImage
              height={150}
              width={150}
              src={imageData}
              alt="profile"
              radius="100"
              onChange={(e) => handleImageChange(e, dispatch)}
            />
          </div>
        </div>

        {/* info ===== */}
        <div
          className="flex justify-between"
          style={{
            padding: `0 ${updateData?.themeConfiguration?.pageMargin}px`,
            marginTop: updateData?.themeConfiguration?.sectionSpacing,
          }}
        >
          <div className="w-[30%]">
            <div>
              <div>
                <h1
                  style={{
                    fontSize:
                      updateData?.themeConfiguration?.fontSize?.subHeading,
                    color:
                      updateData.themeConfiguration.themeColor.primaryColor,
                    paddingLeft: "0",
                    fontWeight: 700,
                    textAlign: "start",
                    marginTop: 50,
                  }}
                >
                  <span
                    className="py-2 pl-2"
                    style={{
                      backgroundColor:
                        updateData.themeConfiguration.themeColor.secondaryColor,
                    }}
                  >
                    Perso
                  </span>
                  nal Info
                </h1>
                <div
                  style={{
                    marginTop: updateData?.themeConfiguration?.sectionSpacing,
                  }}
                >
                  <div
                    style={{
                      marginTop: 12,
                    }}
                  >
                    <SummaryField
                      className="resize-none text-black w-[90%] placeholder:text-[#252932]"
                      style={{
                        fontSize:
                          updateData.themeConfiguration.fontSize.bodyText,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: 29,
              }}
            >
              <h1
                style={{
                  fontSize:
                    updateData?.themeConfiguration?.fontSize?.subHeading,
                  color: updateData.themeConfiguration.themeColor.primaryColor,
                  paddingLeft: "0",
                  fontWeight: 700,
                  textAlign: "start",
                }}
              >
                <span
                  className="py-2 pl-2"
                  style={{
                    backgroundColor:
                      updateData.themeConfiguration.themeColor.secondaryColor,
                  }}
                >
                  Skil
                </span>
                ls
              </h1>

              <div
                style={{
                  marginTop: updateData?.themeConfiguration?.sectionSpacing,
                  fontSize: "12px",
                }}
              >
                <div className="flex" style={{ marginTop: 12 }}>
                  <div className="w-full">
                    <SkillLists
                      style={{
                        fontSize:
                          updateData?.themeConfiguration?.fontSize?.bodyText,
                        textAlign: "start",
                      }}
                      layout={""}
                      data={skillsData}
                      path={"skills"}
                      placeholder="Coding"
                      classname="text-start text-black placeholder:text-black"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: 29,
              }}
            >
              <h1
                style={{
                  fontSize:
                    updateData?.themeConfiguration?.fontSize?.subHeading,
                  color: updateData.themeConfiguration.themeColor.primaryColor,
                  paddingLeft: "0",
                  fontWeight: 700,
                  textAlign: "start",
                }}
              >
                <span
                  className="py-2 pl-2"
                  style={{
                    backgroundColor:
                      updateData.themeConfiguration.themeColor.secondaryColor,
                  }}
                >
                  Hobb
                </span>
                ies
              </h1>
              <div
                style={{
                  fontSize: "12px",
                  marginTop: updateData?.themeConfiguration?.sectionSpacing,
                }}
              >
                <div style={{ display: "flex", marginTop: 12 }}>
                  <div>
                    <AOSList
                      style={{
                        fontSize:
                          updateData?.themeConfiguration?.fontSize?.bodyText,
                        textAlign: "start",
                      }}
                      data={intrestData}
                      path={"interests"}
                      classname="text-start"
                    />
                  </div>
                </div>
              </div>
            </div>
            {updateData?.themeConfiguration?.visibleSections?.languages && (
              <div
                style={{
                  marginTop: 29,
                }}
              >
                <h1
                  style={{
                    fontSize:
                      updateData?.themeConfiguration?.fontSize?.subHeading,
                    color:
                      updateData.themeConfiguration.themeColor.primaryColor,
                    paddingLeft: "0",
                    fontWeight: 700,
                    textAlign: "start",
                  }}
                >
                  <span
                    className="py-2 pl-2"
                    style={{
                      backgroundColor:
                        updateData.themeConfiguration.themeColor.secondaryColor,
                    }}
                  >
                    Langu
                  </span>
                  ages
                </h1>

                <div
                  className=" text-[12px] -ml-7"
                  style={{
                    padding: `0 ${updateData.themeConfiguration.pageMargin}px`,
                    fontSize: "12px",
                    marginTop: updateData?.themeConfiguration?.sectionSpacing,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      marginLeft: "8px",
                      marginTop: 12,
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
                        classname="text-start"
                        layout={"list-disc ml-3"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="w-[5%] mt-[45px]">
            <VerticalLine
              primary={updateData?.themeConfiguration?.themeColor?.primaryColor}
            />
          </div>

          <div className="w-[60%]">
            <div
              style={{
                marginTop: updateData?.themeConfiguration?.sectionSpacing,
              }}
            >
              <h1
                style={{
                  fontSize:
                    updateData?.themeConfiguration?.fontSize?.subHeading,
                  color: updateData.themeConfiguration.themeColor.primaryColor,
                  paddingLeft: "0",
                  fontWeight: 700,
                  textAlign: "start",
                  marginTop: 50,
                }}
              >
                <span
                  className="py-2 pl-2"
                  style={{
                    backgroundColor:
                      updateData.themeConfiguration.themeColor.secondaryColor,
                  }}
                >
                  Exper
                </span>
                ience
              </h1>
              <div
                style={{
                  marginTop: updateData?.themeConfiguration?.sectionSpacing,
                }}
              >
                <Dnd
                  data={resumeDetails.resumeData?.experience}
                  direction={"horizontal"}
                  reorder={handleExperienceOrderChange}
                  additem={(e) => handleAddExperience(e)}
                  removeitem={(e) => handleRemoveExperience(e)}
                  renderItem={(item, index) => (
                    <div
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 6,
                          }}
                        >
                          <span className="mt-[6px]">
                            <ArrowLeft />
                          </span>
                          <div
                            style={{
                              width: "100%",
                            }}
                          >
                            <ExperienceCompanyName
                              value={item.company}
                              index={index}
                              style={{
                                fontSize:
                                  updateData?.themeConfiguration?.fontSize
                                    ?.titleHeading,
                                fontWeight: 700,
                                color: "#000000",
                                width: "100%",
                                marginLeft: "-8px",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "start",
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
                            placeholder="2006-12"
                            maxlength={7}
                            index={index}
                            value={item.startDate}
                            type="YYYY-MM"
                          />
                          <span>-</span>
                          <ExperienceJobEndDate
                            style={{
                              fontSize:
                                updateData?.themeConfiguration?.fontSize
                                  ?.bodyText,
                              textAlign: "center",
                            }}
                            placeholder="2006-12"
                            index={index}
                            value={item.endDate}
                            maxlength={7}
                            type="YYYY-MM"
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <ul
                            style={{
                              letterSpacing: "0.05em",
                              listStyleType: "disc",
                              marginLeft: "14px",
                              marginTop: "5px",
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
                    </div>
                  )}
                />
              </div>
            </div>
            <div
              style={{
                marginTop: updateData?.themeConfiguration?.sectionSpacing,
              }}
            >
              <h1
                style={{
                  fontSize:
                    updateData?.themeConfiguration?.fontSize?.subHeading,
                  color: updateData.themeConfiguration.themeColor.primaryColor,
                  paddingLeft: "0",
                  fontWeight: 700,
                  textAlign: "start",
                  marginTop: 29,
                }}
              >
                <span
                  className="py-2 pl-2"
                  style={{
                    backgroundColor:
                      updateData.themeConfiguration.themeColor.secondaryColor,
                  }}
                >
                  Educa
                </span>
                tion
              </h1>
              <div
                className="ml-2"
                style={{
                  marginTop: updateData?.themeConfiguration?.sectionSpacing,
                }}
              >
                <Dnd
                  data={resumeDetails.resumeData?.education}
                  direction={"horizontal"}
                  reorder={handleEducationOrderChange}
                  additem={(e) => handleAddEducation(e)}
                  removeitem={(e) => handleRemoveEducation(e)}
                  renderItem={(item, indexOfEdu) => (
                    <div
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 6,
                            marginLeft: -10,
                          }}
                        >
                          <span className="mt-[9px]">
                            <ArrowLeft />
                          </span>
                          <EducationInstituteNameField
                            style={{
                              fontSize:
                                updateData?.themeConfiguration?.fontSize
                                  ?.titleHeading,
                              fontWeight: 700,
                              color: ["#000000", "14px"],
                              width: "100%",
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
                            indexOfEdu={indexOfEdu}
                            value={item.startDate}
                            maxlength={7}
                            type="YYYY-MM"
                          />
                          <span>-</span>
                          <EducationEndDateField
                            style={{
                              fontSize:
                                updateData?.themeConfiguration?.fontSize
                                  ?.bodyText,
                              textAlign: "center",
                            }}
                            indexOfEdu={indexOfEdu}
                            value={item.endDate}
                            maxlength={7}
                            type="YYYY-MM"
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <ul
                            style={{
                              letterSpacing: "0.05em",
                              listStyleType: "disc",
                              marginLeft: "14px",
                              marginTop: "5px",
                            }}
                          >
                            <li>
                              <EducationDegreeNameField
                                style={{
                                  fontSize:
                                    updateData?.themeConfiguration?.fontSize
                                      ?.bodyText,
                                  color: ["#000000", "12px"],
                                  width: "100%",
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
            </div>

            {/* Certification section */}
            {updateData?.themeConfiguration?.visibleSections
              ?.certifications && (
              <div
                style={{
                  marginTop: updateData.themeConfiguration.sectionSpacing,
                }}
              >
                <h1
                  style={{
                    fontSize:
                      updateData?.themeConfiguration?.fontSize?.subHeading,
                    color:
                      updateData.themeConfiguration.themeColor.primaryColor,
                    paddingLeft: "0",
                    fontWeight: 700,
                    textAlign: "start",
                    marginTop: 29,
                  }}
                >
                  <span
                    className="py-2 pl-2"
                    style={{
                      backgroundColor:
                        updateData.themeConfiguration.themeColor.secondaryColor,
                    }}
                  >
                    Certif
                  </span>
                  ication
                </h1>
                <div
                  style={{
                    marginTop: updateData?.themeConfiguration?.sectionSpacing,
                  }}
                >
                  <Dnd
                    data={resumeDetails.resumeData?.certifications}
                    direction={"horizontal"}
                    reorder={handleCertificationOrderChange}
                    additem={(e) => handleAddCertification(e)}
                    removeitem={(e) => handleRemoveCertification(e)}
                    renderItem={(item, indexOfEdu) => (
                      <div
                        style={{
                          // padding: `0 ${updateData.themeConfiguration.pageMargin}px`,
                          fontSize: "12px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "5px",
                          }}
                        >
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 6,
                            }}
                          >
                            <span className="mt-[5px]">
                              <ArrowLeft />
                            </span>
                            <CertificateInstituteNameField
                              style={{
                                fontSize:
                                  updateData?.themeConfiguration?.fontSize
                                    ?.titleHeading,
                                fontWeight: 700,
                                color: ["#000000", "14px"],
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
                              gap: 4,
                            }}
                          >
                            <CertificationStartDateField
                              style={{
                                fontSize:
                                  updateData?.themeConfiguration?.fontSize
                                    ?.bodyText,
                                textAlign: "start",
                              }}
                              indexOfEdu={indexOfEdu}
                              value={item.startDate}
                              maxlength={7}
                              type="YYYY-MM"
                            />{" "}
                            <span>-</span>
                            <CertificationEndDateField
                              style={{
                                fontSize:
                                  updateData?.themeConfiguration?.fontSize
                                    ?.bodyText,
                                textAlign: "center",
                              }}
                              indexOfEdu={indexOfEdu}
                              value={item.endDate}
                              maxlength={7}
                              type="YYYY-MM"
                            />
                          </div>
                        </div>
                        <div>
                          <div>
                            <ul
                              style={{
                                letterSpacing: "0.05em",
                                listStyleType: "disc",
                                marginLeft: "14px",
                                marginTop: "5px",
                              }}
                            >
                              <li>
                                <CertificateNameField
                                  style={{
                                    fontSize:
                                      updateData.themeConfiguration.fontSize
                                        .bodyText,
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
              </div>
            )}

            {/* Courses */}
            {updateData?.themeConfiguration?.visibleSections?.courses && (
              <div
                style={{
                  marginTop: updateData.themeConfiguration.sectionSpacing,
                }}
              >
                <h1
                  style={{
                    fontSize:
                      updateData?.themeConfiguration?.fontSize?.subHeading,
                    color:
                      updateData.themeConfiguration.themeColor.primaryColor,
                    paddingLeft: "0",
                    fontWeight: 700,
                    textAlign: "start",
                    marginTop: 29,
                  }}
                >
                  <span
                    className="py-2 pl-2"
                    style={{
                      backgroundColor:
                        updateData.themeConfiguration.themeColor.secondaryColor,
                    }}
                  >
                    Cour
                  </span>
                  ses
                </h1>
                <div
                  style={{
                    marginTop: updateData?.themeConfiguration?.sectionSpacing,
                  }}
                >
                  <Dnd
                    data={resumeDetails.resumeData?.courses}
                    direction={"horizontal"}
                    reorder={handleCoursesOrderChange}
                    additem={(e) => handleAddCourses(e)}
                    removeitem={(e) => handleRemoveCourses(e)}
                    renderItem={(item, indexOfEdu) => (
                      <div
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 6,
                            }}
                          >
                            <span className="mt-[5px]">
                              <ArrowLeft />
                            </span>
                            <CoursesInstituteNameField
                              className="mr-5"
                              style={{
                                fontSize:
                                  updateData.themeConfiguration.fontSize
                                    .titleHeading,
                                fontWeight: 700,
                                color: ["#000000", "14px"],
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
                              gap: 4,
                            }}
                          >
                            <CoursesStartDateField
                              style={{
                                fontSize:
                                  updateData.themeConfiguration.fontSize
                                    .bodyText,
                                textAlign: "start",
                              }}
                              indexOfEdu={indexOfEdu}
                              placeholder="2023"
                              value={item.startDate}
                            />{" "}
                            <span>-</span>
                            <CoursesEndDateField
                              style={{
                                fontSize:
                                  updateData.themeConfiguration.fontSize
                                    .bodyText,
                                textAlign: "center",
                              }}
                              indexOfEdu={indexOfEdu}
                              placeholder="2024"
                              value={item.endDate}
                            />
                          </div>
                        </div>
                        <div>
                          <div>
                            <ul
                              style={{
                                letterSpacing: "0.05em",
                                listStyleType: "disc",
                                marginLeft: "14px",
                                marginTop: "5px",
                              }}
                            >
                              <li>
                                <CoursesNameField
                                  style={{
                                    fontSize:
                                      updateData.themeConfiguration.fontSize
                                        .bodyText,
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
              </div>
            )}

            {/* Custom field */}
            {updateData?.themeConfiguration?.visibleSections?.custom && (
              <div
                // className="-ml-12"
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
                    <div
                    // style={{
                    //   padding: `0 ${updateData.themeConfiguration.pageMargin}px`,
                    // }}
                    >
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
                          fontWeight: 700,
                        }}
                        className=" font-semibold  text-[18px]  pl-0"
                      />

                      <div
                        style={{
                          fontSize: "12px",
                          marginTop:
                            updateData?.themeConfiguration?.sectionSpacing,
                        }}
                      >
                        <CustomDescField
                          indexOfCus={indexOfCus}
                          value={item.description}
                          style={{
                            fontSize:
                              updateData.themeConfiguration.fontSize.bodyText,

                            borderStyle: "none",
                            resize: "none",
                            width: "100%",
                            marginLeft: "18px",
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
