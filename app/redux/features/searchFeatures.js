"use client";
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstanceAuth from "@/app/apiInstances/axiosInstanceAuth";
import { usePathname } from "next/navigation";
export const homeDataAsyncThunk = createAsyncThunk(
  "homeDataAsyncThunk",
  async () => {
    return await axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        console.log(
          "🚀 ----------------------------------> homedata",
          res?.data
        );
        return res;
      })
      .catch((err) => {
        console.log("err ---------------------homedata>", err);
      });
  }
);
export const leaderBoardDataAsyncThunk = createAsyncThunk(
  "leaderBoardDataAsyncThunk",
  async () => {
    return await axiosInstanceAuth
      .get("recentUsers")
      .then((res) => {
        const myData = res?.data;
        // console.log("recentUsers---->", myData?.data);
        return myData;
      })
      .catch((err) => {
        console.log("err --->", err);
      });
  }
);

const SearchFeaturesSlice = createSlice({
  name: "searchFeatures",
  initialState: {
    homeData: [],
    homeDataChange: [],
    leaderBoradData: [],
    leaderBoradDataChange: [],
  },
  reducers: {
    leaderBoardSearch: (state, action) => {
      console.log("🚀 ~ action:", action.payload);
      switch (action?.payload?.pathname) {
        case "/leaderboard":
          if (action?.payload?.changeValue) {
            state.leaderBoradDataChange = state?.leaderBoradData?.filter(
              (item) =>
                item?.name
                  .toLowerCase()
                  .startsWith(action?.payload?.changeValue.toLowerCase())
            );
          } else {
            state.leaderBoradDataChange = state?.leaderBoradData;
          }
          break;
        case "/":
          if (action?.payload?.changeValue) {
            state.homeDataChange = state?.homeData?.filter((item) =>
              item?.name
                .toLowerCase()
                .startsWith(action?.payload?.changeValue.toLowerCase())
            );
          } else {
            state.homeDataChange = state?.homeData;
          }
          break;

        default:
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(homeDataAsyncThunk.fulfilled, (state, action) => {
        state.homeData = action.payload?.data;
        state.homeDataChange = action.payload?.data;
      })
      .addCase(leaderBoardDataAsyncThunk.fulfilled, (state, action) => {
        state.leaderBoradData = action.payload?.data;
        state.leaderBoradDataChange = action.payload?.data;
      });
  },
});

export default SearchFeaturesSlice.reducer;
export const { leaderBoardSearch } = SearchFeaturesSlice.actions;
