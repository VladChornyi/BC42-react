import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { logoutAction } from "../../../redux/auth/auth.actions";
import { Button } from "../../Button/Button";
import { Login } from "../Login";
import css from "./Sidebar.module.css";
import { NavLinkStyled } from "./Sidebar.styled";

export const Sidebar = () => {
  // const { isAuth, logout } = useContext(AuthContext);
  const dispatch = useDispatch();
  const selectIsAuth = useSelector((state) => state.auth.isAuth);
  const location = useLocation();
  const handleLogout = () => {
    dispatch(logoutAction());
  };
  return (
    <aside
      className="nav nav-pills p-5 bg-light w-100"
      style={{ maxWidth: "300px", height: "auto" }}
    >
      <div
        className="d-flex flex-column"
        style={{
          position: "sticky",
          top: 30,
          left: 0,
          height: "max-content",
        }}
      >
        <NavLink
          to="/"
          state={{ from: location }}
          style={{ textAlign: "left" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
          }
          style={{ textAlign: "left" }}
        >
          Posts
        </NavLink>
        <NavLink
          to="/tasks"
          style={{ textAlign: "left" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
          }
        >
          Tasks
        </NavLink>
        <NavLink
          to="/login"
          replace
          state={{ from: location }}
          style={{ textAlign: "left" }}
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
          }
        >
          Login
        </NavLink>
        {selectIsAuth && <Button onClick={handleLogout}>Logout</Button>}
      </div>
    </aside>
  );
};
