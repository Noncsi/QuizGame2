import React from "react";
import { useState } from "react";
import "./index.css";

import MainPageComponent from "./components/stages/MainPageComponent";
import GameComponent from "./components/stages/GameComponent";
import { Game } from "./models/Game";
import { Box } from "@mui/material";
import { IGame } from "./models/model";
import PlayerCreationComponent from "./components/stages/PlayerCreationComponent";

// loading game from json
const importedGame: IGame = require("../src/data/gameData.json");

function App() {
  const [game, setGame] = useState(new Game(importedGame));

  const loadCurrentStage = () => {
    switch (game.stage) {
      case 0:
        return (
          <MainPageComponent game={game} setGame={setGame}></MainPageComponent>
        );
      case 1:
        return (
          <PlayerCreationComponent
            game={game}
            setGame={setGame}
          ></PlayerCreationComponent>
        );
      case 2:
        return <GameComponent game={game} setGame={setGame}></GameComponent>;
    }
  };

  return (
    <Box sx={{ margin: " 0 5vw 0 5vw", height: "70vh" }}>
      {loadCurrentStage()}
    </Box>
  );
}

export default App;
