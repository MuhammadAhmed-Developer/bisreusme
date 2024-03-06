import { getResumeDataWithPrompt } from "@/redux/slices/resume.slice";
import { useAppDispatch } from "@/redux/store";
import React, { useState } from "react";
type AiPromptTypes = {
  aiPrompttext: string;
  setAiPromptText: React.Dispatch<React.SetStateAction<string>>;
};
function EditorAiSection({ aiPrompttext, setAiPromptText }: AiPromptTypes) {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);

  const handleTextChange = (e: any) => {
    setAiPromptText(e.target.value);
  };

  const handleSendPrompt = () => {
    if (!aiPrompttext || aiPrompttext === "") return;

    setLoading(true);

    dispatch(
      getResumeDataWithPrompt({
        value: aiPrompttext,
        callback(res) {
          setLoading(false);
        },
      })
    );
  };

  return (
    <div className="px-4 mt-3">
      <h2 className="text-[14px] text-[#0000005C]">PROMPT</h2>
      <div className="flex flex-col  overflow-scroll gap-[18px]  h-[60vh] overflow-x-auto ">
        <textarea
          onChange={handleTextChange}
          value={aiPrompttext}
          className="w-full overflow-scroll h-[65%] outline-none border text-[12px] !py-[14px] !px-[11px] rounded-[5px]"
          placeholder="my name is john doe, my email is johndoe@example.com my phone number is 03123456789. i have experience of 6 years in HumanWorks Inc., New York, NY  from August 2015 to December 2021 as HR Manager and 2 years in SenseWorks Inc, New York, NY from May 2013 to August 2015 as Project Manager. my education is MS Human Resources Management from New York University 2002 to 2004 and B.A Psychology from New York University 2000 to 2002. i have certification in Profession in Human Resources − PHR,   HR Certification Institute."
        ></textarea>
        <div className="flex flex-col gap-[14px] items-center">
          <button
            onClick={handleSendPrompt}
            className="bg-primary-blue w-[80%] py-[8px] text-[14px] font-medium text-white rounded-full"
          >
            {loading ? "loading..." : " Generate Resume"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditorAiSection;
