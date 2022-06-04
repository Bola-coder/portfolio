import styled from "styled-components";

export const StyledDetails = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background-color: #000;
  color: #fff;
  padding: 20px;
  margin-top: 10px;

  & > div {
    margin: 20px;
    width: 300px;
    border-radius: 20px;
    box-shadow: 1px 1px 2px 2px #333;
    transition: transform 0.3s ease-in;

    & > img {
      width: inherit;
      border-radius: 20px;
      height: 200px;
    }

    & > div.text {
      padding: 10px;

      & > svg {
        margin-top: 20px;
        font-size: 30px;
        margin-right: 15px;
        // color: rgb(8, 92, 172);

        &:hover {
          opacity: 0.8;
        }
      }
    }

    h3 {
      font-size: 1.3rem;
      color: rgb(8, 92, 172);
      margin-bottom: 8px;
    }

    p {
      font-size: 0.9rem;
    }

    &:hover {
      transform: scale(1.05);
      // background-color: #fff;
      // color: #000;
    }
  }
`;

export const TagNames = styled.p`
  margin-top: 10px;
  padding: 7px;
  // color: rgb(8, 92, 172);
  color: #fff;
`;
