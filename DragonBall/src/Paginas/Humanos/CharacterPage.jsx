import "./CharacterPage.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Tarjeta from "../../Componentes/Tarjeta/Tarjeta";

const CharacterPage = () => {
  const [data, setData] = useState([]);
  const { race } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dragonball-api.com/api/characters?limit=68`);
        console.log(response.data); // Verifica la respuesta
        setData(response.data.items); // Cambia esto a items
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = Array.isArray(data) ? data.filter((elem) => elem.race?.toLowerCase() === race.toLowerCase()) : [];
  console.log("Filtered Data:", filteredData); // Verifica el resultado del filtro

  return (
    <main id="character-page">
      <h1 id="title-character">Personajes humanos</h1>
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
          <p>No characters found for race: {race}</p>
        )}
      </div>
    </main>
  );
};

export default CharacterPage;
