import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { FETCH_STATUS } from "../../constants/fetchStatus";
import { selectUsersStatus } from "../../redux/users/users-selectors";
import { deleteUserThunk, getUsersThunk } from "../../redux/users/users-thunk";

export const UsersItem = ({ user }) => {
  const deleteIdref = useRef(null);
  const status = useSelector(selectUsersStatus);
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    deleteIdref.current = id;
    dispatch(deleteUserThunk(id))
      .unwrap()
      .then(() => dispatch(getUsersThunk()));
  };
  // if (status === FETCH_STATUS.rejected) {
  //   return <h1>Error</h1>;
  // }
  return (
    <li>
      <img src={user.avatar} alt={user.name} width="150" />
      <p>Name: {user.name}</p>
      <p>Address: {user.address}</p>
      <p>Cash: ${user.bank}</p>
      <p>Email: ${user.email}</p>
      <p>{user.married ? "married" : "single"}</p>
      <img src={user.animalPhoto} alt="lovely animal" width="120" />
      <Link to={`/tasks/users/${user.id}`}>Read more</Link>
      <Button
        onClick={() => handleDelete(user.id)}
        disabled={
          status === FETCH_STATUS.loading && deleteIdref.current === user.id
        }
        type="button"
      >
        Delete me
      </Button>
    </li>
  );
};
