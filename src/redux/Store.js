import { configureStore } from "@reduxjs/toolkit";
import counter from "./slice/counters";

const store = configureStore({
  reducer: {
    counter: counter,
  },
});

export default store;
