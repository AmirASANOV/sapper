import React from "react";
import s from "./Menu.module.scss";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.window}>
        <p>Change difficulty:</p>
        <Link to="/easy">easy</Link>
        <Link to="/medium">medium</Link>
        <Link to="/hard">hard</Link>
      </div>
    </div>
  );
};

export default Menu;
