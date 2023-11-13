import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clickedProfile: null,
};

export const clickedProfileSlice = createSlice({
  name: "clickedProfile",
  initialState,
  reducers: {
    yesClickedProfile: (state, action) => {
      state.clickedProfile = action.payload;
    },

    noClickedProfile: (state) => {
      state.clickedProfile = null;
    },
  },
});

export const { yesClickedProfile, noClickedProfile } =
  clickedProfileSlice.actions;

export default clickedProfileSlice.reducer;
