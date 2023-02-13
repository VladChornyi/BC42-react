import { Button } from "../Button/Button";

export const UsersItem = ({ user, onDelete }) => {
  return (
    <li>
      <img src={user.avatar} alt={user.name} width="150" />
      <p>Name: {user.name}</p>
      <p>Address: {user.address}</p>
      <p>Cash: ${user.bank}</p>
      <p>Email: ${user.email}</p>
      <p>{user.married ? "married" : "single"}</p>
      <img src={user.animalPhoto} alt="lovely animal" width="120" />
      <Button onClick={() => onDelete(user.id)} type="button">
        Delete me
      </Button>
    </li>
  );
};
