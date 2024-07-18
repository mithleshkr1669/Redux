import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  counter: 0,
};
const counter = createSlice({
  initialState,
  name: "counter",
  reducers: {
    increment: (state, action) => {
      console.log(state.counter);
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});
export const { increment, decrement } = counter.actions;
export default counter.reducer;
