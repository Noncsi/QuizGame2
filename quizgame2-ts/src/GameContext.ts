import { createContext } from "react";
import { Game } from "./models/Game";

interface IGameContext {
  game: Game;
  setGame: React.Dispatch<React.SetStateAction<Game>>;
}

export const GameContext = createContext<IGameContext>({} as IGameContext);
