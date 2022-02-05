import React from "react";
import { StyledBanner } from "../styles/Banner.styled";
import myImage from "./../images/my-image.jpg";

const Banner = () => {
  return (
    <>
      <StyledBanner>
        <div>
          <h1>Hi, I am Bolarinwa</h1>
          <p>I am a Frontend Developer</p>
        </div>
        <span>
          <img src={myImage} alt="" />
        </span>
      </StyledBanner>
    </>
  );
};

export default Banner;
