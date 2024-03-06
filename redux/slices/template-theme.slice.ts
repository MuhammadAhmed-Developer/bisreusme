import { sampleThemeData } from "@/constants/sampleThemeData";
import updateObj from "@/utils/updateObj";
import { createSlice } from "@reduxjs/toolkit";
import { ThemeConfigurationTypes, ThemeSliceTypes } from "../types";

const initialState: ThemeSliceTypes = {
  themeConfiguration: sampleThemeData,
  isFieldsEmpty: false,
};

const templateThemeSlice = createSlice({
  name: "templateTheme",
  initialState,
  reducers: {
    updateThemeValue: (state, action) => {
      const data = updateObj.updateObject(
        state.themeConfiguration,
        action.payload.path,
        action.payload.value
      ) as ThemeConfigurationTypes;
      state.themeConfiguration = data;
    },
    checkFieldStatus: (state, action) => {
      state.isFieldsEmpty = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { updateThemeValue, checkFieldStatus } =
  templateThemeSlice.actions;
export default templateThemeSlice.reducer;
