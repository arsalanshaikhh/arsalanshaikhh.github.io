import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import profilePic from "./pictures/arsalan.jpg";

export const Introduction = () => {
  return (
    <>
      <section id="#about">
        <div
          className="section"
          // data-aos="fade-right"
        >
          <h2 className="section__title">
            About{" "}
            <span className="different" data-aos="fade-right">
              Me
            </span>
          </h2>
          <div className="introduction">
            <div className="introduction_logocontainer">
              {/* <img src={profilePic} alt="Arsalan Image" /> */}
            </div>
            <div
              className="introduction_datacontainer"
              // neeche wala delete karna hai
              style={{ display: "flex", alignItems: "center" }}
            >
              <h4
                style={{
                  "text-align": "justify",
                  lineHeight: "3em",
                }}
              >
                {/* Hi Everyone, I am{" "}
                <span className="different">Arsalan Shaikh</span> Passionate
                Full-Stack Web Developer with a specialization in using{" "}
                <span className="different">MERN stack</span>, highly skilled in
                data structure and algorithm, curious and aspiring Frontend Web
                Developer, looking forward to anexciting opportunity in a
                challenging environment. */}
                {/* Hi, I'm <span className="different">Arsalan Shaikh</span>  */}
                {/* Hi, I am{" "} */}
                {/* <i>
                  <span className="different">Arsalan Shaikh</span>
                </i>{" "}
                an aspiring and determined{" "}
                <i>
                  <span className="different">Full Stack Web Developer</span>
                </i>{" "}
                curious to explore different industry standard tech stacks and
                environments. Skilled in the{" "}
                <i>
                  <span className="different">MERN stack</span>
                </i>{" "}
                and willing to start a career with an organization that provides
                an opportunity to improve skills and knowledge gained as well as
                to grow along with the organization’s goal. */}
                Passionate{" "}
                <span className="different">Full Stack Web Developer</span> with
                a focus on the MERN stack, solid knowledge of data structures
                and algorithms, and aspirational Frontend Web Developer who is
                curious about new opportunities in challenging environments.
              </h4>
              {/* <h4 style={{ "text-align": "justify" }}>
                I developed passion for coding a few years back when I printed
                my first{" "}
                <i>
                  <span className="different">"Hello world"</span>
                </i>{" "}
                that hello world just hits different. Since then aesthetically
                functional websites has just been my thing.
              </h4>
              <h4>
                Apart from coding, some other activities that I love to do!
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                playing Chess and Carrom{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Swimming and Travel
              </h4> */}
              {/* <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travel{" "}
              </h4> */}
              {/* <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Learning Algorithms{" "}
              </h4>
              
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Cooking{" "}
              </h4> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
//
//
//
//
//
//
//
