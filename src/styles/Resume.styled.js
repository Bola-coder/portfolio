import styled from "styled-components";

export const StyledResume = styled.div`
  padding: 10px;
  // width: 20vw;
  // margin: 100px auto;
  margin-top: 40px;
`;

export const StyledResumeLink = styled.a`
  padding: 20px;
  // display: block;
  background-color: rgb(8, 92, 172);
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bolder;
  letter-spacing: 2px;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: #fff;
    color: rgb(8, 92, 172);
    border: 3px solid rgb(8, 92, 172);
  }
`;
