import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchWithToken from "./fetchWithToken";

const url = "https://back-restaurante-alforno-production.up.railway.app";

// GET DEL BACK
export const fetchMesasDisponibles = createAsyncThunk(
  "mesa/fetchDisponibles",
  async ({ fecha, evento, ubicacion }, { rejectWithValue }) => {
    try {
      const query = new URLSearchParams({
        fecha,
        evento,
        ubicacion,
      }).toString();

      const res = await fetch(`${url}/mesaDisponible?${query}`);

      if (!res.ok) {
        throw new Error("Error al obtener mesas disponibles");
      }

      const data = await res.json();
      return data; // array de mesas disponibles
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchMesas = createAsyncThunk("mesas/fetchMesas", async () => {
  const res = await fetch(`${url}/mesa`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Error al obtener mesas");
  return await res.json();
});

export const fetchReserva = createAsyncThunk(
  "reserva/fetchReserva",
  async (reserva) => {
    return await fetchWithToken(`${url}/reserva`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  }
);

// GET FILTER
export const fetchReservasFiltradas = createAsyncThunk(
  "reservas/fetchReservasFiltradas",
  async (filtros, { rejectWithValue }) => {
    try {
      const query = new URLSearchParams(filtros).toString();
      const endpoint = query
        ? `${url}/filterReserva?${query}`
        : `${url}/filterReserva`;
      console.log("desde el redux que envio al back: ", endpoint);

      const res = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Error al obtener reservas");
      const data = await res.json();
      console.log("RES.JSON DEL REDUX: ", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// POST DEL BACK
export const fetchMesaPost = createAsyncThunk(
  "mesaPost/fetchMesaPost",
  async (mesa) => {
    return await fetchWithToken(`${url}/postmesa`, {
      method: "POST",
      body: JSON.stringify(mesa),
    });
  }
);

export const fetchReservaPost = createAsyncThunk(
  "reserva/create",
  async (data) => {
    const res = await fetch(`${url}/postreserva`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Error al crear la reserva");
    return await res.json();
  }
);

export const fetchEmail = createAsyncThunk("email/send", async ({ id }) => {
  const res = await fetch(`${url}/email/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("ERROR AL ENVIAR EL EMAIL DE RESERVA");
  return await res.json();
});

// DELETE

export const deleteReserva = createAsyncThunk("eliminar/delete", async (id) => {
  const response = await fetchWithToken(`${url}/eliminar/${id}`, {
    method: "DELETE",
  });
  if (!response.ok)
    throw new Error("ERROR AL ELIMINAR LA RESERVA O YA SE ELIMINO.");
  return id;
});

// PUT EDITAR
export const putReserva = createAsyncThunk(
  "editar/put",
  async ({ id, data }) => {
    const result = await fetchWithToken(`${url}/actualizar/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return result; // 👈 ya es el objeto JSON que devolvió tu backend
  }
);
