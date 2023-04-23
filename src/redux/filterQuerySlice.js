import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queryString: null,
};

export const filterQuerySlice = createSlice({
  name: "filterQuery",
  initialState,
  reducers: {
    buildQueryString: (state, action) => {
      state.queryString = action.payload;
    },

    noBuildQueryString: (state) => {
      state.queryString = null;
    },
  },
});

export const { buildQueryString, noBuildQueryString } =
  filterQuerySlice.actions;

export default filterQuerySlice.reducer;
