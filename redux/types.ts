// Resume data types

export interface ResumeSliceState {
  resumeData: ResumeData;
}
export interface LetterSliceState {
  letterData: SampleCoverLetter;
}

export interface ResumeData {
  phone: string;
  name: string;
  jobTitle: string;
  email: string;
  profileImage: string;
  address: string;
  websiteUrl: string;
  socialLinkName: string;
  summary: string;
  skills: ListField[];
  experience: Experience[];
  education: Education[];
  interests: string[];
  hobbies: string[];
  certifications: Certification[];
  languages: ListField[];
  projects: Project[];
  publications: Publication[];
  references: Reference[];
  awards: Award[];
  courses: Course[];
  volunteer: Volunteer[];
  achievements: Achievement[];
  custom: Custom[];
}

export interface SampleCoverLetter {
  name: string;
  email: string;
  phone: string;
  address: string;
  company: string;
  startDate: string;
  endDate: string;
  jobDescription: string;
  jobTitle: string;
}

export interface ListField {
  name: string;
  level?: number;
  id: string;
}

export interface Experience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  id: string;
}

export interface Education {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  id: string;
}

export interface Certification {
  name: string;
  organization: string;
  startDate: string;
  endDate: string;
  id: string;
}

export interface Project {
  name: string;
  description: string;
  id: string;
}

export interface Publication {
  name: string;
  publisher: string;
  id: string;
}

export interface Reference {
  name: string;
  reference: string;
  id: string;
}

export interface Award {
  name: string;
  organization: string;
  year: string;
  id: string;
}

export interface Course {
  name: string;
  organization: string;
  startDate: string;
  endDate: string;
  id: string;
}

export interface Volunteer {
  organization: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  id: string;
}

export interface Achievement {
  description: string;
  name: string;
  role: string;
  startDate: string;
  endDate: string;
  id: string;
}

export interface Custom {
  title: string;
  description: string;
  id: string;
}

export interface TemplateSectionsTypes {
  summary?: boolean;
  experience?: boolean;
  skills?: boolean;
  education?: boolean;
  interests?: boolean;
  awards?: boolean;
  languages?: boolean;
  experties?: boolean;
  references?: boolean;
}

export interface TemplateColorsTypes {
  secondaryColor?: string;
  primaryColor?: string;
  templateFirstColor: string;
  templateSecondColor: string;
  templateThirdColor: string;
  templateFourthColor: string;
  templateFifthColor: string;
  borderColor: string;
}

export interface SelectedResumeTemplateTypes {
  templateImage: string;
  templateName: string;
  width: number;
  height: number;
  templateDetails: string;
  templateSections: TemplateSectionsTypes;
  templateColorsLength: number;
  component?: any;
  colors: TemplateColorsTypes;
  templateId: number;
  category: string;
}

export interface ThemeColorTypes {
  primaryColor: string;
  secondaryColor: string;
}

export interface FontSizeTypes {
  bodyText: number;
  subHeading: number;
  titleHeading: number;
  mainHeading: number;
}
export interface FontWeightTypes {
  heading: number;
  body: number;
}

interface VisibleSectionsTypes {
  custom: boolean;
  languages: boolean;
  certifications: boolean;
  awards: boolean;
  courses: boolean;
}

interface ActiveSectionTypes {
  skills: boolean;
  summary: boolean;
  certifications: boolean;
  experience: boolean;
  indexCertificationField?: number;
  indexExperienceField?:number
}

export interface ThemeSliceTypes {
  themeConfiguration: ThemeConfigurationTypes;
  isFieldsEmpty: boolean;
}

export interface ThemeConfigurationTypes {
  fontSize: FontSizeTypes;
  fontFamily: string;
  themeColor: ThemeColorTypes;
  pageMargin: number;
  fontWeight: FontWeightTypes;
  sectionSpacing: number;
  overflowDetected: boolean;
  downloadType: "pdf" | "doc";
  visibleSections: VisibleSectionsTypes;
  activeSections: ActiveSectionTypes;
  isCreateUsingAi: boolean;
}
export interface PricingCardProps {
  card: {
    cardType: string;
    cardPrice: string;
    cardDescription: string;
    cardPlan: string;
    cardFacilities: string[];
    mainImage: { url: () => string; alt: string };
    cardGroup: string;
    popular: boolean;
  };
}
