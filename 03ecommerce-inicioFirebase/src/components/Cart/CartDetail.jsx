import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import imageTest from "../../assets/img/test.jpg";
import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  Paper,
  styled,
} from "@mui/material";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export default function CartDetail({
  marca,
  modelo,
  descripcion,
  precio,
  img,
  cantidad,
  id,
}) {
  const { deleteProduct } = useContext(CartContext);

  return (
    <Grid item xs={11} marginY={2}>
      <Card>
        <CardHeader title={marca} />
        <Grid container display={"flex"} justifyContent={"space-around"}>
          <Grid item>
            <CardMedia
              component="img"
              height="100"
              image={img}
              alt="not found"
            />
          </Grid>
          <Grid item>
            <Typography variant="h5" marginX={5}>
              Modelo: {modelo}
            </Typography>
            <Typography variant="h5" marginX={5}>
              Descripcion: {descripcion}
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteProduct(id)}
            >
              Eliminar del carrito
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="h3">
              ${precio} c/u x {cantidad}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
