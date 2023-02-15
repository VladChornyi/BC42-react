import { Suspense, useContext } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const TasksPage = () => {
  const { isAuth } = useContext(AuthContext);
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            className="nav-link active"
            aria-current="page"
            to="/tasks/banner"
          >
            Banner
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tasks/counter">
            Counter
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tasks/filmoteka">
            Filmoteka
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tasks/users">
            Users
          </Link>
        </li>
      </ul>
      <Suspense fallback={<p>Loading tasks...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default TasksPage;
