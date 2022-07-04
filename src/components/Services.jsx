import React from "react";
import { StyledServices, StyledServiceCards } from "../styles/Services.styled";
import { StyledHeading } from "../styles/SectionHeader.styled";
import { FaTools, FaToolbox, FaCode, FaSearchengin } from "react-icons/fa";
const Services = () => {
  const services = [
    {
      name: "Frontend Development",
      content:
        "I build frontend websites and webapps that are beautiful and responsive and helps to solve business problems using recent technologies ",
      icon: <FaTools />,
    },
    {
      name: "Landing Page Development",
      content:
        "I build beautiful landing pages that are responsive and helps to convey the the purpose of your business to clients",
      icon: <FaToolbox />,
    },
    {
      name: "API DEVELOPMENT",
      content:
        "I build robust and scalable APIs that communictae with frontend and contribute to bulding world class fullstack applications",
      icon: <FaCode />,
    },
    {
      name: "TECH TUTORIALS",
      content:
        "I teach frontend web development to people who are willing to learn and dive into th tech space. My students are doing well in tech",
      icon: <FaSearchengin />,
    },
  ];
  return (
    <StyledServices>
      <StyledHeading>My Services</StyledHeading>
      <StyledServiceCards>
        {services.map((service, index) => (
          <div key={index}>
            {service.icon}
            <h4>{service.name}</h4>
            <p>{service.content}</p>
          </div>
        ))}
      </StyledServiceCards>
    </StyledServices>
  );
};

export default Services;
