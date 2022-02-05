import styled from "styled-components";
import bgImage from "./../images/background-image-one.jpg";

export const StyledBanner = styled.section`
  height: 90vh;
  width: 100vw;
  background-image: url(${bgImage});
  background-size: cover;
  margin-top: 10vh;
  display: flex;
  align-items: center;

  & > div {
    flex: 1;
    // margin-top: 90px;
    padding: 30px;
  }

  h1 {
    font-size: 6rem;
    color: ${({ theme }) => theme.colors.nav_text};
  }

  p {
    font-size: 2.7rem;
    color: ${({ theme }) => theme.colors.nav_text};
  }
  span {
    margin-right: 100px;
  }

  img {
    width: 450px;
    height: 450px;
    // border: 8px solid #fff;
    border-radius: 3%;
  }
`;
