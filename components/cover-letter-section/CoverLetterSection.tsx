import {
  getCoverLetter,
  updateLetterData,
} from "@/redux/slices/cover-letter.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useRef, useState } from "react";
import { TiTick } from "react-icons/ti";
import { MdOutlineContentCopy } from "react-icons/md";

function CoverLetterSection() {
  const dispatch = useAppDispatch();
  const resumeData = useAppSelector((state) => state.resume);
  const LetterDetails: any = useAppSelector((state) => state.letter);
  const [isCopied, setIsCopied] = useState(false);
  const [coverLetterData, setCoverLetterData] = useState("");
  const [loading, setLoading] = useState(false);
  const textareaRef: any = useRef(null);
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateLetterData(e.target.value));
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

  const handleCoverLetter = () => {
    try {
      setLoading(true);
      dispatch(
        getCoverLetter({
          value: resumeData,
          callback(res: any) {
            setLoading(false);
            setCoverLetterData(res.data);
          },
        })
      );
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 mt-3">
      <div className="flex justify-between items-center">
        <h2 className="text-[14px] text-[#0000005C]  font-bold">
          Last Experience
        </h2>
      </div>

      <div className="flex flex-col gap-[18px] relative">
        {loading && (
          <div className="min-h-[270px] w-full flex items-center justify-center absolute">
            loading...
          </div>
        )}
        <textarea
          ref={textareaRef}
          onChange={handleTextareaChange}
          value={LetterDetails.letterData}
          disabled={loading}
          style={{
            opacity: loading ? 0.5 : 1,
          }}
          className="w-full min-h-[270px] resize-none outline-none border text-[12px] !py-[14px] !px-[11px] rounded-[5px] overflow-scroll"
          placeholder="I am excited to apply for the [Position Title] role at [Company Name], as advertised. With a proven track record in [relevant skills/industry experience], I am eager to contribute my expertise in [specific relevant areas] to drive [specific goals or outcomes] for your esteemed organization. My passion for [relevant industry or field] combined with my dedication to [specific values or principles] positions me as a strong candidate to [achieve or contribute to specific objectives] outlined in the job description."
        ></textarea>
      </div>
      <div className="flex justify-between items-center mt-2">
        <button
          className="bg-primary-blue text-white px-4 py-1 rounded-full  text-[12px]"
          onClick={handleCoverLetter}
        >
          {loading ? "Loading..." : "Update"}
        </button>
        <button
          className="bg-primary-blue text-white w-7 h-7 mr-3 mb-2 rounded-full flex justify-center items-center"
          onClick={handleCopyToClipboard}
        >
          {isCopied ? (
            <TiTick size={24} />
          ) : (
            <MdOutlineContentCopy className="text-white" size={16} />
          )}
        </button>
      </div>
    </div>
  );
}

export default CoverLetterSection;
