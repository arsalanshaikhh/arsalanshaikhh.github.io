import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";

import "./Header.css";
export const Header = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  return (
    <>
      <header className={`${themename} header center`}>
        <h3>
          <a href="#home" className="link">
            Arsalan Shaikh
          </a>
        </h3>
        <Navbar  />
      </header>
    </>
  );
};
