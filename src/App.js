import React from "react";
import { GlobalStyle } from "./assets/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import MainPage from "./pages/MainPage";
import CashInPage from "./pages/CashInPage";
import CashOutPage from "./pages/CashOutPage";
import DataProvider from "./context/DataUser";

export default function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegistrationPage />} />
        <Route path="/meus-registros" element={<MainPage />} />
        <Route path="/nova-entrada" element={<CashInPage />} />
        <Route path="/nova-saida" element={<CashOutPage />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}
