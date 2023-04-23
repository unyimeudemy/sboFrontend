import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addAudioProgressContent: null,
};

export const addAudioProgressSlice = createSlice({
  name: "addAudioProgress",
  initialState,
  reducers: {
    yesAddAudioProgress: (state, action) => {
      state.addAudioProgressContent = action.payload;
    },

    noAddAudioProgress: (state) => {
      state.addAudioProgressContent = null;
    },
  },
});

export const { yesAddAudioProgress, noAddAudioProgress } =
  addAudioProgressSlice.actions;

export default addAudioProgressSlice.reducer;
