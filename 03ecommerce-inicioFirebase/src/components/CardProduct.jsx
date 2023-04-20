import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function CardProduct({ marca, img, modelo, precio }) {
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {marca}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${marca} / ${modelo}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`$${precio}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
}
