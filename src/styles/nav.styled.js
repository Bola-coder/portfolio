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
    flex: 1;
    a {
      text-decoration: none;

      p {
        @import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=IBM+Plex+Sans&family=Poppins:wght@500&family=Roboto&family=Yuji+Hentaigana+Akebono&display=swap");
        font-family: "Fira Code", monospace;
        font-family: "IBM Plex Sans", sans-serif;
        font-family: "Poppins", sans-serif;
        font-family: "Roboto", sans-serif;
        font-family: "Yuji Hentaigana Akebono", cursive;
        font-size: 1.5rem;
        margin-left: 20px;
        color: ${({ theme }) => theme.colors.nav_text};
        font-weight: bolder;
      }
    }
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
      color: ${({ theme }) => theme.colors.nav_text};
    }
  }
`;

export const NavLinks = styled.span`
  flex-basis: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    display: none;
  }

  div {
    width: 30px;
    height: 30px;
    padding: 5px;
    border: 1px solid ${({ theme }) => theme.colors.nav_text};
    border-radius: 50%;
    text-align: center;
    cursor: pointer;

    & > svg {
      color: ${({ theme }) => theme.colors.nav_text};
    }
  }
`;

export const StyledNavLinks = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.nav_text};
  transition: transform 0.5s;

  // @media screen and (max-width: 768px) {
  // }

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    transform: scaleX(1.1);
    border-bottom: 2px solid ${({ theme }) => theme.colors.nav_text};
  }
`;
