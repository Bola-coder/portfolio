import styled from "styled-components";
import bgImage from "./../images/background-image-one.jpg";

export const StyledBanner = styled.section`
  height: 90vh;
  width: 100vw;
  background-image: url(${bgImage});
  background-size: cover;
  margin-top: 10vh;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;

  & > div {
    padding: 30px;
    margin-left: 40px;
  }

  h1 {
    margin-top: 10%;
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.nav_text};
  }

  p {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.nav_text};
  }
  // span {
  //   margin-right: 100px;
  // }

  // img {
  //   width: 450px;
  //   height: 350px;
  //   border: 3px solid #fff;
  //   border-radius: 50px;
  // }
`;
