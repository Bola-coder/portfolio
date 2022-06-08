import React from "react";
import { StyledHeading } from "../styles/SectionHeader.styled";
import {
  StyledContacts,
  StyledContact,
  StyledForm,
} from "./../styles/Contact.styled";
import {
  FaGithub,
  FaLinkedin,
  FaAddressBook,
  FaCity,
  FaTwitter,
} from "react-icons/fa";
const Contact = () => {
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
        <div>
          <span>
            <FaCity />
            <p>Ogun State</p>
          </span>
          <span>
            <span>
              <FaAddressBook />
              <p>+2348026117966</p>
            </span>
            <FaGithub />
            <p>Bola-coder</p>
          </span>
          <span>
            <FaLinkedin />
            <p>Ahmed Bolarinwar</p>
          </span>
          <span>
            <FaTwitter />
            <p>https://twitter.com/tesla_sir</p>
          </span>
        </div>
      </StyledContact>
    </StyledContacts>
  );
};

export default Contact;
