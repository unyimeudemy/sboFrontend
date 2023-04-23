import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addImageProgressContent: null,
};

export const addImageProgressSlice = createSlice({
  name: "addImageProgress",
  initialState,
  reducers: {
    yesAddImageProgress: (state, action) => {
      state.addImageProgressContent = action.payload;
    },

    noAddImageProgress: (state) => {
      state.addImageProgressContent = null;
    },
  },
});

export const { yesAddImageProgress, noAddImageProgress } = addImageProgressSlice.actions;

export default addImageProgressSlice.reducer;
