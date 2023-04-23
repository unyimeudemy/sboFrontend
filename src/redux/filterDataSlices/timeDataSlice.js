import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeDataInitial: null,
};

export const timeDataSlice = createSlice({
  name: "timeDataName",
  initialState,
  reducers: {
    timeQuery: (state, action) => {
      state.timeDataInitial = action.payload;
    },

    noTimeQuery: (state) => {
      state.timeDataInitial = null;
    },
  },
});

export const { timeQuery, noTimeQuery } = timeDataSlice.actions;

export default timeDataSlice.reducer;
