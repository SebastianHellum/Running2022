import React, { useState, useCallback } from "react";
import { Card } from "@mui/material";
import CardData from "./Data";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Cards.css";
import { render } from "react-dom";
import ImageViewer from "react-simple-image-viewer";

function Cards() {
  const [data, setData] = useState(CardData);

  const cards = () => (
    <div className="flexParent">
      {data.map((item, i) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={item.mapImage}
            alt={item.name}
            style={{ borderRadius: "5%" }}
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
          </CardActions>
        </Card>
      ))}
    </div>
  );

  return <div>{cards()}</div>;
}

export default Cards;
