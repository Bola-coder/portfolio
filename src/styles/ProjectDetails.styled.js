import styled from "styled-components";

export const StyledDetails = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background-color: #000;
  color: #fff;
  padding: 30px;

  & > div {
    margin: 20px;
    width: 420px;
    height: 450px;
    // padding: 20px;
    border-radius: 20px;
    box-shadow: 1px 1px 2px 3px #fff;
    transition: transform 0.3s ease-in;

    & > img {
      width: inherit;
      border-radius: 20px;
    }

    & > div.text {
      padding: 20px;

      & > svg {
        margin-top: 20px;
        font-size: 30px;
        margin-right: 15px;
        // color: rgb(8, 92, 172);
      }
    }

    h3 {
      font-size: 1.4rem;
      color: rgb(8, 92, 172);
    }

    p {
      font-size: 1rem;
    }

    &:hover {
      transform: scaleX(1.06);
    }
  }
`;

export const TagNames = styled.p`
  margin-top: 10px;
  padding: 7px;
  //   color: rgb(8, 92, 172);
`;
