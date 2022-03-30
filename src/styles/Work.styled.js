import styled from "styled-components";

export const StyledWorks = styled.section`
  padding: 20px;
  margin-top: 40px;
`;

export const StyledWorkDetails = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > div {
    padding: 20px;

    .text {
      margin-top: 10px;
      padding: 0 20px;
    }

    p {
      font-size: 1rem;
    }
  }
`;
