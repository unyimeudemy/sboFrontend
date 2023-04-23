import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  unsafeDetail: null,
};

export const unsafeWorkPractiseSlice = createSlice({
  name: "unsafeWorkPractise",
  initialState,
  reducers: {
    unsafeDetailFilled: (state, action) => {
      state.unsafeDetail = action.payload;
    },

    unsafeDetailEmpty: (state) => {
      state.unsafeDetail = null;
    },
  },
});

export const { unsafeDetailFilled, unsafeDetailEmpty } =
  unsafeWorkPractiseSlice.actions;

export default unsafeWorkPractiseSlice.reducer;
