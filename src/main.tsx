import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Login } from "./Pages/Login";
import { Dashboard } from "./Pages/Dashboard";
import { GlobalStyle } from "./globalStyles";
import { NewBill } from "./Pages/NewBill";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="new-bill" element={<NewBill />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
