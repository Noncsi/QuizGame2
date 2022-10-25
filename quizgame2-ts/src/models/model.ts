import { Guid } from "guid-typescript";

export interface IGame {
  playerData: IPlayerData;
  questionData: ICategory[];
}

// players
export interface IPlayerData {
  currentPlayer: string;
  players: IPlayer[];
}

export interface IPlayer {
  id: Guid;
  name: string;
  score: number;
}

// questions
export interface IQuestionData {
  categories: ICategory[];
}

export interface ICategory {
  name: string;
  questionsByLevels: IQuestion[][];
}

export interface IQuestion {
  id: string;
  question: string;
  answer: string;
}
