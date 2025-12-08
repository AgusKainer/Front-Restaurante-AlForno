import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./views/Home";
import Dashboard from "./views/Dashborad";
import MesaList from "./components/MesaList";
import Login from "./components/Login";
import ReservaList from "./components/ReservaList";
import ProtectedRoute from "./components/ProtectedRouter";

import MesaForm from "./components/MesaForm";

import FormReserva from "./components/ReservaForm";
import EditarReserva from "./components/EditReservaForm";
import RegisterUser from "./components/RegisterUser";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { login, logout } from "./redux/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(
        "https://back-restaurante-alforno-production.up.railway.app/verify",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
        .then((res) => {
          if (res.ok) {
            dispatch(login());
            console.log("🟢 Sesión restaurada");
          } else {
            localStorage.removeItem("token");
            dispatch(logout());
          }
        })
        .catch(() => {
          localStorage.removeItem("token");
          dispatch(logout());
        })
        .finally(() => {
          dispatch(finishLoading()); // 👈 importante
        });
    } else {
      dispatch(finishLoading());
    }
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postreserva" element={<FormReserva />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="mesa" element={<MesaList />} />
          <Route path="reserva" element={<ReservaList />} />
          <Route path="postmesa" element={<MesaForm />} />
          <Route path="editar/:id" element={<EditarReserva />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
