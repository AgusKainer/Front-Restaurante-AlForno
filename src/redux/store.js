import { configureStore } from "@reduxjs/toolkit";
import mesaSlice from "./reducers/mesaSlice";
import reservaSlice from "./reducers/reservaSlice";
import reservaFilter from "./reducers/reservaFilterSlice";
import mesaDisponibleSice from "./reducers/mesaDisponibleSice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    mesa: mesaSlice,
    mesaDisponible: mesaDisponibleSice,
    reserva: reservaSlice,
    reservaFilter: reservaFilter,
    auth: authSlice,
  },
});

export default store;
