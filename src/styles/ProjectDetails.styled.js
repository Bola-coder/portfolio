import styled from "styled-components";

export const StyledDetails = styled.div`
  position: relative;
  padding: 20px;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 5%;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

export const StyledProjectImage = styled.div`
  width: 40%;
  border: 7px solid ${({ theme }) => theme.colors.banner_btn_bg};
  border-radius: 10px;

  img {
  }
`;

export const StyledProjectText = styled.div`
  position: absolute;
  width: 50%;
  // height: 250px;
  border: 7px solid ${({ theme }) => theme.colors.banner_btn_bg};
  border-radius: 10px;
  top: 40%;
  right: 10%;
  text-align: center;

  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
    margin-top: 10px;
  }

  a {
    color: inherit;
    display: inline-block;
    padding: 20px;
    svg {
      font-size: 2.5rem;
    }

    &:hover {
      transform: scale(1.3);
    }
  }
`;

export const TagNames = styled.p``;
