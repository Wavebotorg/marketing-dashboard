"use client";
import { configureStore } from "@reduxjs/toolkit";
import homeFeatureSlice from "../features/searchFeatures";
export const store = configureStore({
  reducer: { homeFeatureSlice },
});
