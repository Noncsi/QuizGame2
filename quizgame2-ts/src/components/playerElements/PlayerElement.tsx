import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import "../../../src/styles/player.css";
import { purple } from "@mui/material/colors";
import { Player } from "../../models/Player";

export default function PlayerElement(props: any) {
  const renderThrashIcon = () => {
    return props.game.isGameStage ? (
      <></>
    ) : (
      <CardActions>
        <IconButton>
          <DeleteIcon onClick={deletePlayer}></DeleteIcon>
        </IconButton>
      </CardActions>
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
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        m: 1,
        maxWidth: 400,
        overflow: "unset",
        backgroundColor:
          props.game.isGameStage &&
          props.player.id.equals(props.game.currentPlayer.id)
            ? purple[500]
            : "white",
      }}
    >
      <CardContent>
        <Typography variant="h6">{props.player.name}</Typography>
        <Typography>{props.player.score}</Typography>
      </CardContent>
      {renderThrashIcon()}
    </Card>
  );
}
