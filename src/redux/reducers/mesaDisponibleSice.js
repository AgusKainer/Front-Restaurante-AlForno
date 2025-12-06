import { createSlice } from "@reduxjs/toolkit";
import { fetchMesasDisponibles } from "../asyncThunk/createAsyncThunk"; // ajustá el path

export const mesaDisponibleSlice = createSlice({
  name: "mesaDisponible",
  initialState: {
    list: [], // mesas disponibles según filtros
    loading: false,
    error: null,
  },
  reducers: {
    resetDisponibles: (state) => {
      state.list = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMesasDisponibles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMesasDisponibles.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchMesasDisponibles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetDisponibles } = mesaDisponibleSlice.actions;
export default mesaDisponibleSlice.reducer;
