import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Login } from "./Pages/Login";
import { Dashboard } from "./Pages/Dashboard";
import { Landing } from "./Pages/Landing";
import { GlobalStyle } from "./globalStyles";
import { NewBill } from "./Pages/NewBill";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { BillsList } from "./components/BillsList";
import { ClientsList } from "./components/ClientsList";
import { UsersList } from "./components/UsersList";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="faturas" replace />} />
          <Route path="faturas" element={<BillsList />} />
          <Route path="clientes" element={<ClientsList />} />
          <Route path="usuarios" element={<UsersList />} />
        </Route>
        <Route path="new-bill" element={<NewBill />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
