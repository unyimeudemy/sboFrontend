import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sboFormCheckContent: null,
};

export const sboFormCheckSlice = createSlice({
  name: "sboFormCheck",
  initialState,
  reducers: {
    yesSboFormCheck: (state, action) => {
      state.sboFormCheckContent = action.payload;
    },

    noSboFormCheck: (state) => {
      state.sboFormCheckContent = null;
    },
  },
});

export const { yesSboFormCheck, noSboFormCheck } = sboFormCheckSlice.actions;

export default sboFormCheckSlice.reducer;
