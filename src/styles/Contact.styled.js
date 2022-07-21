import styled from "styled-components";

export const StyledContacts = styled.section`
  padding: 20px;
  margin-top: 10vh;
  padding-top: 50px;
`;

export const StyledContact = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
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

    //Media queries
    @media screen and (max-width: 768px) {
      max-width: 600px;

      input,
      textarea {
        width: 500px;
      }
    } // End of 768px media query

    @media screen and (max-width: 425px) {
      max-width: 400px;
      input,
      textarea {
        width: 300px;
      }
    } // End of 425px media query

    @media screen and (max-width: 320px) {
      input,
      textarea {
        width: 250px;
      }
    } // End of 425px media query
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
