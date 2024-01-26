import React from "react";
import "./Contact.css";
import { VscGithub, VscFilePdf, VscMail, VscTwitter } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin, FaCopy } from "react-icons/fa";
import { IoIosDoneAll } from "react-icons/io";
import { ThemeContext } from "../../Context/theme";
import resume from "../resume/Arsalan-Shaikh-Resume.pdf";

export const Contact = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);

  return (
    <div data-aos="fade-right">
      <div className={`${themename} section`}>
        <h2
          className="section__title"
          // data-aos="fade-right"
        >
          Get in <span className="different">Touch</span>
        </h2>
        <div
          className="contactcontainer"
          // data-aos="fade-right"
        >
          <a
            href="https://www.linkedin.com/in/arsalanshaikhh/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>
          <a
            href="https://github.com/arsalanshaikhh"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github" />
          </a>
          {/* <a
            href="mailto:arsalan4coder@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <VscMail className="email" />
          </a> */}
          <a
            href="https://twitter.com/iarsalanshaikh"
            target="_blank"
            rel="noreferrer"
          >
            <VscTwitter className="twitter" />
          </a>
          <a
            // href="https://drive.google.com/file/d/15tWTaOiPAifbJh6VRoyfrJ-iVtAsq5Sj/view"
            href={resume}
            download
            target="_blank"
            rel="noreferrer"
          >
            <VscFilePdf className="phone" />
          </a>
        </div>
        <div>
          {/* <div id={`  ${themename} `} className="mine">
            <h4 className="linkedin">Email : arsalan4coder@gmail.com</h4>
          </div>
          <div id={`${themename} `} className="mine1">
            <h4 className="linkedin">Phone : +91-9422448827</h4>
          </div> */}
          <div id={`${themename} `} className="mine1">
            <h4
              className="section__title"
              // data-aos="fade-right"
              style={{ "text-transform": "capitalize" }}
            >
              Email :{" "}
              <span
                className="different"
                style={{ "text-transform": "lowercase" }}
              >
                arsalan4coder@gmail.com
              </span>
            </h4>
          </div>

          <div id={`${themename} `} className="mine1">
            <h4
              className="section__title"
              // data-aos="fade-right"
              style={{ "text-transform": "capitalize" }}
            >
              Phone : <span className="different">+91-9422448827</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
