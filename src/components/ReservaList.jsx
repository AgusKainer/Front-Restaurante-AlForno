import { useDispatch, useSelector } from "react-redux";
import { deleteReserva } from "../redux/asyncThunk/createAsyncThunk";
import { useNavigate } from "react-router";
const ReservaList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    data: reserva,
    loading,
    error,
  } = useSelector((state) => state.reservaFilter);

  const handleDelete = (id) => {
    if (confirm("Quiere eliminar? ")) {
      dispatch(deleteReserva(id));
    }
  };

  const handlePut = (id) => {
    navigate(`/dashboard/editar/${id}`);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Lista de Reservas</h2>

      {loading && <p className="text-gray-400">Cargando...</p>}
      {error && <p className="text-red-500">ERROR: {error}</p>}

      {/* Grid de 3 columnas responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reserva.map((r) => (
          <div
            key={r.id}
            className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 shadow-md space-y-3"
          >
            <div className="space-y-1">
              <h3 className="text-white text-sm font-semibold">
                Nombre:{" "}
                <span className="font-normal text-gray-300">{r.nombre}</span>
              </h3>
              <h3 className="text-white text-sm font-semibold">
                Fecha:{" "}
                <span className="font-normal text-gray-300">{r.fecha}</span>
              </h3>
              <h3 className="text-white text-sm font-semibold">
                Evento:{" "}
                <span className="font-normal text-gray-300">{r.evento}</span>
              </h3>
              <h3 className="text-white text-sm font-semibold">
                Ubicación:{" "}
                <span className="font-normal text-gray-300">{r.ubicacion}</span>
              </h3>
              <h3 className="text-white text-sm font-semibold">
                Reserva creada:{" "}
                <span className="font-normal text-gray-300">{r.createdAt}</span>
              </h3>
            </div>

            {Array.isArray(r.Mesas) && r.Mesas.length > 0 ? (
              <div className="mt-3 space-y-2">
                <h4 className="text-indigo-400 text-sm font-semibold">
                  Mesas Reservadas:
                </h4>
                {r.Mesas.map((mesa) => (
                  <div
                    key={mesa.id}
                    className="rounded-md bg-white/10 px-3 py-2 ring-1 ring-white/10"
                  >
                    <p className="text-xs text-white">
                      Número de mesa:{" "}
                      <span className="text-gray-300">{mesa.numero_mesa}</span>
                    </p>
                    <p className="text-xs text-white">
                      Capacidad:{" "}
                      <span className="text-gray-300">{mesa.capacidad}</span>
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400">No hay mesas reservadas</p>
            )}

            {/* Botones de acción */}
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => handlePut(r.id)}
                className="px-3 py-1 text-sm font-semibold text-indigo-300 bg-white/10 rounded-md hover:bg-indigo-500 hover:text-white transition duration-200"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(r.id)}
                className="px-3 py-1 text-sm font-semibold text-red-400 bg-white/10 rounded-md hover:bg-red-600 hover:text-white transition duration-200"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservaList;
