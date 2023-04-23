import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detail: null,
};

export const safeWorkPractiseSlice = createSlice({
  name: "safeWorkPractise",
  initialState,
  reducers: {
    detailFilled: (state, action) => {
      state.detail = action.payload;
    },

    detailEmpty: (state) => {
      state.detail = null;
    },
  },
});

export const { detailFilled, detailEmpty } = safeWorkPractiseSlice.actions;

export default safeWorkPractiseSlice.reducer;
