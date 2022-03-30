import React from "react";
import { FaGithub, FaArrowAltCircleRight } from "react-icons/fa";
import { StyledDetails, TagNames } from "../styles/ProjectDetails.styled";

const ProjectDetails = ({ loading, error, projects }) => {
  return (
    <>
      <StyledDetails>
        {projects &&
          projects.map((project, index) => (
            <div key={index}>
              {/* The image */}
              <img src={project.image} alt="project pics" />
              <div className="text">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <FaGithub></FaGithub>
                <FaArrowAltCircleRight></FaArrowAltCircleRight>
                <TagNames>Tags: {project.tags.toString()}</TagNames>
              </div>
            </div>
          ))}
      </StyledDetails>
    </>
  );
};

export default ProjectDetails;
