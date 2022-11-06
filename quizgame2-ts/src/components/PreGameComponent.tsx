import React from "react";
import { Player } from "../models/Player";
import { Box } from "@mui/material";

import NewPlayerForm from "./playerElements/NewPlayerForm";
import PlayerContainer from "./playerElements/PlayerContainer";
import StartGameButtonComponent from "./StartGameButtonComponent";

function PreGameComponent(props: any) {
  const addNewPlayerToPlayers = (playerName: string) => {
    if (props.game.players.some((player: Player) => player.name === playerName))
      return;
    props.setGame({
      ...props.game,
      players: [...props.game.players, new Player(playerName)],
    });
  };

  return (
    <Box display="flex">
      <Box flex="1" justifyContent="center">
        <NewPlayerForm nameSubmitHandler={addNewPlayerToPlayers} />
        <PlayerContainer game={props.game} setGame={props.setGame} />
      </Box>
      <Box
        flex="1"
        justifyContent="center"
        alignItems="center"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "60vh",
        }}
      >
        <StartGameButtonComponent
          game={props.game}
          setGame={props.setGame}
        ></StartGameButtonComponent>
      </Box>
    </Box>
  );
}

export default PreGameComponent;
