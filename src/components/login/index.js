import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../reducers/users";
import axios from "axios";
import "./style.css";

const Login = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const state = useSelector((state) => {
    console.log(state);
    return state;
    // token: state.Login.token,
  });

  const log = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(`${BASE_URL}/login`, {
        email: email,
        password: password,
      });
      console.log(result);

      const data = {
        user: result.data.result,
        token: result.data.token,
      };
      // localStorage.setItem("token", result.data.token);

      dispatch(userLogin(data));
      // dispatch(
      //   userLogin({ token: result.data.token })
      // );
      navigate("/task");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!state.token ? (
        <form>
          <h1>Login </h1>
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
          <button onClick={log} type="submit" className="registerbtn">
            login
          </button>
        </form>
      ) : (
        <h2>Rawan </h2>
      )}
    </div>
  );
};
export default Login;
