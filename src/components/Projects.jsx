import React from "react";
import { StyledHeading } from "../styles/SectionHeader.styled";
import useFetch from "./fetch/useFetch";
import ProjectDetails from "./ProjectsDetails";
import { StyledProjects } from "../styles/Project.styled";

const Projects = () => {
  const url = "http://localhost:8000/projects";
  let { loading, error, data } = useFetch(url);
  return (
    <>
      <StyledProjects>
        <StyledHeading>My Projects</StyledHeading>
        <ProjectDetails projects={data} loading={loading} error={error} />
      </StyledProjects>
    </>
  );
};

export default Projects;
