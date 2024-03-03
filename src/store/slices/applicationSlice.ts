import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IApplicationState {
  authorized: boolean;
}

export interface ILoaderState {
  showLoader: boolean;
  title: "Loading";
  description: "This may take a few seconds, please don’t clote this page.";
  withProgressBar: boolean;
  estimatedProgressTime: number | undefined;
}

export interface IImageEditorState {
  loader: ILoaderState;
  showImageEditorPlaceholder: boolean;
  showNoEnoughCredits: boolean;
  showEditorToolbarOnResultPage: boolean;
}

const initialState: IApplicationState = {
  authorized: false,
};

export const applicationSlice = createSlice({
  name: "applicationSlice",
  initialState,
  reducers: {
    setAuthorized: (
      state: IApplicationState,
      action: PayloadAction<boolean>,
    ) => {
      state.authorized = action.payload;
    },
  },
});

export const { setAuthorized } = applicationSlice.actions;

export default applicationSlice.reducer;
