"use client";
import React, { useRef, useState } from "react";
import NameField from "@/templates/common-fields/name.field";
import AddressField from "@/templates/common-fields/address.field";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import EmailField from "./common-fields/email.field";
import PhoneNumberField from "./common-fields/phone-number.field";
import JobTitleField from "./common-fields/job-title.field";
import SummaryField from "./common-fields/summary.field";
import LanguagesSection from "./template-sections/languages-section";
import CustomSection from "./template-sections/custom-section";
import CertificationSection from "./template-sections/certification-section";
import CoursesSection from "./template-sections/courses-section";
import InterestsSection from "./template-sections/interests-section";
import SkillsSection from "./template-sections/skills-section";
import EducationSection from "./template-sections/education-section";
import ExperienceSection from "./template-sections/experience-section";
import useOverflowDetection from "@/utils/overflowDetect";
import { updateThemeValue } from "@/redux/slices/template-theme.slice";

function TorontoTemplate() {
  const dispatch = useAppDispatch();
  const updateData = useAppSelector((state) => state.templateTheme);
  const [text, setText] = useState("");
  const resumeDetails = useAppSelector((state) => state.resume);

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

  const ref = useRef(null);
  const isOverflow = useOverflowDetection(ref);

  dispatch(
    updateThemeValue({
      path: "overflowDetected",
      value: isOverflow,
    })
  );

  const sections = [
    <ExperienceSection />,
    <SkillsSection />,
    <EducationSection />,
    <InterestsSection />,
    updateData?.themeConfiguration?.visibleSections?.custom && (
      <CustomSection />
    ),
    updateData?.themeConfiguration?.visibleSections?.languages && (
      <LanguagesSection />
    ),
    updateData?.themeConfiguration?.visibleSections?.certifications && (
      <CertificationSection />
    ),
    updateData?.themeConfiguration?.visibleSections?.courses && (
      <CoursesSection />
    ),
  ];

  const FONTFAMILY = updateData.themeConfiguration?.fontFamily;
  const MAINHEADING = updateData.themeConfiguration?.fontSize?.mainHeading;
  const SUBHEADING = updateData.themeConfiguration?.fontSize?.subHeading;
  const BODYTEXT = updateData.themeConfiguration?.fontSize?.bodyText;
  const PRIMARYCOLOR = updateData.themeConfiguration?.themeColor?.primaryColor;
  const SECTIONSPACING = updateData.themeConfiguration?.sectionSpacing;
  const PAGEMARGIN = updateData.themeConfiguration?.pageMargin;

  return (
    <div
      ref={ref}
      className="templates"
      style={{
        backgroundColor: "white",
        paddingTop: "15px",
        paddingBottom: "50px",
      }}
    >
      <div
        style={{
          fontFamily: FONTFAMILY,
        }}
      >
        <div
          style={{
            marginTop: "1.25rem",
            marginBottom: "1.25rem",
            textAlign: "center",
          }}
        >
          <NameField
            resumeDetails={resumeDetails}
            className={"text-blue-500"}
            style={{
              fontSize: MAINHEADING,
              color: PRIMARYCOLOR,
              fontWeight: 700,
              textAlign: "center",
              width: "100%",
              resize: "none",
            }}
          />

          <div
            className="mt-2"
            style={{
              display: "flex",
              marginRight: "2.5rem",
              justifyContent: "space-between",
              alignItems: "start",
              textAlign: "center",
              fontSize: "12px",
              padding: `0 ${PAGEMARGIN}px`,
            }}
          >
            <AddressField
              style={{
                fontSize: BODYTEXT,
                width: "30%",
                textAlign: "start",
                resize: "none",
              }}
              maxlength={45}
            />
            <span>|</span>
            <EmailField
              style={{
                fontSize: BODYTEXT,
                width: "30%",
                textAlign: "center",
                resize: "none",
              }}
              maxlength={35}
            />
            <span>|</span>
            <div className="flex  items-baseline">
              <span
                className=" text-[12px] font-[500] "
                style={{
                  fontSize: updateData?.themeConfiguration?.fontSize?.bodyText,
                }}
              >
                +
              </span>
              <PhoneNumberField
                className=" text-[12px] font-[500]"
                style={{
                  fontSize: updateData?.themeConfiguration?.fontSize?.bodyText,
                }}
                maxlength={15}
              />
            </div>
          </div>
        </div>

        {/* Field =============  */}
        <div
          style={{
            padding: `0 ${PAGEMARGIN}px`,
            marginTop: SECTIONSPACING,
          }}
        >
          <JobTitleField
            style={{
              fontSize: SUBHEADING,
              color: PRIMARYCOLOR,
              paddingLeft: "0",
              fontWeight: 700,
            }}
            className=" font-semibold w-[100%]  text-[18px] text-blue-500"
          />

          <div style={{ fontSize: "12px" }} className="w-[100%] mt-2">
            <SummaryField
              style={{
                fontSize: BODYTEXT,
                borderStyle: "none",
                resize: "none",
                width: "100%",
                marginLeft: "-8px",
              }}
            />

            {showGrammarCheckButton && (
              <button onClick={handleGrammarCheck}>✅</button>
            )}
          </div>
        </div>
        {sections.map((section, index) => {
          return (
            <>
              <div key={index}>{section}</div>
            </>
          );
        })}
      </div>
    </div>
  );
}
export default TorontoTemplate;
