import styled from "styled-components";

export const Button = styled.button`
  padding: 18px 20px;
  font-size: 1.5rem;
  border: none;
  border-radius: 12px;
  color: rgb(8, 92, 172);
  font-weight: bolder;
  margin-top: 40px;
  width: 250px;
  cursor: pointer;

  &:hover {
    background: transparent;
    color: #fff;
    border: 3px solid rgb(8, 92, 172);
    transform: scaleX(0.97);
  }
`;
