import { createSlice } from "@reduxjs/toolkit";
import { fetchReserva } from "../asyncThunk/createAsyncThunk";

export const reservaSlice = createSlice({
  name: "reservaSlice",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReserva.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReserva.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchReserva.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default reservaSlice.reducer;
