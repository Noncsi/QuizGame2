import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import React from "react";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(<App />);

reportWebVitals();
