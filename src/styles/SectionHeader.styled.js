import styled from "styled-components";

export const StyledHeading = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner:wght@600&family=Inter:wght@300&family=Poppins:ital@0;1&family=Roboto&display=swap");
  font-size: 2rem;
  text-align: ${(props) => props.align || "center"};
  color: ${({ theme }) => theme.colors.light_text};
  margin-bottom: 15px;
  letter-spacing: 3px;
  font-family: "Edu VIC WA NT Beginner", cursive;
  overflow: hidden;

  &::after,
  &::before {
    content: "";
    color: ${({ theme }) => theme.colors.light_text};
    margin-top: 10px;
    padding: 0px 10px;
    height: 500px;
  }

  @media screen and (max-width: 425px) {
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 2px;
    margin-bottom: 10px;
    text-align: center;
  }
`;

// export const StyledSubHeading = styled.p`
//   font-size: 1.2rem;
//   text-align: ${(props) => props.align || "center"};
//   color: ${({ theme }) => theme.colors.heading_text};

//   &::after,
//   &::before {
//     content: "--";
//     color: rgb(8, 92, 172);
//     padding: 0px 10px;
//   }
// `;
