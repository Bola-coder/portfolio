import { useState, useEffect } from "react";
import NavBar from "./components/Nav";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/Global.styled";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Work from "./components/Work";
// Importing Animation library
import Aos from "aos";
import "aos/dist/aos.css";
import "./app.css";

function App() {
  const [show, setShow] = useState(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 610 ? setShow(true) : setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  //  Initializing Aos
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const theme = {
    colors: {
      body: " #fff",
      nav: show ? "rgb(8, 92, 172)" : "#000",
      heading_text: "rgb(8, 92, 172)",
      nav_text: "#fff",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <NavBar />
        <Banner />
        <About data-aos="fade-up" />
        <Projects />
        <Work />
      </>
    </ThemeProvider>
  );
}

export default App;
