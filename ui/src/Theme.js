import React, { useEffect, createContext, useState } from "react";

const ThemeContext = createContext();

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    // Default theme is taken as dark
    localStorage.setItem("theme", "dark");
    
    return "dark";
  } else {
    return theme;
  }
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }
  function changeTheme(value) {
    setTheme(value);
    
  }

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", theme);
    };

    refreshTheme();
   
     const body = document.getElementsByTagName("body")[0]
     body.className = theme
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
