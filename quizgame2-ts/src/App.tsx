import React from "react";
import { useState } from "react";
import "./index.css";

import PreGameComponent from "./components/PreGameComponent";
import GameComponent from "./components/GameComponent";
import { Game } from "./models/Game";
import {
  Box,
  AppBar,
  Button,
  Toolbar,
  Typography,
  SvgIcon,
} from "@mui/material";
import { IGame } from "./models/model";

// loading game from json
const importedGame: IGame = require("../src/data/gameData.json");

function App() {
  const [game, setGame] = useState(new Game(importedGame));

  const loadGameStage = () => {
    return game.isGameStage ? (
      <GameComponent game={game} setGame={setGame}></GameComponent>
    ) : (
      <PreGameComponent game={game} setGame={setGame}></PreGameComponent>
    );
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          height: "200px",
          justifyContent: "flex-start",
          backgroundColor: "rgb(0, 0, 0, 0%)",
          boxShadow: "none",
          padding: "20px",
        }}
      >
        <Toolbar sx={{ justifyContent: "flex-start" }}>
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontFamily: "BeautySchoolDropout",
              textAlign: "center",
              fontSize: "max(min(4vw, 10em), 3rem)",
              transform: "rotate(-4deg)",
              margin: "-13px",
              marginTop: "15px",
              color: "white",
              textShadow:
                "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #f400ff, 0 0 82px #f400ff, 0 0 92px #f400ff, 0 0 102px #f400ff, 0 0 151px #f400ff",
            }}
          >
            Smartini
          </Typography>
          <SvgIcon
            sx={{
              marginLeft: "20px",
              marginTop: "10px",
              fontSize: "80px",
              filter:
                "drop-shadow(0 0 7px #fff) drop-shadow(0 0 10px #fff) drop-shadow(0 0 21px #fff) drop-shadow(0 0 42px #f400ff) drop-shadow(0 0 82px #f400ff)",
            }}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            enableBackground="new 0 0 1000 1000"
          >
            <metadata>
              {" "}
              Svg Vector Icons : http://www.onlinewebfonts.com/icon{" "}
            </metadata>
            <g>
              <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                <path d="M2102.6,4987.4C1513,4888,1002.5,4501.7,751.8,3964.1c-221.4-469.9-221.4-1055,0-1527.1c230.4-490.2,661.9-840.3,1222.1-989.4c176.2-47.4,623.5-52,750-9c128.8,42.9,183,176.2,126.5,302.7c-42.9,94.9-106.2,110.7-451.8,115.2c-388.5,6.8-517.3,45.2-786.1,225.9c-377.3,257.5-589.6,661.9-589.6,1120.5c0,375,133.3,698,395.3,960.1c273.3,275.6,582.8,402.1,971.4,402.1c397.6,0,718.4-142.3,994-438.2c74.5-81.3,173.9-219.1,221.4-309.5c92.6-176.2,131-207.8,248.5-207.8c131,0,212.3,108.4,196.5,259.8c-6.8,70-151.4,325.3-275.6,478.9C3394.8,4827,2708,5089.1,2102.6,4987.4z" />
                <path d="M7031.7,4969.3c-70-33.9-128.8-126.5-485.7-765.8l-406.6-727.4l-1960.8-6.8l-1963.1-6.8l-42.9-54.2c-29.4-36.1-42.9-88.1-42.9-171.7V3117l1457-2198l1457-2198v-1497.7v-1497.7h-817.8c-763.5,0-824.5-2.2-890-42.9c-142.3-85.8-155.9-277.9-29.4-399.8l67.8-65.5l1913.3-4.5c2060.2-6.8,1976.6-11.3,2069.2,113c81.3,108.4,40.7,314-72.3,370.5c-20.3,9-413.4,22.6-874.2,29.4l-835.8,11.3l-4.5,1479.6l-6.8,1479.6L7022.7,896.4c801.9,1210.8,1463.8,2227.4,1470.6,2263.5c15.8,79.1-27.1,205.6-85.8,259.8c-45.2,40.7-106.2,42.9-858.4,54.2l-811,11.3l280.1,497l280.1,497l975.9,6.8c942,4.5,978.1,6.8,1041.4,52c94.9,65.5,126.5,201,72.3,309.5c-79.1,164.9-70,162.6-1237.9,162.6C7205.7,5010,7104,5005.5,7031.7,4969.3z M5918.1,3096.6c-4.5-11.3-124.2-223.6-264.3-476.6l-255.3-456.3l-1106.9,4.5l-1106.9,6.8l-277.9,451.8c-151.3,248.5-277.8,458.6-277.8,469.9c-2.3,9,740.9,15.8,1649.1,15.8C5183.9,3112.5,5922.6,3105.7,5918.1,3096.6z M7680,2638.1l-298.2-474.4h-682.2c-377.2,0-684.5,6.8-684.5,13.6c0,18.1,469.9,865.2,503.8,908.1c15.8,20.3,192,27.1,738.7,27.1H7976L7680,2638.1z" />
              </g>
            </g>
          </SvgIcon>
          <Button color="inherit">Rules</Button>
          <Button color="inherit">Load</Button>
          <Button color="inherit">Save</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ margin: " 0 5vw 0 5vw", height: "70vh" }}>
        {loadGameStage()}
      </Box>
    </>
  );
}

export default App;
