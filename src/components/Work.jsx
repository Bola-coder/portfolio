import React from "react";
import { StyledHeading } from "../styles/SectionHeader.styled";
import { StyledWorks, StyledWorkDetails } from "../styles/Work.styled";
import atc from "./../images/workImages/atc2.png";
import edconnect from "./../images/workImages/edconnect3.png";
import zuri from "./../images/workImages/zuri2.svg";
import "aos/dist/aos.css";

const Work = () => {
  const works = [
    {
      name: "Africa Trainovation Consulting",
      position: "Frontend Developer",
      year: "Jan 2022 - Present",
      image: atc,
    },
    {
      name: "Zuri Technologies",
      position: "Frontend Intern",
      year: "April 2021 - September",
      image: zuri,
    },
    {
      name: "EdConnect MicroDegree",
      position: "Frontend Microdegree",
      year: "Jan 2021 - December 2021",
      image: edconnect,
    },
  ];
  return (
    <React.Fragment>
      <StyledWorks data-aos="fade-down" id="work">
        <StyledHeading>Experience</StyledHeading>
        <StyledWorkDetails>
          {works.map((work, index) => (
            <div key={index}>
              {/* <img src={work.image} alt="" /> */}
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
