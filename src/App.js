import { useContext } from "react";
import NavBar from "./components/Nav";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/Global.styled";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Work from "./components/Work";
import { LightModeContext } from "./components/context/LightModeContext";
import "./app.css";

function App() {
  const { light } = useContext(LightModeContext);
  const theme = {
    colors: {
      body: " #fff",
      nav: light ? "#fff" : "#000",
      heading_text: "rgb(8, 92, 172)",
      nav_text: light ? "rgb(8, 92, 172)" : "#fff",
      light_text: light ? "rgb(8, 92, 172)" : "#fff",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <div className={light ? "app__light" : "app__dark"}>
        <GlobalStyle />
        <NavBar />
        <Banner />
        <About />
        <Projects />
        <Work />
      </div>
    </ThemeProvider>
  );
}

export default App;
