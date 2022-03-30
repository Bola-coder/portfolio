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
    width: 500px;
  }

  @media screen and (max-width: 1024px) {
    & > span {
      flex-basis: 50%;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    & > div {
      padding: 10px;
    }

    h1 {
      margin-top: 3%;
      font-size: 4.2rem;
    }

    & > span {
      flex-basis: 60%;
    }
    img {
      width: 550px;
    }
  }

  @media screen and (max-width: 425px) {
    h1 {
      margin-top: 3%;
      font-size: 3.5rem;
    }
    p {
      font-size: 1.3rem;
    }

    img {
      width: 350px;
    }
  }

  @media screen and (max-width: 375px) {
    & > span {
      flex-basis: 50%;
    }
    h1 {
      margin-top: 3%;
      font-size: 2.7rem;
    }
    p {
      font-size: 1.1rem;
    }

    img {
      width: 300px;
    }
  }
`;
