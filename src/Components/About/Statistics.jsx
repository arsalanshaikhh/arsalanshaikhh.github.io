import React from "react";
import "./Techstacks.css";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Statistics = () => {
  return (
    <>
      <div
        className="section main"
        // data-aos="fade-right"
      >
        {/* <h2 className="section__title different"> </h2> */}
        <h2 className="section__title">
          Statistics <span className="different">section</span>
        </h2>
        <div className="techsection">
          {/* <div>
            <h3>1200+ Hours</h3>
            <h5>Full Stack Coading</h5>
          </div> */}
          <div style={{ width: "45%" }}>
            <h3>1200+ Hours</h3>
            <h5>Coding</h5>
          </div>
          <div style={{ width: "45%" }}>
            <h3>800+ Hours</h3>
            <h5>DSA</h5>
          </div>
          <div style={{ width: "45%" }}>
            <h3>100+ Hours</h3>
            <h5>Soft Skill</h5>
          </div>
          {/* <div style={{ width: "45%" }}>
            <h3>20+ Projects</h3>
            <h5>Done</h5>
          </div>
          <div style={{ width: "45%" }}>
            <h3>240+ Hackerrank</h3>
            <h5>Problems</h5>
          </div> */}
        </div>
      </div>
    </>
  );
};
