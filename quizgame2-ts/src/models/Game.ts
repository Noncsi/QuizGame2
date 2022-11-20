import { IGame } from "./model";
import { playerFactory, questionFactory } from "../helperFunctions/DataFactory";
import { Player } from "./Player";
import { Guid } from "guid-typescript";
import { Topic } from "./questions/Topic";

enum STAGE {
  mainPage,
  playerCreation,
  game,
}

export class Game {
  players: Player[];
  currentPlayer: Player | undefined;
  baseQuestions: Topic[];
  stage: STAGE;

  constructor(importedGame: IGame) {
    this.players = playerFactory(importedGame.playerData.players);
    this.currentPlayer = importedGame.playerData.currentPlayer
      ? this.players.find((p) =>
          p.id.equals(Guid.parse(importedGame.playerData.currentPlayer))
        )
      : this.players[0];

    this.baseQuestions = questionFactory(importedGame.questionData);
    this.stage = 0; // set to main at release
  }
}
