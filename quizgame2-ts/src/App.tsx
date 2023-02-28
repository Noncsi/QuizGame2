import React, { createContext, useState } from "react";
import "./index.css";

import MainPageComponent from "./components/stages/MainPageComponent";
import GameComponent from "./components/stages/GameComponent";
import { Box } from "@mui/material";
import PlayerCreationComponent from "./components/stages/PlayerCreationComponent";
import { Game } from "./models/Game";
import { IGame } from "./models/model";
import { GameContext } from "./GameContext";

function App() {
  const importedGame: IGame = require("../src/data/gameData.json");
  const [game, setGame] = useState(new Game(importedGame));

  const loadCurrentStage = () => {
    switch (game.stage) {
      case 0:
        return <MainPageComponent />;
      case 1:
        return <PlayerCreationComponent />;
      case 2:
        return <GameComponent />;
    }
  };

  return (
    <GameContext.Provider value={{ game, setGame }}>
      <Box sx={{ margin: " 0 5vw 0 5vw", height: "70vh" }}>
        {loadCurrentStage()}
      </Box>
    </GameContext.Provider>
  );
}

export default App;
