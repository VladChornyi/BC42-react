import { NavLink, Outlet } from 'react-router-dom';

const TasksPage = () => {
  return (
    <>
      <nav className="d-flex flex-row">
        <NavLink className={({ isActive }) => (isActive ? 'btn btn-primary m-2' : 'btn btn-light m-2')} to="counter">
          CounterPage
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'btn btn-primary m-2' : 'btn btn-light m-2')} to="skills">
          SkillsPage
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'btn btn-primary m-2' : 'btn btn-light m-2')} to="banner">
          BannerPage
        </NavLink>
      </nav>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default TasksPage;
