import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addVideoProgressContent: null,
};

export const addVideoProgressSlice = createSlice({
  name: "addVideoProgress",
  initialState,
  reducers: {
    yesAddVideoProgress: (state, action) => {
      state.addVideoProgressContent = action.payload;
    },

    noAddVideoProgress: (state) => {
      state.addVideoProgressContent = null;
    },
  },
});

export const { yesAddVideoProgress, noAddVideoProgress } =
  addVideoProgressSlice.actions;

export default addVideoProgressSlice.reducer;
