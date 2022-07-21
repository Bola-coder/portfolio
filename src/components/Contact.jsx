import React from "react";
import { StyledHeading } from "../styles/SectionHeader.styled";
import {
  StyledContacts,
  StyledContact,
  StyledForm,
  StyledWidgets,
} from "../styles/Contact.styled";
import {
  FaGithub,
  FaLinkedin,
  FaAddressBook,
  FaCity,
  FaTwitter,
} from "react-icons/fa";
const Contact = () => {
  document.title = "Ahmed Bolarinwa | Contact";

  return (
    <StyledContacts>
      <StyledHeading>Contact Me</StyledHeading>
      <StyledContact>
        <StyledForm>
          <form action="">
            <div>
              <label htmlFor="name">Enter your name</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="email">Enter your email</label>
              <input type="text" id="email" />
            </div>
            <div>
              <label htmlFor="comment">Type a message</label>
              <textarea type="text" id="comment"></textarea>
            </div>
            <div>
              <button>Send a message</button>
            </div>
          </form>
        </StyledForm>
        <StyledWidgets>
          <span>
            <FaCity />
            <p>Ogun State, Nigeria.</p>
          </span>
          <span>
            <FaAddressBook />
            <p>+2348026117966</p>
          </span>
          <span>
            <FaGithub />
            <p>Bola-coder</p>
          </span>
          <span>
            <FaLinkedin />
            <p>Ahmed Bolarinwa</p>
          </span>
          <span>
            <FaTwitter />
            <p>tesla_sir</p>
          </span>
        </StyledWidgets>
      </StyledContact>
    </StyledContacts>
  );
};

export default Contact;
