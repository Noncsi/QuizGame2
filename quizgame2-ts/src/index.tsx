import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { smartiniTheme } from "./SmartiniTheme";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={smartiniTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
