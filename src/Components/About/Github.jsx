import React from "react";
import Githubcalendar from "react-github-calendar";
import { ThemeContext } from "../../Context/theme";
import { GithubStat } from "./GithubStat";
import { Statistics } from "./Statistics";
import ReactTooltip from "react-tooltip";
export const Github = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  return (
    <div data-aos="fade-right">
      <div
        className="section"
        // data-aos="fade-right"
      >
        <h2 className="section__title">
          Days I <span className="different"> Code</span>
        </h2>
        {/* <h2 className="section__title">
          Statistics <span className="different">section</span>
        </h2> */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Githubcalendar
            username="arsalanshaikhh"
            blockSize={15}
            blockMargin={5}
            theme={colourTheme}
            fontSize={16}
          >
            <ReactTooltip delayShow={20} html />
          </Githubcalendar>
        </div>
      </div>

      <GithubStat />
      <Statistics />
    </div>
  );
};
