import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import AppsView from "./views/AppsView"; // Importa AppsView
import AppView from "./views/AppView"; // Importa AppView

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/apps" element={<AppsView />} /> // Ruta para la lista de
        aplicaciones
        <Route path="/apps/:appID" element={<AppView />} /> // Ruta para los
        detalles de una aplicación específica
      </Routes>
    </Router>
  );
}

export default App;
