import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { StyledBanner } from "../styles/Banner.styled";
// import { Button } from "../styles/Button.styled";
import bannerImg from "./../images/codeImage.png";

const Banner = () => {
  document.title = "Ahmed Bolarinwa";
  return (
    <>
      <StyledBanner>
        <div>
          <h1>Hi, I am Bolarinwa.</h1>
          <p>
            I am a{" "}
            <span>
              <ReactTypingEffect
                text={["Frontend Developer", "CS Student", "Tech Ethusiast"]}
                typingDelay={1000}
                eraseDelay={500}
                eraseSpeed={200}
                cursor="_"
              />
            </span>
          </p>
          {/* <Button>Contact Me</Button> */}
          <a
            href="https://github.com/Bola-coder"
            target="_blank"
            rel="noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ahmed-bolarinwa"
            target="_blank"
            rel="noreferrer">
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/tesla_sir"
            target="_blank"
            rel="noreferrer">
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/abatoms__"
            target="_blank"
            rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
        <span>
          <img src={bannerImg} alt="3d" />
        </span>
      </StyledBanner>
    </>
  );
};

export default Banner;
