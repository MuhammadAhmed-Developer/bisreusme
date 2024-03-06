import AOSList from "@/components/resume-builder/aos-list";
import { useAppSelector } from "@/redux/store";
import React from "react";

export default function InterestsSection() {
  const resumeDetails = useAppSelector((state) => state.resume);
  const updateData = useAppSelector((state) => state.templateTheme);
  const intrestData = resumeDetails.resumeData?.interests || [];

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
        INTERESTS
      </h3>
      <div className="h-[1px] bg-slate-500  mt-3"></div>
      <div
        style={{
          padding: `0 ${PAGEMARGIN}px`,
          fontSize: "12px",
          marginLeft: "11px",
          marginTop: "12px",
        }}
      >
        <div style={{ display: "flex"}}>
            <AOSList
              style={{
                fontSize: BODYTEXT,
                textAlign: "start",
                resize: "none",
                marginTop:"2px",
              }}
              data={intrestData}
              path={"interests"}
              classname="text-start my-3"
              layout={"list-disc ml-8 flex flex-col gap-y-2"}
            />
        </div>
      </div>
      {updateData?.themeConfiguration?.visibleSections?.custom && (
        <div className="h-[1px] bg-slate-500 mt-3"></div>
      )}
    </div>
  );
}
