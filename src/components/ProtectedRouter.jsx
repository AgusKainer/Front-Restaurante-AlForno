import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const { isLoggedIn, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return <div>Cargando sesión...</div>; // spinner o mensaje
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
