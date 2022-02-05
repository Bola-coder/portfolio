import React from "react";
import { StyledNav, StyledNavLinks } from "../styles/nav.styled";

const NavBar = () => {
  return (
    <StyledNav>
      <div>
        <p>ABATOMS</p>
      </div>
      <StyledNavLinks href="#">About</StyledNavLinks>
      <StyledNavLinks href="#">Resume</StyledNavLinks>
      <StyledNavLinks href="#">Projects</StyledNavLinks>
      <StyledNavLinks href="#">Work</StyledNavLinks>
      <StyledNavLinks href="#">Contact</StyledNavLinks>
    </StyledNav>
  );
};

export default NavBar;
