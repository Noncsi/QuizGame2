import { Game } from "./Game";

export interface MainPageProps {
  game: Game;
  setGame: React.Dispatch<React.SetStateAction<Game>>;
}
