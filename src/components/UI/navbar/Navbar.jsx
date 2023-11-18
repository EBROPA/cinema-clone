import React from "react";
import cl from "./Navbar.module.css";
import { Link } from "react-router-dom";
import icon from "../../img/icon-kp.png";

const Navbar = () => {
  return (
    <div className={cl.navbar__main}>
      <div className={cl.navLink}>
        <Link to="/">
          <img src={icon} className={cl.icon} />
        </Link>
      </div>
      <div className={cl.column}>
        <Link className={cl.aLink} to="/">
          Home
        </Link>
        <Link className={cl.aLink} to="/movie">
          Movie
        </Link>
        <Link className={cl.aLink} to="/mypage">
          My Page
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
