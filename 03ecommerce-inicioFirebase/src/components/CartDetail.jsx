import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import imageTest from "../assets/img/test.jpg";
import { Card, CardHeader, CardMedia, Paper, styled } from "@mui/material";

export default function CartDetail() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        display: "flex",
      }}
    >
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems={"center"}
        paddingY={10}
      >
        <Grid item xs={11}>
          <Card>
            <CardHeader
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <Grid container>
              <Grid item>
                <CardMedia
                  component="img"
                  height="194"
                  image={imageTest}
                  alt="Paella dish"
                />
              </Grid>
              <Grid item>
                <Typography variant="h5">dsajksadjbsabhsjbckhs</Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
