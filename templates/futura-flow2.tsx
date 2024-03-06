import React, { useEffect, useRef, useState } from "react";
import NameField from "./common-fields/name.field";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import JobTitleField from "./common-fields/job-title.field";
import Image from "next/image";
import SummaryField from "./common-fields/summary.field";
import EmailField from "./common-fields/email.field";
import PhoneNumberField from "./common-fields/phone-number.field";
import Lists from "@/components/resume-builder/lists";
import Dnd from "@/components/resume-builder/dnd";
import {
  addField,
  removeField,
  updateOrder,
} from "@/redux/slices/resume.slice";
import EducationInstituteNameField from "./common-fields/education-institute-name.field";
import EducationDegreeNameField from "./common-fields/education-degree-name.field";
import EducationStartDateField from "./common-fields/education-startdate.field";
import EducationEndDateField from "./common-fields/education-enddate.field";
import FturaEmailIcon from "@/public/assets/images/svg-Images/ftura-flow-email-icon";
import FturaCallIcon from "@/public/assets/images/svg-Images/ftura-flow-call-icon";
import FturaLocationIcon from "@/public/assets/images/svg-Images/ftura-flow-location-icon";
import ExperienceCompanyName from "./common-fields/experience-company-name.field";
import ExperienceJobStartDate from "./common-fields/experience-job-startdate.field";
import ExperienceJobEndDate from "./common-fields/experience-job-enddate.field";
import ExperienceJobDescription from "./common-fields/experience-job-description.field";
import CertificationEndDateField from "./common-fields/certification-enddate.field";
import CertificateNameField from "./common-fields/certificate-name.field";
import CertificationStartDateField from "./common-fields/certification-startdate.field";
import CertificateInstituteNameField from "./common-fields/certificate-institute-name.field";
import AddressField from "./common-fields/address.field";
import CustomTitleField from "./common-fields/custom-title.field";
import CustomDescField from "./common-fields/custom-desc.field";
import CoursesNameField from "./common-fields/courses-name.field copy";
import CoursesEndDateField from "./common-fields/courses-enddate.field";
import CoursesStartDateField from "./common-fields/courses-startdate.field";
import CoursesInstituteNameField from "./common-fields/courses-institute-name.field copy";
import { handleImageChange } from "@/utils/profileImage";
import ProfileImage from "./common-fields/profile-image";

