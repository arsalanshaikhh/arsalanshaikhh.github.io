import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
} from "react-icons/si";
import { DiCss3, DiMongodb, DiNpm } from "react-icons/di";
import {
  SiJavascript,
  SiChakraui,
  SiJest,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiCss3,
} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";
import { Techstacks } from "./Techstacks";
import { OtherSkills } from "./OtherSkills";

export const TechstacksMain = () => {
  return (
    <>
      <div
        className="section main"
        // data-aos="fade-right"
      >
        {/* <h2 className="section__title different">My Skill</h2> */}

        {/* <OtherSkills /> */}
        <Techstacks />
      </div>
    </>
  );
};
