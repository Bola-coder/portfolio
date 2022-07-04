import React from "react";
import { StyledServices, StyledServiceCards } from "../styles/Services.styled";
import { StyledHeading } from "../styles/SectionHeader.styled";
const Services = () => {
  const services = [
    {
      name: "Frontend Development",
      content:
        "I build frontend websites and webapps that are beautiful and responsive and helps to solve business problems using recent technologies ",
    },
    {
      name: "Landing Page Development",
      content:
        "I build beautiful landing pages that are responsive and helps to convey the the purpose of your business to clients",
    },
    {
      name: "API DEVELOPMENT",
      content:
        "I build robust and scalable APIs that communictae with frontend and contribute to bulding world class fullstack applications",
    },
  ];
  return (
    <StyledServices>
      <StyledHeading>My Services</StyledHeading>
      <StyledServiceCards>
        {services.map((service, index) => (
          <div key={index}>
            <h4>{service.name}</h4>
            <p>{service.content}</p>
          </div>
        ))}
      </StyledServiceCards>
    </StyledServices>
  );
};

export default Services;
