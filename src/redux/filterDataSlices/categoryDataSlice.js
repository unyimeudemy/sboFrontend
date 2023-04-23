import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryDataInitial: null,
};

export const categoryDataSlice = createSlice({
  name: "categoryDataName",
  initialState,
  reducers: {
    categoryQuery: (state, action) => {
      state.categoryDataInitial = action.payload;
    },

    noCategoryQuery: (state) => {
      state.categoryDataInitial = null;
    },
  },
});

export const { categoryQuery, noCategoryQuery } = categoryDataSlice.actions;

export default categoryDataSlice.reducer;
