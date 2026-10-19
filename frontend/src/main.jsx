import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/variables.css";
import "./styles/base.css";
import "./styles/header.css";
import "./styles/sections.css";
import "./styles/booking.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
