import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommendationDetail: null,
};

export const recommendationSlice = createSlice({
  name: "recommendation",
  initialState,
  reducers: {
    recommendationDetailFilled: (state, action) => {
      state.recommendationDetail = action.payload;
    },

    recommendationDetailEmpty: (state) => {
      state.recommendationDetail = null;
    },
  },
});

export const { recommendationDetailFilled, recommendationDetailEmpty } =
  recommendationSlice.actions;

export default recommendationSlice.reducer;
