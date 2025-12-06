import { createSlice } from "@reduxjs/toolkit";
import {
  fetchReservasFiltradas,
  fetchReserva,
  deleteReserva,
  putReserva,
} from "../asyncThunk/createAsyncThunk";

const reservaFilter = createSlice({
  name: "reservaFilter",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    setReservaFilter: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReserva.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchReservasFiltradas.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(deleteReserva.fulfilled, (state, action) => {
        state.data = state.data.filter((r) => r.id != action.payload);
      })
      .addCase(putReserva.fulfilled, (state, action) => {
        state.data = state.data.map((r) =>
          r.id === action.payload.id ? action.payload : r
        );
      });
  },
});

export const { setError, setLoading, setReservaFilter } = reservaFilter.actions;
export default reservaFilter.reducer;
