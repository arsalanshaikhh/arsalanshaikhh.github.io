import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";
import { GiHearts } from "react-icons/gi";

export const Footer = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  return (
    <>
      <div className={` ${themename} section `}>
        <a
          href="https://github.com/arsalanshaikhh"
          rel="noreferrer"
          target="_blank"
        >
          <div className={` ${themename} footer`}>
            <h4>
              Made by
              {/* with{" "} Love 
              <span className="different">
                <GiHearts />
              </span>{" "} */}
              <span className="different"> Arsalan Shaikh</span>
            </h4>
          </div>
        </a>
      </div>
    </>
  );
};


//
//
//
//
