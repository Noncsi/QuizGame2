import React from "react";
import { Box, Typography, Button } from "@mui/material";

import LogoComponent from "../LogoComponent";
import BackgroundComponent1 from "../BackgroundComponent1";

function MainPageComponent(props: any) {
  const newGame = () => {
    props.setGame({
      ...props.game,
      stage: 1,
    });
  };

  return (
    <>
      <BackgroundComponent1></BackgroundComponent1>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          marginTop: "25vh",
          position: "relative",
        }}
      >
        <Box display="flex">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
            flex="1"
          >
            <LogoComponent size={"10rem"}></LogoComponent>
            <Typography
              sx={{
                color: "white",
                fontSize: "2rem",
              }}
            >
              Your game night quiz.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button
            onClick={newGame}
            variant="contained"
            sx={{
              fontSize: "30px",
              height: "120px",
              width: "250px",
            }}
          >
            New Game
          </Button>
          <Typography sx={{ color: "white" }}>
            Would you like to pick up where you left off?
          </Typography>
          <Button sx={{ fontSize: "16px" }} variant="outlined">
            Load Game
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default MainPageComponent;
