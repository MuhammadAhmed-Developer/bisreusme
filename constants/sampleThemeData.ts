import { ThemeConfigurationTypes } from "@/redux/types";

export const sampleThemeData: ThemeConfigurationTypes = {
  fontSize: {
    subHeading: 20,
    bodyText: 12,
    titleHeading: 14,
    mainHeading: 26,
  },
  fontFamily: "Inter",
  themeColor: {
    primaryColor: "",
    secondaryColor: "",
  },
  fontWeight: {
    heading: 700,
    body: 400,
  },
  pageMargin: 32,
  sectionSpacing: 20,
  downloadType: "pdf",
  overflowDetected: false,
  visibleSections: {
    custom: false,
    languages: false,
    certifications: false,
    awards: false,
    courses: false,
  },
  activeSections: {
    skills: false,
    summary: false,
    certifications: false,
    experience: false,
  },
  isCreateUsingAi: false
};
