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
      <BackgroundComponent1 />
      <Box height="100px"></Box>
      <Box className="two-column-container">
        <Box className="item-left">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
            flex="1"
          >
            <LogoComponent size={"10rem"} />
            <Typography
              sx={{
                color: "white",
                fontSize: "35px",
              }}
            >
              Your game night quiz
            </Typography>
          </Box>
        </Box>
        <Box className="item-right">
          <Button
            onClick={newGame}
            variant="contained"
            sx={{
              fontSize: "40px",
              height: "110px",
              width: "280px",
            }}
          >
            New Game
          </Button>
          <Box sx={{ marginTop: "50px" }}>
            <Typography sx={{ fontSize: "19px", color: "white" }}>
              Would you like to pick up where you left off?
            </Typography>
            <Button
              sx={{ fontSize: "20px", height: "50", width: "170" }}
              variant="outlined"
            >
              Load Game
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MainPageComponent;
