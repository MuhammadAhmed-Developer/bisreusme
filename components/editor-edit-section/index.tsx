"use client";
import AiIcon from "@/public/assets/images/svg-Images/ai-build-icon";
import CustomizeIcon from "@/public/assets/images/svg-Images/customize-btn-icon";
import Logo from "@/public/assets/images/svg-Images/logo";
import React, { useState } from "react";
import EditorDropdown from "../editor-dropdown/editor-dropdown";
import ColorsDropdown from "../cv-colors-dropdown";
import ValueRangeBar from "../value-rangebar/value-rangebar";
import ResumeDownloadButton from "../resume-download-button/resume-download-button";
import CustomColorPanal from "../custom-color-panal/custom-color-panal";
import EditorAiSection from "../editor-ai-section/editor-ai-section";
import FontSizeRangebar from "../value-rangebar/fontsize-rangebar";
import SectionSpacingRangebar from "../value-rangebar/section-spacing-rangebar";
import Link from "next/link";
import AddSection from "../custom-section-dorpdown/add-custom-section";
import CoverLetterSection from "../cover-letter-section/CoverLetterSection";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getCoverLetter } from "@/redux/slices/cover-letter.slice";

export default function EditSection({
  downloadPDF,
  downloadDocx,
  activeTemp,
}: {
  downloadDocx: () => void;
  downloadPDF: () => void;
  activeTemp: any;
}) {
  const dispatch = useAppDispatch();
  const [editorShown, setEditorShown] = useState(true);
  const [shownCustomAiButton, setShownCustomAiButton] = useState(false);
  const [shownCoverLetterButton, setShownCoverLetterButton] = useState(false);
  const [coverLetterData, setCoverLetterData] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiPrompttext, setAiPromptText] = useState("");
  const resumeData = useAppSelector((state) => state.resume);

  const handleCoverLetter = () => {
    dispatch(
      getCoverLetter({
        value: resumeData,
        callback(res: any) {
          setLoading(false);
          setCoverLetterData(res.data);
        },
      })
    );
  };

  return (
    <div className="fixed h-[100vh] left-4 lg:w-[22%] md:w-[30%] w-[30%]">
      <Link
        href={"/"}
        className="bg-white h-[10vh]  p-10 flex justify-center items-center shadow-lg rounded-2xl"
      >
        <Logo />
      </Link>
      <div className="bg-white h-[90vh] py-5 mt-4 shadow-md rounded-2xl">
        <div className="flex justify-center gap-[3px] lg:px-2 xl:px-0 flex-wrap md:flex-wrap pb-4  lg:flex-nowrap">
          <button
            onClick={() => {
              setEditorShown(true);
              setShownCustomAiButton(false);
              setShownCoverLetterButton(false);
            }}
            className={`py-[4px] items-center text-[10px] rounded-[7px] flex gap-1 px-[10px] justify-center  ${
              editorShown && "bg-primary-blue text-white  text-[12px] "
            } text-primary-blue `}
          >
            <CustomizeIcon conditionColor={editorShown} />
            <span className="mt-[2px]">Customize</span>
          </button>
          <button
            onClick={() => {
              setEditorShown(false);
              setShownCustomAiButton(true);
              setShownCoverLetterButton(false);
            }}
            className={`py-[4px] items-center text-[10px] rounded-[7px] flex gap-1 px-[10px] justify-center ${
              shownCustomAiButton && "bg-primary-blue text-white text-[12px]"
            } text-primary-blue`}
          >
            <AiIcon conditionColorSecond={shownCustomAiButton} />
            AI Build
          </button>
          <button
            onClick={() => {
              setEditorShown(false);
              setShownCustomAiButton(false);
              setShownCoverLetterButton(true);
              handleCoverLetter();
            }}
            className={`py-[4px] items-center text-[10px] rounded-[7px] flex gap-1 px-[10px]  justify-center ${
              shownCoverLetterButton && "bg-primary-blue text-white text-[12px]"
            } text-primary-blue`}
          >
            <AiIcon conditionColorSecond={shownCoverLetterButton} />
            Cover Letter
          </button>
        </div>

        {shownCustomAiButton ? (
          <div>
            <EditorAiSection
              aiPrompttext={aiPrompttext}
              setAiPromptText={setAiPromptText}
            />
          </div>
        ) : shownCoverLetterButton ? (
          <>
            <CoverLetterSection />
          </>
        ) : (
          <>
            <div className="h-[74vh] flex flex-col gap-[19px] overflow-scroll overflow-x-auto  px-2 mx-3">
              <div className="mt-[19px]">
                <p className="text-[12px] font-medium text-[#0000005C] ">
                  FONT STYLE
                </p>
                <EditorDropdown />
              </div>
              <div className="mt-[19px]">
                <FontSizeRangebar
                  heading="FONT SIZE:"
                  increaseText="small"
                  decreaseText="large"
                />
              </div>
              <div className="mt-[19px] w-[100%]">
                <p className="text-[12px] text-[#0000005C]">SOLID COLORS</p>
                <ColorsDropdown activeTemp={activeTemp} />
              </div>
              <div className="mt-[19px]">
                <p className="text-[12px] text-[#0000005C] ">CUSTOM COLOR</p>
                <CustomColorPanal />
              </div>
              <div className="mt-[19px]">
                <p className="text-[12px] text-[#0000005C] ">
                  ADD CUSTOM SECTION
                </p>
                <AddSection />
              </div>
              <div className="mt-[19px]">
                <ValueRangeBar
                  heading="PAGE MARGIN: 3"
                  increaseText="narrow"
                  decreaseText="wide"
                />
              </div>
              <div className="mt-[19px] mb-28">
                <SectionSpacingRangebar
                  heading="SECTION SPACING: 2"
                  increaseText="compact"
                  decreaseText="space"
                />
              </div>
            </div>
          </>
        )}
        <ResumeDownloadButton
          downloadPDF={downloadPDF}
          downloadDocx={downloadDocx}
        />
      </div>
    </div>
  );
}
