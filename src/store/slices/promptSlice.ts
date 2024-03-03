import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPromptState {
  promptImage: string | undefined;
}

const initialState: IPromptState = {
  promptImage: undefined,
};

export const promptSlice = createSlice({
  name: "promptSlice",
  initialState,
  reducers: {
    setPromptImage: (state: IPromptState, action: PayloadAction<string>) => {
      state.promptImage = action.payload;
    },
  },
});

export const { setPromptImage } = promptSlice.actions;
export default promptSlice.reducer;
