import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
import { TechstacksMain } from "./TechstacksMain";
import resume from "../resume/Arsalan-Shaikh-Resume.pdf";

export const About = () => {
  return (
    <div
    // data-aos="fade-right"
    >
      <div id="#home" className="about center">
        <div className="name">
          <h1
          // data-aos="fade-right"
          >
            {/*  */}
            Hi, I am <span className="about__name">Arsalan Shaikh</span>
          </h1>
        </div>

        <Type />

        <div
          className="about__contact center"
          // data-aos="fade-right"
          // style={{ "align-items": "center" }}
        >
          <a
            href="https://www.linkedin.com/in/arsalanshaikhh/"
            aria-label="Linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/arsalanshaikhh"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>

          <a
            href="https://www.twitter.com/Arsalan99853"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            // href="https://drive.google.com/file/d/15tWTaOiPAifbJh6VRoyfrJ-iVtAsq5Sj/view"
            href={resume}
            download
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <DescriptionIcon />
          </a>
        </div>
      </div>
      <Introduction />
      {/* <Timeline /> */}
      <section id="#skills">
        <TechstacksMain />
      </section>
    </div>
  );
};
