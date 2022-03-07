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
    font-size: 1.3rem;
  }
  img {
    width: 350px;
    height: 400px;
    border: 3px solid #fff;
    box-shadow: 4px 3px 10px 1px #aaa;
    // border-radius: 50%;
    border-radius: 3%;
    margin-left: 30px;
  }
`;
