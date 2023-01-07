/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { some } from "utils/helpers";

export interface SystemState {
  locale: string;
  isLoading: boolean;
  userInfo: some;
  collapsible: boolean;
}

const initialState: SystemState = {
  locale: "ja",
  isLoading: false,
  userInfo: {},
  collapsible: false,

};

export const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    visibleLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<object>) => {
      state.userInfo = action.payload;
    },
    visiblecollaps: (state, action: PayloadAction<boolean>) => {
      state.collapsible = action.payload;
    },
  },
  extraReducers(builder) {},
});

export default systemSlice.reducer;
