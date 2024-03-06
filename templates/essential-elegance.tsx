import React, { useRef, useState } from "react";
import NameField from "./common-fields/name.field";
import JobTitleField from "./common-fields/job-title.field";
import SummaryField from "./common-fields/summary.field";
import EmailField from "./common-fields/email.field";
import PhoneNumberField from "./common-fields/phone-number.field";
import WebsiteUrl from "./common-fields/website-url.field";
import EssentialEmailIcon from "@/public/assets/images/svg-Images/essential-resume-email-icon";
import EssentialAddressIcon from "@/public/assets/images/svg-Images/essential-resume-location-icon";
import EssentialPhoneIcon from "@/public/assets/images/svg-Images/essential-resume-phone-icon";
import Lists from "@/components/resume-builder/lists";
import {
  addField,
  removeField,
  updateOrder,
} from "@/redux/slices/resume.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import ExperienceCompanyName from "./common-fields/experience-company-name.field";
import ExperienceJobStartDate from "./common-fields/experience-job-startdate.field";
import ExperienceJobEndDate from "./common-fields/experience-job-enddate.field";
import ExperienceJobDescription from "./common-fields/experience-job-description.field";
import Dnd from "@/components/resume-builder/dnd";
import EducationInstituteNameField from "./common-fields/education-institute-name.field";
import EducationDegreeNameField from "./common-fields/education-degree-name.field";
import EducationStartDateField from "./common-fields/education-startdate.field";
import EducationEndDateField from "./common-fields/education-enddate.field";
import AOSList from "@/components/resume-builder/aos-list";
import AddressField from "./common-fields/address.field";
import CustomDescField from "./common-fields/custom-desc.field";
import CustomTitleField from "./common-fields/custom-title.field";
import CoursesNameField from "./common-fields/courses-name.field copy";
import CoursesEndDateField from "./common-fields/courses-enddate.field";
import CoursesStartDateField from "./common-fields/courses-startdate.field";
import CoursesInstituteNameField from "./common-fields/courses-institute-name.field copy";
import CertificateNameField from "./common-fields/certificate-name.field";
import CertificationEndDateField from "./common-fields/certification-enddate.field";
import CertificationStartDateField from "./common-fields/certification-startdate.field";
import CertificateInstituteNameField from "./common-fields/certificate-institute-name.field";

