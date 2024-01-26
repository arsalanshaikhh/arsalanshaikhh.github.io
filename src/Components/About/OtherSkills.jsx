import React from "react";
import "./Techstacks.css";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const OtherSkills = () => {
  return (
    <>
      <div className="section main" 
      
      data-aos="fade-right"
      >
        {/* <h2 className="section__title different"> </h2> */}
        <h2 className="section__title">
          My <span className="different">Skill</span>
        </h2>
        <div className="techsection">
          <div style={{ width: "45%" }}>
            <h4>Front-End Development</h4>
          </div>
          <div style={{ width: "45%" }}>
            <h4>Back-End Development</h4>
          </div>
          <div style={{ width: "45%" }}>
            <h4>Data Structures & Algorithm</h4>
          </div>
          <div style={{ width: "45%" }}>
            <h4>Communication Skills</h4>
          </div>
        </div>
      </div>
    </>
  );
};
