import React, { useContext } from "react";
import { Player } from "../../../models/Player";
import "./PlayerCreationComponent.scss";
import { Box, Button } from "@mui/material";

import NewPlayerForm from "../../playerElements/NewPlayerForm";
import PlayerContainer from "../../playerElements/PlayerContainer";
import NavbarComponent from "../../NavbarComponent";
import BackgroundComponent1 from "../../BackgroundComponent1";
import { GameContext } from "../../../GameContext";
import { mainButtonStyle } from "../../customElementStyles/MainButtonStyle";
import { secondaryButtonStyle } from "../../customElementStyles/SecondaryButtonStyle";

function PlayerCreationComponent() {
  const gameContext = useContext(GameContext);

  const addNewPlayerToPlayers = (playerName: string) => {
    if (
      gameContext.game.players.some(
        (player: Player) =>
          player.name.toLowerCase() === playerName.toLowerCase()
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
          <Button sx={mainButtonStyle} onClick={startGame}>
            Play
          </Button>
          <Box
            sx={{
              marginTop: "4vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            You can always check the rules during the game.
            <Button sx={secondaryButtonStyle}>Rules</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default PlayerCreationComponent;
