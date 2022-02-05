import NavBar from "./components/Nav";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/Global.styled";
import Banner from "./components/Banner";

function App() {
  const theme = {
    colors: {
      body: " #fff",
      nav: "#00008B",
      nav_text: "#fff",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <NavBar />
        <Banner />
      </>
    </ThemeProvider>
  );
}

export default App;
