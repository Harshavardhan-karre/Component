import React from "react";
import ReactDOM from "react-dom/client";  // Use the new 'react-dom/client' import for React 18
import App from "./App";

// Find the root element in your HTML
const container = document.getElementById("root");

// Create a root with React 18's new API
const root = ReactDOM.createRoot(container as HTMLElement);

// Render your app into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
