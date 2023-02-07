import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Nav";
import GlobalStyle from "./styles/Global.styled";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import { LightModeContext } from "./components/context/LightModeContext";
import "./app.css";
import Contact from "./components/Contact";

function App() {
  const { light } = useContext(LightModeContext);

  const theme = {
    colors: {
      body: " #fff",
      nav: light ? "#fff" : "rgb(23, 21, 21)",
      // heading_text: "#0317fc",
      // light_text: light ? "#0317fc" : "#fff",
      // banner_btn_text: light ? "#fff" : "#0317fc",
      // banner_btn_bg: light ? "#0317fc" : "#fff",
      text_dark: light ? "#fff" : "rgb(13, 11, 11)",
      text_light: light ? "rgb(13, 11, 11)" : "#fff",
      heading_text: "rgb(8, 92, 172)",
      light_text: light ? "rgb(8, 92, 172)" : "#fff",
      banner_btn_text: light ? "#fff" : "rgb(8, 92, 172)",
      banner_btn_bg: light ? "rgb(8, 92, 172)" : "#fff",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={light ? "app__light" : "app__dark"}>
        <GlobalStyle />
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Work /> */}
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
