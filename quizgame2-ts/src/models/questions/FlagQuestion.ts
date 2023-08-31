import { Question } from "./Question";

export class FlagQuestion extends Question {
  flag: any; //jaj

  constructor(flag: any, answer: string) {
    super("Which country does this flag belong to?", answer);
    this.flag = flag;
  }
}
