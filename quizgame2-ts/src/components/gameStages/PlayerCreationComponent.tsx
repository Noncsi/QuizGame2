import React, { useContext } from "react";
import { Player } from "../../models/Player";
import { Box, Button, Typography } from "@mui/material";

import NewPlayerForm from "../playerElements/NewPlayerForm";
import PlayerContainer from "../playerElements/PlayerContainer";
import NavbarComponent from "../NavbarComponent";
import BackgroundComponent1 from "../BackgroundComponent1";
import { GameContext } from "../../GameContext";

function PlayerCreationComponent() {
  const gameContext = useContext(GameContext);

  const addNewPlayerToPlayers = (playerName: string) => {
    if (
      gameContext.game.players.some(
        (player: Player) => player.name === playerName
      )
    )
      return;
    gameContext.setGame({
      ...gameContext.game,
      players: [...gameContext.game.players, new Player(playerName)],
    });
  };

  const startGame = () => {
    gameContext.setGame({
      ...gameContext.game,
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
          <PlayerContainer
            game={gameContext.game}
            setGame={gameContext.setGame}
          />
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
