import styled from "styled-components";

export const StyledAbout = styled.section`
  padding: 10px;
  margin-top: 10%;
`;

export const AboutContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  & > div {
    flex-basis: 55%;
  }

  p {
    padding: 5px;
    font-size: 1.1rem;
  }
  img {
    width: 100%;
    height: 450px;
    border: 3px solid #fff;
    box-shadow: 1px 1px 3px 2px #aaa;
    // border-radius: 50%;
    border-radius: 3%;
    margin-left: 30px;
  }

  @media screen and (max-width: 1024px) {
    padding: 5px;
  }
`;
