import styled from "styled-components";

export const StyledContacts = styled.section`
  padding: 20px;
  margin-top: 140px;
`;

export const StyledContact = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledForm = styled.div`
  form {
    max-width: 500px;

    & > div {
      margin-bottom: 20px;
    }

    label {
      font-size: 1rem;
      display: block;
      padding: 5px;
      letter-spacing: 2px;
    }

    input,
    textarea {
      width: 400px;
      padding: 10px 20px;
      border: 3px solid ${({ theme }) => theme.colors.light_text};
      border-radius: 10px;
      font-szie: 1.3rem;
      &:focus {
        outline: none;
      }
    }

    textarea {
      height: 150px;
      resize: none;
    }

    button {
      padding: 10px 15px;
      color: ${({ theme }) => theme.colors.banner_btn_text};
      background-color: ${({ theme }) => theme.colors.banner_btn_bg};
      font-size: 1.2rem;
      border: 0;
      font-weight: bolder;
      border-radius: 8px;
      cursor: pointer;

      &:focus {
        outline: none;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.banner_btn_text};
        color: ${({ theme }) => theme.colors.light_text};
        border: 2px solid rgb(8, 92, 172);
      }
    } // End of Button
  } // End of Form
`;

export const StyledWidgets = styled.div`
  padding: 10px;
  span {
    padding: 30px;
    display: block;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.light_text};

    svg {
      display: inline;
    }
    p {
      display: inline;
      padding: 10px;
      font-weight: bold;
    }
  }
`;
