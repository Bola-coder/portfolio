import React, { useState, createContext } from "react";

export const LightModeContext = createContext();

export const LightModeProvider = ({ children }) => {
  const [light, setLight] = useState(true);
  const handleLightMode = () => {
    setLight((current) => !current);
  };

  const values = {
    light,
    handleLightMode,
  };
  return (
    <LightModeContext.Provider value={values}>
      {children}
    </LightModeContext.Provider>
  );
};
