import React from "react";
import { Box, Typography, Button } from "@mui/material";

import LogoComponent from "../LogoComponent";
import BackgroundComponent1 from "../BackgroundComponent1";
import { smartiniTheme } from "../../styles/SmartiniTheme";

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
                fontWeight: "lighter",
                fontFamily: "system-ui",
              }}
            >
              Your game night quiz.
            </Typography>
          </Box>
        </Box>
        <Button
          onClick={newGame}
          variant="contained"
          sx={{
            fontSize: "2pc;",
            color: "primary",
            borderRadius: "100px",
            height: "120px",
            width: "250px",
          }}
        >
          New Game
        </Button>
      </Box>
    </>
  );
}

export default MainPageComponent;
