import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { FaHamburger, FaLightbulb, FaMoon } from "react-icons/fa";
import { LightModeContext } from "./context/LightModeContext";
import {
  StyledNav,
  NavLinks,
  StyledNavLinks,
  StyledMenu,
} from "../styles/nav.styled";

const NavBar = () => {
  // const [mobile, showMobile] = useState(false);
  const { light, handleLightMode } = useContext(LightModeContext);
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
          <div onClick={handleLightMode}>
            {light ? <FaMoon /> : <FaLightbulb />}
          </div>
        </NavLinks>
      </StyledMenu>
    </StyledNav>
  );
};

export default NavBar;
