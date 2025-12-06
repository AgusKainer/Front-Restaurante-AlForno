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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postreserva" element={<FormReserva />} />
        <Route path="/login" element={<Login />} />
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
