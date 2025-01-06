import React, { useEffect, createContext, useState } from "react";

const ThemeContext = createContext();

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    // Default theme is taken as dark
    localStorage.setItem("theme", "system");

    return "system";
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
    if (theme == "system") {
      if (window.matchMedia) {
        // Check if the dark-mode Media-Query matches
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
         const body = document.getElementsByTagName("body")[0];
         body.className = "dark";
        } else {
        const body = document.getElementsByTagName("body")[0];
        body.className = "light";
        }
      } else {
        const body = document.getElementsByTagName("body")[0];
        body.className = "dark";
      }
    } else {
      const body = document.getElementsByTagName("body")[0];
      body.className = theme;
    }
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
