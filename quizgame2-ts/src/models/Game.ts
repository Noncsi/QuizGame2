import {
  playerFactory,
  TopicAndQuestionFactory,
} from "../helperFunctions/DataFactory";
import { Player } from "./Player";
import { QuestionTopic } from "./questions/QuestionTopic";

export class Game {
  players: Player[];
  currentPlayer: Player;
  topics: QuestionTopic[];

  constructor(playerData: any, questionData: any) {
    this.players = playerFactory(playerData.players);
    this.currentPlayer = playerData.currentplayer
      ? this.players.find((p) => (p.id = playerData.currentPlayer))!
      : this.players[0];
    this.topics = TopicAndQuestionFactory(questionData.topics);
  }
}
