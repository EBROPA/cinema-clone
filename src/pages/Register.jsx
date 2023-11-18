import React from "react";
import { Link } from "react-router-dom";
import SingUp from "../components/SingUp";

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <SingUp />
      <p>
        Or<Link to="login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
