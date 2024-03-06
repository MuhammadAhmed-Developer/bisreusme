import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LetterSliceState, SampleCoverLetter } from "../types";
import SampleCoverLetterData from "@/constants/sampleCoverLetterData";

const initialState: LetterSliceState = {
  letterData: SampleCoverLetterData,
};


export const getCoverLetter = createAsyncThunk(
  "getCoverLetter",
  async (
    data: {
      value: any;
      personal?: any;
      callback: (res: any) => void;
    },
    thunkAPI
    ) => {
      try {
        const response = await fetch(
        "https://ammadai.pythonanywhere.com/api/ai",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: `please create a cover letter for me and give the company name from my experiences my personal details are these my name is ${
              data.value.name || data.value.resumeData.name
            }, my email is ${
              data.value.email || data.value.resumeData.email
            }, my phone number is ${
              data.value.phone || data.value.resumeData.phone
            }my address is ${data.value.address}, my last experiences in ${
              data.value.company ||  data.value.resumeData.experience[0].company
            }, my perv job title is ${data.value.jobTitle} and  job discription is ${
              data.value.jobDescription || data.value.resumeData.jobTitle
            }`,
          }),
        }
      )
        .then((response) => response.json())
        .then((response) => {
            var parsedData = response?.data;
            return parsedData as SampleCoverLetter;
        });

      if (response) {
        data.callback(response);
        return response;
      }

      data.callback(response);
      return thunkAPI.rejectWithValue({
        message: "Request Failed",
      });
    } catch (error: any) {
      console.log("errr", error);
      data.callback(error.message);

      return thunkAPI.rejectWithValue({
        message: error.message,
      });
    }
  }
);

const letterSlice = createSlice({
  name: "letter",
  initialState,
  reducers: {
    updateLetterData: (state, action) => {
      state.letterData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCoverLetter.fulfilled, (state, action) => {
      state.letterData = action.payload as any;
    });
  },
});

export const { updateLetterData } = letterSlice.actions;
export default letterSlice.reducer;
