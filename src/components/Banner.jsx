import React from "react";
import { StyledBanner } from "../styles/Banner.styled";
import { Button } from "../styles/Button.styled";
// import myImage from "./../images/bg-img-two.jpg";
import bannerImg from "./../images/developer3.png";

const Banner = () => {
  return (
    <>
      <StyledBanner>
        <div>
          <h1>Hi, I am Bolarinwa.</h1>
          <p>
            I am a <span>Frontend </span>Developer.
          </p>
          <Button>Contact Me</Button>
        </div>
        <span>
          <img src={bannerImg} alt="3d " />
        </span>
      </StyledBanner>
    </>
  );
};

export default Banner;
