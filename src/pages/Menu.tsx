import React from "react";
import s from "./Menu.module.scss";
import { Link } from "react-router-dom";
import levels from "../levelsConfig";

const Menu: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.window}>
        <p>Change difficulty:</p>

        {(Object.keys(levels) as (keyof typeof levels)[]).map((level) => (
          <Link to={levels[level].link}>{levels[level].name}</Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;