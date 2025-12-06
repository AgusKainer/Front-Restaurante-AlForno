import { createSlice } from "@reduxjs/toolkit";
import { fetchMesas } from "../asyncThunk/createAsyncThunk";

export const mesaSlice = createSlice({
  name: "mesaSlice",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMesas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMesas.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchMesas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default mesaSlice.reducer;
