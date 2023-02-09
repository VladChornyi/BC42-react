import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Button } from "../../Button/Button";
import { Login } from "../Login";

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
          <Button onClick={logout}>Log out</Button>
          <a href="/" style={{ textAlign: "left" }} className="btn btn-light">
            Home
          </a>
          <a href="/" style={{ textAlign: "left" }} className="btn btn-link">
            Profile
          </a>
          <a href="/" style={{ textAlign: "left" }} className="btn btn-link">
            Messages
          </a>
          <a href="/" style={{ textAlign: "left" }} className="btn btn-link">
            Settings
          </a>
        </div>
      ) : (
        <Login />
      )}
    </aside>
  );
};
