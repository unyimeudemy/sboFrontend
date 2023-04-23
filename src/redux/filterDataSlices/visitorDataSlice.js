import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visitorDataInitial: null,
};

export const visitorDataSlice = createSlice({
  name: "visitorDataName",
  initialState,
  reducers: {
    visitorQuery: (state, action) => {
      state.visitorDataInitial = action.payload;
    },

    noVisitorQuery: (state) => {
      state.visitorDataInitial = null;
    },
  },
});

export const { visitorQuery, noVisitorQuery } = visitorDataSlice.actions;

export default visitorDataSlice.reducer;
