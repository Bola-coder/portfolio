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

  & > div {
    flex: 1;
  }

  p {
    font-size: 30px;
    margin-left: 20px;
    color: #fff;
    font-weight: bolder;
  }
`;

export const StyledNavLinks = styled.a`
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin-right: 40px;
  padding: 10px;
  color: #fff;
  text-decoration: none;
`;
