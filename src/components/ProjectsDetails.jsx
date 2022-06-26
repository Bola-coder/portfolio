import React from "react";
import { FaGithub, FaArrowAltCircleRight } from "react-icons/fa";
import { StyledDetails, TagNames } from "../styles/ProjectDetails.styled";

const ProjectDetails = ({ projects }) => {
  return (
    <>
      {projects
        ? projects.map((project, index) => (
            <StyledDetails>
              <div>
                <img src={project.image} alt="project pics" />
                <div className="text">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <FaGithub></FaGithub>
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
                    <FaArrowAltCircleRight></FaArrowAltCircleRight>
                  </a>

                  <TagNames>Tags: {project.tags.toString()}</TagNames>
                </div>
              </div>
            </StyledDetails>
          ))
        : ""}
    </>
  );
};

export default ProjectDetails;
