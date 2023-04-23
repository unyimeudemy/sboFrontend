import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: null,
};

export const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    tabChosen: (state, action) => {
      state.title = action.payload;
    },

    tabNotChosen: (state) => {
      state.title = null;
    },
  },
});

export const { tabChosen, tabNotChosen } = tabSlice.actions;

export default tabSlice.reducer;
