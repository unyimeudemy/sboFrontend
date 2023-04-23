import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchedSBOs: null,
};

export const SBOSlice = createSlice({
  name: "SBO",
  initialState,
  reducers: {
    yesSBO: (state, action) => {
      state.fetchedSBOs = action.payload;
    },

    noSBO: (state) => {
      state.fetchedSBOs = null;
    },
  },
});

export const { yesSBO, noSBO } = SBOSlice.actions;

export default SBOSlice.reducer;
