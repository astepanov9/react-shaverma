import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slice/filterSlice";


export const store = configureStore({
  reducer: {
    filterSlice,
  },
});
