import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plantLocationDataInitial: null,
};

export const plantLocationDataSlice = createSlice({
  name: "plantLocationDataName",
  initialState,
  reducers: {
    plantLocationQuery: (state, action) => {
      state.plantLocationDataInitial = action.payload;
    },

    noPlantLocationQuery: (state) => {
      state.plantLocationDataInitial = null;
    },
  },
});

export const { plantLocationQuery, noPlantLocationQuery } =
  plantLocationDataSlice.actions;

export default plantLocationDataSlice.reducer;
