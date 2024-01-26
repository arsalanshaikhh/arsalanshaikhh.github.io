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
  SiTypescript,
  SiHeroku,
  SiCss3,
  SiNextdotjs,
} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <div>
      <div className="section main" data-aos="fade-right">
        {/* <h2 className="section__title different"> </h2> */}
        <h2 className="section__title">
          Tech <span className="different">Stack</span>
        </h2>
        <div className="techsection">
          <div>
            <SiJavascript size={55} />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiTypescript size={55} />
            <h5>Typescript</h5>
          </div>
          <div>
            <SiHtml5 size={55} />
            <h5>HTML</h5>
          </div>
          <div>
            <SiCss3 size={55} />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact size={55} />
            <h5>React</h5>
          </div>

          <div>
            <SiNextdotjs size={55} />
            <h5>Next.JS</h5>
          </div>
          <div>
            <FaNodeJs size={55} />
            <h5>Nodejs</h5>
          </div>
          <div>
            <DiMongodb size={55} />
            <h5>MongoDb</h5>
          </div>
          <div>
            <SiRedux size={55} />
            <h5>Redux</h5>
          </div>
          <div>
            <SiExpress size={55} />
            <h5>Express</h5>
          </div>
          <div>
            <SiChakraui size={55} />
            <h5>Chakra UI</h5>
          </div>
          <div>
            <SiMaterialui size={55} />
            <h5>Material Ui</h5>
          </div>
          <div>
            <BsBootstrap size={55} />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <VscGithub size={55} />
            <h5>Github</h5>
          </div>
          <div>
            <DiNpm size={55} />
            <h5>Npm</h5>
          </div>
          <div>
            <SiJest size={55} />
            <h5>Jest</h5>
          </div>
          <div>
            <SiPostman size={55} />
            <h5>Postman</h5>
          </div>

          <div>
            <FaSass size={55} />
            <h5>Sass</h5>
          </div>
          <div>
            <SiHeroku size={55} />
            <h5>heroku</h5>
          </div>
          <div>
            <SiVercel size={55} />
            <h5>Vercel</h5>
          </div>
          <div>
            <SiNetlify size={55} />
            <h5>Netlify</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
