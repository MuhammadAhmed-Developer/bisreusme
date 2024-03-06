import AddSuggestionIcon from "@/public/assets/images/svg-Images/add-suggestion-icon"

export interface Suggestion {
    suggestion: string;
    icon: () => React.ReactElement
  }

export const Suggestions:Suggestion[] =  [
    {
        suggestion:"Lorem ipsum dolor stur adipiscing. ",
        icon:AddSuggestionIcon
    },
    {
        suggestion:"Lorem ipsum dolor sit ame.",
        icon:AddSuggestionIcon
    },
    {
        suggestion:"Lorem ipsum dolor si adipis.",
        icon:AddSuggestionIcon
    },
    {
        suggestion:"Lorem ipsum dolor.",
        icon:AddSuggestionIcon
    },
    {
        suggestion:"Lorem ipsum dolor eliunt",
        icon:AddSuggestionIcon
    },
    {
        suggestion:"Lorem ipsum dolor si c ",
        icon:AddSuggestionIcon
    },
    {
        suggestion:"Lorem ipsum dolor sit r lit,",
        icon:AddSuggestionIcon
    },
]
export default Suggestions