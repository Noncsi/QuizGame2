import React, { useEffect, useState } from "react";
import "./index.scss";

import MainPageComponent from "./components/gameStages/01_MainPageComponent/MainPageComponent";
import GameComponent from "./components/gameStages/03_GameComponent/GameComponent";
import { Box } from "@mui/material";
import PlayerCreationComponent from "./components/gameStages/02_PlayerCreationComponent/PlayerCreationComponent";
import { Game } from "./models/Game";
import { IGame } from "./models/model";
import { GameContext } from "./GameContext";
import {
  getTracks,
  spotifyAccessTokenObservable,
  getFirstAccessToken,
} from "./helperFunctions/SpotifyService";
import { songQuestionFactory } from "./helperFunctions/DataFactory";
import { concatMap, switchMap, take, tap } from "rxjs";
import { SongQuestion } from "./models/questions/SongQuestion";

function App() {
  const importedGame: IGame = require("../src/data/gameData.json");
  const [game, setGame] = useState<Game>(new Game(importedGame));

  useEffect(() => {
    getFirstAccessToken();
    spotifyAccessTokenObservable
      .pipe(
        switchMap((accessToken) => addTracks(accessToken ?? "")),
        take(1)
      )
      .subscribe();
  }, []);

  const addTracks = (accessToken: string) => {
    return getTracks(accessToken).pipe(
      tap((res) => {
        console.log("Tracks are successfully fetched!");
        setGame({
          ...game,
          songQuestions: songQuestionFactory(res.data.items),
        });
      })
    );
  };

  const loadCurrentStage = () => {
    switch (game?.stage) {
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
      {game.songQuestions?.map((sq: SongQuestion) => {
        <p>{sq.answer}</p>;
      })}
      <Box
        sx={{
          margin: " 0 5vw 0 5vw",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {loadCurrentStage()}
      </Box>
    </GameContext.Provider>
  );
}

export default App;
