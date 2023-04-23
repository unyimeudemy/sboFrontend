import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryBolean: false,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    categoryPopUp: (state) => {
      state.categoryBolean = !state.categoryBolean;
    },

    noCategoryPopUp: (state) => {
      if (state.categoryBolean === true) {
        state.categoryBolean = false;
      }
    },
  },
});

export const { categoryPopUp, noCategoryPopUp } = categorySlice.actions;

export default categorySlice.reducer;
