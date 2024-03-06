import { updateThemeValue } from "@/redux/slices/template-theme.slice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import resumeSlice from "./slices/resume.slice";
import authSlice from "./slices/auth.slice";
import templateThemeSlice from "./slices/template-theme.slice";
import {
  persistReducer,
  REHYDRATE,
  PERSIST,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import suggestionsSlice from "./slices/suggestions.slice";
import coverLetterSlice from "./slices/cover-letter.slice";

const rootReducer = combineReducers({
  resume: resumeSlice,
  auth: authSlice,
  templateTheme: templateThemeSlice,
  suggestion: suggestionsSlice,
  letter: coverLetterSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PERSIST],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const persistedStore = persistStore(store);