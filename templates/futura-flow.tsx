import React, { useState } from "react";
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

export default function FuturaFlow() {
  const dispatch = useAppDispatch();
  const updateData = useAppSelector((state) => state.templateTheme);
  const resumeDetails = useAppSelector((state) => state.resume);
  const skillsData = resumeDetails.resumeData?.skills || [];
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
  return (
    <div className="bg-white">
      <div>
        <div
          style={{
            padding: `32px ${updateData.themeConfiguration.pageMargin}px`,
            backgroundColor:
              updateData.themeConfiguration.themeColor.primaryColor,
          }}
          className=" absolute w-[100%] flex justify-start items-end flex-col "
        >
          <NameField
             resumeDetails={resumeDetails}
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              color: "white",
              fontSize: updateData?.themeConfiguration?.fontSize?.mainHeading,
              fontWeight: 700,
              textAlign: "start",
              width: "63%",
              // marginTop: 96,
            }}
          />

          <JobTitleField
            style={{
              fontSize: updateData?.themeConfiguration?.fontSize?.subHeading,
              marginLeft: "12px",
              fontWeight: 600,
              width: "63%",
            }}
            className="text-white font-semibold  text-[18px] placeholder:text-white underline"
          />
        </div>
        <div className="flex">
          <div
            style={{
              backgroundColor:
                updateData.themeConfiguration.themeColor.secondaryColor,
            }}
            className="h-[187vh] ml-[25px] relative z-50 w-[248px] px-[33px] py-[21px] bg-[#E6E4E3]"
          >
            <div
              className="cursor-pointer h-[171px]"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              style={{ position: "relative", display: "inline-block" }}
            >
              <Image
                src={imageSrc}
                alt="profile"
                width={171}
                height={171}
                className="block rounded-full border-[5px] border-white overflow-hidden max-w-[171px] h-[171px]"
              />

              {showCameraIcon && (
                <label
                  htmlFor="imageInput"
                  className="absolute top-[50%] left-[50%] cursor-pointer"
                  style={{
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <span
                    role="img"
                    aria-label="camera"
                    style={{ fontSize: "24px" }}
                  >
                    📷
                  </span>
                </label>
              )}

              <input
                type="file"
                id="imageInput"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </div>
            <div
              style={{
                marginTop: updateData?.themeConfiguration?.sectionSpacing,
              }}
            >
              <h1
                style={{
                  fontSize: 14,
                  paddingLeft: "0",
                  fontWeight: 700,
                  textAlign: "start",
                  marginTop: 50,
                }}
              >
                ABOUT ME
              </h1>
            </div>
            <div>
              <SummaryField
                className="resize-none -ml-4 w-[100%] "
                style={{
                  fontSize: 12,
                }}
              />
            </div>
            <div
              style={{
                // padding: `0 ${updateData?.themeConfiguration?.pageMargin}px`,
                marginTop: updateData?.themeConfiguration?.sectionSpacing,
              }}
            >
              <h3
                style={{
                  fontSize: 14,
                  paddingLeft: "0",
                  fontWeight: 700,
                  textAlign: "start",
                }}
              >
                CONTACT
              </h3>
              <div>
                <div className="mt-2">
                  <div className="flex items-center gap-3">
                    <span className="-mt-2">
                      <FturaEmailIcon
                        primarycolor={
                          updateData.themeConfiguration?.themeColor
                            ?.primaryColor
                        }
                      />
                    </span>
                    <EmailField className="underline text-[12px] font-semibold -ml-4 w-[17vw]"  maxlength={35} />
                  </div>
                  <div className="my-2 flex items-center gap-3">
                    <span className="-mt-2">
                      <FturaCallIcon
                        primarycolor={
                          updateData.themeConfiguration?.themeColor
                            ?.primaryColor
                        }
                      />
                    </span>
                    <PhoneNumberField  maxlength={15} className="underline mt-2 text-[12px]  font-semibold -ml-4" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="-mt-3">
                      <FturaLocationIcon
                        primarycolor={
                          updateData.themeConfiguration?.themeColor
                            ?.primaryColor
                        }
                      />
                    </span>
                    <AddressField  maxlength={45} className="underline text-[12px] font-semibold -ml-4 -mt-4 w-[17vw]" />
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
                className="font-[700]"
                style={{
                  fontSize: 14,
                }}
              >
                EDUCATION
              </h2>
              <div className="w-[100%] -mt-3">
                <Dnd
                  data={resumeDetails.resumeData?.education}
                  direction={"horizontal"}
                  reorder={handleEducationOrderChange}
                  additem={(e) => handleAddEducation(e)}
                  removeitem={(e) => handleRemoveEducation(e)}
                  renderItem={(item, indexofEdu) => (
                    <div className="text-[12px] flex w-[100%]">
                      <div className="">
                        <div className="w-[100%] mt-1">
                          <EducationInstituteNameField
                            value={item.school}
                            indexOfEdu={indexofEdu}
                            className="font-semibold text-[14px] -ml-5 w-[100%]"
                            style={{
                              fontSize: 12,
                            }}
                            bullet={true}
                          />
                        </div>

                        <ul className="-mt-3 ml-1 list-none tracking-wider">
                          <li>
                            <EducationDegreeNameField
                              value={item.degree}
                              indexOfEdu={indexofEdu}
                              className="w-[80%] -mt-5"
                              style={{
                                fontSize: 10,
                                fontWeight: 700,
                              }}
                            />
                          </li>
                        </ul>

                        <div className="-mt-3 ml-1 flex gap-2">
                          <EducationStartDateField
                            indexOfEdu={indexofEdu}
                            value={item.startDate}
                            style={{
                              fontSize: 10,
                            }}
                          />
                          <span className="-ml-9">-</span>
                          <EducationEndDateField
                            indexOfEdu={indexofEdu}
                            value={item.endDate}
                            style={{
                              fontSize: 10,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-start mt-[40vh] -ml-3 w-[100%]"
            style={{
              padding: `0 ${updateData?.themeConfiguration?.pageMargin}px`,
            }}
          >
            <h1
              className=" ml-7 font-[700] "
              style={{
                fontSize: updateData.themeConfiguration.fontSize.subHeading,
              }}
            >
              WORK EXPERIENCE
            </h1>
            <div className=" p-5 w-[85%]">
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
                          className="font-semibold text-[14px]   w-[20vw]"
                          style={{
                            fontSize:
                              updateData.themeConfiguration.fontSize
                                .titleHeading,
                          }}
                        />
                      </div>
                      <div className="flex items-start -mt-5">
                        <ExperienceJobStartDate
                          className="text-start w-[8vw]"
                          index={index}
                          value={item.startDate}
                          style={{
                            fontSize:
                              updateData.themeConfiguration.fontSize.bodyText,
                          }}
                        />{" "}
                        <span className="mt-2">-</span>
                        <ExperienceJobEndDate
                          className="w-[10vw]"
                          index={index}
                          value={item.endDate}
                          style={{
                            fontSize:
                              updateData.themeConfiguration.fontSize.bodyText,
                          }}
                        />
                      </div>
                      <div className="">
                        <div>
                          <ul className=" mt-[5px] list-none tracking-wider ml-1 ">
                            <li>
                              <ExperienceJobDescription
                                value={item.title}
                                index={index}
                                className="w-[100%] -mt-6"
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

            {/* Certification section */}
            {updateData?.themeConfiguration?.visibleSections
              ?.certifications && (
              <div
                className=""
                style={{
                  marginTop: updateData.themeConfiguration.sectionSpacing,
                  padding: `0 ${updateData.themeConfiguration.pageMargin}px`,
                }}
              >
                <h2
                  className=" -ml-3 font-[600] "
                  style={{
                    fontSize: updateData.themeConfiguration.fontSize.subHeading,
                  }}
                >
                  Certifications
                </h2>
                <div className="-ml-5">
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
                              className="font-semibold text-[14px]  w-[20vw]"
                              style={{
                                fontSize:
                                  updateData.themeConfiguration.fontSize
                                    .titleHeading,
                              }}
                            />
                          </div>
                          <div className="flex items-start -mt-5">
                            <CertificationStartDateField
                              className="text-start w-[8vw]"
                              indexOfEdu={indexOfEdu}
                              value={item.startDate}
                              style={{
                                fontSize:
                                  updateData.themeConfiguration.fontSize
                                    .bodyText,
                              }}
                              type="YYYY"
                              maxlength={4}
                            />{" "}
                            <span className="mt-2">-</span>
                            <CertificationEndDateField
                              className="text-center w-[8vw]"
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
                          <div className="">
                            <div>
                              <ul className=" mt-[5px] list-none tracking-wider">
                                <li>
                                  <CertificateNameField
                                    value={item.name}
                                    indexOfEdu={indexOfEdu}
                                    className="w-[100%] -mt-6"
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
                className=" -ml-1"
                style={{
                  marginTop: updateData.themeConfiguration.sectionSpacing,
                  padding: `0 ${updateData.themeConfiguration.pageMargin}px`,
                }}
              >
                <h2
                  className="  font-[600] "
                  style={{
                    fontSize: updateData.themeConfiguration.fontSize.subHeading,
                  }}
                >
                  Courses
                </h2>
                <div className="-ml-5">
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
                              className="font-semibold text-[14px]  w-[20vw]"
                              style={{
                                fontSize:
                                  updateData.themeConfiguration.fontSize
                                    .titleHeading,
                              }}
                            />
                          </div>
                          <div className="flex items-start -mt-5">
                            <CoursesStartDateField
                              className="text-start w-[8vw]"
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
                            <span className="mt-2">-</span>
                            <CoursesEndDateField
                              className="text-center w-[8vw]"
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
                          <div className="">
                            <div>
                              <ul className=" mt-[5px] list-none tracking-wider">
                                <li>
                                  <CoursesNameField
                                    value={item.name}
                                    indexOfEdu={indexOfEdu}
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
            )}

            {/* Custom field */}
            {updateData?.themeConfiguration?.visibleSections?.custom && (
              <div
                className="-ml-2"
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
                      style={{
                        padding: `0 ${updateData.themeConfiguration.pageMargin}px`,
                      }}
                    >
                      <CustomTitleField
                        indexOfCus={indexOfCus}
                        value={item.title}
                        style={{
                          fontSize:
                            updateData.themeConfiguration.fontSize.subHeading,
                          paddingLeft: "0",
                          fontWeight: 600,
                        }}
                        className="text-blue-500 font-semibold  text-[18px] placeholder:text-blue-500 pl-0"
                      />

                      <div style={{ fontSize: "12px" }}>
                        <CustomDescField
                          className="-mt-9"
                          indexOfCus={indexOfCus}
                          value={item.description}
                          style={{
                            fontSize:
                              updateData.themeConfiguration.fontSize.bodyText,
                            borderStyle: "none",
                            resize: "none",
                            width: "100%",
                            marginLeft: "-8px",
                          }}
                        />
                      </div>
                    </div>
                  )}
                />
              </div>
            )}

            <div
              className=""
              style={{
                marginTop: updateData?.themeConfiguration?.sectionSpacing,
              }}
            >
              <h3
                style={{
                  padding: `0 ${updateData?.themeConfiguration?.pageMargin}px`,
                  fontSize:
                    updateData?.themeConfiguration?.fontSize?.subHeading,
                  marginTop: "0.25rem",
                  fontWeight: 700,
                }}
              >
                Skills
              </h3>

              <div
                className=" text-[12px]  mt-[12px]"
                style={{
                  padding: `0 ${updateData?.themeConfiguration?.pageMargin}px`,
                  marginTop: "12px",
                  fontSize: "12px",
                }}
              >
                <div style={{ display: "flex" }} className="-ml-5">
                  <div className="mt-5">
                    <Lists
                      style={{
                        fontSize:
                          updateData?.themeConfiguration?.fontSize?.bodyText,
                        textAlign: "start",
                      }}
                      layout={"list-disc ml-12"}
                      data={skillsData}
                      path={"skills"}
                      classname="text-start  w-[50vh] -mt-8"
                    />
                  </div>
                </div>
                <div>
                  {updateData?.themeConfiguration?.visibleSections
                    ?.languages && (
                    <div
                      className="-ml-12"
                      style={{
                        marginTop: updateData.themeConfiguration.sectionSpacing,
                      }}
                    >
                      <h3
                        className=" text-blue-500"
                        style={{
                          padding: `0 ${updateData.themeConfiguration.pageMargin}px`,
                          fontSize:
                            updateData.themeConfiguration.fontSize.subHeading,
                          marginTop: "0.25rem",
                          fontWeight: 600,
                        }}
                      >
                        Languages
                      </h3>

                      <div
                        className=" text-[12px]  mt-[12px]"
                        style={{
                          padding: `0 ${updateData.themeConfiguration.pageMargin}px`,
                          marginTop: "12px",
                          fontSize: "12px",
                        }}
                      >
                        <div style={{ display: "flex", marginLeft: "8px" }}>
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
                              classname="text-start -mt-7 "
                              layout={"list-disc ml-3"}
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
        <div
          className=" absolute h-[14px] w-[100%]"
          style={{
            backgroundColor:
              updateData.themeConfiguration.themeColor.primaryColor,
          }}
        ></div>
      </div>
    </div>
  );
}
