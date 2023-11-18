import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Form from "./Form";
import { setUser } from "../store/slices/userSlice";

const LoginIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid,
          })
        );
        navigate("/");
      })
      .catch(console.error);
  };

  return <Form title="sign in" handleClick={handleLogin} />;
};

export default LoginIn;
