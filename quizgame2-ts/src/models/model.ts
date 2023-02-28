import { Guid } from "guid-typescript";

export interface IGame {
  playerData: IPlayerData;
  questionData: ITopic[];
}

// players
export interface IPlayerData {
  currentPlayerId: string;
  players: IPlayer[];
}

export interface IPlayer {
  id: Guid;
  name: string;
  score: number;
}

// questions
export interface IQuestionData {
  categories: ITopic[];
}

export interface ITopic {
  name: string;
  questionsByLevels: IQuestion[][];
}

export interface IQuestion {
  id: string;
  question: string;
  answer: string;
}
