import React, { useContext } from "react";
import "./MainPageComponent.scss";
import { Box, Typography, Button } from "@mui/material";

import LogoComponent from "../../LogoComponent";
import BackgroundComponent1 from "../../BackgroundComponent1";
import { GameContext } from "../../../GameContext";
import { mainButtonStyle } from "../../customElementStyles/MainButtonStyle";
import { buttonStyle } from "../../customElementStyles/ButtonStyle";
import { secondaryButtonStyle } from "../../customElementStyles/SecondaryButtonStyle";

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
        <LogoComponent size={"9rem"} />
        <Box className="subtitle">Your game night quiz</Box>
      </Box>
      <Box sx={{ textAlign: "-webkit-center", marginTop: "12vh" }}>
        <Box className="base">
          <Box className="middle">
            <Button sx={mainButtonStyle} onClick={newGame}>
              New Game
            </Button>
            <Box
              sx={{
                marginTop: "4vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              Would you like to pick up where you left off?
              <Button sx={secondaryButtonStyle}>Load Game</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
