import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  titleDataInitial: null,
};

export const titleDataSlice = createSlice({
  name: "titleDataName",
  initialState,
  reducers: {
    titleQuery: (state, action) => {
      state.titleDataInitial = action.payload;
    },

    noTitleQuery: (state) => {
      state.titleDataInitial = null;
    },
  },
});

export const { titleQuery, noTitleQuery } = titleDataSlice.actions;

export default titleDataSlice.reducer;
