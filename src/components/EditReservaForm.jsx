import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useFormHook from "../customHooks/customForm";
import { putReserva } from "../redux/asyncThunk/createAsyncThunk";

export default function EditarReserva({ reserva }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { form, onChange } = useFormHook({
    nombre: reserva?.nombre || "",
    fecha: reserva?.fecha || "",
    evento: reserva?.evento || "",
    ubicacion: reserva?.ubicacion || "",
    numero_mesa: reserva?.numero_mesa || [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const update = await dispatch(putReserva({ id, data: form })).unwrap();
      console.log("reserva hecha: ", update);

      alert("Reserva actualizada correctamente");
      navigate("/dashboard");
    } catch (err) {
      console.log("error al editar o enviar: ", err);

      alert("Error al actualizar la reserva");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/images/alforno.png')",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0,0,0,0.75)",
      }}
    >
      <div className="min-h-screen bg-black/40">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 text-white max-w-xl mx-auto px-6 py-10"
        >
          <div className="bg-white/5 p-8 rounded-xl shadow-lg ring-1 ring-white/10">
            <h2 className="text-2xl font-bold text-indigo-400 border-b border-white/10 pb-3">
              ✏️ Editar Reserva
            </h2>

            {/* Nombre */}
            <div className="space-y-2 mt-6">
              <label className="block text-sm font-semibold text-gray-300">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={onChange}
                className="w-full bg-white/10 px-3 py-2 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="Correo o nombre"
              />
            </div>

            {/* Fecha */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-300">
                Fecha
              </label>
              <input
                type="date"
                name="fecha"
                value={form.fecha}
                onChange={onChange}
                className="w-full bg-white/10 px-3 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            {/* Evento */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-300">
                Evento
              </label>
              <select
                name="evento"
                value={form.evento}
                onChange={onChange}
                className="w-full bg-white/10 px-3 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              >
                <option value="" className="bg-neutral-900 text-white">
                  Seleccionar
                </option>
                <option value="almuerzo" className="bg-neutral-900 text-white">
                  Almuerzo
                </option>
                <option value="cena" className="bg-neutral-900 text-white">
                  Cena
                </option>
              </select>
            </div>

            {/* Ubicación */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-300">
                Ubicación
              </label>
              <select
                name="ubicacion"
                value={form.ubicacion}
                onChange={onChange}
                className="w-full bg-white/10 px-3 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              >
                <option value="">Seleccionar</option>
                <option value="interior">Interior</option>
                <option value="patio">Patio</option>
                <option value="pasillo">Pasillo</option>
              </select>
            </div>

            {/* Mesas
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-300">
                Mesa(s)
              </label>
              <input
                type="text"
                name="numero_mesa"
                value={
                  Array.isArray(form.numero_mesa)
                    ? form.numero_mesa.join(", ")
                    : form.numero_mesa
                }
                onChange={(e) =>
                  onChange({
                    target: {
                      name: "numero_mesa",
                      value: e.target.value.split(",").map((v) => v.trim()),
                    },
                  })
                }
                className="w-full bg-white/10 px-3 py-2 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="Ej: 2, 5, 7"
              />
              <p className="text-xs text-gray-400">
                Separá por coma si son varias (ej: 2, 5, 7)
              </p>
            </div> */}

            {/* Acción */}
            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-4 py-2 bg-white/10 rounded-md text-gray-300 hover:bg-white/20 transition"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-md font-semibold text-white transition duration-200 shadow-md"
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
