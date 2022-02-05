import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
*{
    box-sizing border-box;
    margin 0;
    padding: 0;
}
body{
    background: ${({ theme }) => theme.colors.body || "#fff"};
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    
}
p{
    // opacity: 0.6;
    line-height: 1.5;
}
img{
    max-width: 100%;
}
`;

export default GlobalStyle;
