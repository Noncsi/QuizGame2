import React from "react";
import { Player } from "../../models/Player";
import { AppBar, Box, Button, Toolbar } from "@mui/material";

import NewPlayerForm from "../playerElements/NewPlayerForm";
import PlayerContainer from "../playerElements/PlayerContainer";
import LogoComponent from "../LogoComponent";
import NavbarComponent from "../NavbarComponent";

function PlayerCreationComponent(props: any) {
  const addNewPlayerToPlayers = (playerName: string) => {
    if (props.game.players.some((player: Player) => player.name === playerName))
      return;
    props.setGame({
      ...props.game,
      players: [...props.game.players, new Player(playerName)],
    });
  };

  const startGame = () => {
    props.setGame({
      ...props.game,
      stage: 2,
    });
  };

  return (
    <>
      <NavbarComponent></NavbarComponent>
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
          <Button
            onClick={startGame}
            variant="contained"
            sx={{
              fontFamily: "BeautySchoolDropOut",
              fontSize: "3pc;",
              color: "white",
              borderRadius: "100px",
              height: "120px",
              width: "250px",
            }}
          >
            Play
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default PlayerCreationComponent;
