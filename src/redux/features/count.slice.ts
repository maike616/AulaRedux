import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "countSlice",
  initialState: {
    value: 0,
  },

  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    pow(state) {
      state.value *= 2;
    },
  },
});

export const { increment, decrement, pow } = countSlice.actions;
export default countSlice.reducer;
