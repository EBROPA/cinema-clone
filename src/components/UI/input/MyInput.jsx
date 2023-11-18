import React from "react";
import classes from "./MyInput.module.css";

const MyInput = ({ inputType, children, ...props }) => {
  return (
    <input className={classes.myInput} type={inputType} {...props}>
      {children}
    </input>
  );
};

export default MyInput;
