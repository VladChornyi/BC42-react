import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectToken } from "../../redux/auth/auth-selector";

export const PublicRoute = () => {
  const token = useSelector(selectToken);
  const location = useLocation();

  return token ? <Navigate to={location.state?.from ?? "/"} /> : <Outlet />;
};
