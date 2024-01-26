import React from "react";
import "./Projects.css";
import { FaReact, FaNodeJs, Facss } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiVercel,
  Sicss,
  SiCss3,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiNodedotjs,
  SiNetlify,
  SiMongodb,
  SiRedux,
  SiHeroku,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import zee from "../About/pictures/zee.JPG";
import asos from "../About/pictures/asos.JPG";
import harvest from "../About/pictures/harvest.png";
import apart from "../About/pictures/apart.jpg";

export const Projects = () => {
  return (
    <>
      <div className="section" data-aos="fade-right">
        <div
          className="section__title different"
          // data-aos="fade-right"
        >
          <h2 className="section__title">
            My Recent <span className="different">Works</span>
          </h2>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div
              // data-aos="fade-right"
              >
                <img src={harvest} alt="GetHarvest" />
              </div>
            </div>
            <div
              className="project_information"
              // data-aos="fade-right"
            >
              <h2>Getharvest Clone</h2>
              <p style={{ "text-align": "justify" }}>
                Harvest or Getharvest is a web-based time tracking, Project
                Management, Invoicing, and cost-tracking tool. which is used by
                more than 70000+ companies.{" "}
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <SiCss3 />
                {/* <IoLogoJavascript /> */}
                <SiRedux />
                <SiExpress />
                <DiMongodb />
                {/* <SiNodedotjs /> */}
                {/* <SiNetlify /> */}
                <SiVercel />
              </div>
              <div>
                <a
                  href="https://get-harvest-rct201clone.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    className="btn btn--outline onbt"
                    style={{ "border-radius": "10px" }}
                  >
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/SHARUN266/savory-science-7410"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    className="btn btn--outline"
                    style={{ "border-radius": "10px" }}
                  >
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div
              // data-aos="fade-right"
              >
                <img src={zee} alt="Travelocity" />
              </div>
            </div>
            <div
              className="project_information"
              //  data-aos="fade-right"
            >
              <h2>Zee5 Clone</h2>
              <p style={{ "text-align": "justify" }}>
                This is a clone of zee5.com, which is an OTT platform I have
                Created Routes, Built Pages with a Login Authentication System
                using Redux, and for the backend, I have created the JSON server
                and hosted it using Heroku. This is an individual project that I
                have completed in just five days of work.{" "}
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
                <SiNodedotjs />
                <SiVercel />
              </div>
              <div>
                <a
                  href="https://zee5-kohl.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    className="btn btn--outline onbt"
                    style={{ "border-radius": "10px" }}
                  >
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arsalanshaikhh/zee5_react_rambunctious-attraction-3750"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    className="btn btn--outline"
                    style={{ "border-radius": "10px" }}
                  >
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div
              // data-aos="fade-right"
              >
                <img src={apart} alt="Travelocity" />
              </div>
            </div>
            <div
              className="project_information"
              //  data-aos="fade-right"
            >
              <h2>Apartment Management</h2>
              <p style={{ "text-align": "justify" }}>
                It is an Apartment Management System website. This website
                assists both tenants and owners in purchasing or renting
                property.{" "}
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
                <SiNodedotjs />
                <SiVercel />
              </div>
              <div>
                <a
                  href="https://apartment-management-system-red.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    className="btn btn--outline onbt"
                    style={{ "border-radius": "10px" }}
                  >
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arsalanshaikhh/Apartment-Frontend"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    className="btn btn--outline"
                    style={{ "border-radius": "10px" }}
                  >
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div
              // data-aos="fade-right"
              >
                <img src={asos} alt="Travelocity" />
              </div>
            </div>
            <div
              className="project_information"
              // ata-aos="fade-right"
            >
              <h2>Asos.com Clone</h2>
              <p style={{ "text-align": "justify" }}>
                This is a clone of asos.com, which is an E-commerce website. we
                have a home page, product page, and sorting, filtering, and
                searching functionality with a Login Authentication System. I
                also added a cart, coupons, entering and saving details of cards
                and addresses of customers, and dispatching a product. This
                project was collaborated by a team of five and completed in just
                five days.
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
                <SiVercel />
              </div>
              <div>
                <a
                  href="https://steady-swan-edc8d5.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    className="btn btn--outline onbt"
                    style={{ "border-radius": "10px" }}
                  >
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arsalanshaikhh/asos.com-clone-Unit2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    className="btn btn--outline"
                    style={{ "border-radius": "10px" }}
                  >
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/* <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/88669777/192661863-9e20d354-0e84-4ebf-8a6a-ce9b7366ce91.png"
                  alt="Travelocity"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Guess the Number Game</h2>
              <p style={{ "text-align": "justify" }}>
                A guess the number is a simple guessing game where a user is
                supposed to guess a number from 0 to 100 in a maximum of 10
                attempts for easy mode and 5 attempts for gard mode and The game
                will end after 10 attempts and if the player failed to guess the
                number, and then he loses the game.
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
                <SiVercel />
              </div>
              <div>
                <a
                  href="https://guess-the-number-sable.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    className="btn btn--outline onbt"
                    style={{ "border-radius": "10px" }}
                  >
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arsalanshaikhh/Guess_the_Number"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    className="btn btn--outline"
                    style={{ "border-radius": "10px" }}
                  >
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> */}
        {/*  */}
        {/* <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div
              // data-aos="fade-right"
              >
                <img
                  src="https://user-images.githubusercontent.com/88669777/151234263-a283de5d-4220-45bc-9568-14bf63638f6a.gif"
                  alt="Travelocity"
                />
              </div>
            </div>
            <div
              className="project_information"
              // data-aos="fade-right"
            >
              <h2>Red-Store</h2>
              <p style={{ "text-align": "justify" }}>
                Redstore.com is an online shopping destination for children, men
                and women's luxury clothing, bags, shoes, and accessories, it is
                an individual website build my me from scratch.
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <SiVercel />
              </div>
              <div>
                <a
                  href="https://red-store-sandy.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    className="btn btn--outline onbt"
                    style={{ "border-radius": "10px" }}
                  >
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arsalanshaikhh/Red-Store"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    className="btn btn--outline"
                    style={{ "border-radius": "10px" }}
                  >
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> */}
        {/*  */}
        {/* <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/88669777/192665912-de52d1fc-776a-4730-95e8-efa6c74dfa04.png"
                  alt="Travelocity"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Password Generator</h2>
              <p style={{ "text-align": "justify" }}>
                Password Generator is a application that creates random
                passwords for different users. It will generate the password as
                per your configuration like length of password, contain upper
                case letter, contain lower case letter, contain number and
                contain symbol.
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
                <SiVercel />
              </div>
              <div>
                <a
                  href="https://password-generator-ten-indol.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    className="btn btn--outline onbt"
                    style={{ "border-radius": "10px" }}
                  >
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arsalanshaikhh/Password_Generator"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    className="btn btn--outline"
                    style={{ "border-radius": "10px" }}
                  >
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> */}
        {/*  */}
        {/* <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div
              // data-aos="fade-right"
              >
                <img
                  src="https://user-images.githubusercontent.com/88669777/151240731-b0753419-43da-4921-8bc4-93d228dc7e29.gif"
                  alt="Travelocity"
                />
              </div>
            </div>
            <div
              className="project_information"
              // data-aos="fade-right"
            >
              <h2>Omni Food</h2>
              <p style={{ "text-align": "justify" }}>
                Omnifood is a restaurant website where customers can searching
                for food in your general area, such as your location, cuisine
                type, and restaurant name.
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
                <SiVercel />
              </div>
              <div>
                <a
                  href="https://omnifood-three-phi.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    className="btn btn--outline onbt"
                    style={{ "border-radius": "10px" }}
                  >
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arsalanshaikhh/Food-Delivery-Website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    type="button"
                    className="btn btn--outline"
                    style={{ "border-radius": "10px" }}
                  >
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
