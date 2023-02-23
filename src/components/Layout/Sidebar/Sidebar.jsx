import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { selectToken, selectUser } from "../../../redux/auth/auth-selector";
import { logOutAction } from "../../../redux/auth/auth-slice";
import { Button } from "../../Button";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const location = useLocation();
  const logOut = () => {
    dispatch(logOutAction());
    token.unSet();
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
        {token && (
          <>
            <p>Hello : {user?.first_name}</p>
            <Button onClick={logOut}>logout</Button>
          </>
        )}
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
        {token && (
          <NavLink
            to="/skills"
            state={{ from: location }}
            style={{ textAlign: "left" }}
            className={({ isActive }) =>
              isActive ? "btn btn-primary" : "btn btn-light"
            }
          >
            Skills
          </NavLink>
        )}
        <NavLink
          to="/posts"
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-light"
          }
          style={{ textAlign: "left" }}
        >
          Posts
        </NavLink>
        {!token && (
          <>
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
            <NavLink
              to="/join"
              replace
              state={{ from: location }}
              style={{ textAlign: "left" }}
              className={({ isActive }) =>
                isActive ? "btn btn-primary" : "btn btn-light"
              }
            >
              Join
            </NavLink>
          </>
        )}
      </div>
    </aside>
  );
};
