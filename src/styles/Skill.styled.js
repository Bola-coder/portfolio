import styled from "styled-components";

export const StyledSkills = styled.section`
  margin-top: 150px;
  padding: 5px;
`;

export const StyledSkill = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  max-width: 1024px;
  margin: auto;

  & > div {
    padding: 30px;
    cursor: pointer;
    text-align: center;
    svg {
      font-size: 80px;
      color: ${({ theme }) => theme.colors.light_text};

      @media screen and (max-width: 1024px) {
        font-size: 60px;
      }
      @media screen and (max-width: 425px) {
        font-size: 30px;
      }
    }

    p {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.light_text};
      font-weight: bold;
    }
  }
`;
