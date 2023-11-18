import React from "react";
import { Link } from "react-router-dom";
import LoginIn from "../components/LoginIn";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginIn />
      <p>
        Or <Link to="register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
