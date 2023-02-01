import { Component } from "react";
import { login } from "../../helpers/login";

export const LoginForm = () => {
  const handleSubmit = (event) => {
    login();
  };

  return (
    <form className="w-25">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input name="email" type="text" className="form-control" id="email" />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          name="password"
          type="text"
          className="form-control"
          id="password"
        />
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="iPhone"
          name="iphone"
        />
        <label className="form-check-label" htmlFor="iPhone">
          iPhone
        </label>
      </div>

      <div className="mb-3 form-check">
        <input
          name="android"
          type="checkbox"
          className="form-check-input"
          id="Android"
        />
        <label className="form-check-label" htmlFor="Android">
          Android
        </label>
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};
