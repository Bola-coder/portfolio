import React from "react";
import App from "./App";
import { LightModeProvider } from "./components/context/LightModeContext";
const AppWrapper = () => {
  return (
    <>
      <LightModeProvider>
        <App />
      </LightModeProvider>
    </>
  );
};

export default AppWrapper;
