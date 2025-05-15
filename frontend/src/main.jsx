import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { injectCriticalCSS } from "./criticalCSS";

// Inject critical CSS inline for faster FCP
injectCriticalCSS();

// Import styles after critical CSS is injected
const loadStyles = () => {
  import("./index.css").then(() => {
    console.log("Non-critical styles loaded");
  });
};

// Create root and render app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Load non-critical CSS after first paint
if (document.readyState === 'complete') {
  loadStyles();
} else {
  window.addEventListener('load', loadStyles);
}