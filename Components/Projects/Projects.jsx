import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://camo.githubusercontent.com/b535a904feda98419343b74a62a6657410f0b222084b0d00692ac324000072f3/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a763958644a49336d67423444426f6b562d477a4f6d772e6a706567"
                    alt="GearBest.com"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>GearBest.com Clone</h2>
                <p>
                  gearbest.com is an innovative online Chinese company providing wholesale electronics, appliances, apparel, and accessories. I worked on this project during unit-2 construct week at Masai School with the help of other three team members.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://gearbestclone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/mohammad-atique/gearbest_masai_clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://camo.githubusercontent.com/d371aba3e9c1c628cf41a9a33ef8b33b90e45d086054f2e307617eb98228ebeb/68747470733a2f2f692e696d6775722e636f6d2f307a71347942412e706e67"
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Lybrate.com Clone</h2>
                <p>
                Lybrate.com innovative online doctor database gives you access to over 150,000 highly trained medical experts. So you can ask a doctor anything you want, simple with a touch of a finger. GoodKart is Lybrate’s endeavour to deliver the best of the best Health care products at your doorstep. GoodKart brings to you a vibrant mix of health products, both from reputed international brands to local Indian brands. I worked on this project during unit-4 construct week at Masai School with the help of other three team members.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://librate.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/pankajnandi/lybrateFrontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
         
          
          
         
              
           
          
        </div>
      </div>

    </>
  );
};
