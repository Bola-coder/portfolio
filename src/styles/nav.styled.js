import styled from "styled-components";

export const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.nav || "#00008B"};
  padding: 10px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  position: fixed;
  top: 0;
  // max-width: 100vw;
  transition: background-color 0.3s ease-in-out;
  z-index: 10;

  & > div {
    flex: 1;
  }

  p {
    font-size: 1.5rem;
    margin-left: 20px;
    color: #fff;
    font-weight: bolder;
  }
`;

export const StyledMenu = styled.div`
  & > svg {
    display: none;
    font-size: 40px;
    margin-right: 0;
  }

  @media screen and (max-width: 768px) {
    & > svg {
      display: block;
      color: #fff;
    }
  }
`;

export const NavLinks = styled.span`
  flex-basis: 55%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    display: none;
  }
`;

export const StyledNavLinks = styled.a`
  font-size: 1rem;
  letter-spacing: 2px;
  padding: 10px 15px;
  color: #fff;
  text-decoration: none;
  transition: transform 0.5s;

  // @media screen and (max-width: 768px) {
  // }

  &:hover {
    transform: scaleX(1.15);
    border-bottom: 3px solid #fff;
  }
`;
