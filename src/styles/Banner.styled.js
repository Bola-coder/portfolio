import styled from "styled-components";

export const StyledBanner = styled.section`
  height: 90vh;
  max-width: 100vw;
  background-color: #000;

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

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > div {
      padding: 10px;
    }

    h1 {
      margin-top: 3%;
      font-size: 4.2rem;
    }

    & > span {
      flex-basis: 60%;
      // background: green;
    }
    img {
      width: 400px;
    }
  }
`;
