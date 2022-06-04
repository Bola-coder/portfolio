import React from "react";
import { StyledResume, StyledResumeLink } from "../styles/Resume.styled";
import resume from "./../files/new_resume.pdf";

const Resume = () => {
  return (
    <>
      <StyledResume>
        <StyledResumeLink download href={resume} target="_blank">
          DOWNLOAD RESUME
        </StyledResumeLink>
      </StyledResume>
    </>
  );
};

export default Resume;
