// src/components/FiltroReservasDashboard.jsx
import { useDispatch } from "react-redux";
import { useState } from "react";
import { fetchReservasFiltradas } from "../redux/asyncThunk/createAsyncThunk";

const FiltroReservasDashboard = () => {
  const dispatch = useDispatch();
  const [filtros, setFiltros] = useState({
    fecha: "",
    evento: "",
    ubicacion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros((prev) => ({ ...prev, [name]: value }));
  };

  const aplicarFiltros = () => {
    dispatch(fetchReservasFiltradas(filtros));
  };

  const limpiarFiltros = () => {
    setFiltros({ fecha: "", evento: "", ubicacion: "" });
    dispatch(fetchReservasFiltradas({}));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Filtros de Reservas</h2>

      <div className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10 shadow-md space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="fecha"
              className="block text-sm font-semibold text-white tracking-wide"
            >
              Fecha
            </label>
            <div className="mt-2.5">
              <input
                id="fecha"
                name="fecha"
                type="date"
                value={filtros.fecha}
                onChange={handleChange}
                className="w-full rounded-md bg-white/5 px-3.5 py-2 text-white ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Evento
            </label>
            <select
              name="evento"
              value={filtros.evento}
              onChange={handleChange}
              className="w-full rounded-md bg-gray-800 text-white px-3 py-2 ring-1 ring-white/10 focus:outline-none"
            >
              <option value="">Todos los eventos</option>
              <option value="Almuerzo">Almuerzo</option>
              <option value="Cena">Cena</option>
              <option value="Cumpleaños">Cumpleaños</option>
              <option value="Aniversario">Aniversario</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Ubicación
            </label>
            <select
              name="ubicacion"
              value={filtros.ubicacion}
              onChange={handleChange}
              className="w-full rounded-md bg-gray-800 text-white px-3 py-2 ring-1 ring-white/10 focus:outline-none"
            >
              <option value="">Todas las ubicaciones</option>
              <option value="Interior">Interior</option>
              <option value="Pasillo">Pasillo</option>
              <option value="Patio">Patio</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4 pt-2">
          <button
            onClick={aplicarFiltros}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md font-semibold transition"
          >
            Aplicar filtros
          </button>
          <button
            onClick={limpiarFiltros}
            className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-md font-semibold transition"
          >
            Limpiar filtros
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltroReservasDashboard;
