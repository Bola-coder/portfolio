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
  // #0bab05
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
