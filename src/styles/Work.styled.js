import styled from "styled-components";

export const StyledWorks = styled.section`
  padding: 20px;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const StyledWorkDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    padding: 20px;

    .text {
      margin-top: 10px;
      padding: 0 20px;
    }

    h4 {
      font-size: 1.3rem;
      padding: 3px;
    }

    p {
      font-size: 1rem;
    }
    .year {
      color: rgb(8, 92, 172);
      font-weight: 600;
    }
  }
  @media screen and (max-width: 768px) {
    & > div {
      padding: 10px;
    }
  }

  @media screen and (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;
    .text {
      padding: 0 10px;
    }
  }
`;
