import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const isAuth = useSelector((state) => state.auth.isLoggedIn);
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
