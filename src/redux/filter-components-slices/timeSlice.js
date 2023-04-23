import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeBolean: false,
};

export const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    timePopUp: (state) => {
      state.timeBolean = !state.timeBolean;
    },

    noTimePopUp: (state) => {
      if (state.timeBolean === true) {
        state.timeBolean = false;
      }
    },
  },
});

export const { timePopUp, noTimePopUp } = timeSlice.actions;

export default timeSlice.reducer;
