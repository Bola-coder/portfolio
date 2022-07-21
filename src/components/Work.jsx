import React from "react";
import { StyledHeading } from "../styles/SectionHeader.styled";
import { StyledWorks, StyledWorkDetails } from "../styles/Work.styled";

const Work = () => {
  const works = [
    {
      name: "Africa Trainovation Consulting",
      position: "Frontend Developer",
      year: "Jan 2022 - Present",
    },
    {
      name: "Zuri Technologies",
      position: "Frontend Intern",
      year: "April 2021 - September",
    },
    {
      name: "EdConnect MicroDegree",
      position: "Frontend Microdegree",
      year: "Jan 2021 - December 2021",
    },
  ];
  return (
    <React.Fragment>
      <StyledWorks>
        <StyledHeading>Work Experience</StyledHeading>
        <StyledWorkDetails>
          {works.map((work, index) => (
            <div key={index}>
              <div className="text">
                <h4>{work.name}</h4>
                <p>{work.position}</p>
                <p className="year">{work.year}</p>
              </div>
            </div>
          ))}
        </StyledWorkDetails>
      </StyledWorks>
    </React.Fragment>
  );
};

export default Work;
