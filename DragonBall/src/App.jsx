import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Encabezado from "./Componentes/Encabezado/encabezado";
import HomePage from "./Paginas/Principal/HomePage";
import AboutPage from "./Paginas/Personaje/AboutPage";
import CharacterPage from "./Paginas/Humanos/CharacterPage";
import NoHumanos from "./Paginas/NoHumanos/NoHumanos";
import AcercaDe from "./Paginas/AcercaDe/AcercaDe";

const App = () => {
  return (
    <div className="contenedor">
      <Router>
        <div className="Encabezado">
          <Encabezado />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Detalles/:id" element={<AboutPage />} />
          <Route path="/character/:race" element={<CharacterPage />} />
          <Route path="/character/NoHuman" element={<NoHumanos />} />
          <Route path="/AcercaDe" element={<AcercaDe />} />
        </Routes>
      </Router>
      <footer>
        <p>Brayam Stiven Figueroa Ramirez - Programación Web</p>&copy;2024
      </footer>
    </div>
  );
};

export default App;
