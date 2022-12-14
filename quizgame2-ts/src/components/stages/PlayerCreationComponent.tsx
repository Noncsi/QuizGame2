import React from "react";
import { Player } from "../../models/Player";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import NewPlayerForm from "../playerElements/NewPlayerForm";
import PlayerContainer from "../playerElements/PlayerContainer";
import LogoComponent from "../LogoComponent";
import NavbarComponent from "../NavbarComponent";
import BackgroundComponent1 from "../BackgroundComponent1";

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
      <BackgroundComponent1 />
      <NavbarComponent />
      <Box className="two-column-container">
        <Box className="item-left">
          <NewPlayerForm nameSubmitHandler={addNewPlayerToPlayers} />
          <PlayerContainer game={props.game} setGame={props.setGame} />
        </Box>
        <Box className="item-right">
          <Button
            onClick={startGame}
            variant="contained"
            sx={{
              fontSize: "40px",
              color: "white",
              borderRadius: "100px",
              height: "110px",
              width: "280px",
            }}
          >
            Play
          </Button>
          <Box sx={{ marginTop: "50px" }}>
            <Typography sx={{ fontSize: "19px", color: "white" }}>
              You can always check the rules during the game.
            </Typography>
            <Button
              sx={{ fontSize: "20px", height: "50", width: "170" }}
              variant="outlined"
            >
              Rules
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default PlayerCreationComponent;
