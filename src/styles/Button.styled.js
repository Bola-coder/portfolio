import styled from "styled-components";

export const Button = styled.button`
  padding: 18px 20px;
  font-size: 1.5rem;
  border: none;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.banner_btn_text};
  background: ${({ theme }) => theme.colors.banner_btn_bg};
  font-weight: bolder;
  margin-top: 40px;
  width: 250px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.banner_btn_text};
    color: ${({ theme }) => theme.colors.light_text};
    border: 4px solid rgb(8, 92, 172);
    transform: scaleX(0.97);
  }

  @media screen and (max-width: 425px) {
    padding: 13px 15px;
    font-size: 1.3rem;
  }
`;
