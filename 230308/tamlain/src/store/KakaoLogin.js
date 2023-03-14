import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  reducers: {},
});

export const loginActions = loginSlice.actions;

export default loginSlice.reducers;
