"use client";
import EditSection from "@/components/editor-edit-section";
import EditorSuggestionsSection from "@/components/editor-suggestios-section";
import resumeTemplates from "@/constants/resumeTemplates";
import { downloadDocx } from "@/redux/slices/resume.slice";
import { checkFieldStatus } from "@/redux/slices/template-theme.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { PreviewA4 } from "@diagoriente/react-preview-a4";
import { PDFExport } from "@progress/kendo-react-pdf";
import { useEffect, useRef, useState } from "react";

function BuildResume({ params }: { params: any }) {
  const dispatch = useAppDispatch();
  const resumeDetails: any = useAppSelector((state) => state.resume);
  const updateData = useAppSelector((state) => state.templateTheme);
  const findedResume = resumeTemplates.find(
    (item) => item.templateId == params.slug
    );

  const ComponentResume: any = findedResume?.component;
  const pdfExportComponent = useRef<null | any>(null);
  const templateRef = useRef<HTMLInputElement>(null);
  const [showPreviewTag, setShowPreviewTag] = useState(true);
  const handleDownloadPDF = async () => {
    if (pdfExportComponent.current) {
      try {
        await setShowPreviewTag(false);
        pdfExportComponent.current?.save();
        await setShowPreviewTag(true);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleDownloadDocx = async () => {
    const img = localStorage.getItem("profileImage");
    if (findedResume) {
      const combinedData = {
        templateName: findedResume?.templateName,
        resumeDetails: {
          resumeData: {
            ...resumeDetails.resumeData,
            activeSections: updateData?.themeConfiguration?.visibleSections,
          },
        },
        imageBase64: resumeDetails?.resumeData?.profileImage,
      };
      dispatch(downloadDocx(combinedData));
    }
  };
  useEffect(() => {
    dispatch(
      checkFieldStatus({
        payload: false,
      })
    );
  }, []);
  useEffect(() => {
    dispatch(
      checkFieldStatus({
        payload: false,
      })
    );
  }, [resumeDetails?.resumeData]);

  return (
    <div className="bg-[#EAF1FC] px-5 flex justify-center h-[450vh]">
      <div className="flex justify-between md:mt-[2vh] w-[100%]">
        <div>
          <EditSection
            downloadPDF={handleDownloadPDF}
            downloadDocx={handleDownloadDocx}
            activeTemp={findedResume}
          />
        </div>
        <div
          className="mb-[20vh]"
          style={{
            // width: showPreviewTag ? "50%" : 595,
            maxWidth: '50%',
            minWidth: '50%',
          }}
        >
          <PDFExport
            ref={pdfExportComponent}
            avoidLinks={false}
            // paperSize={"A4"}
            fileName={resumeDetails?.resumeData?.name}
          >
            {/* {showPreviewTag ? ( */}
            <PreviewA4 print={true} allowOverflow={true}>
              <ComponentResume ref={templateRef} />
            </PreviewA4>
            {/* ) : ( */}
            {/* <ComponentResume ref={templateRef} /> */}
            {/* )} */}
          </PDFExport>
        </div>
        <div className="lg:block md:hidden hidden">
          <EditorSuggestionsSection />
        </div>
      </div>
    </div>
  );
}

export default BuildResume;
