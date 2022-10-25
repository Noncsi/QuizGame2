import React from "react";
import { Card, CardContent, Typography, CardActions } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import "../../../src/styles/player.css";
import { purple } from "@mui/material/colors";

export default function PlayerElement(props: any) {
  console.log(props.isCurrent);
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        m: 1,
        maxWidth: 400,
        overflow: "unset",
        backgroundColor: props.isCurrent ? purple[500] : "white",
      }}
    >
      <CardContent>
        <Typography variant="h6">{props.player.name}</Typography>
      </CardContent>
      <CardActions>
        <DeleteIcon></DeleteIcon>
      </CardActions>
    </Card>
  );
}
