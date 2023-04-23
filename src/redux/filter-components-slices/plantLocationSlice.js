import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plantLocationBolean: false,
};

export const plantLocationSlice = createSlice({
  name: "plantLocation",
  initialState,
  reducers: {
    plantLocationPopUp: (state) => {
      state.plantLocationBolean = !state.plantLocationBolean;
    },

    noPlantLocationPopUp: (state) => {
      state.plantLocationBolean = false;
    },
  },
});

export const { plantLocationPopUp, noPlantLocationPopUp } =
  plantLocationSlice.actions;

export default plantLocationSlice.reducer;
