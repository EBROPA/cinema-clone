import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Form from "./Form";
import { setUser } from "../store/slices/userSlice";

const SingUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSingUp = (email, password) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid,
          })
        );
        navigate("login");
      })
      .catch(console.error);
  };

  return <Form title="register" handleClick={handleSingUp} />;
};

export default SingUp;
