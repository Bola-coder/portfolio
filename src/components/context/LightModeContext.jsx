import React, { useState, useEffect, createContext } from "react";

export const LightModeContext = createContext();

export const LightModeProvider = ({ children }) => {
  const [light, setLight] = useState(true);
  useEffect(() => {
    setLight(JSON.parse(window.localStorage.getItem("lightMode")));
  }, []);

  const handleLightMode = () => {
    window.localStorage.setItem("lightMode", !light);
    setLight((current) => !current);
  };

  const values = {
    light,
    setLight,
    handleLightMode,
  };
  return (
    <LightModeContext.Provider value={values}>
      {children}
    </LightModeContext.Provider>
  );
};
