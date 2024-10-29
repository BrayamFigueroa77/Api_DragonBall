import "./NoHumanos.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Tarjeta from "../../Componentes/Tarjeta/Tarjeta";

const NoHumanos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dragonball-api.com/api/characters?limit=68`);
        console.log("API Response Items:", response.data.items); // Verifica la respuesta de la API
        setData(response.data.items); // Cambia esto a items
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filtra para excluir los personajes humanos
  const filteredData = Array.isArray(data) 
    ? data.filter((elem) => elem.race?.toLowerCase() !== "human") 
    : [];

  console.log("Filtered Data (Non-Humans):", filteredData); // Verifica el resultado del filtro

  return (
    <main id="character-page">
      <h1 id="title-character">Personajes no humanos</h1>
      <div id="characters-races">
        {filteredData.length > 0 ? (
          filteredData.map((element) => (
            <div key={element.id}>
              <Link to={"/Detalles/" + element.id}>
                <Tarjeta
                  img={element.image}
                  nombre={element.name}
                  raza={element.race}
                />
              </Link>
            </div>
          ))
        ) : (
          <p>No characters found that are not human.</p>
        )}
      </div>
    </main>
  );
};

export default NoHumanos;
