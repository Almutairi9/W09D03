import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import "./style.css";

const Signin = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState("61af656c1d6e66117cb9b904");

  // const state = useSelector((state) => {
  //   console.log(state);
  //   return {
  //     users: state.users,
  //     TodosFun: state.TodosFun,
  //   };
  // });

  const Sgin = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(`${BASE_URL}/signup`, {
        email: email,
        password: password,
        role: "61af656c1d6e66117cb9b904",
      });
      console.log(result);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form>
        <h1>Signup</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label for="e-mail">
          <b>Enter you e-mail :</b>
        </label>
        <input
          type="text"
          value={email}
          placeholder="Enter you e-mail"
          name="e-mail"
          id="e-mail"
          required
          onChange={(e) => {
            // console.log(e);
            setEmail(e.target.value);
          }}
        />
        <label for="password">
          <b>Enter you password :</b>
        </label>
        <input
          type="password"
          value={password}
          placeholder="Enter password "
          name="password"
          id="password"
          required
          onChange={(e) => {
            // console.log(e.target.value);
            setPassword(e.target.value);
          }}
        />
        {/* <label for="e-mail">
          <b>Enter you role :</b>
        </label>
        <input
          type="text"
          value={role}
          placeholder="Enter you role"
          name="role"
          id="role"
          required
          onChange={(e) => setRole(e.target.value)}
        /> */}
        <hr />
        <button onClick={Sgin} type="submit" className="registerbtn">
          Signup
        </button>
      </form>
    </div>
  );
};
export default Signin;
