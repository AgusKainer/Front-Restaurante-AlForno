import { useDispatch } from "react-redux";
import useFormHook from "../customHooks/customForm";
import { fetchMesaPost } from "../redux/asyncThunk/createAsyncThunk";

const MesaForm = () => {
  const formInitial = {
    numero_mesa: 0,
    capacidad: 0,
  };
  const { form, onChange } = useFormHook(formInitial);
  const { numero_mesa, capacidad } = form;
  const distpatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();
    distpatch(fetchMesaPost(form));
  };

  return (
    <div className="bg-white/5 rounded-xl p-6 ring-1 ring-white/10 shadow-lg max-w-md w-full">
      <h2 className="text-xl font-semibold text-white mb-6">Crear Mesa</h2>

      <form onSubmit={onSubmit} className="space-y-5">
        {/* Número de mesa */}
        <div>
          <label
            htmlFor="numero_mesa"
            className="block text-sm font-medium text-white mb-1"
          >
            Número de mesa
          </label>
          <input
            type="number"
            name="numero_mesa"
            id="numero_mesa"
            value={numero_mesa}
            onChange={onChange}
            className="w-full rounded-md bg-white/5 px-3 py-2 text-white placeholder:text-gray-500 ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500"
            placeholder="Ej: 12"
          />
        </div>

        {/* Capacidad */}
        <div>
          <label
            htmlFor="capacidad"
            className="block text-sm font-medium text-white mb-1"
          >
            Capacidad
          </label>
          <input
            type="number"
            name="capacidad"
            id="capacidad"
            value={capacidad}
            onChange={onChange}
            className="w-full rounded-md bg-white/5 px-3 py-2 text-white placeholder:text-gray-500 ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500"
            placeholder="Ej: 4"
          />
        </div>

        {/* Botón */}
        <div>
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400 transition duration-200 focus:ring-2 focus:ring-indigo-500"
          >
            Crear
          </button>
        </div>
      </form>
    </div>
  );
};

export default MesaForm;
