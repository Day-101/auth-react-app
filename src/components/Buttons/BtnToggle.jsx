import React, {useContext} from "react";
import {ThemeContext} from "../Contexts/ThemeContext";
import "./BtnToggle.scss";
export default function BtnToggle() {

  const {toggleTheme, theme} = useContext(ThemeContext);

  return (
    <div
    onClick={toggleTheme}
    className="btn-toggle">
      <h1>{theme ? "Dark" : "Light"}</h1>
    </div>
  )
};
