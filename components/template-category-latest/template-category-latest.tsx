import ForwardArrowIcon from "@/public/assets/images/svg-Images/forward-arrow-icon";
import Image from "next/image";
import React, { useState } from "react";
import TemplatesModal from "../models/templates-modal";

function TemplateCategoryLatest() {
  const [shownTemplateModal, setShownTemplateModal] = useState(false);
  return (
    <div className="bg-[#fff] shadow-lg px-[20px] rounded-[14px]">
      <h1 className="text-[18px] font-bold text-[#000] pt-[18px] pb-[18px]">
        Templates
      </h1>
      <div className="flex justify-center bg-[#fff] shadow-lg gap-[15px] mb-[23px] overflow-y-scroll">
        <Image
          src="/assets/images/templates/resumeTemplateFirst.webp"
          alt="resumeTemplate"
          width={90}
          height={128}
        />
        <Image
          src="/assets/images/templates/resumeTemplateSecond.webp"
          alt="resumeTemplate"
          width={90}
          height={128}
        />
        <Image
          src="/assets/images/templates/resumeTemplateThird.webp"
          alt="resumeTemplate"
          width={90}
          height={128}
        />
      </div>
      <div
        onClick={() => setShownTemplateModal(true)}
        className="flex items-center justify-center gap-1 pb-5  cursor-pointer z-40"
      >
        <p className="text-[12px] text-primary-blue cursor-pointer">
          Explore Templates
        </p>
        <ForwardArrowIcon />
      </div>

      {shownTemplateModal && (
        <TemplatesModal
          editTemplateModelSize={true}
          shownModel={shownTemplateModal}
          onClose={() => setShownTemplateModal(false)}
        />
      )}
    </div>
  );
}

export default TemplateCategoryLatest;
