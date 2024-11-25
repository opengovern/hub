import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './style.css'
// import reportWebVitals from './reportWebVitals';
import "@cloudscape-design/global-styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Theme";
import enMessages from "@cloudscape-design/components/i18n/messages/all.en";
import { I18nProvider } from "@cloudscape-design/components/i18n";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nProvider locale="en" messages={[enMessages]}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </I18nProvider>
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
