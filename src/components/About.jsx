import React from "react";
import { StyledHeading } from "../styles/SectionHeader.styled";
import { AboutContent, StyledAbout } from "../styles/About.styled";
import myImage from "./../images/my-image2.jpg";

const About = () => {
  return (
    <>
      <StyledAbout>
        <StyledHeading>About Me</StyledHeading>
        <AboutContent>
          <span>
            <img src={myImage} alt="" />
          </span>
          <div>
            <p>
              I am a Frontend developer (aspiring fullstack developer) with 2+
              years of experience developing beautiful and responsive websites.
              A 3rd year computer science student who is passionate about
              technology and its perks, I have been developing websites to solve
              business problems and to help present businesses online in a very
              nice and beautiful way. With several projects built, I am
              confident in my skill as a frontend developer. I have what it
              takes to help transform your business ideas into web applicaions
              that will attract the right customers. Aisde coding and building
              web solutions, I enjoy reading books and sleeping.
            </p>
          </div>
        </AboutContent>
      </StyledAbout>
    </>
  );
};

export default About;
