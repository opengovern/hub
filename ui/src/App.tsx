import React, { useContext } from 'react';
import './App.css';
import Router from './router';
import { ThemeContext } from "./Theme";
function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme} `}>
      {" "}
      <Router />
    </div>
  );

}

export default App;
