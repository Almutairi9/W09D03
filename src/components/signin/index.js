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
  const [role, setRole] = useState("");

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
        <div>
         <p>Please select your Role:</p>
         {" "}
        <input
          type="radio"
          id="Admin"
          name="role"
          value="61af656c1d6e66117cb9b904"
          onChange={(e) => {
            e.preventDefault();
            setRole("61af656c1d6e66117cb9b904");
          }}
        />
          <label for="Admin">Admin</label>
          {" "}
        <input
          type="radio"
          id="user"
          name="role"
          value="61af65831d6e66117cb9b906"
          onChange={(e) => {
            e.preventDefault();
            setRole("61af65831d6e66117cb9b906");
          }}
        />
          <label for="user">User</label>
          </div> 
        <hr />
        <button onClick={Sgin} type="submit" className="registerbtn">
          Signup
        </button>
      </form>
    </div>
  );
};
export default Signin;
