import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  staffIDBolean: false,
};

export const staffIDSlice = createSlice({
  name: "staffID",
  initialState,
  reducers: {
    staffIDPopUp: (state) => {
      state.staffIDBolean = !state.staffIDBolean;
    },

    noStaffIDPopUp: (state) => {
      if (state.staffIDBolean === true) {
        state.staffIDBolean = false;
      }
    },
  },
});

export const { staffIDPopUp, noStaffIDPopUp } = staffIDSlice.actions;

export default staffIDSlice.reducer;
