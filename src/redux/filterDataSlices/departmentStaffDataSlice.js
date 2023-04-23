import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departmentStaffDataInitial: null,
};

export const departmentStaffDataSlice = createSlice({
  name: "departmentStaffDataName",
  initialState,
  reducers: {
    departmentStaffQuery: (state, action) => {
      console.log("data slice");
      state.departmentStaffDataInitial = action.payload;
    },

    noDepartmentStaffQuery: (state) => {
      state.departmentStaffDataInitial = null;
    },
  },
});

export const { departmentStaffQuery, noDepartmentStaffQuery } =
  departmentStaffDataSlice.actions;

export default departmentStaffDataSlice.reducer;
