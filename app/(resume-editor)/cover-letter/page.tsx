"use client";
import Navbar from "@/components/navbar/navbar";
import React, { useRef, useState } from "react";
import { TiTick } from "react-icons/ti";
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  getCoverLetter,
  updateLetterData,
} from "@/redux/slices/cover-letter.slice";
import Footer from "@/components/footer/footer";

export default function CoverLetter() {
  const dispatch = useAppDispatch();
  const LetterDetails: any = useAppSelector((state) => state.letter);
  const [step, setStep] = useState(1);
  const textareaRef: any = useRef(null);
  const [isCopied, setIsCopied] = useState(false);
  const [complete, setComplete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [experienceInfo, setExperienceInfo] = useState({
    company: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    jobDescription: "",
  });
  const steps = ["Info", "Experience", "Cover Letter"];

  const handleNext = () => {
    setCurrentStep((prev) => (prev === steps.length ? prev : prev + 1));
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => (prev === 1 ? prev : prev - 1));
    setStep(step - 1);
  };

  const handleGenerateCoverLetter = () => {
    console.log("generate cover letter");
    try {
      setLoading(true);
      const coverLetterData = { ...userInfo, ...experienceInfo };
      console.log("Merged Values:", coverLetterData);

      const coverLetterPayload: any = {
        value: coverLetterData,
        callback: (res: any) => {
          setLoading(false);
        },
      };

      dispatch(getCoverLetter(coverLetterPayload));
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleInputChange = (field: any, value: any) => {
    if (step === 1) {
      setUserInfo((prevInfo) => ({ ...prevInfo, [field]: value }));
    } else if (step === 2) {
      setExperienceInfo((prevInfo) => ({ ...prevInfo, [field]: value }));
    }
  };

  const handleCopyToClipboard = () => {
    textareaRef?.current?.select();
    document.execCommand("copy");
    window?.getSelection()?.removeAllRanges();
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateLetterData(e.target.value));
  };

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div>
      <Navbar />
      <div>
        <div className="bg-[#EAF1FC] h-auto w-full">
          <div className="px-3 sm:px-0">
            <h1 className="pt-[116px]  text-center text-[24px] sm:text-[32px] lg:text-[48px] text-[#102D59] font-Claris-sans">
              Create Cover <span className=" text-[#2871DE] ">Letter</span>{" "}
            </h1>
            <p className="text-center pt-5 pb-11 sm:px-[20px] lg:px-[170px] text-[14px] sm:text-[20px] font-normal text-[#5E5E5F] font-poppins">
              Elevate Your Cover Letter with{" "}
              <span className="text-black font-bold">
                Artificial Intelligence
              </span>
              : A Comprehensive Guide to Crafting a Compelling Cover Letter.
              Seamlessly Generate Personalized Content with{" "}
              <span className="text-black font-bold">AI-Powered</span>{" "}
              Assistance.
            </p>
          </div>
        </div>
        <div className="mt-10 text-center mb-20">
          {/* Stepper */}
          <div className="flex justify-center items-center">
            <div className="bg-white relative h-[100vh] border-[2px]  shadow-lg py-10 px-5  lg:w-[70%] md:w-[90%] w-[100%]">
              <div className="text-center">
                <div className="flex items-center justify-between ">
                    <div className="flex justify-between w-[100%] sm:px-[20px] lg:px-[45px]">
                      {steps?.map((step, i) => (
                        <div
                          key={i}
                          className={`step-item  ${
                            currentStep === i + 1 && "active"
                          } ${
                            (i + 1 < currentStep || complete) && "complete"
                          } ${i == 0 && "!flex !justify-start !items-start"} ${
                            i == 2 && "!flex !justify-end !items-end !w-[1200%]"
                          }  ${
                            i == 1 &&
                            "!flex !justify-end !items-end left-0 !w-[1200%]"
                          }`}
                        >
                          <div className={`step `}>
                            {i + 1 < currentStep || complete ? (
                              <TiTick size={24} />
                            ) : (
                              i + 1
                            )}
                          </div>
                          <p className="text-gray-500 !-mr-7">{step}</p>
                        </div>
                      ))}
                    </div>
                </div>
              </div>
              <p className="text-center lg:px-10 md:px-5 px-0  text-[14px] sm:text-[20px] font-normal text-[#5E5E5F] font-poppins">
                {/* Content for the first two steps */}
                {step === 1 && (
                  <div className="text-start">
                    <section className="text-gray-600 body-font relative">
                      <div className="container pt-5 mx-auto">
                        <div className=" mx-auto">
                          <div className="leading-7 font-bold text-lg text-primary-blue">
                            Personal Info
                          </div>
                          <div className="flex flex-wrap -m-2">
                            <div className="p-2 lg:w-[50%] md:w-[50%] w-[100%]">
                              <div className="relative">
                                <label className="leading-7 font-bold text-sm text-gray-600">
                                  Name
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  value={userInfo.name}
                                  onChange={(e) =>
                                    handleInputChange("name", e.target.value)
                                  }
                                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-blue-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                              </div>
                            </div>
                            <div className="p-2 lg:w-[50%] md:w-[50%] w-[100%]">
                              <div className="relative">
                                <label className="leading-7 font-bold  text-sm text-gray-600">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  value={userInfo.email}
                                  onChange={(e) =>
                                    handleInputChange("email", e.target.value)
                                  }
                                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-blue-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                              </div>
                            </div>
                            <div className="p-2 lg:w-[50%] md:w-[50%] w-[100%]">
                              <div className="relative">
                                <label className="leading-7 font-bold  text-sm text-gray-600">
                                  Phone
                                </label>
                                <input
                                  type="phone"
                                  id="phone"
                                  name="phone"
                                  value={userInfo.phone}
                                  onChange={(e) =>
                                    handleInputChange("phone", e.target.value)
                                  }
                                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-blue-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                              </div>
                            </div>
                            <div className="p-2 lg:w-[50%] md:w-[50%] w-[100%]">
                              <div className="relative">
                                <label className="leading-7 font-bold  text-sm text-gray-600">
                                  Address
                                </label>
                                <input
                                  type="text"
                                  id="address"
                                  value={userInfo.address}
                                  name="address"
                                  onChange={(e) =>
                                    handleInputChange("address", e.target.value)
                                  }
                                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-blue-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                )}
                {step === 2 && (
                  <div>
                    <div className="text-start mt-5 w-full">
                      <div className="relative">
                        <label className="leading-7 font-bold text-lg text-primary-blue">
                          Last Experience
                        </label>
                        <div className="flex md:flex-wrap lg:flex-wrap flex-wrap gap-x-2 gap-y-3">
                          <div className="flex items-center flex-wrap md:flex-nowrap lg:flex-nowrap gap-2 w-[100%]">
                            <div className=" lg:w-[50%] md:w-[100%] w-[100%]">
                              <div className="relative">
                                <label className="leading-7 font-bold  text-sm text-gray-600">
                                  Company Name
                                </label>
                                <input
                                  type="text"
                                  id="company"
                                  name="company"
                                  value={experienceInfo.company}
                                  onChange={(e) =>
                                    handleInputChange("company", e.target.value)
                                  }
                                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-blue-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                              </div>
                            </div>
                            <div className=" lg:w-[50%] md:w-[100%] w-[100%]">
                              <div className="relative">
                                <label className="leading-7 font-bold  text-sm text-gray-600">
                                  Job Title
                                </label>
                                <input
                                  type="text"
                                  id="jobTitle"
                                  name="jobTitle"
                                  value={experienceInfo.jobTitle}
                                  onChange={(e) =>
                                    handleInputChange(
                                      "jobTitle",
                                      e.target.value
                                    )
                                  }
                                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-blue-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                              </div>
                            </div>
                            <div className="lg:w-[50%] md:w-[100%] w-[100%] flex flex-wrap lg:flex-nowrap md:flex-wrap gap-x-2">
                              <div className="relative">
                                <label className="leading-7 font-bold  text-sm text-gray-600">
                                  Start Date
                                </label>
                                <input
                                  type="date"
                                  id="startDate"
                                  name="startDate"
                                  value={experienceInfo.startDate}
                                  onChange={(e) =>
                                    handleInputChange(
                                      "startDate",
                                      e.target.value
                                    )
                                  }
                                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-blue-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                              </div>
                              <div className="relative">
                                <label className="leading-7 font-bold  text-sm text-gray-600">
                                  End Date
                                </label>
                                <input
                                  type="date"
                                  id="endDate"
                                  name="endDate"
                                  value={experienceInfo.endDate}
                                  onChange={(e) =>
                                    handleInputChange("endDate", e.target.value)
                                  }
                                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-blue-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="lg:w-[100%] md:[100%] w-[100%] mt-3">
                            <label
                              htmlFor="description"
                              className="leading-7 font-bold  text-sm text-gray-600"
                            >
                              Job Description
                            </label>
                            <textarea
                              id="jobDescription"
                              name="jobDescription"
                              placeholder="As a Marketing Manager at XYZ Digital Solutions, I successfully managed client relationships and implemented strategic marketing campaigns, leading to a 20% increase in sales."
                              value={experienceInfo.jobDescription}
                              onChange={(e) =>
                                handleInputChange(
                                  "jobDescription",
                                  e.target.value
                                )
                              }
                              className="w-full overflow-y-scroll text-black !p-2 bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-blue-300 h-32 text-base outline-none  py-1 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Content for step 3 */}
                {step === 3 && (
                  <div>
                    {loading &&
                      <div className="h-[100%] left-0 top-0 absolute z-10  w-[100%] flex justify-center items-center backdrop-blur-sm">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-10 w-10 text-primary-blue"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            stroke="currentColor"
                            stroke-width="4"
                            cx="12"
                            cy="12"
                            r="10"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>{" "}
                      </div>
}
                      <div className="mt-5">
                        <div className="leading-7 text-start mb-3  font-bold text-lg text-primary-blue">
                          Cover Letter 📩
                        </div>
                        <textarea
                          ref={textareaRef}
                          value={LetterDetails.letterData}
                          onChange={handleTextareaChange}
                          className="w-full focus:outline-none text-black resize-none h-[40vh] text-[15px] !px-2 !py-3 overflow-scroll p-3 border border-blue-300 "
                        ></textarea>
                        <div className="flex gap-x-3 justify-end">
                          <button
                            className="bg-primary-blue text-white w-10 h-10 mt-4 rounded-full flex justify-center items-center"
                            onClick={handleCopyToClipboard}
                          >
                            {isCopied ? (
                              <TiTick size={24} />
                            ) : (
                              <MdOutlineContentCopy
                                className="text-white"
                                size={20}
                              />
                            )}
                          </button>
                          <Link
                            href={"https://mail.google.com/"}
                            target="_blank"
                            className="bg-primary-blue text-white w-10 h-10 mt-4 rounded-full flex justify-center items-center"
                            onClick={handleCopyToClipboard}
                          >
                            <IoShareSocialOutline
                              className="text-white"
                              size={20}
                            />
                          </Link>
                        </div>
                      </div>
                  </div>
                )}
              </p>

              {/* Previous and Next buttons */}

                <div
                  className={`text-end gap-4  ${
                    step == 3 ? "justify-start" : "justify-end"
                  }  flex lg:px-10 md:px-5 px-0 mt-4`}
                >
                  {step > 1 && (
                    <div>
                      <button
                        className={`bg-primary-blue flex items-center rounded-full w-10 h-10 justify-center  text-white ${
                          step === 3 && "-mt-[54px]"
                        }`}
                        onClick={handlePrevious}
                        disabled={currentStep === 1}
                      >
                        <IoIosArrowBack size={18} />
                      </button>
                    </div>
                  )}
                  {step < 3 && (
                    <div
                      className={`flex`}
                      onClick={
                        step === 2 ? handleGenerateCoverLetter : undefined
                      }
                    >
                      <button
                        className="bg-primary-blue rounded-full w-10 h-10 flex items-center justify-center  text-white "
                        onClick={handleNext}
                      >
                        <MdNavigateNext size={24} />
                      </button>
                    </div>
                  )}
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
