import React from "react";
import { StyledHeading } from "../styles/SectionHeader.styled";
// import useFetch from "./fetch/useFetch";
import ProjectDetails from "./ProjectsDetails";
import { StyledProjects } from "../styles/Project.styled";
import projects from "./projectArray";
import "aos/dist/aos.css";

const Projects = () => {
  // const url = "http://localhost:8000/projects";
  // let { loading, error, data } = useFetch(url);
  return (
    <>
      <StyledProjects data-aos="flip-right" id="projects">
        <StyledHeading>My Projects</StyledHeading>
        <ProjectDetails projects={projects} />
      </StyledProjects>
    </>
  );
};

export default Projects;
