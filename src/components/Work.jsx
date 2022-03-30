import React from "react";
import { StyledHeading } from "../styles/SectionHeader.styled";
import { StyledWorks, StyledWorkDetails } from "../styles/Work.styled";
import atc from "./../images/workImages/atc2.png";
import edconnect from "./../images/workImages/edconnect3.png";
import zuri from "./../images/workImages/zuri2.svg";

const Work = () => {
  const works = [
    {
      name: "EdConnect MicroDegree",
      position: "Frontend Microdegree",
      image: edconnect,
    },
    {
      name: "Zuri Technologies",
      position: "Frontend Intern",
      image: zuri,
    },
    {
      name: "Africa Trainovation Consulting",
      position: "Frontend Developer",
      image: atc,
    },
  ];
  return (
    <React.Fragment>
      <StyledWorks>
        <StyledHeading>Work Experience</StyledHeading>
        <StyledWorkDetails>
          {works.map((work, index) => (
            <div key={index}>
              <img src={work.image} alt="" />
              <div className="text">
                <h4>{work.name}</h4>
                <p>{work.position}</p>
              </div>
            </div>
          ))}
        </StyledWorkDetails>
      </StyledWorks>
    </React.Fragment>
  );
};

export default Work;
