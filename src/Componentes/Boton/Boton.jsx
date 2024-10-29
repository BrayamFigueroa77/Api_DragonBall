import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Boton.css";

const Boton = () => {
  return (
    <nav>
      <Link to={"/"}>
        <Button sx={{ marginTop: 4, width: 150 }} variant="contained">
          Principal
        </Button>
      </Link>
      <Link to={"/character/Human"}>
        <Button sx={{ marginTop: 4, width: 150 }} variant="contained">
          Humanos
        </Button>
      </Link>
      <Link to={"/character/NoHuman"}>
        <Button sx={{ marginTop: 4, width: 150 }} variant="contained">
          No Humanos
        </Button>
      </Link>
      <Link to={"/AcercaDe"}>
        <Button sx={{ marginTop: 4, width: 150 }} variant="contained">
          Acerca de
        </Button>
      </Link>
    </nav>
  );
};

export default Boton;
