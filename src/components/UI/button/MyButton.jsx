import React from "react";
import classes from "./MyButton.module.css";

const MyButton = ({ children, styleBtn, ...props }) => {
  return (
    <div style={styleBtn} className={classes.myBtn} {...props}>
      {children}
    </div>
  );
};

export default MyButton;