export default function FuturaFlow2() {
  const dispatch = useAppDispatch();
  const updateData = useAppSelector((state) => state.templateTheme);
  const resumeDetails = useAppSelector((state) => state.resume);
  const skillsData = resumeDetails.resumeData?.skills || [];
  const languagesData = resumeDetails.resumeData?.languages || [];
  const imageData =
    resumeDetails.resumeData?.profileImage ||
    "/assets/images/templates/cvprofile.png";

  const handleEducationOrderChange = (e: any) => {
    dispatch(
      updateOrder({
        path: "education",
        updatedData: e,
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

  const handleRemoveEducation = (e: any) => {
    dispatch(
      removeField({
        path: `education.${e}`,
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

  const [headerHeight, setHeaderHeight] = useState();
  const HeaderRef: any = useRef(null);
  useEffect(() => {
    setHeaderHeight(HeaderRef?.current?.clientHeight);
  }, [resumeDetails.resumeData.name, resumeDetails.resumeData.jobTitle]);

  return (
    <div
      className="bg-white "
      style={{
        minHeight: 1123,
      }}
    >
      <div className="flex w-[100%] h-[100%]">
        <div className="w-[2%] h-[100%]">
          <div
            style={{
              backgroundColor:
                updateData?.themeConfiguration?.themeColor?.primaryColor,
              height: headerHeight,
            }}
          ></div>
          <div className="h-[80%]"></div>
        </div>
        <div
          className="p-5 w-[33%] text-center "
          style={{
            backgroundColor:
              updateData.themeConfiguration.themeColor.secondaryColor,
            minHeight: 1123,
          }}
        >
          <div>
            <ProfileImage
              height={171}
              width={171}
              src={imageData}
              alt="profile"
              onChange={(e) => handleImageChange(e, dispatch)}
              classname="border-[8px] border-white"
              radius="100"
            />
            <div>
              <h1
                style={{
                  fontSize: 16,
                  paddingLeft: "0",
                  fontWeight:
                    updateData?.themeConfiguration?.fontWeight?.heading,
                  color: "black",
                  textAlign: "start",
                  marginTop: 20,
                  marginBottom: 10,
                  fontFamily: updateData?.themeConfiguration?.fontFamily,
                }}
              >
                ABOUT ME
              </h1>
            </div>
            <div>
              <SummaryField
                className="resize-none text-black -ml-4 w-[100%]"
                style={{
                  fontSize: updateData?.themeConfiguration?.fontSize?.bodyText,
                }}
              />
            </div>
            <div
              style={{
                marginTop: updateData?.themeConfiguration?.sectionSpacing,
              }}
            >
              <h3
                style={{
                  fontSize: 16,
                  paddingLeft: "0",
                  fontWeight:
                    updateData?.themeConfiguration?.fontWeight?.heading,
                  fontFamily: updateData?.themeConfiguration?.fontFamily,
                  color: "black",
                  textAlign: "start",
                }}
                className="mt-2"
              >
                CONTACT
              </h3>
              <div>
                <div className="mt-5">
                  <div className="flex item-center gap-3">
                    <span className="-mt-[7px]">
                      <FturaEmailIcon
                        primarycolor={
                          updateData.themeConfiguration?.themeColor
                            ?.primaryColor
                        }
                      />
                    </span>
                    <EmailField
                      className="underline text-[12px] font-semibold -ml-4 w-[17vw]"
                      maxlength={35}
                    />
                  </div>
                  <div className="my-2 flex items-center gap-3">
                    <span className="-mt-[2px]">
                      <FturaCallIcon
                        primarycolor={
                          updateData.themeConfiguration?.themeColor
                            ?.primaryColor
                        }
                      />
                    </span>
                    <div className="flex underline items-baseline">
                      <span className="text-[12px] font-[500] ">+</span>
                      <PhoneNumberField
                        className=" text-[12px]  font-semibold -ml-4 "
                        maxlength={15}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>
                      <FturaLocationIcon
                        primarycolor={
                          updateData.themeConfiguration?.themeColor
                            ?.primaryColor
                        }
                      />
                    </span>
                    <AddressField
                      className="underline text-[12px] font-semibold -ml-4 w-[17vw]"
                      maxlength={45}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div
              style={{
                marginTop: updateData?.themeConfiguration?.sectionSpacing,
                width: "100%",
              }}
            >
              <h2
                className="text-black  text-start placeholder:text-black mt-2"
                style={{
                  fontSize: 16,
                  fontWeight:
                    updateData?.themeConfiguration?.fontWeight?.heading,
                  fontFamily: updateData?.themeConfiguration?.fontFamily,
                }}
              >
                EDUCATION
              </h2>
              <div className="w-[100%]">
                <Dnd
                  data={resumeDetails.resumeData?.education}
                  direction={"horizontal"}
                  reorder={handleEducationOrderChange}
                  additem={(e) => handleAddEducation(e)}
                  removeitem={(e) => handleRemoveEducation(e)}
                  renderItem={(item, indexofEdu) => (
                    <div className="text-[12px] flex w-[100%]">
                      <div className="">
                        <div className="w-[100%]">
                          <EducationInstituteNameField
                            value={item.school}
                            indexOfEdu={indexofEdu}
                            className="text-[14px] -ml-5 text-black w-[100%]"
                            style={{
                              fontSize:
                                updateData?.themeConfiguration?.fontSize
                                  ?.bodyText,
                              fontWeight:
                                updateData?.themeConfiguration?.fontWeight
                                  ?.heading,
                            }}
                            bullet={true}
                          />
                        </div>

                        <ul
                          className={`ml-1 list-none tracking-wider w-[100%]`}
                        >
                          <li>
                            <EducationDegreeNameField
                              value={item.degree}
                              indexOfEdu={indexofEdu}
                              className="w-[100%]"
                              style={{
                                fontSize: 10,
                                fontWeight: 700,
                                color: "black",
                              }}
                            />
                          </li>
                        </ul>

                        <div className="ml-1 flex Items-center gap-[4px]">
                          <EducationStartDateField
                            indexOfEdu={indexofEdu}
                            value={item.startDate}
                            className="text-start text-[10px] font-semibold"
                            maxlength={4}
                            type="YYYY"
                          />
                          <span>-</span>
                          <EducationEndDateField
                            indexOfEdu={indexofEdu}
                            value={item.endDate}
                            className="text-center text-[10px] font-semibold"
                            maxlength={4}
                            type="YYYY"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[65%] ">
          <div
            ref={HeaderRef}
            className="!pt-20 !pb-8 px-10"
            style={{
              padding: `0px ${updateData?.themeConfiguration?.pageMargin}px`,
              backgroundColor:
                updateData?.themeConfiguration?.themeColor?.primaryColor,
            }}
          >
            <div className="h-[100%] flex flex-col justify-end items-start">
              <NameField
                resumeDetails={resumeDetails}
                maxLength={40}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  color: "white",
                  width: "100%",
                  fontSize:
                    updateData?.themeConfiguration?.fontSize?.mainHeading,
                  fontFamily: updateData?.themeConfiguration?.fontFamily,
                  fontWeight:
                    updateData?.themeConfiguration?.fontWeight?.heading,
                  textAlign: "start",
                }}
              />

              <JobTitleField
                maxLength={45}
                style={{
                  fontSize:
                    updateData?.themeConfiguration?.fontSize?.subHeading,
                  fontWeight:
                    updateData?.themeConfiguration?.fontWeight?.heading,
                  fontFamily: updateData?.themeConfiguration?.fontFamily,
                }}
                className="text-white font-semibold text-[18px] w-[100%]"
              />
            </div>
          </div>
          <div className="h-[80%]">
            <div>
              <div
                className="flex flex-col justify-start items-start mt-[28px] w-[100%]"
                style={{
                  padding: `0 ${updateData?.themeConfiguration?.pageMargin}px`,
                }}
              >
                <h1
                  className="text-black  placeholder:text-black"
                  style={{
                    fontSize: updateData.themeConfiguration.fontSize.subHeading,
                    fontWeight:
                      updateData?.themeConfiguration?.fontWeight?.heading,
                    fontFamily: updateData?.themeConfiguration?.fontFamily,
                  }}
                >
                  WORK EXPERIENCE
                </h1>
                <div className=" w-[85%]">
                  <Dnd
                    data={resumeDetails.resumeData?.experience}
                    direction={"horizontal"}
                    reorder={handleExperienceOrderChange}
                    additem={(e) => handleAddExperience(e)}
                    removeitem={(e) => handleRemoveExperience(e)}
                    renderItem={(item, index) => (
                      <div className="flex">
                        <div>
                          <div className="w-[100%]">
                            <ExperienceCompanyName
                              value={item.company}
                              index={index}
                              className="text-black  text-[14px] w-[20vw]"
                              style={{
                                fontSize:
                                  updateData.themeConfiguration.fontSize
                                    .titleHeading,
                                fontWeight:
                                  updateData?.themeConfiguration?.fontWeight
                                    ?.heading,
                                fontFamily:
                                  updateData?.themeConfiguration?.fontFamily,
                              }}
                            />
                          </div>
                          <div className="flex items-start gap-[4px]">
                            <ExperienceJobStartDate
                              className="text-start"
                              index={index}
                              value={item.startDate}
                              maxlength={4}
                              style={{
                                fontSize:
                                  updateData.themeConfiguration.fontSize
                                    .bodyText,
                              }}
                              type="YYYY"
                            />
                            <span style={{ marginTop: -3 }}>-</span>
                            <ExperienceJobEndDate
                              className="text-center"
                              index={index}
                              value={item.endDate}
                              maxlength={7}
                              style={{
                                fontSize:
                                  updateData.themeConfiguration.fontSize
                                    .bodyText,
                              }}
                              type="text"
                            />
                          </div>
                          <ul className="list-none tracking-wider">
                            <li>
                              <ExperienceJobDescription
                                value={item.title}
                                index={index}
                                className="w-[100%] ml-[10px]"
                                bullet={true}
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
                    )}
                  />
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
                      className="text-black placeholder:text-black"
                      style={{
                        fontSize:
                          updateData.themeConfiguration.fontSize.subHeading,
                        fontWeight:
                          updateData?.themeConfiguration?.fontWeight?.heading,
                        fontFamily: updateData?.themeConfiguration?.fontFamily,
                      }}
                    >
                      Certifications
                    </h1>
                    <div className="w-[85%]">
                      <Dnd
                        data={resumeDetails.resumeData?.certifications}
                        direction={"horizontal"}
                        reorder={handleCertificationOrderChange}
                        additem={(e) => handleAddCertification(e)}
                        removeitem={(e) => handleRemoveCertification(e)}
                        renderItem={(item, indexOfEdu) => (
                          <div className="text-[12px] flex">
                            <div>
                              <div className="w-[100%]">
                                <CertificateInstituteNameField
                                  value={item.organization}
                                  indexOfEdu={indexOfEdu}
                                  className="text-black  text-[14px] w-[20vw]"
                                  style={{
                                    fontSize:
                                      updateData.themeConfiguration.fontSize
                                        .titleHeading,
                                    fontWeight:
                                      updateData?.themeConfiguration?.fontWeight
                                        ?.heading,
                                    fontFamily:
                                      updateData?.themeConfiguration
                                        ?.fontFamily,
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
                              <ul className="list-none tracking-wider">
                                <li>
                                  <CertificateNameField
                                    value={item.name}
                                    indexOfEdu={indexOfEdu}
                                    className="w-[100%] ml-[10px]"
                                    bullet={true}
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
                      className="text-black  placeholder:text-black"
                      style={{
                        fontSize:
                          updateData.themeConfiguration.fontSize.subHeading,
                        fontWeight:
                          updateData?.themeConfiguration?.fontWeight?.heading,
                        fontFamily: updateData?.themeConfiguration?.fontFamily,
                      }}
                    >
                      Courses
                    </h1>
                    <div className="w-[85%]">
                      <Dnd
                        data={resumeDetails.resumeData?.courses}
                        direction={"horizontal"}
                        reorder={handleCoursesOrderChange}
                        additem={(e) => handleAddCourses(e)}
                        removeitem={(e) => handleRemoveCourses(e)}
                        renderItem={(item, indexOfEdu) => (
                          <div className="text-[12px] flex">
                            <div>
                              <div className="w-[100%]">
                                <CoursesInstituteNameField
                                  value={item.organization}
                                  indexOfEdu={indexOfEdu}
                                  className="text-black text-[14px]   w-[20vw]"
                                  style={{
                                    fontSize:
                                      updateData.themeConfiguration.fontSize
                                        .titleHeading,
                                    fontWeight:
                                      updateData?.themeConfiguration?.fontWeight
                                        ?.heading,
                                    fontFamily:
                                      updateData?.themeConfiguration
                                        ?.fontFamily,
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
                                  placeholder="10/2208"
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
                                  placeholder="10/2208"
                                />
                              </div>
                              <ul className="list-none tracking-wider">
                                <li>
                                  <CoursesNameField
                                    value={item.name}
                                    indexOfEdu={indexOfEdu}
                                    className="w-[100%] ml-[10px] "
                                    bullet={true}
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
                                updateData.themeConfiguration.fontSize
                                  .subHeading,
                              color: "black",
                              paddingLeft: "0",
                              fontWeight:
                                updateData?.themeConfiguration?.fontWeight
                                  ?.heading,
                              fontFamily:
                                updateData?.themeConfiguration?.fontFamily,
                              width: "100%",
                            }}
                            className="text-black-500 font-semibold  text-[18px] pl-0"
                          />

                          <div style={{ fontSize: "12px" }}>
                            <CustomDescField
                              indexOfCus={indexOfCus}
                              value={item.description}
                              style={{
                                fontSize:
                                  updateData.themeConfiguration.fontSize
                                    .bodyText,
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

                <div
                  style={{
                    marginTop: updateData?.themeConfiguration?.sectionSpacing,
                    marginBottom: "20px",
                  }}
                >
                  <h3
                    className=" text-black"
                    style={{
                      fontSize:
                        updateData?.themeConfiguration?.fontSize?.subHeading,
                      fontWeight:
                        updateData?.themeConfiguration?.fontWeight?.heading,
                      fontFamily: updateData?.themeConfiguration?.fontFamily,
                    }}
                  >
                    SKILLS
                  </h3>

                  <div
                    className="text-[12px]"
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    <div style={{ display: "flex", marginLeft: -30 }}>
                      <div className="mt-[14px]">
                        <Lists
                          style={{
                            fontSize:
                              updateData?.themeConfiguration?.fontSize
                                ?.bodyText,
                            textAlign: "start",
                          }}
                          layout={"list-disc ml-12"}
                          data={skillsData}
                          path={"skills"}
                          classname="text-start text-black  w-[50vh]"
                        />
                      </div>
                    </div>
                    <div className="mb-8">
                      {updateData?.themeConfiguration?.visibleSections
                        ?.languages && (
                        <div
                          style={{
                            marginTop:
                              updateData.themeConfiguration.sectionSpacing,
                          }}
                        >
                          <h1
                            className="text-black placeholder:text-black"
                            style={{
                              fontSize:
                                updateData.themeConfiguration.fontSize
                                  .subHeading,
                              fontWeight:
                                updateData?.themeConfiguration?.fontWeight
                                  ?.heading,
                              fontFamily:
                                updateData?.themeConfiguration?.fontFamily,
                            }}
                          >
                            Languages
                          </h1>

                          <div
                            className="text-[12px]"
                            style={{
                              marginTop: "-3px",
                              fontSize: "12px",
                            }}
                          >
                            <div style={{ display: "flex" }}>
                              <div className="mt-6">
                                <Lists
                                  style={{
                                    fontSize:
                                      updateData.themeConfiguration.fontSize
                                        .bodyText,
                                    textAlign: "start",
                                  }}
                                  data={languagesData}
                                  path={"languages"}
                                  classname="text-start"
                                  layout={"list-disc ml-5"}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-purple-500 p-2"
        style={{
          backgroundColor:
            updateData?.themeConfiguration?.themeColor?.primaryColor,
        }}
      ></div>
    </div>
  );
}
