import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departmentStaffBolean: false,
};

export const departmentStaffSlice = createSlice({
  name: "departmentStaffPopUp", // this name is used because there is already a deparment slice,
  initialState,
  reducers: {
    departmentStaffPopUp: (state) => {
      state.departmentStaffBolean = !state.departmentStaffBolean;
    },

    noDepartmentStaffPopUp: (state) => {
      if (state.departmentStaffBolean === true) {
        state.departmentStaffBolean = false;
      }
    },
  },
});

export const { departmentStaffPopUp, noDepartmentStaffPopUp } =
  departmentStaffSlice.actions;

export default departmentStaffSlice.reducer;
