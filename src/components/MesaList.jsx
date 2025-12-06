import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMesas } from "../redux/asyncThunk/createAsyncThunk";

const MesaList = () => {
  const { list: mesa, loading, error } = useSelector((state) => state.mesa);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMesas());
  }, []);
  return (
    <div>
      MesaList
      {loading && <p>Cargando...</p>}
      {error && <p>ERROR: {error}</p>}
      {Array.isArray(mesa) &&
        mesa.map((m) => (
          <div key={m.id}>
            <h3>Numero de mesa: {m.numero_mesa}</h3>
            <h3>Capacidad: {m.capacidad}</h3>
          </div>
        ))}
    </div>
  );
};

export default MesaList;
