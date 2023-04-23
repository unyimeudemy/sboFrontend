import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deparmentResponsible: null,
};

export const departmentSlice = createSlice({
  name: "department",
  initialState,
  reducers: {
    departmentChosen: (state, action) => {
      state.deparmentResponsible = action.payload;
    },

    departmentNotChosen: (state) => {
      state.deparmentResponsible = null;
    },
  },
});

export const { departmentChosen, departmentNotChosen } =
  departmentSlice.actions;

export default departmentSlice.reducer;
