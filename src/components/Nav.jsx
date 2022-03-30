import React from "react";
// import { Link } from "react-router-dom";
import { StyledNav, NavLinks, StyledNavLinks } from "../styles/nav.styled";

const NavBar = () => {
  return (
    <StyledNav>
      <div>
        <p>BOLARINWA</p>
      </div>
      <NavLinks>
        <StyledNavLinks href="#">About</StyledNavLinks>
        <StyledNavLinks href="#">Resume</StyledNavLinks>
        <StyledNavLinks href="#">Projects</StyledNavLinks>
        <StyledNavLinks href="#">Work</StyledNavLinks>
        <StyledNavLinks href="#">Contact</StyledNavLinks>
      </NavLinks>
    </StyledNav>
  );
};

export default NavBar;
