import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import "../../../src/styles/player.css";
import { purple } from "@mui/material/colors";
import { Player } from "../../models/Player";

export default function PlayerElement(props: any) {
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const toggleDeleteButton = () => {
    setShowDeleteButton(!showDeleteButton);
  };

  const renderDeleteButton = () => {
    return (
      props.game.stage !== 2 &&
      showDeleteButton && (
        <CardActions>
          <IconButton onClick={deletePlayer}>
            <DeleteIcon sx={{ color: "white" }}></DeleteIcon>
          </IconButton>
        </CardActions>
      )
    );
  };

  const renderScore = () => {
    return (
      props.game.stage === 2 && (
        <Typography>Score: {props.player.score}</Typography>
      )
    );
  };

  const deletePlayer = () => {
    const index = props.game.players.findIndex((p: Player) =>
      p.id.equals(props.player.id)
    );
    const cloneOfPlayerList = props.game.players;
    cloneOfPlayerList.splice(index, 1);
    props.setGame({
      ...props.game,
      players: cloneOfPlayerList,
    });
  };

  return (
    <Box
      display={"flex"}
      onMouseEnter={toggleDeleteButton}
      onMouseLeave={toggleDeleteButton}
    >
      <Card
        sx={{
          justifyContent: "center",
          display: "flex",
          m: 1,
          padding: "5px",
          maxWidth: 400,
          overflow: "unset",
          width: "200px",
          height: "fit-content",
          color: "white",
          backgroundColor:
            props.game.stage === 2 &&
            props.player.id.equals(props.game.currentPlayer.id)
              ? purple[500]
              : "rgba(255,255,255,0.2)",
        }}
      >
        <CardContent>
          <Typography variant="h6">{props.player.name}</Typography>
          {renderScore()}
        </CardContent>
      </Card>
      {renderDeleteButton()}
    </Box>
  );
}
