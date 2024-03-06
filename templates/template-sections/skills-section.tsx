import Lists from "@/components/resume-builder/lists";
import { useAppSelector } from "@/redux/store";
import React from "react";

export default function SkillsSection() {
  const resumeDetails = useAppSelector((state) => state.resume);
  const updateData = useAppSelector((state) => state.templateTheme);
  const skillsData = resumeDetails.resumeData?.skills || [];

  const SUBHEADING = updateData.themeConfiguration?.fontSize?.subHeading;
  const BODYTEXT = updateData.themeConfiguration?.fontSize?.bodyText;
  const PRIMARYCOLOR = updateData.themeConfiguration?.themeColor?.primaryColor;
  const SECTIONSPACING = updateData.themeConfiguration?.sectionSpacing;
  const PAGEMARGIN = updateData.themeConfiguration?.pageMargin;

  return (
    <div style={{ marginTop: SECTIONSPACING }}>
      <h3
        className="text-blue-500"
        style={{
          padding: `0 ${PAGEMARGIN}px`,
          fontSize: SUBHEADING,
          color: PRIMARYCOLOR,
          marginTop: "0.25rem",
          fontWeight: 700,
        }}
      >
        SKILLS
      </h3>
      <div className="h-[1px] bg-slate-500  mt-3"></div>
      <div
        className=" text-[12px]  mt-[12px]  w-[100%] "
        style={{
          padding: `0 ${PAGEMARGIN}px`,
          marginTop: "12px",
          fontSize: "12px",
        }}
      >
        <div
          style={{ display: "flex", marginLeft: "8px" }}
          className="w-[100%]"
        >
          <div className="w-[100%] ">
            <Lists
              style={{
                fontSize: BODYTEXT,
                textAlign: "start",
                resize: "none",
              }}
              data={skillsData}
              path={"skills"}
              classname="text-start  w-[100%]"
              layout="gap-x-14 gap-y-2 flex flex-row flex-wrap ml-[30px]  list-disc tracking-wider"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
