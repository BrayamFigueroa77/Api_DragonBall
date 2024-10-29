import "./Encabezado.css";
import Boton from "../Boton/boton";

const Encabezado = () => {
  return (
    <header>
      <img
        id="logo"
        src="https://i.pinimg.com/736x/60/a9/61/60a96199afa8469b7c3c46810ed86816.jpg"
        alt="Logo Gragon Ball Z"
      />
      <h1 className="Titulo">Dragon Ball Z</h1>
      <div id="Navegacion">

      <Boton/>

      </div>
    </header>
  );
};

export default Encabezado;
