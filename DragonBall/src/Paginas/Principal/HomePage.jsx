import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import axios from "axios";

import Tarjeta from "../../Componentes/Tarjeta/Tarjeta";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://dragonball-api.com/api/characters?limit=68")
      .then((response) => setData(response.data.items))
      .catch((error) =>
        console.error("Error al cargar los personajes:", error)
      );
  }, []);

  return (
    <main id="Principal">
      <div>
        <h1 id="Tutilo_Personajes">Personajes de Dragon Ball Z</h1>
      </div>
      <div id="Personajes">
        {data.map((element) => (
          <div key={element.id}>
            <Link to={"/Detalles/" + element.id}>
              <Tarjeta
                img={element.image}
                nombre={element.name}
                raza={element.race}
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
