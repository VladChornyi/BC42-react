import { useState } from "react";

import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { signUpThunk } from "../../redux/auth/auth-thunk";

export const JoinPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [isPassword, setIsPassword] = useState(true);
  const toggle = () => setIsPassword((prev) => !prev);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "firstname":
        setFirstname(value);
        break;
      case "lastname":
        setLastname(value);
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
    dispatch(
      signUpThunk({
        email,
        first_name: firstname,
        last_name: lastname,
        password,
      })
    )
      .unwrap()
      .then(() => {
        setEmail("");
        setPassword("");
        setFirstname("");
        setLastname("");
        navigate("/login");
      })
      .catch(console.log);
  };
  // {
  //   "email": "user@exaasdas.com",
  //   "first_name": "string",
  //   "last_name": "string",
  //   "password": "strjhkhjkhjing"
  // }

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
          placeholder="email"
        />
      </div>

      <div className="input-group mb-3">
        <input
          value={password}
          onChange={handleChange}
          name="password"
          type={isPassword ? "password" : "text"}
          className="form-control"
          placeholder="Password"
        />

        <Button className="btn-outline-secondary" onClick={toggle}>
          {isPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </Button>
      </div>
      <div className="input-group mb-3">
        <input
          value={firstname}
          onChange={handleChange}
          type="text"
          name="firstname"
          className="form-control"
          placeholder="firstName"
        />
      </div>
      <div className="input-group mb-3">
        <input
          value={lastname}
          onChange={handleChange}
          type="text"
          name="lastname"
          className="form-control"
          placeholder="lastName"
        />
      </div>

      <Button type="submit">Join</Button>
    </form>
  );
};
