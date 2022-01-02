import React, { useState } from "react";
import { Card } from "@mui/material";
import CardData from "./Data";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Cards.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

function Cards() {
  const [data, setData] = useState(CardData);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const cards = () => (
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
            <div>
              <Button variant="contained" size="small" onClick={handleOpen}>
                Bilde fra turen
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  style={{
                    backgroundImage: `url(${item.image})`,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "100%",
                    maxWidth: "350px",
                    height: "100%",
                    maxHeight: "500px",
                    transform: "translate(-50%, -50%)",
                    backgroundSize: "100% 100%",
                    border: "2px solid #000",
                    boxShadow: 100,
                    p: 4,
                  }}
                ></Box>
              </Modal>
            </div>
          </CardActions>
        </Card>
      ))}
    </div>
  );

  return <div>{cards()}</div>;
}

export default Cards;
