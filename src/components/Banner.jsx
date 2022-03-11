import React from "react";
import { StyledBanner } from "../styles/Banner.styled";
import { Button } from "../styles/Button.styled";
// import myImage from "./../images/bg-img-two.jpg";

const Banner = () => {
  return (
    <>
      <StyledBanner>
        <div>
          <h1>Hi, I am Bolarinwa.</h1>
          <p>I am a Frontend Developer.</p>
          <Button>Contact Me</Button>
        </div>
        {/* <span>
          <img src={myImage} alt="" />
        </span> */}
      </StyledBanner>
    </>
  );
};

export default Banner;
