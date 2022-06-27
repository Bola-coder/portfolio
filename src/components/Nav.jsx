import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaLightbulb, FaMoon } from "react-icons/fa";
import { LightModeContext } from "./context/LightModeContext";
import {
  StyledNav,
  NavLinks,
  StyledNavLinks,
  StyledMenu,
} from "../styles/nav.styled";

const NavBar = () => {
  const [mobile, setMobile] = useState(false);
  const { light, handleLightMode } = useContext(LightModeContext);

  const handleMobile = () => {
    setMobile((prev) => !prev);
  };
  return (
    <StyledNav>
      <div>
        <Link to="/">
          <p>BOLARINWA</p>
        </Link>
      </div>
      {/* Mobile Hamburger */}
      <StyledMenu onClick={handleMobile}>
        {mobile ? <FaTimes /> : <FaBars />}
        {mobile ? (
          <NavLinks className={mobile ? "mobile" : ""}>
            <StyledNavLinks>
              <Link to="/">Home</Link>
            </StyledNavLinks>
            <StyledNavLinks>
              <Link to="/about">About</Link>
            </StyledNavLinks>
            <StyledNavLinks>
              <Link to="/portfolio">Portfolio</Link>
            </StyledNavLinks>
            <StyledNavLinks>
              <Link to="/contact">Contact</Link>
            </StyledNavLinks>
            <div onClick={handleLightMode}>
              {light ? <FaMoon /> : <FaLightbulb />}
            </div>
          </NavLinks>
        ) : (
          ""
        )}
      </StyledMenu>
    </StyledNav>
  );
};

export default NavBar;
