import styled from "styled-components";

export const StyledAbout = styled.section`
  padding: 10px;
  margin-top: 10%;

  @media screen and (max-width: 1024px) {
    padding: 5px;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  & > div {
    flex-basis: 55%;
  }

  p {
    padding: 5px;
    font-size: 1.1rem;
  }

  img {
    width: 350px;
    height: 350px;
    // border-radius: 50%;
    border-radius: 3%;
    margin-left: 30px;
  }

  @media screen and (max-width: 768px) {
    padding: 5px;
    flex-direction: column;

    & > span {
      // order: 1;
      margin-top: 30px;
      text-align: center;

      img {
        // border-radius: 40%;
        width: 300px;
      }
    }
  }

  @media screen and (max-width: 425px) {
    & > span {
      margin-left: 0;
      margin-bottom: 30px;
      img {
        width: 290px;
        margin-left: 40px;
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
