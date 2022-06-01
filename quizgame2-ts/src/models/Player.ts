import { Guid } from "guid-typescript";

export class Player {
  id: Guid;
  name: string;
  score: number;

  constructor(name: string, score: number = 0, id = Guid.create()) {
    this.id = id;
    this.name = name;
    this.score = score;
  }
}
