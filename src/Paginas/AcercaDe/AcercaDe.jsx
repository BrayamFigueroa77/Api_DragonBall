
import React from "react";
import "./AcercaDe.css"; // Asegúrate de crear este archivo CSS si deseas estilizarlo

const AcercaDe = () => {
  return (
    <div className="acerca-de">
      
      <h2>¡Bienvenido a nuestro sitio web dedicado al universo de Dragon Ball!</h2>
      
      <h3>Introducción</h3>
      <p>
        Este proyecto tiene como objetivo presentar una colección de personajes de Dragon Ball,
        permitiendo a los fans explorar sus características y razas. Desde los héroes hasta los
        villanos, aquí encontrarás información sobre todos los personajes que han hecho historia
        en este icónico anime.
      </p>
      
      <h3>Inspiración</h3>
      <p>
        La idea de crear este sitio nació de mi pasión por Dragon Ball. Desde que era niño, he
        sido un gran admirador de las aventuras de Goku y sus amigos. Este sitio es una forma de
        compartir esa pasión con otros fans.
      </p>
      
      <h3>Características</h3>
      <ul>
        <li>Explora personajes: Filtra personajes por raza y descubre sus historias.</li>
        <li>Detalles enriquecidos: Haz clic en cada personaje para obtener información más detallada sobre sus habilidades y poderes.</li>
      </ul>
      
      <h3>Tecnologías Utilizadas</h3>
      <p>
        Este sitio ha sido construido utilizando React para la interfaz de usuario, Axios para las
        solicitudes de API y Material-UI para un diseño moderno y responsivo. Si estás interesado
        en el desarrollo web, ¡este proyecto es un excelente ejemplo!
      </p>
      
      <h3>Futuras Actualizaciones</h3>
      <p>
        Planeo añadir más personajes y funcionalidades en el futuro. ¡Mantente atento a las
        actualizaciones!
      </p>
      
      <h3>Contacto</h3>
      <p>
        Si tienes comentarios, preguntas o sugerencias, no dudes en ponerte en contacto conmigo a
        través del correo electrónico: <a href="Correo">brafira@hotmail.com</a>.
      </p>
      
      <h3>Agradecimientos</h3>
      <p>
        Quiero agradecer a todos los fanáticos de Dragon Ball que han inspirado este proyecto, y
        a los recursos en línea que me ayudaron a aprender sobre desarrollo web.
      </p>
    </div>
  );
};

export default AcercaDe;
