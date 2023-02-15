import React, { useEffect, useRef, useState } from "react";
import { UsersItem } from "./UserItem";
import { deleteUser, getUsers } from "../../services/usersService";

export const UsersPage = () => {
  const [users, setUsers] = useState([]);
  // const isFirstRender = useRef(true);

  useEffect(() => {
    // if (isFirstRender.current) {
    //   isFirstRender.current = false;
    //   return;
    // }
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    fetchUsers();
    // getUsers()
    //   .then((data) => setUsers(data))
    //   .catch(console.log);
  }, []);

  const handleDelete = async (id) => {
    try {
      const data = await deleteUser(id);
      setUsers((prev) => prev.filter((user) => user.id !== data.id));
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <ul>
      {users.map((user) => (
        <UsersItem key={user.id} user={user} onDelete={handleDelete} />
      ))}
    </ul>
  );
};
