import { sampleResumeData } from "@/constants/sampleResumeData";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ResumeData, ResumeSliceState } from "../types";
import updateObj from "@/utils/updateObj";
import generateRandomID from "@/utils/generateRandomID";

const initialState: ResumeSliceState = {
  resumeData: sampleResumeData,
};

export const getResumeDataWithPrompt = createAsyncThunk(
  "resume/getResumeDataWithPrompt",
  async (
    data: {
      value: string;
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
            prompt: `please create resume for me and add relevant sections like skills, summary,jobTitle etc in it return response in pure json without back tics, next line, and json keyword. do not add space in keys. add unique id in every "id" key. follow this format for all sections and send date in YY format ${JSON.stringify(
              sampleResumeData
            )} \n ${data.value}`,
          }),
        }
      )
        .then((response) => response.json())
        .then((response) => {
          try {
            var parsedData = JSON.parse(response?.data);
            parsedData.email = parsedData.email.includes("mailto:")
              ? parsedData.email.replace("mailto:", "")
              : parsedData.email;
            return parsedData as ResumeData;
          } catch (e) {
            console.log("ERROR", e);
            return "";
          }
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

export const downloadDocx = createAsyncThunk(
  "resume/downloadDocx",
  async (
    // data: {
    //   value: string;
    //   callback: (res: any) => void;
    // },
    data: any,
    thunkAPI
  ) => {
    try {
      const response = await fetch(
        "https://ammadai.pythonanywhere.com/api/create-docx",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `${data.resumeDetails?.resumeData?.name}.docx`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        });
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

const resumeSlice: any = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updateImage: (state, action) => {
      state.resumeData.profileImage = action.payload;
    },
    onBlurField: (state, action) => {
      const data = updateObj.updateObject(
        state.resumeData,
        action.payload.path,
        action.payload.value
      ) as ResumeData;

      state.resumeData = data;
    },
    updateOrder: (state, action) => {
      const data = updateObj.updateObject(
        state.resumeData,
        action.payload.path,
        action.payload.updatedData
      ) as ResumeData;

      state.resumeData = data;
    },
    addField: (state, action) => {
      const newObject = {
        ...(sampleResumeData as any)[action.payload.path][0],
      };
      newObject["id"] = generateRandomID()?.toString();

      const data = updateObj.insertObj(
        state.resumeData,
        action.payload.path,
        newObject,
        action.payload.index
      ) as ResumeData;

      state.resumeData = data;
    },
    addPointerField: (state, action) => {
      const data = updateObj.insertObj(
        state.resumeData,
        action.payload.path,
        "",
        action.payload.index
      ) as ResumeData;

      state.resumeData = data;
    },
    removeField: (state, action) => {
      const data = updateObj.deleteObj(
        state.resumeData,
        action.payload.path
      ) as ResumeData;
      state.resumeData = data;
    },
    addSkill: (state, action) => {
      const newObject = {
        ...(sampleResumeData as any)[action.payload.path][0],
      };
      newObject["id"] = generateRandomID()?.toString();
      newObject["name"] = action.payload.value;

      const data = updateObj.insertSkillObj(
        state.resumeData,
        action.payload.path,
        newObject,
        action.payload.index
      ) as ResumeData;

      state.resumeData = data;
    },

    addExperience: (state, action) => {
      const experience = state.resumeData.experience;
      state.resumeData.experience[action.payload.index].title = action.payload.value;
    },
    removeExperience: (state, action) => {
      const experience = state.resumeData.experience;
      state.resumeData.experience[action.payload.index].title = "";
    },
    addCertification: (state, action) => {
      const certifications = state.resumeData.certifications;
      state.resumeData.certifications[action.payload.index].name =
        action.payload.value;
    },

    removeCertification: (state, action) => {
      const certifications = state.resumeData.certifications;
      state.resumeData.certifications[action.payload.index].name = "";
    },

    addSummary: (state, action) => {
      state.resumeData.summary = action.payload.value;
    },
    removeSummary: (state, action) => {
      state.resumeData.summary = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getResumeDataWithPrompt.fulfilled, (state, action) => {
      state.resumeData = action.payload;
    });
  },
});

export const {
  onBlurField,
  updateOrder,
  addField,
  removeField,
  addPointerField,
  addSkill,
  updateImage,
  addCertification,
  removeCertification,
  addSummary,
  removeSummary,
  addExperience,
  removeExperience,
} = resumeSlice.actions;
export default resumeSlice.reducer;
