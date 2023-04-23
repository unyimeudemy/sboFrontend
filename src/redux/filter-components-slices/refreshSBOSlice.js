import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  refreshedSBOPage: "unyime",
};

export const refreshSBOSlice = createSlice({
  name: "refresh",
  initialState,
  reducers: {
    yesRefresh: (state, action) => {
      state.refreshedSBOPage = action.payload;
    },

    noRefresh: (state, action) => {
      state.refreshedSBOPage = action.payload;
    },
  },
});

export const { yesRefresh, noRefresh } = refreshSBOSlice.actions;

export default refreshSBOSlice.reducer;
