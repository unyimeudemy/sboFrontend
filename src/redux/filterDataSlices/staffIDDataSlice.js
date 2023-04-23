import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  staffIDDataInitial: null,
};

export const staffIDDataSlice = createSlice({
  name: "staffIDDataName",
  initialState,
  reducers: {
    staffIDQuery: (state, action) => {
      state.staffIDDataInitial = action.payload;
    },

    noStaffIDQuery: (state) => {
      state.staffIDDataInitial = null;
    },
  },
});

export const { staffIDQuery, noStaffIDQuery } = staffIDDataSlice.actions;

export default staffIDDataSlice.reducer;
