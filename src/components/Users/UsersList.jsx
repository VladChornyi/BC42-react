import { Component } from 'react';

import usersJson from '../../assets/users.json';

import { UsersItem } from './UsersItem';

export const UsersList = () => {
  return (
    <>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search username" />
        <button className="btn btn-primary" type="button">
          Clear
        </button>
      </div>

      <div className="mb-5">
        {usersJson.map(user => (
          <UsersItem key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};
