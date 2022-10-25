import { IGame } from "./model";
import { playerFactory, questionFactory } from "../helperFunctions/DataFactory";
import { Player } from "./Player";
import { Category } from "./questions/Category";
import { Guid } from "guid-typescript";

export class Game {
  players: Player[];
  currentPlayer: Player | undefined;
  baseQuestions: Category[];
  isGameStage: Boolean;

  constructor(importedGame: IGame) {
    this.players = playerFactory(importedGame.playerData.players);
    this.currentPlayer = importedGame.playerData.currentPlayer
      ? this.players.find((p) =>
          p.id.equals(Guid.parse(importedGame.playerData.currentPlayer))
        )
      : this.players[0];

    this.baseQuestions = questionFactory(importedGame.questionData);
    this.isGameStage = false;
  }
}
