import styled from "styled-components";

export const StyledDetails = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${({ theme }) => theme.colors.light_text};
  padding: 40px;
  margin-top: 10px;

  & > div {
    margin: 10px;
    width: 350px;
    height: 400px;
    border-radius: 20px;
    border: 3px solid ${({ theme }) => theme.colors.nav_text};
    // box-shadow: 1px 1px 1px 1px #000;

    & > img {
      width: inherit;
      border-radius: 20px;
      height: 180px;
      display: inline;
      transition: transform 0.3s ease-in;
      cursor: pointer;

      &:hover {
        transform: scale(1.02);
      }
    }

    & > div.text {
      padding: 10px;

      a {
        texx-decoration: none;
        font-size: 30px;
        margin-right: 15px;
        color: inherit;

        & > svg {
          margin-top: 20px;
          cursor: pointer;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }

    h3 {
      font-size: 1.5rem;
      color: rgb(8, 92, 172);
      margin-bottom: 8px;
    }

    p {
      font-size: 0.9rem;
      font-weight: bold;
    }
  }
`;

export const TagNames = styled.p`
  margin-top: 10px;
  padding: 7px;
  font-weight: bold;
`;
