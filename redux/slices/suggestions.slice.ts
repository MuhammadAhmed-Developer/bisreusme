import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import axios from "axios";
export const getSuggestions: any = createAsyncThunk(
  "resume/getSuggestions",
  async (data: any, thunkAPI: any) => {
    try {
      const values = data?.updateData?.themeConfiguration?.activeSections;
      function getKeyForTrueValue(values: any) {
        for (const key in values) {
          if (values[key] === true) {
            return key;
          }
        }
        return null;
      }
      const keyWithTrueValue = getKeyForTrueValue(values);
      let resultValue: string;
      switch (keyWithTrueValue) {
        case "experience":
          resultValue = "expInt50";
          break;
        case "summary":
          resultValue = "sumSen5";
          break;
        case "certifications":
          resultValue = "Certs8";
          break;
        case "skills":
          resultValue = "swSkills20";
          break;

        default:
          resultValue = "swSkills20";
          break;
      }

      function capitalizeFirstLetters(str: string) {
        if (str.toLowerCase() === "hr manager") {
          return "HR Manager";
        } else {
          return str.replace(/\b\w/g, (char) => char.toUpperCase());
        }
      }

      const capitalizedData: string = capitalizeFirstLetters(data?.data);
      //api code
      if (capitalizedData?.length > 5) {
        const dataFromApi = await axios.post("/api/getSuggestions", {
          JobTitle: capitalizedData,
          resultValue,
        });
        return {
          suggestions: dataFromApi?.data,
          keyWithTrueValue,
        };
      }
    } catch (error: any) {
      console.error("error", error);
      return thunkAPI.rejectWithValue({
        message: error.message,
      });
    }
  }
);

const suggestionSlice: any = createSlice({
  name: "suggestion",
  initialState: {
    suggestionData: [],
    keyWithTrueValue: "skills",
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(getSuggestions.fulfilled, (state: any, action: any) => {
      state.suggestionData = action.payload;
      state.keyWithTrueValue = action?.payload?.keyWithTrueValue;
    });
  },
});

export const {} = suggestionSlice.actions;
export default suggestionSlice.reducer;
