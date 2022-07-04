import styled from "styled-components";

export const StyledResume = styled.div`
  padding: 10px;
  margin-top: 40px;

  @media screen and (max-width: 425px) {
    margin-top: 10px;
  }
`;

export const StyledResumeLink = styled.a`
  padding: 20px;
  // display: block;
  background-color: ${({ theme }) => theme.colors.heading_text};
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bolder;
  letter-spacing: 1px;
  border: none;
  border-radius: 10px;

  @media screen and (max-width: 425px) {
    font-size: 0.8rem;
  }

  &:hover {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.heading_text};
    border: 3px solid ${({ theme }) => theme.colors.heading_text};
  }
`;
