import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <p>BOLARINWA</p>
        </Link>
      </div>
      {/* Mobile Hamburger */}
      <StyledMenu>
        <FaHamburger></FaHamburger>
        <NavLinks>
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
      </StyledMenu>
    </StyledNav>
  );
};

export default NavBar;
