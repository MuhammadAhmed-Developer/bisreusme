"use client";
import React, { useEffect, useState } from "react";
import style from "@/style/resumesSection/resumesSection.module.css";
import Image from "next/image";
import resumeTemplates from "@/constants/resumeTemplates";
import PromptModel from "../models/prompt-modal";
import ChooseResumeModal from "../models/choose-resume-modal";
import { SelectedResumeTemplateTypes } from "@/redux/types";
import { useRouter } from "next/navigation";
import { updateThemeValue } from "@/redux/slices/template-theme.slice";
import { useAppDispatch } from "@/redux/store";
import { json } from "stream/consumers";

const categorybtn = [
  { id: "all", label: "All Templates" },
  { id: "simple", label: "Simple" },
  { id: "creative", label: "Creative" },
  { id: "traditional", label: "Traditional" },
  { id: "modern", label: "Modern" },
  { id: "tech", label: "Tech" },
];

function ResumesSection({
  shownHeading,
  navigateModel,
  modelCardSize,
  showScrollBar,
}: {
  shownHeading?: boolean;
  navigateModel?: boolean;
  modelCardSize?: boolean;
  showScrollBar?: boolean;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [hoverImageIndex, setHoverImageIndex] = useState(null);
  const [selectedResume, setSelectedResume] =
    useState<null | SelectedResumeTemplateTypes>(null);
  const [promptModal, setPromptModal] =
    useState<null | SelectedResumeTemplateTypes>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [openAiModal, setOpenAiModal] =
    useState<null | SelectedResumeTemplateTypes>(null);

  console.log("openAiModal", openAiModal);

  const handleButtonClick = (item: any) => {
    const usingAiButton:any = localStorage.getItem("clickOnAiButton");
    const aiBoolean = JSON.parse(usingAiButton);
    console.log("aiBoolean", aiBoolean);
    setOpenAiModal(aiBoolean);
    setSelectedResume(item);
    // localStorage.removeItem('clickOnAiButton')
    dispatch(
      updateThemeValue({
        path: "themeColor",
        value: {
          primaryColor: item?.colors?.primaryColor,
          secondaryColor: item?.colors?.secondaryColor,
        },
      })
    );
    if(aiBoolean){
      setPromptModal(item);
    }

    console.log("selectedResume", item);
    if (navigateModel) {
      router.push(`/build-resume/${item?.templateId}`);
      setSelectedResume(null);
    }
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <div className={style.main}>
        <div className="flex justify-end cursor-pointer"></div>
        {shownHeading && (
          <h1 className="text-[36px] font-semibold text-[#102D59] text-center">
            Templates
          </h1>
        )}
        <div className="flex-wrap gap-3 flex justify-center items-center mt-[40px] mb-[30px]">
          {categorybtn.map((filter) => (
            <button
              key={filter.id}
              className={`${
                activeFilter === filter.id ? "bg-primary-blue text-white" : ""
              } text-primary-blue shadow-md border-primary-blue border-[1px] outline-none rounded-[100px] py-[12px] lg:px-[48px] md:px-[26px] px-[20px] lg:text-[16px] md:text-[12px] text-[12px]`}
              onClick={() => handleFilterClick(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div
          className={` ${
            showScrollBar
              ? "h-[100vh] overflow-scroll overflow-x-auto pb-[250px]"
              : ""
          }`}
        >
          <div className={"lg:mx-[81px] md:mx-[60px] mx-[20px] mt-[22px]"}>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 md:gap-8 gap-4`}
            >
              {resumeTemplates
                .filter((item) => {
                  const templatesForCategory = resumeTemplates.filter(
                    (template) => template.category === activeFilter
                  );
                  return (
                    activeFilter === "all" ||
                    templatesForCategory.length === 0 ||
                    item.category === activeFilter
                  );
                })
                .map((item, i: any) => (
                  <div
                    onMouseEnter={() => setHoverImageIndex(i)}
                    onMouseLeave={() => setHoverImageIndex(null)}
                    key={i}
                    className=" flex flex-col  gap-[14px] cursor-pointer"
                  >
                    <div
                      className={` ${
                        hoverImageIndex === i
                          ? "bg-[#BFD4F5] "
                          : "bg-[#EAF1FC] "
                      }  p-[28px] flex justify-center flex-col`}
                    >
                      <div className="relative flex justify-center items-center">
                        <Image
                          src={item.templateImage}
                          alt="resume"
                          width={item.width}
                          height={item.height}
                          className="!w-full"
                        />
                        {
                          <>
                            {hoverImageIndex === i && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                  type="button"
                                  onClick={() => handleButtonClick(item)}
                                  className="rounded-2xl bg-[#2871DE]   py-3 lg:text-[12px] md:text-[5px] px-6 tracking-wider font-semibold text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                                >
                                  Edit this template
                                </button>
                              </div>
                            )}
                          </>
                        }
                      </div>
                      <div className="flex gap-[10px] mt-4 ml-3">
                        <div
                          style={{
                            backgroundColor: item.colors?.templateFirstColor,
                            border: `4px solid ${item.colors?.borderColor}`,
                          }}
                          className={`w-[17px] h-[17px] rounded-full`}
                        ></div>
                        <div
                          style={{
                            backgroundColor: item.colors?.templateSecondColor,
                          }}
                          className={`w-[17px] h-[17px] rounded-full`}
                        ></div>
                        <div
                          style={{
                            backgroundColor: item.colors?.templateThirdColor,
                          }}
                          className={`w-[17px] h-[17px] rounded-full`}
                        ></div>
                        <div
                          style={{
                            backgroundColor: item.colors?.templateFourthColor,
                          }}
                          className={`w-[17px] h-[17px] rounded-full`}
                        ></div>
                        <div
                          style={{
                            backgroundColor: item.colors?.templateFifthColor,
                          }}
                          className={`w-[17px] h-[17px] rounded-full`}
                        ></div>
                      </div>
                    </div>
                    <div className="flex gap-[10px] flex-col">
                      <h1 className="text-[20px] font-semibold">
                        {item.templateName}
                      </h1>
                      <p className="max-w-[380px]">{item.templateDetails}</p>
                    </div>
                  </div>
                ))}
            </div>

            {!!navigateModel || (
            <>
              <PromptModel
                isOpen={!!promptModal}
                onClose={() => {
                  setPromptModal(null);
                }}
                onComplete={() => {
                  router.push(`/build-resume/${promptModal?.templateId}`);
                }}
              />
              <ChooseResumeModal
                isOpen={!!selectedResume}
                onClose={() => setSelectedResume(null)}
                handleCreateResume={() => {
                  router.push(`/build-resume/${selectedResume?.templateId}`);
                  setSelectedResume(null);
                }}
                handleCreateUsingAI={() => {
                  setPromptModal(selectedResume);
                  console.log('selectedResume',selectedResume);
                  
                  setSelectedResume(null);
                }}
              />
            </>
          )}


            {/* {openAiModal ? (
              <PromptModel
                isOpen={!!promptModal}
                onClose={() => {
                  setPromptModal(null);
                }}
                onComplete={() => {
                  router.push(`/build-resume/${promptModal?.templateId}`);
                }}
              />
            ) : (
              <>
                {
                  <>
                         
                  </>
                }
              </>
            )} */}

          </div>
        </div>
      </div>
    </>
  );
}

export default ResumesSection;
