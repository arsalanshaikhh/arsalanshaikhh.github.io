import React from "react";
import Githubcalendar from "react-github-calendar";
import { ThemeContext } from "../../Context/theme";
import { Statistics } from "./Statistics";

export const GithubStat = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  //
  const [src, setSrc] = React.useState(
    themename === "light"
      ? "https://streak-stats.demolab.com?user=arsalanshaikhh&ring=4F94EF&fire=515A65&stroke=D5E5FB&currStreakLabel=515A65&currStreakNum=515A65&sideNums=515A65"
      : "https://streak-stats.demolab.com?user=arsalanshaikhh&background=2E3440&stroke=FFFFFF&ring=748FAC&border=FF2D2D00&fire=DDDDDD&currStreakNum=FFFFFF&sideNums=748FAC&currStreakLabel=748FAC&sideLabels=FFFFFF&dates=748FAC"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setSrc(
        "https://streak-stats.demolab.com?user=arsalanshaikhh&background=2E3440&stroke=FFFFFF&ring=748FAC&border=FF2D2D00&fire=DDDDDD&currStreakNum=FFFFFF&sideNums=748FAC&currStreakLabel=748FAC&sideLabels=FFFFFF&dates=748FAC"
      );
    } else {
      setSrc(
        "https://streak-stats.demolab.com?user=arsalanshaikhh&ring=4F94EF&fire=515A65&stroke=D5E5FB&currStreakLabel=515A65&currStreakNum=515A65&sideNums=515A65"
      );
    }
  }, [themename]);
  //
  const [neww, setNew] = React.useState(
    themename === "light"
      ? "https://github-readme-stats.vercel.app/api?username=arsalanshaikhh&theme=default&hide_border=true&include_all_commits=false&count_private=true"
      : "https://github-readme-stats.vercel.app/api?username=arsalanshaikhh&theme=nord&hide_border=true&include_all_commits=false&count_private=true"
  );
  React.useEffect(() => {
    if (themename === "dark") {
      setNew(
        "https://github-readme-stats.vercel.app/api?username=arsalanshaikhh&theme=nord&hide_border=true&include_all_commits=false&count_private=true"
      );
    } else {
      setNew(
        "https://github-readme-stats.vercel.app/api?username=arsalanshaikhh&theme=default&hide_border=true&include_all_commits=false&count_private=true"
      );
    }
  }, [themename]);
  const themes = {
    red: {
      title_color: "9ccfd8",
      icon_color: "ebbcba",
      text_color: "e0def4",
      bg_color: "191724",
    },
  };
  return (
    <>
      <div
        className="section main"
        //  data-aos="fade-right"
      >
        {/* <h2 className="section__title different"> </h2> */}

        <div
          className="section"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "45%",
              margin: "auto",
            }}
          >
            <img
              align="center"
              alt="error"
              // theme={themes}
              // style={{ bg_color: "373f51" }}
              src={neww}
              // src="htt/ps://github-readme-stats.vercel.app/api?username=arsalanshaikhh"
              // height="30%"
              width="100%"
              style={{
                boxShadow: "var(--shadow)",
                borderRadius: "20px",
              }}
              height="100%"
            />
          </div>

          <div
            style={{
              width: "45%",
              margin: "auto",
            }}
          >
            <img
              align="center"
              // src="https://github-readme-streak-stats.herokuapp.com/?user=arsalanshaikhh&theme=default&hide_border=true"
              src={src}
              alt="arsalanshaikhh"
              // height="30%"
              width="100%"
              style={{ boxShadow: "var(--shadow)", borderRadius: "20px" }}
              height="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
};
