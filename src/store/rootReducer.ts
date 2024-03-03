import { combineReducers } from "@reduxjs/toolkit";
import { applicationSlice } from "./slices/applicationSlice";
import { promptSlice } from "./slices/promptSlice";

export const rootReducer = combineReducers({
  applicationSlice: applicationSlice.reducer,
  promptSlice: promptSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
