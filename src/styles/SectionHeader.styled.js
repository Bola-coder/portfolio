import styled from "styled-components";

export const StyledHeading = styled.h2`
  font-size: 2rem;
  text-align: ${(props) => props.align || "center"};
  color: ${({ theme }) => theme.colors.heading_text};
  margin-bottom: 15px;
  letter-spacing: 3px;

  &::after,
  &::before {
    content: "----";
    color: rgb(8, 92, 172);
    margin-top: 10px;
  }

  @media screen and (max-width: 425px) {
    font-size: 1.4rem;
    letter-spacing: 2px;
    margin-bottom: 10px;
    text-align: center;
  }
`;
