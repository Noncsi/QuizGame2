import { IGame } from "./model";
import {
  playerFactory,
  questionFactory,
  songQuestionFactory,
} from "../helperFunctions/DataFactory";
import { Player } from "./Player";
import { Guid } from "guid-typescript";
import { Topic } from "./questions/Topic";
import { SongQuestion } from "./questions/SongQuestion";

enum STAGE {
  mainPage,
  playerCreation,
  game,
}

export class Game {
  players: Player[];
  currentPlayer: Player;
  baseQuestions: Topic[];
  songQuestions: SongQuestion[] | undefined; // value added in App.tsx
  stage: STAGE;

  constructor(importedGame: IGame) {
    this.players = playerFactory(importedGame.playerData.players);
    const currentPlayerResult = this.players.find(
      (
        p // constructorban nincs logika, csak settelés
      ) => p.id.equals(Guid.parse(importedGame.playerData.currentPlayerId))
    );
    this.currentPlayer = currentPlayerResult
      ? currentPlayerResult
      : this.players[0];

    this.baseQuestions = questionFactory(importedGame.questionData);
    this.stage = 0;
  }
}
