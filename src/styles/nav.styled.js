import styled from "styled-components";

export const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.nav};
  padding: 10px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  position: fixed;
  top: 0;
  // max-width: 100vw;
  z-index: 2;

  & > div {
    // flex: 1;
    a {
      text-decoration: none;

      p {
        @import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=IBM+Plex+Sans&family=Poppins:wght@500&family=Roboto&family=Yuji+Hentaigana+Akebono&display=swap");
        font-family: "Fira Code", monospace;
        font-size: 1.8rem;
        margin-left: 20px;
        color: ${({ theme }) => theme.colors.nav_text};
        font-weight: 700;
      }
    }
  }
`;

export const StyledMenu = styled.div`
  & > svg {
    font-size: 40px;
    margin-right: 50px;
    cursor: pointer;
    position: relative;
  }

  @media screen and (max-width: 768px) {
    & > svg {
      display: block;
      color: ${({ theme }) => theme.colors.nav_text};
    }
  }
`;

export const NavLinks = styled.span`
  position: absolute;
  top: 10vh;
  left: 0%;
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  padding-top: 5%;
  background-color: ${({ theme }) => theme.colors.nav};

  @media screen and (max-width: 768px) {
  }

  div {
    width: 30px;
    height: 30px;
    padding: 5px;
    margin: 0 auto;
    margin-top: 50px;
    border: 1px solid ${({ theme }) => theme.colors.nav_text};
    border-radius: 50%;
    text-align: center;
    cursor: pointer;

    & > svg {
      color: ${({ theme }) => theme.colors.nav_text};

      &:hover {
        transform: rotate(90deg);
      }
    }
  }
`;

export const StyledNavLinks = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 15px;
  width: 100vh;
  margin: 0 auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.nav_text};
  transition: transform 0.5s;

  // @media screen and (max-width: 768px) {
  // }

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    transform: scale(1.5);
    // border-bottom: 2px solid ${({ theme }) => theme.colors.nav_text};
  }
`;
