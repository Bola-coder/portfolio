import React from "react";
import ReactTypingEffect from "react-typing-effect";
import {} from "react-icons/fa";
import { StyledBanner } from "../styles/Banner.styled";
// import { Button } from "../styles/Button.styled";
import bannerImg from "./../images/codeImage.png";

const Banner = () => {
  return (
    <>
      <StyledBanner>
        <div>
          <h1>Hi, I am Bolarinwa.</h1>
          <p>
            I am a{" "}
            <span>
              <ReactTypingEffect
                text={["Fullstack Developer", "CS Student", "Tech Ethusiast"]}
                typingDelay={1000}
                eraseDelay={500}
                eraseSpeed={200}
              />
            </span>
          </p>
          {/* <Button>Contact Me</Button> */}
        </div>
        <span>
          <img src={bannerImg} alt="3d" />
        </span>
      </StyledBanner>
    </>
  );
};

export default Banner;
