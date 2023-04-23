import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  actionOrConditionBolean: false,
};

export const actionOrConditionSlice = createSlice({
  name: "actionOrCondition",
  initialState,
  reducers: {
    actionOrConditionPopUp: (state) => {
      state.actionOrConditionBolean = !state.actionOrConditionBolean;
    },

    noActionOrConditionPopUp: (state) => {
      if (state.actionOrConditionBolean === true) {
        state.actionOrConditionBolean = false;
      }
    },
  },
});

export const { actionOrConditionPopUp, noActionOrConditionPopUp } =
  actionOrConditionSlice.actions;

export default actionOrConditionSlice.reducer;
