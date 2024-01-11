import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppsPage from "./pages/AppsPage"; // Importa AppsPage
import AppPage from "./pages/AppPage"; // Importa AppPage
import LoginPage from "./pages/LoginPage"; // Importa LoginPage
import RegisterPage from "./pages/RegisterPage"; // Importa RegisterPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/apps/:appID" element={<AppPage />} />
        detalles de una aplicación específica
      </Routes>
    </Router>
  );
}

export default App;
