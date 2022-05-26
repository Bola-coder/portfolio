import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import {
  StyledNav,
  NavLinks,
  StyledNavLinks,
  StyledMenu,
} from "../styles/nav.styled";

const NavBar = () => {
  const [mobile, showMobile] = useState(false);
  return (
    <StyledNav>
      <div>
        <p>BOLARINWA</p>
      </div>
      {/* Mobile Hamburger */}
      <StyledMenu>
        <FaHamburger></FaHamburger>
        <NavLinks>
          <StyledNavLinks href="#">About</StyledNavLinks>
          <StyledNavLinks href="#">Resume</StyledNavLinks>
          <StyledNavLinks href="#">Projects</StyledNavLinks>
          <StyledNavLinks href="#">Work</StyledNavLinks>
          <StyledNavLinks href="#">Contact</StyledNavLinks>
        </NavLinks>
      </StyledMenu>
    </StyledNav>
  );
};

export default NavBar;
