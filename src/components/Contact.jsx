import React, { useState } from "react";
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
import emailjs from "@emailjs/browser";
const Contact = () => {
  document.title = "Ahmed Bolarinwa | Contact";
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formDetails;

  const handleFormChange = (e) => {
    setFormDetails((current) => ({
      ...current,
      [e.target.name]: [e.target.value],
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const {name, email, message} = formDetails;
    if(!name || !email || !message){
      alert("Please fill in all fields.");
      return;
    }
    console.log(formDetails);
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        formDetails,
        process.env.REACT_APP_EMAIL_PUBLIC_ID
      )
      .then((result) => {
        // console.log(result);
        setFormDetails({
          name: "",
          email: "",
          message: "",
        });
        alert("Message Successfully sent. I'll get back to you.");
      })
      .catch((err) => {
        console.log(err);
        alert("Error sending message. Please try again.");
      });
  };

  return (
    <StyledContacts>
      <StyledHeading>Contact Me</StyledHeading>
      <StyledContact>
        <StyledForm>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="name">Enter your name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleFormChange}
              />
            </div>
            <div>
              <label htmlFor="email">Enter your email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={handleFormChange}
              />
            </div>
            <div>
              <label htmlFor="comment">Type a message</label>
              <textarea
                type="text"
                id="comment"
                name="message"
                value={message}
                onChange={handleFormChange}></textarea>
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
