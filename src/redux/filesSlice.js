import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filesContent: null,
};

export const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    yesFiles: (state, action) => {
      state.filesContent = action.payload;
    },

    noFiles: (state) => {
      state.filesContent = null;
    },
  },
});

export const { yesFiles, noFiles } = filesSlice.actions;

export default filesSlice.reducer;
