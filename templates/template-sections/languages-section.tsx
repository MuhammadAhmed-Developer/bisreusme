import Lists from "@/components/resume-builder/lists";
import { useAppSelector } from "@/redux/store";
import React from "react";

export default function LanguagesSection() {
  const updateData = useAppSelector((state) => state.templateTheme);
  const resumeDetails = useAppSelector((state) => state.resume);
  const languagesData = resumeDetails.resumeData?.languages || [];

  const SUBHEADING = updateData.themeConfiguration?.fontSize?.subHeading;
  const BODYTEXT = updateData.themeConfiguration?.fontSize?.bodyText;
  const PRIMARYCOLOR = updateData.themeConfiguration?.themeColor?.primaryColor;
  const SECTIONSPACING = updateData.themeConfiguration?.sectionSpacing;
  const PAGEMARGIN = updateData.themeConfiguration?.pageMargin;
  return (
    <div className="" style={{ marginTop: SECTIONSPACING }}>
      <h3
        className=" text-blue-500"
        style={{
          padding: `0 ${PAGEMARGIN}px`,
          fontSize: SUBHEADING,
          color: PRIMARYCOLOR,
          marginTop: "0.25rem",
          fontWeight: 700,
        }}
      >
        LANGUAGE
      </h3>
      <div className="h-[1px] bg-slate-500  mt-3"></div>
      <div
        className=" text-[12px]  mt-[12px]"
        style={{
          padding: `0 ${PAGEMARGIN}px`,
          marginTop: "12px",
          fontSize: "12px",
        }}
      >
        <div style={{ display: "flex", marginLeft: "8px" }}>
          <div>
            <Lists
              style={{
                fontSize: BODYTEXT,
                textAlign: "start",
              }}
              data={languagesData}
              path={"languages"}
              classname="text-start"
              placeholder="English"
              layout={"list-disc ml-9 flex flex-col gap-2"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
