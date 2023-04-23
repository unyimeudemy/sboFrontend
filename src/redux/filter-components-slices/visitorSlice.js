import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visitorBolean: false,
};

export const visitorSlice = createSlice({
  name: "visitor",
  initialState,
  reducers: {
    visitorPopUp: (state) => {
      state.visitorBolean = !state.visitorBolean;
    },

    noVisitorPopUp: (state) => {
      state.visitorBolean = false;
    },
  },
});

export const { visitorPopUp, noVisitorPopUp } = visitorSlice.actions;

export default visitorSlice.reducer;
