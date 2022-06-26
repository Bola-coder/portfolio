import React from "react";
import { StyledHeading } from "../styles/SectionHeader.styled";
import { StyledSkill, StyledSkills } from "../styles/Skill.styled";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaVuejs,
  FaNodeJs,
  FaGit,
  FaGithub,
} from "react-icons/fa";

const Skills = () => {
  return (
    <StyledSkills>
      <StyledHeading>Tools and Skills</StyledHeading>
      <StyledSkill>
        <div>
          <FaHtml5 />
          <p>HTML5</p>
        </div>
        <div>
          <FaCss3 />
          <p>CSS3</p>
        </div>
        <div>
          <FaJs />
          <p>Javascript</p>
        </div>
        <div>
          <FaBootstrap />
          <p>Bootstrap</p>
        </div>
        <div>
          <FaReact />
          <p>Reactjs</p>
        </div>
        <div>
          <FaVuejs />
          <p>VueJs</p>
        </div>
        <div>
          <FaNodeJs />
          <p>Nodejs</p>
        </div>
        <div>
          <FaGit />
          <p>Git</p>
        </div>
        <div>
          <FaGithub />
          <p>Github</p>
        </div>
      </StyledSkill>
    </StyledSkills>
  );
};

export default Skills;
