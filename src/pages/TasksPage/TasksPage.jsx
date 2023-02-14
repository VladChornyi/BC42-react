import { Link, Outlet } from "react-router-dom";

const TasksPage = () => {
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
      <Outlet />
    </>
  );
};

export default TasksPage;
