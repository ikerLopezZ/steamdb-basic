import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';

function App() {
  return (
    <Router>
      <Routes> {/* Usa Routes en lugar de Switch */}
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        {/* Añade aquí el resto de tus rutas */}
      </Routes>
    </Router>
  );
}

export default App;
