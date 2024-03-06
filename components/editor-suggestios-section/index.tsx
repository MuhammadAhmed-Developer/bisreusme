import TemplateCategoryLatest from "../template-category-latest/template-category-latest";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getSuggestions } from "@/redux/slices/suggestions.slice";
import React, { useEffect } from "react";
import {
  addCertification,
  addExperience,
  addSkill,
  addSummary,
  removeCertification,
  removeExperience,
  removeField,
  removeSummary,
  updateOrder,
} from "@/redux/slices/resume.slice";
import PlusIconDeafult from "@/public/assets/images/svg-Images/plus-icon-Deafult";

const defaultSkills = [
  "Written communication",
  "Collaboration skills",
  "Ability to learn quickly",
  "Software proficiency (e.g., Microsoft Office)",
  "Decision-making",
  "Data research",
  "Planning and scheduling",
  "Networking skills",
  "Self-awareness",
  "Relationship management",
];

export default function EditorSuggestionsSection() {
  const resumeDetails: any = useAppSelector((state) => state.resume);
  const suggestion = useAppSelector((state) => state.suggestion);
  const updateData = useAppSelector((state) => state.templateTheme);
  const dispatch = useAppDispatch();
  const suggestionsToRender = React.useMemo(() => {
    return suggestion?.suggestionData?.suggestions?.length > 0
      ? suggestion?.suggestionData.suggestions
      : defaultSkills;
  }, [suggestion?.suggestionData?.suggestions]);

  const suggestionTitle = React.useMemo(() => {
    return (
      suggestion?.suggestionData?.keyWithTrueValue?.charAt(0)?.toUpperCase() +
        suggestion?.suggestionData?.keyWithTrueValue?.slice(1) || "Skills"
    );
  }, [suggestion?.suggestionData?.keyWithTrueValue]);

  const fetchSuggestions = React.useCallback(() => {
    dispatch(
      getSuggestions({ data: resumeDetails.resumeData.jobTitle, updateData })
    );
  }, [
    dispatch,
    resumeDetails.resumeData.jobTitle,
    updateData.themeConfiguration.activeSections,
  ]);
  useEffect(() => {
    setTimeout(() => {
      fetchSuggestions();
    }, 5000);
  }, [fetchSuggestions]);

  const handleAddSkills = (selectedSuggestion: string, index: number) => {
    dispatch(addSkill({ path: "skills", value: selectedSuggestion, index }));
  };
  const handleRemoveSkills = (selectedSuggestion: string, index: number) => {
    dispatch(
      updateOrder({
        path: `skills`,
        updatedData: resumeDetails?.resumeData?.skills?.filter(
          (item: { name: string }) =>
            !item?.name
              ?.toLowerCase()
              .includes(selectedSuggestion?.toLowerCase())
        ),
      })
    );
  };
  const handleAddCertifications = (
    selectedSuggestion: string,
    index: number
  ) => {
    dispatch(
      addCertification({
        path: "certifications",
        value: selectedSuggestion,
        index:
          updateData.themeConfiguration.activeSections?.indexCertificationField,
      })
    );
  };
  const handleRemoveCertifications = (
    selectedSuggestion: string,
    index: number
  ) => {
    dispatch(
      removeCertification({
        path: `${selectedSuggestion}.${index}`,
        index:
          updateData.themeConfiguration.activeSections?.indexCertificationField,
      })
    );
  };

  const handleAddSummary = (selectedSuggestion: string, index: number) => {
    dispatch(addSummary({ path: "summary", value: selectedSuggestion }));
  };
  const handleRemoveSummary = (selectedSuggestion: string, index: number) => {
    dispatch(
      removeSummary({
        path: `${selectedSuggestion}.${index}`,
      })
    );
  };
  const handleAddExperience = (selectedSuggestion: string, index: number) => {
    dispatch(
      addExperience({
        path: "experience",
        value: selectedSuggestion,
        index:
          updateData.themeConfiguration.activeSections?.indexExperienceField,
      })
    );
  };
  const handleRemoveExperience = (
    selectedSuggestion: string,
    index: number
  ) => {
    dispatch(
      removeExperience({
        path: `${selectedSuggestion}.${index}`,
        index:
          updateData.themeConfiguration.activeSections?.indexExperienceField,
      })
    );
  };
  const suggestionSelectHandler = (
    isSuggestionMatched: boolean,
    suggestion: string,
    index: number
  ) => {
    switch (suggestionTitle) {
      case "Skills":
        if (isSuggestionMatched) handleRemoveSkills(suggestion, index);
        else handleAddSkills(suggestion, index);
        break;
      case "Summary":
        if (isSuggestionMatched) handleRemoveSummary(suggestion, index);
        else handleAddSummary(suggestion, index);
        break;
      case "Experience":
        if (isSuggestionMatched) handleRemoveExperience(suggestion, index);
        else handleAddExperience(suggestion, index);
        break;
      case "Certifications":
        if (isSuggestionMatched) handleRemoveCertifications(suggestion, index);
        else handleAddCertifications(suggestion, index);
        break;
      default:
        return null;
    }
  };
  const suggestionsMatchHandler = (suggestion: any) => {
    switch (suggestionTitle) {
      case "Summary":
        return resumeDetails?.resumeData?.["summary"]
          ?.toLowerCase()
          .includes(suggestion?.toLowerCase());
      case "Skills":
      case "Certifications":
        return resumeDetails?.resumeData?.[
          suggestionTitle?.toLowerCase()
        ]?.some((item: { name?: string }) =>
          item?.name?.toLowerCase().includes(suggestion?.toLowerCase())
        );
      case "Experience":
        return resumeDetails?.resumeData?.["experience"]?.some(
          (item: { title?: string }) =>
            item?.title?.toLowerCase().includes(suggestion?.toLowerCase())
        );
      default:
        return false;
    }
  };
  return (
    <div className="h-[100vh] fixed right-4 w-[22%] flex flex-col gap-[10px] ">
      <div className="bg-white rounded-2xl shadow-lg px-[25px] pt-[21px] pb-[15px] ">
        <div className="text-[18px] font-[500] text-black capitalize">
          {suggestionTitle}
        </div>
        <ul className="overflow-y-scroll h-[40vh]">
          {suggestionsToRender?.map((suggestion: any, index: number) => {
            const isSuggestionMatched = suggestionsMatchHandler(suggestion);
            return (
              <div key={index}>
                <li
                  className="mb-4 mt-[21px] cursor-pointer items-center flex gap-3"
                  onClick={() =>
                    suggestionSelectHandler(
                      isSuggestionMatched,
                      suggestion,
                      index
                    )
                  }
                >
                  <div className="flex justify-start gap-3 mt-2">
                    <PlusIconDeafult
                      color={isSuggestionMatched ? "#2871DE" : "#FF0000"}
                      clicked={isSuggestionMatched}
                    />
                  </div>
                  <span
                    className={`text-[14px] mt-3 text-black font-[400] ${
                      isSuggestionMatched && "opacity-30"
                    }`}
                  >
                    {suggestion}
                  </span>
                </li>
                <div className="mt-3">
                  <div className="w-[100%] h-[1px] bg-[#0000005C]"></div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
      <div>
        <TemplateCategoryLatest />
      </div>
    </div>
  );
}
