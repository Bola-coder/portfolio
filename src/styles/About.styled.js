import styled from "styled-components";

export const StyledAbout = styled.section`
  paddding: 30px;
  margin-top: 6%;
`;

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  & > div {
    flex-basis: 55%;
  }

  p {
    padding: 5px;
    font-size: 1.3rem;
  }
  img {
    width: 350px;
    height: 380px;
    border: 3px solid #fff;
    box-shadow: 1px 1px 5px 1px #aaa;
    // border-radius: 50%;
    border-radius: 3%;
    margin-left: 30px;
  }
`;
