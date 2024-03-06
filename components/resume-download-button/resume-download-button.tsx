import DownloadIcon from "@/public/assets/images/svg-Images/download-icon";
import FilterIcon from "@/public/assets/images/svg-Images/filter-icon";
import React, { useEffect, useState } from "react";

import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { checkFieldStatus } from "@/redux/slices/template-theme.slice";
import { toast } from "react-toastify";

function ResumeDownloadButton({
  downloadPDF,
  downloadDocx,
}: {
  downloadDocx: () => void;
  downloadPDF: () => void;
}) {
  const dispatch = useAppDispatch();
  const [shownCustomColorButton, setShownCustomColorButton] = useState(false);
  const [downloadButtonText, setDownloadButtonText] = useState("PDF");
  const resumeDetails: any = useAppSelector((state) => state.resume);
  const handleClickPdfButton = () => {
    setShownCustomColorButton(false);
    setDownloadButtonText("PDF");
    if (downloadButtonText == "PDF") {
      downloadPDF();
    }
  };
  const handleClickDocXButton = () => {
    setShownCustomColorButton(true);
    setDownloadButtonText("DOCX");
    if (downloadButtonText == "DOCX") {
      downloadDocx();
    }
  };
  const [disableButtonState, setDisableButtonState] = useState<boolean>(false);
  const isEmpty = (value: string) => {
    return value?.length === 0;
  };
  const validateArrayItems = (array: any[]) => {
    for (const item of array) {
      for (const key in item) {
        if (
          item.hasOwnProperty(key) &&
          key !== 'description' && 
          key !== 'id' && 
          isEmpty(item[key])
        ) {
          return true;
        }
      }
    }
    return false;
  };

  const validateResumeData = (resumeData: any) => {
    if (!resumeData) {
      return false;
    }
    if (
      isEmpty(resumeData.name) ||
      isEmpty(resumeData.phone) ||
      isEmpty(resumeData.address)
    ) {
      return true;
    }

    if (validateArrayItems(resumeData.skills)) {
      return true;
    }

    if (validateArrayItems(resumeData.education)) {
      return true;
    }
    if (validateArrayItems(resumeData.experience)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const isResumeDataValid = validateResumeData(resumeDetails?.resumeData);
    setDisableButtonState(isResumeDataValid);
  }, [resumeDetails?.resumeData]);

  const downloadButtonHandler = () => {
    if (disableButtonState) {
      dispatch(
        checkFieldStatus({
          payload: true,
        })
      );
      toast.error('Please Fill Required Fields', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      if (downloadButtonText == "PDF") {
        handleClickPdfButton();
      } else {
        handleClickDocXButton();
      }
    }
  };
  return (
    <>
      <div className="lg:w-[20%] md:w-[27%] w-[27%] pb-5 bg-white mt-4   px-2 fixed bottom-0  ">
        <Popover className="relative">
          {({ open }) => (
            <>
              <div className="flex gap-[10px] ">
                <button
                  onClick={downloadButtonHandler}
                  className="bg-[#102D59] text-[#fff] w-[80%] pl-[16px] flex gap-[11px] items-center justify-start rounded-[10px]"
                  // disabled={isButtonDisabled}
                >
                  <DownloadIcon />
                  <span className=" text-[12px] text-start">{`Download as ${downloadButtonText}`}</span>
                </button>
                <Popover.Button
                  className={`
                ${open ? "text-white" : "text-white/90"}
                group flex items-center justify-center rounded-md px-4  bg-[#D7D7D7] py-4 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                >
                  <FilterIcon />
                </Popover.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute bottom-12 left-[50%] p-5  z-10 mt-3 w-[100%]  max-w-[245px] -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                  <div className="overflow-hidden  rounded-lg shadow-lg ring-1 ring-black/5">
                    <div className=" bg-white ">
                      <div className="shadow-lg p-5 shadow-[#00000033] ">
                        <h1 className="text-[14px] font-semibold leading-6 pb-[18px]">
                          Export Settings
                        </h1>
                        <h2 className="text-[14px] text-[#0000005C] pt-[17px] pb-[5px] leading-[18px]">
                          EXPORT FORMAT
                        </h2>
                        <div className="flex justify-between rounded-[8px] p-2 bg-[#E6E6E6]  shadow-inner">
                          <button
                            onClick={handleClickPdfButton}
                            className={` w-[48%] h-[34px]  ${
                              !shownCustomColorButton &&
                              "bg-[#fff]  rounded-[8px] shadow-md shadow-[#00000033"
                            } text-[#000] text-[12px] font-medium ]`}
                          >
                            PDF
                          </button>
                          <button
                            onClick={handleClickDocXButton}
                            className={` w-[48%] h-[34px]  ${
                              shownCustomColorButton &&
                              "bg-[#fff]  rounded-[8px] shadow-md shadow-[#00000033"
                            } text-[#000] text-[12px] font-medium ]`}
                          >
                            DOCX
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </>
  );
}

export default ResumeDownloadButton;
