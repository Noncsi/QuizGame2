import React from "react";
import { Stack } from "@mui/material";

import { Player } from "../../models/Player";
import "../../styles/player.css";
import PlayerElement from "./PlayerElement";

export default function PlayerContainer(props: any) {
  const renderPlayer = (player: Player) => {
    const isCurrent =
      props.game.isGameStage && player.id.equals(props.game.currentPlayer.id);
    return (
      <PlayerElement
        player={player}
        key={player.id}
        isCurrent={isCurrent}
      ></PlayerElement>
    );
  };

  return (
    <>
      <Stack
        sx={{
          maxHeight: "60vh",
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
