import styled from "styled-components";

export const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.nav};
  padding: 10px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  max-height: 10vh;
  position: fixed;
  top: 0;
  z-index: 2;

  & > div {
    a {
      display: block;
      text-decoration: none;
      p {
        @import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=IBM+Plex+Sans&family=Poppins:wght@500&family=Roboto&family=Yuji+Hentaigana+Akebono&display=swap");
        font-family: "Fira Code", monospace;
        font-size: 1.8rem;
        margin-left: 20px;
        color: ${({ theme }) => theme.colors.light_text};
        font-weight: 700;

        @media (hover: hover) {
          &:hover {
            transform: rotate(7deg);
          }
        }
        @media screen and (max-width: 768px) {
          margin-left: 10px;
        }
      }
    }
  } // End of Div.
`;

export const StyledMenu = styled.div`
  & > svg {
    font-size: 40px;
    margin-right: 50px;
    cursor: pointer;
    position: relative;
    color: ${({ theme }) => theme.colors.light_text};
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: rotate(90deg);
    }
  }

  @media screen and (max-width: 768px) {
    & > svg {
      margin-right: 20px;
    }

    @media screen and (max-width: 425px) {
      & > svg {
        margin-right: 10px;
      }
  }
`;

export const NavLinks = styled.span`
  position: absolute;
  top: 10vh;
  left: 0%;
  width: 100vw;
  max-width: 100vw;
  height: 90vh;
  padding-top: 5%;
  background-color: ${({ theme }) => theme.colors.nav};

  @media screen and (max-width: 768px) {
  }

  div {
    width: 60px;
    height: 60px;
    padding: 10px;
    margin: 0 auto;
    margin-top: 30px;
    border: 1px solid ${({ theme }) => theme.colors.light_text};
    border-radius: 50%;
    text-align: center;
    cursor: pointer;

    & > svg {
      color: ${({ theme }) => theme.colors.light_text};
      font-size: 40px;
      text-align: center;

      &:hover {
        transform: rotate(90deg);
      }
    }
  }
`;

export const StyledNavLinks = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 25px 5px;
  width: 100vw;
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.light_text};
  transition: transform 0.5s;

  @media screen and (max-width: 768px) {
    &:first-child {
      margin-top: 12%;
    }
  }

  @media screen and (max-width: 425px) {
    // &:first-child {
    //   margin-top: 20%;
    // }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    transform: scale(1.5);
    letter-spacing: 3px;
    // border-bottom: 2px solid ${({ theme }) => theme.colors.light_text};
  }
`;
