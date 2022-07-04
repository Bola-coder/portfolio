import styled from "styled-components";

export const StyledServices = styled.section`
  padding: 20px;
  margin-top: 10%;
`;

export const StyledServiceCards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;

  & > div {
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.light_text};
    width: 400px;
    height: 300px;
    border-radius: 10px;

    h4 {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.banner_btn_text};
      padding: 10px;
      letter-spacing: 2px;
      margin-bottom: 4%;

      &::before,
      &::after {
        content: "__";
      }
    }

    p {
      font-size: 1.2rem;
      letter-spacing: 2px;
      margin-top: 5%;
      color: ${({ theme }) => theme.colors.banner_btn_text};
    }
  }
`;
