import styled from "styled-components";

export const StyledContacts = styled.section`
  padding: 20px;
`;

export const StyledContact = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
`;

export const StyledForm = styled.div`
  form {
    max-width: 500px;

    & > div{
        margin-bottom: 20px;
    }
    
    label {
      font-size: 1rem;
      display: block;
      padding: 5px;
      letter-spacing: 2px;
    }

    input[type="text"],
    textarea {
      width: 400px;
      padding: 10px 20px;
      border: 3px solid ${({ theme }) => theme.colors.light_text};
      border-radius: 20px;
      font-szie: 1.3rem

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
      font-size: 1.2rem;
      font-weight: bolder;
      border-radius: 8px;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }

  } // End of Form
`;
