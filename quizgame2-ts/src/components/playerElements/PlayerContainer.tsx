import React from "react";
import { Stack } from "@mui/material";

import { Player } from "../../models/Player";
import "../../styles/player.css";
import PlayerElement from "./PlayerElement";

export default function PlayerContainer(props: any) {
  const renderPlayer = (player: Player) => {
    return (
      <PlayerElement
        player={player}
        key={player.id}
        game={props.game}
        setGame={props.setGame}
      ></PlayerElement>
    );
  };

  return (
    <>
      <Stack
        sx={{
          flexWrap: "wrap",
          maxHeight: "35vh",
          overflowY: "auto",
          overflowX: "hidden",
          alignItems: "center",
        }}
      >
        {props.game.players.map((player: Player) => renderPlayer(player))}
      </Stack>
    </>
  );
}
