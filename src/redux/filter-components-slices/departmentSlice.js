import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departmentBolean: false,
};

export const departmentSlice = createSlice({
  name: "departmentPopUp", // this name is used because there is already a deparment slice,
  initialState,
  reducers: {
    departmentPopUp: (state) => {
      state.departmentBolean = !state.departmentBolean;
    },

    noDepartmentPopUp: (state) => {
      if (state.departmentBolean === true) {
        state.departmentBolean = false;
      }
    },
  },
});

export const { departmentPopUp, noDepartmentPopUp } = departmentSlice.actions;

export default departmentSlice.reducer;
