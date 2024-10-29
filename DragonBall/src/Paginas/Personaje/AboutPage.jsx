import "./AboutPage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Tarjeta from "../../Componentes/Tarjeta/Tarjeta";

const AboutPage = () => {
  
  const [data, setData]=useState({});
  
  let {id} = useParams();

 useEffect(()=>{
  axios.get(`https://dragonball-api.com/api/characters/${id}`)
  .then(char=> setData(char.data))},[])

  return (
    <main id='Caracteristicas'>
        <h1 id="Titulo_personaje">Caracteristica del personaje</h1>    
        <div className="Tarjeta">
        <Tarjeta img={data.image} nombre={data.name} raza={data.race}/>
        </div>

        <div className="character-details">
        <p><strong>Descripción:</strong> {data.description}</p>
        <p><strong>Ki:</strong> {data.ki}</p>
        <p><strong>Max Ki:</strong> {data.maxKi}</p>
        <p><strong>Afiliación:</strong> {data.affiliation}</p>
        <p><strong>Género:</strong> {data.gender}</p>
        <p><strong>Raza:</strong> {data.race}</p>
      </div>
    </main>
  )
}

export default AboutPage