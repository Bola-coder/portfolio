import styled from "styled-components";
import bgImage from "./../images/background-image-one.jpg";

export const StyledBanner = styled.section`
  height: 90vh;
  max-width: 100vw;
  background-color: #000;
  // background-image: url(${bgImage});
  // background-size: cover;
  margin-top: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    padding: 30px;
    margin-left: 40px;
  }

  h1 {
    margin-top: 7%;
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.nav_text};
  }

  p {
    margin-top: 10px;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.nav_text};

    & > span {
      color: rgb(8, 92, 172);
    }
  }

  & > span {
    flex-basis: 40%;
  }

  img {
    width: 80%;
  }
`;
