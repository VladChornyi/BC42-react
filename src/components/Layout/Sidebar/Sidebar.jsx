import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { Button } from "../../Button/Button";
import { Login } from "../Login";
import css from "./Sidebar.module.css";
import { NavLinkStyled } from "./Sidebar.styled";

export const Sidebar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  return (
    <aside
      className="nav nav-pills p-5 bg-light w-100"
      style={{ maxWidth: "300px", height: "auto" }}
    >
      {isAuth ? (
        <div
          className="d-flex flex-column"
          style={{
            position: "sticky",
            top: 30,
            left: 0,
            height: "max-content",
          }}
        >
          <Button className="mb-4" onClick={logout}>
            Log out
          </Button>
          <NavLink
            to="/"
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
        </div>
      ) : (
        <Login />
      )}
    </aside>
  );
};
