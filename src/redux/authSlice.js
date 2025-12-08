// redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isLoading: true, // 👈 arranca en true
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    finishLoading(state) {
      state.isLoading = false;
    },
  },
});

export const { login, logout, finishLoading } = authSlice.actions;
export default authSlice.reducer;
