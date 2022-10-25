import { Question } from "./Question";

export class Category {
  topicTitle: string;
  questionsByLevels: Question[][] = [];

  constructor(topicTitle: string, questionsByLevels: Question[][]) {
    this.topicTitle = topicTitle;
    this.questionsByLevels = questionsByLevels;
  }
}
