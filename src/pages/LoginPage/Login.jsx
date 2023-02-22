import { useState } from "react";

import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button/Button";
import { loginThunk, refreshUserThunk } from "../../redux/auth/auth-thunk";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(true);
  const toggle = () => setIsPassword((prev) => !prev);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        throw new Error();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(() => dispatch(refreshUserThunk()));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Hello</h2>

      <div className="input-group mb-3">
        <input
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
        />
      </div>

      <div className="input-group mb-3">
        <input
          value={password}
          onChange={handleChange}
          name="password"
          type={isPassword ? "password" : "text"}
          className="form-control"
          placeholder="Password ..."
        />

        <Button className="btn-outline-secondary" onClick={toggle}>
          {isPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </Button>
      </div>

      <Button type="submit">Log In</Button>
    </form>
  );
};
