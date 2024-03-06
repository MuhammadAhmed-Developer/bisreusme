"use client";
import React, { useState } from "react";
import Image from "next/image";
import style from "@/style/resumePrompt/resumePrompt.module.css";
import { useAppDispatch } from "@/redux/store";
import { getResumeDataWithPrompt } from "@/redux/slices/resume.slice";
import PromptModalButton from "../prompt-modal-button/prompt-modal-button";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  onComplete?: (value?: any) => void;
  handleCreateUsingAI?: (value?: any) => void;
}

function PromptModal(props: ModalProps) {
  const dispatch = useAppDispatch();
  const { isOpen, onClose, onComplete } = props;

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTextChange = (e: any) => {
    setText(e.target.value);
  };

  const handleSendPrompt = () => {
    if (!text || text === "") return;
    setLoading(true);
    
    
    dispatch(
      getResumeDataWithPrompt({
        value: text,
        callback(res) {
          setLoading(false);
          onComplete && onComplete(res)
        },
      })
      );
      localStorage.removeItem('clickOnAiButton')
  };

  
  const catagory = [
    'Name',
    'Email',
    'Phone',
    'Intro',
    'JobTitle',
    'Skills',
    'Experience',
    'Education',
    'Language',
    'Address',
    'Achievements',
    'Awards',
    'Projects', 
    'Certifications' 
  ]
  return (
    <div className={isOpen ? style.main : style.mainNone}>
      <div className={isOpen ? style.card : style.cardNone}>
        <Image
          alt="cross"
          src={"/assets/images/circleCrossIcon.svg"}
          width={33}
          height={32}
          className={style.crossIcon}
          onClick={onClose}
        />

        <h1 className='text-[40px] font-semibold'>Enter your Prompt</h1>
        <p className='text-[16px] font-normal text-[#5E5E5F] pb-[44px]'>You can add following points in prompt</p>

        <div className="flex flex-wrap justify-center gap-[5px] mb-[27px]">
         { 
           catagory.map((item,i) => (
            <PromptModalButton key={i} catagory={item} />
            ))
          }
          </div>

        <textarea
          value={text}
          rows={10}
          onChange={handleTextChange}
          className="w-[100%] !px-[12px] !py-[15px] text-[12px] border-[1px] border-[#ccc] resize-none'
          outline-none rounded-[10px] h-[231px] "
          placeholder="I am Wishaque. I am a HR manager , my mail jhonelia@gmail.com & phone number is 0300-5555555, adress amin town canada, im intrested in reading, playing, singing i have experience of 6 years in HumanWorks Inc., New York, NY from August 2015 to December 2021 and 2 years in SenseWorks Inc, New York, NY from May 2013 to August 2015 and 3 years in DeliWorks Inc, New York, NY from January 2010 to May 2013 i have professinal memberships in FLSA Classifications, Compensation Surveys, Manual (without HRIS) on and off boarding processes, Compliance: employee records and documentation my education is MS Human Resources Management New York University and B.A Psychology New York University i have certification in Profession in Human Resources − PHR, HR Certification Institute , SHRM Certified Professional − SHRM − CP, Society of Human Resources Management"
          onInput={(e: any) => {
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + 1 + "px";
          }}
          />
        <button
          onClick={handleSendPrompt}
          className={`${style.ButtonStyle}`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Generate Resume"}
        </button>
      </div>
    </div>
  );
}

export default PromptModal;
