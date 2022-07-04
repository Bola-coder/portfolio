import styled from "styled-components";

export const StyledAbout = styled.section`
  padding: 10px;
  // margin-top: 50vh;

  @media screen and (max-width: 1024px) {
    padding: 5px;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10%;

  & > div {
    flex-basis: 55%;
    p {
      padding: 5px;
      font-size: 1.5rem;
    }
  }
  // End of Div

  & > span {
    img {
      width: 400px;
      height: 400px;
      border-radius: 2%;
      margin-left: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 5px;
    flex-direction: column;

    & > div {
      width: 70vw;
      p {
        font-size: 1.2rem;
      }
    }
    // End of Div

    & > span {
      margin-top: 10%;
      margin-left: 0px;
      order: 1;
      text-align: center;

      img {
        width: 500px;
      }
    }
  }

  @media screen and (max-width: 425px) {
    & > div {
      width: 80vw;
      p {
        font-size: 1.2rem;
      }
    }
    // End of Div

    & > span {
      margin-left: -20px;
      margin-bottom: 30px;
      img {
        width: 300px;
      }
    }
  }

  @media screen and (max-width: 320px) {
    & > span {
      img {
        width: 250px;
        margin-left: 15px;
      }
    }
  }
`;
