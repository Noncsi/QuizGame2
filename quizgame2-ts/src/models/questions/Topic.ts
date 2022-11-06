import { Question } from "./Question";

export class Topic {
  title: string;
  questionsByLevels: Question[][] = [];

  constructor(title: string, questionsByLevels: Question[][]) {
    this.title = title;
    this.questionsByLevels = questionsByLevels;
  }
}
