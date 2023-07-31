import React, { useContext } from "react";
import "./MainPageComponent.scss";
import { Box, Typography, Button } from "@mui/material";

import LogoComponent from "../LogoComponent";
import BackgroundComponent1 from "../BackgroundComponent1";
import { GameContext } from "../../GameContext";

export default function MainPageComponent() {
  const gameContext = useContext(GameContext);
  const newGame = () => {
    gameContext.setGame({
      ...gameContext.game,
      stage: 1,
    });
  };

  return (
    <>
      <BackgroundComponent1 />
      <Box className="red" sx={{ textAlign: "center" }}>
        <LogoComponent size={"6rem"} />
        <Typography className="subtitle">Your game night quiz</Typography>
      </Box>
      <Box sx={{ textAlign: "-webkit-center", marginTop: "12vh" }}>
        <Box className="new-game-button-base">
          <Box className="new-game-button-middle">
            <Button className="new-game-button-center" onClick={newGame}>
              New Game
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", marginTop: "7vh" }}>
        <Typography sx={{ fontSize: "19px", color: "white" }}>
          Would you like to pick up where you left off?
        </Typography>
        <Button className="load-game-button">Load Game</Button>
      </Box>
    </>
  );
}
