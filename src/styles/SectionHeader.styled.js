import styled from "styled-components";

export const StyledHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.heading_text};
  margin-bottom: 50px;
  letter-spacing: 3px;
`;
