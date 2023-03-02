import React, { createContext, useContext, useState } from "react";

const scrollToTopContext = createContext();

export const useScrollToTop = () => {
  return useContext(scrollToTopContext);
};

const ScrollToTopProvider = ({ children }) => {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const values = {
    scroll,
    setScroll,
    handleScroll,
  };
  return (
    <scrollToTopContext.Provider value={values}>
      {children}
    </scrollToTopContext.Provider>
  );
};

export default ScrollToTopProvider;