export default function EssentialElegance() {
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
  const interests = resumeDetails.resumeData?.interests || [];
  const languagesData = resumeDetails.resumeData?.languages || [];

  return (
    <div
      className="bg-white templates pb-4"
      style={{ fontFamily: updateData?.themeConfiguration?.fontFamily }}
    >
      <div className="flex p-[32px] gap-14">
        <div className="w-[40%] pt-8">
          <div>
            <NameField
              className="text-[22px]"
              resumeDetails={resumeDetails}
              style={{
                fontSize: updateData?.themeConfiguration?.fontSize?.mainHeading,

                fontFamily: updateData?.themeConfiguration?.fontFamily,
                fontWeight: updateData?.themeConfiguration?.fontWeight?.heading,
              }}
            />
            <JobTitleField
              className="text-[16px] font?xt-[#0E6CC2] "
              style={{
                fontSize: updateData?.themeConfiguration?.fontSize?.subHeading,
                color: updateData?.themeConfiguration?.themeColor.primaryColor,
                fontWeight: updateData?.themeConfiguration?.fontWeight?.heading,
              }}
            />
            <div className="mt-3">
              <SummaryField
                className="resize-none text-[14]  w-[100%]"
                style={{
                  fontSize: updateData.themeConfiguration.fontSize.bodyText,
                }}
              />
            </div>
          </div>
          <div
            className="mt-2"
            style={{
              marginTop: updateData?.themeConfiguration?.sectionSpacing,
            }}
          >
            <h3
              className="text-[16px]"
              style={{
                fontSize: updateData?.themeConfiguration?.fontSize?.subHeading,
                color: updateData?.themeConfiguration?.themeColor?.primaryColor,
                fontWeight: updateData?.themeConfiguration?.fontWeight?.heading,
              }}
            >
              Contact
            </h3>
            <div>
              <div className="mt-2">
                <div className="flex items-center gap-3 mb-2">
                  <span>
                    <EssentialEmailIcon
                      primary={
                        updateData?.themeConfiguration?.themeColor?.primaryColor
                      }
                    />
                  </span>
                  <EmailField
                    className="underline text-[12px] -ml-4 w-[17vw]"
                    style={{
                      fontSize:
                        updateData?.themeConfiguration?.fontSize?.bodyText,
                    }}
                    maxlength={35}
                  />
                </div>
                <div className=" flex items-center gap-3 mb-2">
                  <span>
                    <EssentialAddressIcon
                      primary={
                        updateData?.themeConfiguration?.themeColor?.primaryColor
                      }
                    />
                  </span>
                  <div>
                    <AddressField
                      className="underline text-[12px] w-[17vw]"
                      style={{
                        fontSize:
                          updateData?.themeConfiguration?.fontSize?.bodyText,
                      }}
                      maxlength={45}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span>
                    <EssentialPhoneIcon
                      primary={
                        updateData?.themeConfiguration?.themeColor?.primaryColor
                      }
                    />
                  </span>
                  <div className="flex underline items-baseline">
                    <span
                      className=" text-[12px] "
                      style={{
                        fontSize:
                          updateData?.themeConfiguration?.fontSize?.bodyText,
                      }}
                    >
                      +
                    </span>
                    <PhoneNumberField
                      className="underline text-[12px] "
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
                className="mt-2"
                style={{
                  marginTop: updateData?.themeConfiguration?.sectionSpacing,
                }}
              >
                <h2
                  className="text-[16px] my-2"
                  style={{
                    fontSize:
                      updateData?.themeConfiguration?.fontSize?.subHeading,
                    color:
                      updateData?.themeConfiguration?.themeColor?.primaryColor,
                    fontWeight:
                      updateData?.themeConfiguration?.fontWeight?.heading,
                  }}
                >
                  Skills
                </h2>
                <div>
                  <div className="w-[100%]">
                    <Lists
                      data={skillsData}
                      path={"skills"}
                      classname="text-start w-[100%] text-[12px]"
                      layout={"flex flex-col gap-y-1"}
                      style={{
                        fontSize:
                          updateData?.themeConfiguration?.fontSize?.bodyText,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: updateData?.themeConfiguration?.sectionSpacing,
                }}
              >
                <h2
                  className="text-[16px] my-2"
                  style={{
                    fontSize:
                      updateData?.themeConfiguration?.fontSize?.subHeading,
                    color:
                      updateData?.themeConfiguration?.themeColor?.primaryColor,
                    fontWeight:
                      updateData?.themeConfiguration?.fontWeight?.heading,
                  }}
                >
                  Tools
                </h2>
                <div>
                  <div className="w-[100%]">
                    <AOSList
                      data={interests}
                      path={"interests"}
                      classname="text-start w-[100%] text-[12px] "
                      layout={"ml-1 flex flex-col gap-y-1"}
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
                    className=" text-blue-500 my-2"
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
                    className=" text-[12px]"
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    <div style={{ display: "flex" }}>
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
                          layout={"flex flex-col gap-y-1"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className="w-[53%]"
          style={{
            backgroundColor:
              updateData?.themeConfiguration?.themeColor.secondaryColor,
            padding: `32px ${updateData?.themeConfiguration?.pageMargin}px`,
          }}
        >
          <h3
            className=" text-blue-500 mb-1"
            style={{
              fontSize: updateData.themeConfiguration.fontSize.subHeading,
              color: updateData.themeConfiguration.themeColor.primaryColor,
              fontWeight: updateData?.themeConfiguration?.fontWeight?.heading,
            }}
          >
            Experience
          </h3>
          <div>
            <Dnd
              data={resumeDetails.resumeData?.experience}
              direction={"horizontal"}
              reorder={handleExperienceOrderChange}
              additem={(e) => handleAddExperience(e)}
              removeitem={(e) => handleRemoveExperience(e)}
              renderItem={(item, index) => (
                <div className="text-[12px] flex">
                  <div>
                    <div className="w-[100%]">
                      <ExperienceCompanyName
                        value={item.company}
                        index={index}
                        className="text-[14px]  w-[100%]"
                        style={{
                          fontSize:
                            updateData?.themeConfiguration?.fontSize
                              ?.titleHeading,
                          fontWeight:
                            updateData?.themeConfiguration?.fontWeight?.heading,
                        }}
                      />
                    </div>
                    <div className="flex items-start gap-[4px] mt-2">
                      <ExperienceJobStartDate
                        className="text-start"
                        index={index}
                        value={item.startDate}
                        style={{
                          fontSize:
                            updateData?.themeConfiguration?.fontSize?.bodyText,
                        }}
                        placeholder="Oct 2019"
                        maxlength={15}
                        type="text"
                      />
                      <span>-</span>
                      <ExperienceJobEndDate
                        className="text-center"
                        index={index}
                        value={item.endDate}
                        style={{
                          fontSize:
                            updateData?.themeConfiguration?.fontSize?.bodyText,
                        }}
                        placeholder="Sep 2019"
                        maxlength={15}
                        type="text"
                      />
                    </div>
                    <div>
                      <ul className=" mt-[8px] list-none tracking-wider">
                        <li>
                          <ExperienceJobDescription
                            value={item.title}
                            index={index}
                            className="w-[100%] -mt-5"
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
              )}
            />
          </div>

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
                            className="text-[14px] w-[20vw]"
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
                        <div className="flex items-start gap-[4px] mt-2">
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
                            placeholder="10/3008"
                          />
                        </div>
                        <div>
                          <ul className=" mt-[8px] list-none tracking-wider">
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
                          updateData?.themeConfiguration?.fontWeight?.heading,
                      }}
                      className="text-[18px]  pl-0"
                    />

                    <div className="mt-1">
                      <CustomDescField
                        className="-mt-10"
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
      <div className="pr-[32px]">
        <div
          className="mt-2 ml-7 flex justify-between "
          style={{
            marginTop: updateData?.themeConfiguration?.sectionSpacing,
            padding: `20px ${updateData?.themeConfiguration?.pageMargin}px`,
            backgroundColor:
              updateData?.themeConfiguration?.themeColor.secondaryColor,
          }}
        >
          <div>
            <h2
              className=" text-[16px] "
              style={{
                fontSize: updateData?.themeConfiguration?.fontSize?.subHeading,
                color: updateData?.themeConfiguration?.themeColor?.primaryColor,
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
                          className="text-[14px]  w-[20vw]"
                          style={{
                            fontSize:
                              updateData?.themeConfiguration?.fontSize
                                ?.titleHeading,
                            fontWeight:
                              updateData?.themeConfiguration?.fontWeight
                                ?.heading,
                          }}
                        />
                      </div>
                      <div>
                        <ul className=" mt-[5px] list-none tracking-wider">
                          <li>
                            <EducationDegreeNameField
                              value={item.degree}
                              indexOfEdu={indexofEdu}
                              className="w-[100%] -mt-9"
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
                          placeholder="Oct 2019"
                          maxlength={15}
                          type="text"
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
                          placeholder="Oct 2019"
                          maxlength={15}
                          type="text"
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
                padding: `0 ${updateData.themeConfiguration.pageMargin}px`,
              }}
            >
              <h2
                style={{
                  fontSize: updateData.themeConfiguration.fontSize.subHeading,
                  color: updateData.themeConfiguration.themeColor.primaryColor,
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
                    <div className="text-[12px] flex !w-[260px]">
                      <div className="">
                        <div className="w-[100%]">
                          <CertificateInstituteNameField
                            value={item.organization}
                            indexOfEdu={indexOfEdu}
                            className="text-[14px] w-[20vw]"
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
                          <CertificationStartDateField
                            className="text-start"
                            indexOfEdu={indexOfEdu}
                            value={item.startDate}
                            style={{
                              fontSize:
                                updateData.themeConfiguration.fontSize.bodyText,
                            }}
                            maxlength={4}
                            type="YYYY"
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
                            maxlength={4}
                            type="YYYY"
                          />
                        </div>
                        <div>
                          <div>
                            <ul className=" mt-[5px] list-none tracking-wider w-[220px]">
                              <li>
                                <CertificateNameField
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
        </div>
      </div>
    </div>
  );
}
