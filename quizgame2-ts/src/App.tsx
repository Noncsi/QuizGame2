import React from "react";
import { useState } from "react";
import "./index.css";

import PreGameComponent from "./components/PreGameComponent";
import GameComponent from "./components/GameComponent";
import { Game } from "./models/Game";

// loading game from json
const playerData = require("../src/data/playerData.json");
const questionData = require("../src/data/questionData.json");

function App() {
  const [game, setGame] = useState(new Game(playerData, questionData));
  const [players, setPlayers] = useState(game.players);
  const [isGameStage, setIsGameStage] = useState(true); // True is for testing inGame stage. Set to Boolean at release

  const checkGameStage = () => {
    return isGameStage ? (
      <GameComponent players={players}></GameComponent>
    ) : (
      <PreGameComponent
        startGame={setIsGameStage}
        players={players}
        setPlayers={setPlayers}
      ></PreGameComponent>
    );
  };

  return (
    <>
      <div className="top-bar">
        <div id="title-container">
          <h1>John Triviaolta</h1>
        </div>
        <nav>
          <a>Játékszabály</a>
          <a>Játék betöltése</a>
          <a>Játék exportálása</a>
        </nav>
      </div>
      <div className="main-page-container">{checkGameStage()}</div>
    </>
  );
}

export default App;
