import styled from "styled-components";

export const StyledBanner = styled.section`
  height: 90vh;
  max-height: 90vh;
  max-width: 100vw;
  margin-top: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    padding: 30px;
    margin-left: 40px;
    max-width: 700px;

    h1 {
      // margin-top: 3%;
      font-size: 4.5rem;
      color: ${({ theme }) => theme.colors.light_text};
    }

    p {
      margin-top: 10px;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.light_text};

      & > span {
        color: rgb(8, 92, 172);
        font-weight: 700;
      }
    }

    // Icon Links
    a {
      color: ${({ theme }) => theme.colors.light_text};
      padding: 20px;
      margin-top: 20px;
      display: inline-block;

      svg {
        font-size: 30px;
      }

      &:hover {
        transform: scale(1.3);
        border: 10px soild ${({ theme }) => theme.colors.light_text};
      }
    }
  } // End of div

  & > span {
    flex-basis: 35%;
    position: relative;
    animation: animateImage 4s infinite;

    img {
      width: 400px;
    }
  }
  // End od Span

  @keyframes animateImage {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(90deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  // Media Queries

  @media screen and (max-width: 1024px) {
    & > span {
      flex-basis: 50%;
    }
  }

  @media screen and (max-width: 768px) {
    height: 90vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > div {
      padding: 20px;
      margin-left: 10px;

      h1 {
        margin-top: 3%;
        font-size: 3.2rem;
      }

      p {
        font-size: 1.7rem;
      }
    } // End of div

    & > span {
      margin-top: 40px;
      margin-left: 20px;
      animation: animateImageSecond 2s infinite;

      img {
        width: 450px;
      }
    } // End of Span
    @keyframes animateImageSecond {
      0% {
        transform: translate(0, 0);
      }
      50% {
        transform: translate(0, 50px);
      }

      100% {
        transform: translate(0, 0);
      }
    }
  } // End of Media Query

  @media screen and (max-width: 425px) {
    & > div {
      h1 {
        margin-top: 5%;
        font-size: 3rem;
      }
      p {
        font-size: 1.5rem;
      }

      a {
        padding: 10px;
        margin-top: 20px;
        display: inline-block;

        svg {
          font-size: 30px;
        }
      }
    } // End of Div

    & > span {
      margin-left: 0px;

      img {
        width: 300px;
      }
    } // End od Span
  } // End od Media Query

  @media screen and (max-width: 375px) {
    & > div {
      h1 {
        margin-top: 7%;
        font-size: 2.7rem;
      }
      p {
        font-size: 1.1rem;
      }
    }

    & > span {
      margin-top: 50px;
      img {
        width: 250px;
      }
    } // End od Span
  } // End od Media Query
`;
