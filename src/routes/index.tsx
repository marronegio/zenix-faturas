import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../Pages/Dashboard';
import { BillsList as Faturas } from '../components/BillsList';
import { ClientsList as Clientes } from '../components/ClientsList';
import { UsersList as Usuarios } from '../components/UsersList';
import { NewCustomer } from '../Pages/NewCustomer';
import { NewUser } from '../Pages/NewUser';
import { NewBill } from '../Pages/NewBill';
import { Login } from '../Pages/Login';
import { Landing } from '../Pages/Landing';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Navigate to="faturas" replace />} />
        <Route path="faturas" element={<Faturas />} />
        <Route path="clientes" element={<Clientes />} />
        <Route path="usuarios" element={<Usuarios />} />
        <Route path="novo-cliente" element={<NewCustomer />} />
        <Route path="novo-usuario" element={<NewUser />} />
        <Route path="nova-fatura" element={<NewBill />} />
      </Route>
    </Routes>
  );
} 