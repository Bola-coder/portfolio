import styled from "styled-components";

export const StyledDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
  width: 70%;
  margin: 0 auto;
  margin-top: 5%;
  background-color: ${({ theme }) => theme.colors.banner_btn_bg};
  color: ${({ theme }) => theme.colors.banner_btn_text};
  border-radius: 10px;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const StyledProjectImage = styled.div`
  flex-basis: 50%;
  img {
    border-radius: 10px;
    width: 500px;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 400px;
    }
  }
`;

export const StyledProjectText = styled.div`
  padding: 10px;
  flex-basis: 40%;

  h3 {
    font-size: 1.7rem;
  }

  p {
    font-size: 1rem;
    // font-weight: 600;
    margin-top: 10px;
  }

  a {
    color: inherit;
    display: inline-block;
    padding: 10px;
    svg {
      font-size: 2rem;
    }

    &:hover {
      transform: scale(1.2);
    }
  }

  @media screen and (max-width: 768px) {
    h3 {
      font-size: 1.4rem;
    }
  
    p {
      font-size: 0.8rem;
      margin-top: 5px;
    }
  
    a {
            svg {
        font-size: 1.5rem;
      }
  
  }
`;

export const TagNames = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const TagName = styled.p`
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.text_dark};
  cursor: pointer;
`;
