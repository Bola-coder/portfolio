import { useState, useEffect } from "react";
import NavBar from "./components/Nav";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/Global.styled";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import "./app.css";
import Work from "./components/Work";

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
        <About />
        <Projects />
        <Work />
      </>
    </ThemeProvider>
  );
}

export default App;
