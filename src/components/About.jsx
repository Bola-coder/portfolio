import React from "react";
import Resume from "./Resume";
import { StyledHeading } from "../styles/SectionHeader.styled";
import { AboutContent, StyledAbout } from "../styles/About.styled";
import myImage from "./../images/abolarinwa.jpg";
import Skills from "./Skills";
import Work from "./Work";
import Services from "./Services";

const About = () => {
  document.title = "Ahmed Bolarinwa | About";

  return (
    <>
      <StyledAbout>
        <AboutContent>
          <span>
            <img src={myImage} alt="" />
          </span>
          <div>
            <StyledHeading align="left">About Me</StyledHeading>
            <p>
              I am a Frontend developer (Fullstack developer in view) with 2+
              years of experience developing beautiful and responsive websites.
              A 3rd year computer science student who is passionate about
              technology and its perks, I have been developing websites to solve
              business problems and to help present businesses online in a very
              nice and beautiful way. With several projects built, I am
              confident of my skill as a frontend developer. I have what it
              takes to help transform your business ideas into web applicaions
              that will attract the right customers. Aisde coding and building
              web solutions, I enjoy reading books and sleeping.
            </p>
            <Resume />
          </div>
        </AboutContent>

        {/* Other Components */}
        <Services />
        <Skills />
        <Work />
      </StyledAbout>
    </>
  );
};

export default About;
