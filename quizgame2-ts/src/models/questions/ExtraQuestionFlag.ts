import { Question } from "./Question";

export class ExtraQuestionFlag extends Question {
  flag: any;

  constructor(flag: any, answer: string) {
    super("Which country does this flag belong to?", answer);
    this.flag = flag;
  }
}
