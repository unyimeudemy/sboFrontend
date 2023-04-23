import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departmentDataInitial: null,
};

export const departmentDataSlice = createSlice({
  name: "departmentDataName",
  initialState,
  reducers: {
    departmentQuery: (state, action) => {
      state.departmentDataInitial = action.payload;
    },

    noDepartmentQuery: (state) => {
      state.departmentDataInitial = null;
    },
  },
});

export const { departmentQuery, noDepartmentQuery } = departmentDataSlice.actions;

export default departmentDataSlice.reducer;
