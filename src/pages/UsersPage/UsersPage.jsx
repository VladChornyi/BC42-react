import React, { useEffect, useState } from "react";
import { UsersItem } from "./UserItem";
import { deleteUser, getUsers } from "../../services/usersService";
import { deleteUserThunk, getUsersThunk } from "../../redux/users/users-thunk";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../redux/users/users-selectors";

export const UsersPage = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return (
    <ul>
      {users.map((user) => (
        <UsersItem key={user.id} user={user} />
      ))}
    </ul>
  );
};
