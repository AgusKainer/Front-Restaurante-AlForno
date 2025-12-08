import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isLoading: true, // 👈 arranca en "true" porque al inicio todavía no sabemos si hay sesión
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
      state.isLoading = false; // 👈 ya terminó la carga, y está logueado
    },
    logout(state) {
      state.isLoggedIn = false;
      state.isLoading = false; // 👈 ya terminó la carga, y no está logueado
    },
    finishLoading(state) {
      state.isLoading = false; // 👈 útil para marcar fin de validación aunque no haya login
    },
  },
});

export const { login, logout, finishLoading } = authSlice.actions;
export default authSlice.reducer;
