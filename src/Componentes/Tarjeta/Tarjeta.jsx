import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { grey, blue } from "@mui/material/colors";

const Tarjeta = (props) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "15px", // Esquinas redondeadas
        boxShadow: 3, // Sombra más profunda
        transition: "0.3s", // Suaviza la transición
        '&:hover': {
          boxShadow: 15, // Sombra al pasar el ratón
          transform: 'translateY(-5px)', // Eleva la tarjeta al pasar el ratón
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="500" // Ajusta la altura de la imagen
          image={props.img}
          alt="Api"
          sx={{
            objectFit: "contain", // Ajusta la imagen al contenedor
            borderTopLeftRadius: "15px", // Esquina superior izquierda redondeada
            borderTopRightRadius: "15px", // Esquina superior derecha redondeada
            filter: "drop-shadow(0px 0px 20px grey)", // Sombra alrededor de la imagen
            transition: "0.3s", // Suaviza la transición
            '&:hover': {
              transform: 'scale(1.1)', // Aumenta el tamaño de la imagen al pasar el ratón
              transition: "0.3s", // Suaviza la transición al escalar
            },
          }}
        />
        <CardContent sx={{ backgroundColor: blue[700] }}> {/* Fondo del contenido */}
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{
              fontWeight: 'bold', // Negrita
              color: 'black', // Color negro
              textAlign: 'center', // Centrar el texto
              textDecoration: 'none', // Asegura que no haya subrayado
            }}
          >
            {props.nombre}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: grey[600], textAlign: 'center' }}
          >
            {props.especie}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Tarjeta;
