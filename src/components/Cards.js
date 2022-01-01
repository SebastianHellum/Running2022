import React, { useState } from "react";
import { Card } from "@mui/material";
import CardData from "./Data";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Cards.css";
import Dialog from "@material-ui/core/Dialog";

function Cards() {
  const [data, setData] = useState(CardData);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cartProducts = () => (
    <div className="flexParent">
      {data.map((item, i) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={item.mapImage}
            alt={item.name}
            borderRadius="5px"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name} - {item.date}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {item.distance}km {item.weather}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              style={{ marginLeft: "auto", marginRight: "auto" }}
              href={item.link}
              target="_blank"
            >
              Flere detaljer
            </Button>
            <Button
              size="small"
              variant="contained"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              Bilde fra turen
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );

  return <div>{cartProducts()}</div>;
}

export default Cards;
