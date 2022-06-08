import { useContext, useEffect } from "react";
import NavBar from "./components/Nav";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/Global.styled";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Work from "./components/Work";
import { LightModeContext } from "./components/context/LightModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import "./app.css";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const { light } = useContext(LightModeContext);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  console.log(light);
  const theme = {
    colors: {
      body: " #fff",
      nav: light ? "#fff" : "#000",
      heading_text: "rgb(8, 92, 172)",
      nav_text: light ? "rgb(8, 92, 172)" : "#fff",
      light_text: light ? "rgb(8, 92, 172)" : "#fff",
      banner_btn_text: light ? "#fff" : "rgb(8, 92, 172)",
      banner_btn_bg: light ? "rgb(8, 92, 172)" : "#fff",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <div className={light ? "app__light" : "app__dark"}>
        <GlobalStyle />
        <NavBar />
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Work />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
