import styled from "styled-components";

export const StyledServices = styled.section`
  padding: 20px;
  margin-top: 10%;
`;

export const StyledServiceCards = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 10px;

  & > div {
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.light_text};
    width: 550px;
    height: 300px;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;

    @media screen and (max-width: 1300px) {
      width: 450px;
    }

    @media screen and (max-width: 1024px) {
      width: 400px;
    }

    @media screen and (max-width: 425px) {
      width: 300px;
      height: 350px;
    }

    @media screen and (max-width: 375px) {
      width: 280px;
      height: 420px;
    }

    svg {
      text-align: center;
      margin: 0 auto;
      width: inherit;
      font-size: 3rem;
      color: ${({ theme }) => theme.colors.text_dark};
    }

    h4 {
      font-size: 1.3rem;
      color: ${({ theme }) => theme.colors.text_dark};
      padding: 10px;
      letter-spacing: 2px;
      margin-bottom: 4%;
      font-weight: 700;
      text-align: center;

      //   &::before,
      //   &::after {
      //     content: "__";
      //   }
    }

    p {
      font-size: 1.2rem;
      letter-spacing: 2px;
      margin-top: 5%;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text_dark};
    }
  }
`;
