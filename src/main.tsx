import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Login } from "./Pages/Login";
import { Dashboard } from "./Pages/Dashboard";
import { GlobalStyle } from "./globalStyles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <Dashboard />
  </StrictMode>
);
